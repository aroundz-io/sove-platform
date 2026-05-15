/* ============================================
   SOVE Admin — Collateral NFT Minting
   GIWA Sepolia (Chain ID 91342) · ERC-721 / ERC-1155
   Uses ethers v6 from ESM CDN
   ============================================ */

import {
  BrowserProvider,
  Interface,
  isAddress,
  getAddress,
  parseUnits,
  formatEther,
  toUtf8Bytes,
  keccak256,
  toBeHex
} from 'https://esm.sh/ethers@6.13.4';

// ============================================
// GIWA Sepolia network constants
// ============================================
const GIWA_CHAIN_ID = 91342;
const GIWA_CHAIN_HEX = '0x164EE';

// Placeholder contracts on GIWA Sepolia (replace with real deployed addresses)
const CONTRACTS = {
  SOVEArtNFT:     '0xS0Vea88be0a73d8e0F8a3B14eA5a1B7A4F8c1234'.replace(/[^0-9a-fA-F]/g, '0').padEnd(42, '0').substring(0, 42),
  SOVEEditionNFT: '0xS0Ved11e0f1e1a2b3c4d5e6f7a8b9c0d1e2f3456'.replace(/[^0-9a-fA-F]/g, '0').padEnd(42, '0').substring(0, 42),
  SOVEMinter:     '0xS0Vmin7e0f1e1a2b3c4d5e6f7a8b9c0d1e2f3aaaa'.replace(/[^0-9a-fA-F]/g, '0').padEnd(42, '0').substring(0, 42)
};

// Simplified ABIs — actual SOVE contracts would have richer signatures
const ART_NFT_ABI = [
  'function mint(address to, string uri, uint256 appraisedValueUSD, bytes32 appraisalStamp, bytes32 custodyStamp, bytes32 insuranceStamp) external returns (uint256)'
];
const EDITION_NFT_ABI = [
  'function mint(address to, uint256 supply, string uri, uint256 appraisedValueUSD, bytes32 appraisalStamp, bytes32 custodyStamp, bytes32 insuranceStamp) external returns (uint256)'
];

const artIface = new Interface(ART_NFT_ABI);
const editionIface = new Interface(EDITION_NFT_ABI);

// EIP-712 typed data domain
const EIP712_DOMAIN = {
  name: 'SOVE Platform',
  version: '1',
  chainId: GIWA_CHAIN_ID
};

const EIP712_TYPES = {
  CollateralMintIntent: [
    { name: 'standard', type: 'string' },
    { name: 'title', type: 'string' },
    { name: 'creator', type: 'string' },
    { name: 'appraisedValueUSD', type: 'uint256' },
    { name: 'appraiser', type: 'string' },
    { name: 'custodian', type: 'string' },
    { name: 'insurer', type: 'string' },
    { name: 'recipient', type: 'address' },
    { name: 'metadataURI', type: 'string' },
    { name: 'nonce', type: 'uint256' }
  ]
};

// ============================================
// DOM utilities
// ============================================
const $ = (s) => document.querySelector(s);
const $$ = (s) => Array.from(document.querySelectorAll(s));
const fmt = (n) => new Intl.NumberFormat('en-US').format(n);
const fmt2 = (n) => new Intl.NumberFormat('en-US', { maximumFractionDigits: 2 }).format(n);
const fakeStampHash = (issuer, payload) => keccak256(toUtf8Bytes(issuer + '|' + payload + '|' + Date.now()));

// History persistence
const HISTORY_KEY = 'sove-mint-history-v1';
function loadHistory() {
  try { return JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]'); }
  catch { return []; }
}
function saveHistory(arr) {
  try { localStorage.setItem(HISTORY_KEY, JSON.stringify(arr.slice(0, 20))); }
  catch {}
}

// ============================================
// Form state binding
// ============================================
function collectForm() {
  const type = document.querySelector('input[name="assetType"]:checked')?.value || 'ERC721';
  return {
    type,
    title: $('#f_title')?.value.trim() || '',
    creator: $('#f_creator')?.value.trim() || '',
    year: parseInt($('#f_year')?.value || '0', 10) || 0,
    medium: $('#f_medium')?.value.trim() || '',
    dimensions: $('#f_dim')?.value.trim() || '',
    supply: type === 'ERC1155' ? (parseInt($('#f_supply')?.value || '1', 10) || 1) : 1,
    metadataURI: $('#f_uri')?.value.trim() || '',
    appraisedValue: parseFloat($('#f_value')?.value || '0') || 0,
    refPrice: parseFloat($('#f_ref')?.value || '0.1238') || 0.1238,
    appraiser: $('#f_appraiser')?.value || '',
    custodian: $('#f_custodian')?.value || '',
    storage: $('#f_storage')?.value.trim() || '',
    insurer: $('#f_insurer')?.value || '',
    coverage: parseFloat($('#f_coverage')?.value || '0') || 0,
    recipient: $('#f_recipient')?.value.trim() || ''
  };
}

