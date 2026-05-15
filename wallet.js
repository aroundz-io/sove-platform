/* ============================================
   SOVE Wallet Connect
   GIWA Chain (Chain ID 91342) + EVM compatible wallets
   ============================================ */

(function () {
  'use strict';

  // GIWA Sepolia Testnet — official Chain ID 91342
  const GIWA_CHAIN_ID_HEX = '0x164EE'; // 91342
  const GIWA_NETWORK = {
    chainId: GIWA_CHAIN_ID_HEX,
    chainName: 'GIWA Sepolia',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: ['https://sepolia-rpc.giwa.io'],
    blockExplorerUrls: ['https://sepolia-explorer.giwa.io']
  };

  const STORAGE_KEY = 'sove-wallet-v1';
  const fmtAddr = (a) => a ? `${a.slice(0, 6)}…${a.slice(-4)}` : '';

  class SoveWallet {
    constructor() {
      this.account = null;
      this.chainId = null;
      this.provider = null;
      this.walletId = null;
      this.listeners = new Set();
    }

    on(cb) { this.listeners.add(cb); return () => this.listeners.delete(cb); }
    emit() {
      const state = { account: this.account, chainId: this.chainId, walletId: this.walletId, onGiwa: this.chainId === GIWA_CHAIN_ID_HEX };
      this.listeners.forEach(cb => { try { cb(state); } catch (e) { console.error(e); } });
    }

    detectAvailable() {
      const eth = window.ethereum;
      return {
        giwa: !!(window.giwa?.ethereum || eth?.isGiwa),
        metamask: !!eth?.isMetaMask,
        upbit: !!(window.upbit || eth?.isUpbit),
        injected: !!(eth && !eth.isMetaMask && !eth.isGiwa && !eth.isUpbit)
      };
    }

    _pickProvider(walletId) {
      const eth = window.ethereum;
      switch (walletId) {
        case 'giwa':
          return window.giwa?.ethereum || (eth?.isGiwa ? eth : null);
        case 'metamask':
          return eth?.isMetaMask ? eth : null;
        case 'upbit':
          return window.upbit || (eth?.isUpbit ? eth : null);
        case 'injected':
        default:
          return eth || null;
      }
    }

    _installUrl(walletId) {
      switch (walletId) {
        case 'giwa': return 'https://giwa.io';
        case 'metamask': return 'https://metamask.io/download/';
        case 'upbit': return 'https://upbit.com/home';
        default: return 'https://ethereum.org/wallets/';
      }
    }

    async connect(walletId = 'giwa') {
      const provider = this._pickProvider(walletId);
      if (!provider) {
        // No wallet installed → open install page in new tab
        window.open(this._installUrl(walletId), '_blank', 'noopener,noreferrer');
        throw new Error(`${walletId.toUpperCase()} wallet not detected. Install page opened.`);
      }

      this.provider = provider;
      this.walletId = walletId;

      const accounts = await provider.request({ method: 'eth_requestAccounts' });
      if (!accounts || accounts.length === 0) throw new Error('No accounts');
      this.account = accounts[0];

      const chainId = await provider.request({ method: 'eth_chainId' });
      this.chainId = chainId;

      if (chainId !== GIWA_CHAIN_ID_HEX) {
        try { await this.switchToGiwa(); } catch (e) { console.warn('Network switch declined:', e); }
      }

      provider.removeAllListeners?.('accountsChanged');
      provider.removeAllListeners?.('chainChanged');
      provider.on?.('accountsChanged', (accs) => {
        this.account = accs[0] || null;
        if (!this.account) this.disconnect(); else this.emit();
      });
      provider.on?.('chainChanged', (cid) => {
        this.chainId = cid;
        this.emit();
      });

      try { localStorage.setItem(STORAGE_KEY, walletId); } catch (e) {}
      this.emit();
      return this.account;
    }

    async switchToGiwa() {
      if (!this.provider) throw new Error('No provider');
      try {
        await this.provider.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: GIWA_CHAIN_ID_HEX }]
        });
      } catch (e) {
        if (e?.code === 4902 || /Unrecognized chain ID/i.test(e?.message || '')) {
          await this.provider.request({
            method: 'wallet_addEthereumChain',
            params: [GIWA_NETWORK]
          });
        } else throw e;
      }
    }

    disconnect() {
      this.provider = null;
      this.account = null;
      this.chainId = null;
      this.walletId = null;
      try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
      this.emit();
    }

    async autoReconnect() {
      try {
        const last = localStorage.getItem(STORAGE_KEY);
        if (!last) return;
        const provider = this._pickProvider(last);
        if (!provider) return;
        const accounts = await provider.request({ method: 'eth_accounts' });
        if (accounts && accounts.length) {
          await this.connect(last);
        }
      } catch (e) {
        // silent
      }
    }
  }

  const wallet = new SoveWallet();
  window.SoveWallet = wallet;
  window.SoveWalletUtils = { fmtAddr, GIWA_CHAIN_ID_HEX, GIWA_NETWORK };

  // ============================================
  // UI — Modal + Header Button injection
  // ============================================

  function buildModal() {
    if (document.getElementById('sw-modal')) return;
    const wrap = document.createElement('div');
    wrap.id = 'sw-modal';
    wrap.className = 'sw-modal';
    wrap.setAttribute('aria-hidden', 'true');
    wrap.innerHTML = `
      <div class="sw-backdrop" data-close></div>
      <div class="sw-panel" role="dialog" aria-modal="true" aria-labelledby="sw-title">
        <button class="sw-close" data-close aria-label="Close">×</button>
        <div class="sw-eyebrow">Connect Wallet</div>
        <h3 id="sw-title">지갑을 연결하세요</h3>
        <p class="sw-sub">SOVE는 <strong>GIWA Chain</strong> 위에서 작동합니다.<br/>아래 지갑 중 하나로 연결할 수 있습니다.</p>
        <div class="sw-list">
          <button class="sw-opt sw-opt-primary" data-wallet="giwa">
            <span class="sw-logo sw-logo-giwa">G</span>
            <span class="sw-info">
              <span class="sw-name">GIWA Wallet</span>
              <span class="sw-meta">권장 · GIWA Chain 네이티브</span>
            </span>
            <span class="sw-status" data-status="giwa">설치 확인</span>
          </button>
          <button class="sw-opt" data-wallet="metamask">
            <span class="sw-logo sw-logo-mm">M</span>
            <span class="sw-info">
              <span class="sw-name">MetaMask</span>
              <span class="sw-meta">EVM 호환 · 자동 네트워크 추가</span>
            </span>
            <span class="sw-status" data-status="metamask">설치 확인</span>
          </button>
          <button class="sw-opt" data-wallet="upbit">
            <span class="sw-logo sw-logo-upbit">U</span>
            <span class="sw-info">
              <span class="sw-name">Upbit Wallet</span>
              <span class="sw-meta">업비트 계정 직접 연결</span>
            </span>
            <span class="sw-status" data-status="upbit">설치 확인</span>
          </button>
          <button class="sw-opt" data-wallet="injected">
            <span class="sw-logo sw-logo-injected">+</span>
            <span class="sw-info">
              <span class="sw-name">Browser Wallet</span>
              <span class="sw-meta">기타 EIP-1193 지갑</span>
            </span>
            <span class="sw-status" data-status="injected">설치 확인</span>
          </button>
        </div>
        <div class="sw-network">
          <span class="sw-net-dot"></span>
          연결 시 <strong>GIWA Sepolia</strong> (Chain ID 91342)로 자동 전환됩니다
        </div>
        <div class="sw-error" id="sw-error" hidden></div>
      </div>`;
    document.body.appendChild(wrap);

    wrap.addEventListener('click', (e) => {
      if (e.target.dataset.close !== undefined) closeModal();
    });

    wrap.querySelectorAll('.sw-opt').forEach(btn => {
      btn.addEventListener('click', async () => {
        const id = btn.dataset.wallet;
        await tryConnect(id);
      });
    });

    refreshAvail();
  }

  function refreshAvail() {
    const av = wallet.detectAvailable();
    document.querySelectorAll('[data-status]').forEach(el => {
      const id = el.dataset.status;
      const ok = av[id];
      el.textContent = ok ? '감지됨' : '미설치';
      el.classList.toggle('ok', !!ok);
      el.classList.toggle('off', !ok);
    });
  }

  async function tryConnect(walletId) {
    const err = document.getElementById('sw-error');
    err.hidden = true;
    err.textContent = '';
    try {
      await wallet.connect(walletId);
      closeModal();
    } catch (e) {
      err.hidden = false;
      err.textContent = e.message || '연결 실패';
    }
  }

  function openModal() {
    buildModal();
    refreshAvail();
    const m = document.getElementById('sw-modal');
    m.classList.add('open');
    m.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
  function closeModal() {
    const m = document.getElementById('sw-modal');
    if (!m) return;
    m.classList.remove('open');
    m.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // ============================================
  // Header button injection
  // ============================================
  function setupHeaderButton() {
    const btn = document.querySelector('[data-sove-connect]');
    if (!btn) return;

    const update = (state) => {
      if (state.account) {
        btn.classList.add('connected');
        btn.classList.toggle('wrong-net', !state.onGiwa);
        btn.innerHTML = `
          <span class="sw-dot" aria-hidden="true"></span>
          <span class="sw-acc">${fmtAddr(state.account)}</span>
          ${!state.onGiwa ? '<span class="sw-bad">Wrong Network</span>' : ''}
        `;
      } else {
        btn.classList.remove('connected', 'wrong-net');
        btn.innerHTML = 'Connect Wallet';
      }
    };

    wallet.on(update);
    update({ account: wallet.account, chainId: wallet.chainId, onGiwa: wallet.chainId === GIWA_CHAIN_ID_HEX });

    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      if (wallet.account) {
        // Already connected → show small menu
        toggleDropdown(btn);
      } else {
        openModal();
      }
    });
  }

  function toggleDropdown(anchor) {
    const existing = document.getElementById('sw-dropdown');
    if (existing) { existing.remove(); return; }
    const dd = document.createElement('div');
    dd.id = 'sw-dropdown';
    dd.className = 'sw-dropdown';
    const onGiwa = wallet.chainId === GIWA_CHAIN_ID_HEX;
    dd.innerHTML = `
      <div class="sw-dd-row">
        <span class="sw-dd-k">Wallet</span>
        <span class="sw-dd-v">${(wallet.walletId || '').toUpperCase()}</span>
      </div>
      <div class="sw-dd-row">
        <span class="sw-dd-k">Account</span>
        <span class="sw-dd-v mono">${fmtAddr(wallet.account)}</span>
      </div>
      <div class="sw-dd-row">
        <span class="sw-dd-k">Network</span>
        <span class="sw-dd-v ${onGiwa ? 'ok' : 'off'}">${onGiwa ? 'GIWA Sepolia' : 'Other'}</span>
      </div>
      ${!onGiwa ? '<button class="sw-dd-btn sw-dd-switch">Switch to GIWA</button>' : ''}
      <button class="sw-dd-btn sw-dd-disc">Disconnect</button>
    `;
    document.body.appendChild(dd);
    const r = anchor.getBoundingClientRect();
    dd.style.top = (r.bottom + 8) + 'px';
    dd.style.right = (window.innerWidth - r.right) + 'px';

    dd.querySelector('.sw-dd-disc')?.addEventListener('click', () => {
      wallet.disconnect();
      dd.remove();
    });
    dd.querySelector('.sw-dd-switch')?.addEventListener('click', async () => {
      try { await wallet.switchToGiwa(); dd.remove(); }
      catch (e) { console.error(e); }
    });

    // Click outside closes
    setTimeout(() => {
      const offclick = (e) => {
        if (dd.contains(e.target) || anchor.contains(e.target)) return;
        dd.remove();
        document.removeEventListener('click', offclick);
      };
      document.addEventListener('click', offclick);
    }, 0);
  }

  // ============================================
  // Init
  // ============================================
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      setupHeaderButton();
      wallet.autoReconnect();
    });
  } else {
    setupHeaderButton();
    wallet.autoReconnect();
  }

  // Public API
  window.openWalletModal = openModal;
})();