function validateForm(d) {
  const errs = [];
  if (!d.title) errs.push('Title 필수');
  if (!d.creator) errs.push('Creator 필수');
  if (d.appraisedValue <= 0) errs.push('Appraised Value > 0');
  if (!d.appraiser) errs.push('Appraiser 선택 필수');
  if (!d.custodian) errs.push('Custodian 선택 필수');
  if (!d.insurer) errs.push('Insurer 선택 필수');
  if (!d.recipient || !isAddress(d.recipient)) errs.push('유효한 Recipient 주소 필수 (0x…)');
  if (d.type === 'ERC1155' && (d.supply < 1 || d.supply > 1000000)) errs.push('Supply 1–1,000,000');
  return errs;
}

function updatePreview() {
  const d = collectForm();

  // Edition supply visibility
  document.querySelectorAll('.ed-only').forEach(el => {
    el.hidden = d.type !== 'ERC1155';
  });

  // Coverage = appraised * 1.1
  if (d.appraisedValue > 0) {
    $('#f_coverage').value = Math.round(d.appraisedValue * 1.1);
  } else {
    $('#f_coverage').value = '';
  }

  // Contract / function
  if (d.type === 'ERC721') {
    $('#prev_contract').textContent = 'SOVEArtNFT.sol';
    $('#prev_fn').textContent = 'mint(address, string, uint256, bytes32, bytes32, bytes32)';
  } else {
    $('#prev_contract').textContent = 'SOVEEditionNFT.sol';
    $('#prev_fn').textContent = 'mint(address, uint256, string, uint256, bytes32, bytes32, bytes32)';
  }

  // Dojang checks
  setCheck('check_appraisal', !!d.appraiser);
  setCheck('check_custody', !!d.custodian);
  setCheck('check_insurance', !!d.insurer);

  // SOVE estimate
  const totalUSD = d.appraisedValue * (d.type === 'ERC1155' ? d.supply : 1);
  const sove = d.refPrice > 0 ? (totalUSD / d.refPrice) : 0;
  $('#est_amount').textContent = sove > 0 ? `${fmt(Math.round(sove))} SOVE` : '0 SOVE';
  $('#est_formula').textContent = d.appraisedValue > 0
    ? `= $${fmt(totalUSD)} ÷ $${d.refPrice}`
    : '= 감정가 ÷ Ref Price';

  // Collateral ratio impact (mock — based on $48.7M AUM + $31.6M minted baseline)
  if (totalUSD > 0) {
    const newAUM = 48_700_000 + totalUSD;
    const newMint = 31_600_000 + (sove * d.refPrice);
    const ratio = ((newAUM / newMint) * 100).toFixed(1);
    $('#est_ratio').textContent = `${ratio}% (target ≥150%)`;
  } else {
    $('#est_ratio').textContent = '—';
  }
}

function setCheck(id, ok) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.toggle('ok', !!ok);
  el.querySelector('.dx').textContent = ok ? '✓' : '○';
}

function setStatus(html, kind = 'info') {
  const el = $('#mint_status');
  if (!el) return;
  if (!html) { el.hidden = true; el.textContent = ''; return; }
  el.hidden = false;
  el.className = 'mint-status ' + kind;
  el.innerHTML = html;
}

// ============================================
// Wallet helpers
// ============================================
async function ensureWallet() {
  // Trigger SoveWallet modal if not connected
  const sw = window.SoveWallet;
  if (!sw?.account) {
    if (typeof window.openWalletModal === 'function') window.openWalletModal();
    throw new Error('지갑 연결 필요 (Connect Wallet 클릭)');
  }
  if (sw.chainId !== GIWA_CHAIN_HEX) {
    try {
      await sw.switchToGiwa();
    } catch (e) {
      throw new Error('GIWA Sepolia 전환 거부됨');
    }
  }
  return sw;
}

async function getProvider() {
  const sw = window.SoveWallet;
  if (!sw?.provider) throw new Error('Provider 없음');
  return new BrowserProvider(sw.provider);
}

// ============================================
// Sign Intent (EIP-712 — no gas)
// ============================================
async function signIntent() {
  try {
    setStatus('서명 준비 중…', 'info');
    const data = collectForm();
    const errs = validateForm(data);
    if (errs.length) {
      setStatus('<strong>입력 오류:</strong><br/>' + errs.map(e => '• ' + e).join('<br/>'), 'err');
      return;
    }
    const sw = await ensureWallet();
    const provider = await getProvider();
    const signer = await provider.getSigner();

    const message = {
      standard: data.type,
      title: data.title,
      creator: data.creator,
      appraisedValueUSD: BigInt(Math.round(data.appraisedValue)),
      appraiser: data.appraiser,
      custodian: data.custodian,
      insurer: data.insurer,
      recipient: getAddress(data.recipient),
      metadataURI: data.metadataURI || '',
      nonce: BigInt(Date.now())
    };

    setStatus('지갑에서 서명 확인 중…', 'info');
    const sig = await signer.signTypedData(EIP712_DOMAIN, EIP712_TYPES, message);

    const sigShort = sig.slice(0, 10) + '…' + sig.slice(-8);
    setStatus(
      `<strong>✓ Intent Signed (EIP-712)</strong><br/>` +
      `<span class="mono">Signer: ${sw.account.slice(0,6)}…${sw.account.slice(-4)}</span><br/>` +
      `<span class="mono">Sig: ${sigShort}</span><br/>` +
      `이 서명은 미래에 실제 트랜잭션 인증에 사용될 수 있습니다.`,
      'ok'
    );

    // Add to history
    const hist = loadHistory();
    hist.unshift({
      kind: 'intent',
      time: new Date().toISOString(),
      title: data.title,
      creator: data.creator,
      type: data.type,
      value: data.appraisedValue,
      signer: sw.account,
      sig
    });
    saveHistory(hist);
    renderHistory();

  } catch (e) {
    console.error(e);
    setStatus('<strong>서명 실패:</strong> ' + (e.shortMessage || e.message || e), 'err');
  }
}

// ============================================
// Submit Mint Transaction
// ============================================
async function submitMint() {
  try {
    setStatus('트랜잭션 준비 중…', 'info');
    const data = collectForm();
    const errs = validateForm(data);
    if (errs.length) {
      setStatus('<strong>입력 오류:</strong><br/>' + errs.map(e => '• ' + e).join('<br/>'), 'err');
      return;
    }
    const sw = await ensureWallet();
    const provider = await getProvider();
    const signer = await provider.getSigner();

    // Generate stamp hashes (in production these come from issued attestations)
    const appraisalStamp = fakeStampHash(data.appraiser, `appraisal:${data.title}:${data.appraisedValue}`);
    const custodyStamp = fakeStampHash(data.custodian, `custody:${data.title}:${data.storage}`);
    const insuranceStamp = fakeStampHash(data.insurer, `insurance:${data.title}:${data.coverage}`);

    // Encode function call
    let txData;
    let contractAddr;
    if (data.type === 'ERC721') {
      contractAddr = CONTRACTS.SOVEArtNFT;
      txData = artIface.encodeFunctionData('mint', [
        getAddress(data.recipient),
        data.metadataURI || `ipfs://draft/${Date.now()}`,
        BigInt(Math.round(data.appraisedValue)),
        appraisalStamp,
        custodyStamp,
        insuranceStamp
      ]);
    } else {
      contractAddr = CONTRACTS.SOVEEditionNFT;
      txData = editionIface.encodeFunctionData('mint', [
        getAddress(data.recipient),
        BigInt(data.supply),
        data.metadataURI || `ipfs://draft/${Date.now()}`,
        BigInt(Math.round(data.appraisedValue)),
        appraisalStamp,
        custodyStamp,
        insuranceStamp
      ]);
    }

    setStatus('지갑에서 트랜잭션 확인 중…<br/><span class="mono">data: ' + txData.slice(0, 30) + '…</span>', 'info');

    // Send transaction
    const tx = await signer.sendTransaction({
      to: contractAddr,
      data: txData,
      value: 0n
    });

    setStatus(
      `<strong>✓ Transaction Submitted</strong><br/>` +
      `<span class="mono">TX: ${tx.hash.slice(0,10)}…${tx.hash.slice(-8)}</span><br/>` +
      `<a href="https://sepolia-explorer.giwa.io/tx/${tx.hash}" target="_blank" rel="noopener" class="mono">View on Explorer ↗</a><br/>` +
      `Waiting for confirmation…`,
      'ok'
    );

    const hist = loadHistory();
    hist.unshift({
      kind: 'tx',
      time: new Date().toISOString(),
      title: data.title,
      creator: data.creator,
      type: data.type,
      value: data.appraisedValue,
      supply: data.supply,
      txHash: tx.hash,
      contract: contractAddr
    });
    saveHistory(hist);
    renderHistory();

    try {
      const receipt = await tx.wait();
      setStatus(
        `<strong>✓ Confirmed in block ${receipt.blockNumber}</strong><br/>` +
        `<span class="mono">TX: ${tx.hash.slice(0,10)}…${tx.hash.slice(-8)}</span><br/>` +
        `Gas used: ${fmt(receipt.gasUsed?.toString() || '0')} · ` +
        `Status: ${receipt.status === 1 ? 'Success' : 'Reverted'}`,
        receipt.status === 1 ? 'ok' : 'err'
      );
    } catch (waitErr) {
      // Common when placeholder contract doesn't exist
      setStatus(
        `<strong>⚠ Transaction submitted but reverted</strong><br/>` +
        `<span class="mono">${(waitErr.shortMessage || waitErr.message || waitErr).substring(0,140)}</span><br/>` +
        `데모 컨트랙트가 GIWA Sepolia에 배포되지 않아 발생한 예상된 결과입니다.<br/>` +
        `프로덕션에서는 실제 배포된 SOVEArtNFT/SOVEEditionNFT 주소로 교체됩니다.`,
        'warn'
      );
    }

  } catch (e) {
    console.error(e);
    const msg = e.shortMessage || e.message || String(e);
    setStatus(
      '<strong>트랜잭션 실패:</strong><br/>' + msg.substring(0, 200),
      'err'
    );
  }
}

// ============================================
// History rendering
// ============================================
function renderHistory() {
  const wrap = $('#mintHistory');
  if (!wrap) return;
  const hist = loadHistory();
  if (!hist.length) {
    wrap.innerHTML = '<div class="mh-empty">발행 이력이 여기에 표시됩니다.</div>';
    return;
  }
  wrap.innerHTML = hist.map(h => {
    const time = new Date(h.time).toLocaleString('ko-KR', { month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' });
    const isIntent = h.kind === 'intent';
    const badge = isIntent ? '<span class="badge muted">Intent</span>' : '<span class="badge ok">On-Chain</span>';
    const hash = isIntent ? (h.sig?.slice(0,10) + '…' + h.sig?.slice(-6)) : (h.txHash?.slice(0,10) + '…' + h.txHash?.slice(-6));
    return `
      <div class="mh-row">
        <div class="mh-head">
          <span class="mh-type">${h.type}</span>
          ${badge}
          <span class="mh-time">${time}</span>
        </div>
        <div class="mh-title">${escapeHtml(h.title)} <span class="mh-creator">· ${escapeHtml(h.creator)}</span></div>
        <div class="mh-meta">
          <span>$${fmt(h.value)}</span>
          ${h.supply && h.supply > 1 ? `<span>· ${h.supply} editions</span>` : ''}
          <span class="mono">· ${hash}</span>
        </div>
      </div>`;
  }).join('');
}

function escapeHtml(s) {
  return String(s || '').replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
}

// ============================================
// Reset
// ============================================
function resetForm() {
  ['#f_title','#f_creator','#f_year','#f_medium','#f_dim','#f_supply','#f_uri',
   '#f_value','#f_appraiser','#f_custodian','#f_storage','#f_insurer','#f_coverage','#f_recipient']
    .forEach(s => { const el = $(s); if (el) el.value = s === '#f_supply' ? '1' : ''; });
  $('#f_ref').value = '0.1238';
  document.querySelector('input[name="assetType"][value="ERC721"]').checked = true;
  setStatus('');
  updatePreview();
}

// ============================================
// Boot
// ============================================
function boot() {
  // Hook all inputs
  ['#f_title','#f_creator','#f_year','#f_medium','#f_dim','#f_supply','#f_uri',
   '#f_value','#f_ref','#f_appraiser','#f_custodian','#f_storage','#f_insurer','#f_recipient']
    .forEach(s => {
      const el = $(s);
      if (el) el.addEventListener('input', updatePreview);
      if (el && el.tagName === 'SELECT') el.addEventListener('change', updatePreview);
    });
  document.querySelectorAll('input[name="assetType"]').forEach(r => r.addEventListener('change', updatePreview));

  $('#btn_sign')?.addEventListener('click', signIntent);
  $('#btn_mint')?.addEventListener('click', submitMint);
  $('#btn_reset')?.addEventListener('click', resetForm);

  // Initial state
  updatePreview();
  renderHistory();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}
