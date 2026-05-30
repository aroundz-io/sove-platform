/* ============================================
   SOVE i18n — 5 Languages
   EN (default) / KO / ZH / JA / ES
   Translates content (소개/안내 문구) only.
   Menu items remain in English (no translation).
   ============================================ */

(function () {
  'use strict';

  const STORAGE_KEY = 'sove-lang-v1';
  const DEFAULT_LANG = 'en';
  const LANGS = [
    { code: 'en', label: 'EN', name: 'English' },
    { code: 'ko', label: 'KO', name: '한국어' },
    { code: 'zh', label: 'ZH', name: '中文' },
    { code: 'ja', label: 'JA', name: '日本語' },
    { code: 'es', label: 'ES', name: 'Español' }
  ];

  // ============================================
  // Translation dictionary
  // Key format: page.section.element
  // ============================================
  const DICT = {

    // ============ COMMON ============
    'common.tag.giwa':           { en: 'GIWA CHAIN · ETHEREUM L2', ko: 'GIWA CHAIN · ETHEREUM L2', zh: 'GIWA CHAIN · ETHEREUM L2', ja: 'GIWA CHAIN · ETHEREUM L2', es: 'GIWA CHAIN · ETHEREUM L2' },
    'common.foot.brand':         { en: 'Sovereign Value Economy<br/>Powered by GIWA Chain · Ethereum L2',
                                   ko: 'Sovereign Value Economy<br/>Powered by GIWA Chain · Ethereum L2',
                                   zh: 'Sovereign Value Economy<br/>由 GIWA Chain · Ethereum L2 提供支持',
                                   ja: 'Sovereign Value Economy<br/>Powered by GIWA Chain · Ethereum L2',
                                   es: 'Sovereign Value Economy<br/>Impulsado por GIWA Chain · Ethereum L2' },

    // ============ HOME (index.html) ============
    'home.hero.title': {
      en: 'Revolutionizing<br/>Assets with<br/><span class="hl">RWA Tokenization.</span>',
      ko: 'Revolutionizing<br/>Assets with<br/><span class="hl">RWA Tokenization.</span>',
      zh: 'Revolutionizing<br/>Assets with<br/><span class="hl">RWA Tokenization.</span>',
      ja: 'Revolutionizing<br/>Assets with<br/><span class="hl">RWA Tokenization.</span>',
      es: 'Revolutionizing<br/>Assets with<br/><span class="hl">RWA Tokenization.</span>'
    },
    'home.hero.sub': {
      en: 'Art, tickets, collectibles — every cultural asset\'s real-world value, tokenized.<br/>RWA infrastructure powered by GIWA Chain\'s Dojang technology.',
      ko: '예술품, 티켓, 컬렉터블 —<br/>모든 문화 자산의 실물 가치를 토큰으로.<br/>GIWA Chain의 도장 기술 위에서 작동하는<br/>차세대 RWA 인프라.',
      zh: '艺术品、票务、收藏品 —<br/>所有文化资产的实物价值，代币化。<br/>基于 GIWA Chain 印章技术运行的<br/>下一代 RWA 基础设施。',
      ja: 'アート作品、チケット、コレクタブル ——<br/>すべての文化資産の実物価値をトークンへ。<br/>GIWA Chain の印章（Dojang）技術上で動作する<br/>次世代 RWA インフラ。',
      es: 'Arte, entradas y coleccionables —<br/>el valor real de todo activo cultural, tokenizado.<br/>Infraestructura RWA impulsada por la<br/>tecnología Dojang de GIWA Chain.'
    },

    'home.about.eyebrow': { en: '01 — About', ko: '01 — About', zh: '01 — About', ja: '01 — About', es: '01 — About' },
    'home.about.title': {
      en: 'Sovereign Value<br/>Economy.',
      ko: '문화를 소유하고,<br/>가치를 거래하다.',
      zh: '拥有文化，<br/>交易价值。',
      ja: '文化を所有し、<br/>価値を取引する。',
      es: 'Posee cultura,<br/>intercambia valor.'
    },
    'home.about.lead': {
      en: 'SOVE tokenizes art, performance tickets, and limited-edition collectibles on-chain and enables trading on its own exchange — a complete RWA platform.',
      ko: 'SOVE는 예술품, 공연 티켓, 한정판 컬렉터블을 블록체인에 토큰화하고 자체 거래소에서 거래할 수 있게 하는 RWA 통합 플랫폼입니다.',
      zh: 'SOVE 将艺术品、演出门票和限量收藏品代币化上链，并通过自有交易所交易 —— 一站式 RWA 综合平台。',
      ja: 'SOVE は芸術作品、公演チケット、限定コレクタブルをブロックチェーンにトークン化し、自社取引所で取引できる RWA 統合プラットフォームです。',
      es: 'SOVE tokeniza obras de arte, entradas de espectáculos y coleccionables de edición limitada y permite su intercambio en su propio mercado — una plataforma RWA completa.'
    },
    'home.about.body': {
      en: 'High entry barriers, illiquidity, and opaque ownership — long-standing problems of the cultural asset market are solved through GIWA Chain\'s technology and standardized appraisal/custody processes. Physical redemption rights (NFTs) and value-backed $SOVE tokens form the foundation of every transaction.',
      ko: '높은 진입 장벽, 부족한 유동성, 불투명한 소유권 — 문화예술 시장이 오랜 시간 안고 있던 문제를 GIWA Chain의 기술과 표준화된 감정·수탁 프로세스로 해결합니다. 실물반환청구권 NFT와 실물가치 연동형 $SOVE 토큰이 이 모든 거래의 근간이 됩니다.',
      zh: '高门槛、流动性不足、所有权不透明 —— 文化艺术市场长期存在的问题，通过 GIWA Chain 的技术与标准化的鉴定与托管流程得以解决。实物赎回 NFT 与价值挂钩的 $SOVE 代币是所有交易的核心。',
      ja: '高い参入障壁、流動性不足、不透明な所有権 —— 文化芸術市場が長年抱えてきた課題を、GIWA Chain の技術と標準化された鑑定・カストディプロセスで解決します。実物返還請求権 NFT と実物価値連動型 $SOVE トークンが、すべての取引の基盤となります。',
      es: 'Altas barreras de entrada, falta de liquidez y propiedad opaca — problemas persistentes del mercado del arte y la cultura que se resuelven con la tecnología de GIWA Chain y procesos estandarizados de tasación y custodia. NFTs con derecho de redención física y el token $SOVE vinculado al valor real son la base de cada operación.'
    },

    'home.principles.1.title': { en: 'Dojang Verification', ko: '도장 검증', zh: '印章验证', ja: '印章による検証', es: 'Verificación Dojang' },
    'home.principles.1.desc': {
      en: 'Appraiser and custodian inspection results are issued on-chain as GIWA Dojang attestations.',
      ko: '감정기관·수탁기관의 검수 결과를 GIWA Dojang으로 온체인 어테스테이션 발급',
      zh: '鉴定与托管机构的核验结果通过 GIWA Dojang 在链上发行为认证',
      ja: '鑑定機関・カストディアンの検査結果を GIWA Dojang としてオンチェーン認証として発行',
      es: 'Resultados de tasación y custodia emitidos como atestaciones on-chain mediante GIWA Dojang'
    },
    'home.principles.2.title': { en: 'Liquidity', ko: '유동성', zh: '流动性', ja: '流動性', es: 'Liquidez' },
    'home.principles.2.desc': {
      en: 'Hybrid trading engine combining Orderbook and AMM',
      ko: 'Orderbook과 AMM을 결합한 하이브리드 거래 엔진',
      zh: '订单簿与 AMM 结合的混合交易引擎',
      ja: 'オーダーブックと AMM を組み合わせたハイブリッド取引エンジン',
      es: 'Motor de trading híbrido que combina Orderbook y AMM'
    },
    'home.principles.3.title': { en: 'Physical Redemption', ko: '실물 반환', zh: '实物赎回', ja: '実物返還', es: 'Redención Física' },
    'home.principles.3.desc': {
      en: 'Right to receive the physical asset upon NFT burn',
      ko: 'NFT 소각과 동시에 보관된 실물을 인도받을 권리',
      zh: 'NFT 销毁的同时获得托管实物的权利',
      ja: 'NFT 焼却と同時に保管された実物を受け取る権利',
      es: 'Derecho a recibir el activo físico al quemar el NFT'
    },
    'home.principles.4.title': { en: 'Creator Royalty', ko: '창작자 보상', zh: '创作者奖励', ja: 'クリエイター報酬', es: 'Regalía del Creador' },
    'home.principles.4.desc': {
      en: 'Smart contract automatically distributes royalties on every secondary trade',
      ko: '2차 거래마다 스마트 컨트랙트로 로열티 자동 분배',
      zh: '每次二次交易由智能合约自动分配版税',
      ja: '二次取引のたびにスマートコントラクトがロイヤリティを自動分配',
      es: 'Contrato inteligente distribuye regalías automáticamente en cada reventa'
    },

    // ============ Modules section (home) ============
    'home.modules.eyebrow': { en: '02 — Platform', ko: '02 — Platform', zh: '02 — Platform', ja: '02 — Platform', es: '02 — Platform' },
    'home.modules.title': {
      en: 'Five core modules.',
      ko: '다섯 개의 코어 모듈.',
      zh: '五大核心模块。',
      ja: '5つのコアモジュール。',
      es: 'Cinco módulos principales.'
    },
    'home.modules.nft.lead': {
      en: 'Only physical assets sealed with GIWA Dojang (appraisal, custody, insurance) become NFTs. The authenticity of off-chain data is permanently recorded on-chain via attestation.',
      ko: '감정 · 수탁 · 보험 정보가 GIWA Dojang으로 도장 발급된 실물 자산만 NFT로 발행됩니다. 오프체인 데이터의 진위는 도장 어테스테이션으로 온체인에 영구 기록됩니다.',
      zh: '只有经 GIWA Dojang 印章发行（鉴定、托管、保险）的实物资产才可铸造为 NFT。链下数据的真伪通过印章认证永久记录在链上。',
      ja: '鑑定・カストディ・保険情報が GIWA Dojang で印章発行された実物資産のみ NFT として発行されます。オフチェーンデータの真正性は印章アテステーションでオンチェーンに永久記録されます。',
      es: 'Solo los activos físicos sellados con GIWA Dojang (tasación, custodia, seguro) se acuñan como NFT. La autenticidad de los datos off-chain queda permanentemente registrada on-chain mediante atestación.'
    },

    // ============ Dojang section (home) ============
    'home.dojang.eyebrow': { en: '03 — Trust Layer', ko: '03 — Trust Layer', zh: '03 — Trust Layer', ja: '03 — Trust Layer', es: '03 — Trust Layer' },
    'home.dojang.title': {
      en: 'Dojang.<br/>From off-chain<br/>to on-chain.',
      ko: '도장.<br/>오프체인을 온체인으로.',
      zh: '印章。<br/>从链下到链上。',
      ja: '印章。<br/>オフチェーンをオンチェーンへ。',
      es: 'Dojang.<br/>De off-chain a on-chain.'
    },
    'home.dojang.sub': {
      en: 'GIWA Dojang issues trusted off-chain information as verified on-chain attestations — the native trust layer of GIWA Chain. SOVE seals every physical asset flow with Dojang.',
      ko: 'GIWA Dojang은 신뢰할 수 있는 오프체인 정보를 검증된 온체인 어테스테이션으로 발급하는 GIWA Chain의 네이티브 신뢰 레이어입니다. SOVE는 모든 실물 자산의 흐름을 도장으로 봉인합니다.',
      zh: 'GIWA Dojang 将可信赖的链下信息以经过验证的链上认证形式发行 —— 是 GIWA Chain 的原生信任层。SOVE 用印章封存所有实物资产的流转。',
      ja: 'GIWA Dojang は信頼できるオフチェーン情報を検証済みオンチェーンアテステーションとして発行する、GIWA Chain のネイティブ信頼レイヤーです。SOVE はすべての実物資産の流れを印章で封印します。',
      es: 'GIWA Dojang emite información off-chain confiable como atestaciones on-chain verificadas — la capa de confianza nativa de GIWA Chain. SOVE sella con Dojang cada flujo de activo físico.'
    },

    // ============ Token section (home) ============
    'home.token.eyebrow': { en: '04 — Token', ko: '04 — Token', zh: '04 — Token', ja: '04 — Token', es: '04 — Token' },
    'home.token.title': { en: '$SOVE.', ko: '$SOVE.', zh: '$SOVE.', ja: '$SOVE.', es: '$SOVE.' },
    'home.token.sub': {
      en: 'The core token, minted and burned in direct relation to the appraised value of real-world assets',
      ko: '실물 자산의 감정 가치와 연동되어 발행 · 소각되는 코어 토큰',
      zh: '与实物资产鉴定价值挂钩的发行与销毁的核心代币',
      ja: '実物資産の鑑定価値と連動して発行・焼却されるコアトークン',
      es: 'Token central acuñado y quemado según el valor tasado de activos reales'
    },
    'home.token.mint.lead':   { en: 'Minted at appraised value when a real asset is registered.', ko: '실물 자산 등록 시 감정가만큼 발행', zh: '实物资产注册时按鉴定价值发行', ja: '実物資産登録時に鑑定価値分を発行', es: 'Acuñado al valor de tasación cuando se registra un activo real.' },
    'home.token.burn.lead':   { en: 'Automatically burned on physical redemption and from trading fees.', ko: '실물 반환과 거래 수수료에서 자동 소각', zh: '实物赎回与交易手续费自动销毁', ja: '実物返還と取引手数料から自動焼却', es: 'Quemado automáticamente en redención física y comisiones de operación.' },
    'home.token.gov.lead':    { en: 'Voting power proportional to holdings.', ko: '보유량 기반 의결권 행사', zh: '基于持有量的投票权', ja: '保有量ベースで議決権を行使', es: 'Poder de voto proporcional a la tenencia.' },

    // ============ ABOUT PAGE ============
    'about.hero.eyebrow': { en: 'About SOVE', ko: 'About SOVE', zh: 'About SOVE', ja: 'About SOVE', es: 'About SOVE' },
    'about.hero.title': {
      en: 'Sovereign Value Economy<br/><span class="hl">for cultural assets</span>.',
      ko: '문화 자산을 위한<br/><span class="hl">Sovereign Value Economy</span>.',
      zh: '文化资产的<br/><span class="hl">Sovereign Value Economy</span>。',
      ja: '文化資産のための<br/><span class="hl">Sovereign Value Economy</span>。',
      es: 'Sovereign Value Economy<br/><span class="hl">para activos culturales</span>.'
    },
    'about.hero.lead': {
      en: 'Art, performance tickets, limited-edition collectibles — an integrated RWA platform that tokenizes the real-world value of every cultural asset and lets you trade it on a built-in exchange. GIWA Chain\'s Dojang technology connects off-chain to on-chain.',
      ko: '예술품, 공연 티켓, 한정판 컬렉터블 — 모든 문화 자산의 실물 가치를 토큰화하고 자체 거래소에서 거래할 수 있는 RWA 통합 플랫폼. GIWA Chain의 도장(Dojang) 기술로 오프체인과 온체인을 연결합니다.',
      zh: '艺术品、演出门票、限量收藏品 —— 将所有文化资产的实物价值代币化并在自有交易所交易的 RWA 综合平台。通过 GIWA Chain 的印章（Dojang）技术连接链下与链上。',
      ja: 'アート、公演チケット、限定コレクタブル —— あらゆる文化資産の実物価値をトークン化し、自社取引所で取引できる RWA 統合プラットフォーム。GIWA Chain の印章（Dojang）技術でオフチェーンとオンチェーンを繋ぎます。',
      es: 'Arte, entradas de espectáculos, coleccionables de edición limitada — una plataforma RWA integrada que tokeniza el valor real de todo activo cultural y permite intercambiarlo en un mercado propio. La tecnología Dojang de GIWA Chain conecta off-chain y on-chain.'
    },

    'about.audience.eyebrow': { en: '03 — Who We Serve', ko: '03 — Who We Serve', zh: '03 — Who We Serve', ja: '03 — Who We Serve', es: '03 — Who We Serve' },
    'about.audience.title': {
      en: 'One infrastructure,<br/>seven markets.',
      ko: '하나의 인프라,<br/>일곱 개의 시장.',
      zh: '一套基础设施，<br/>七个市场。',
      ja: '一つのインフラ、<br/>七つの市場。',
      es: 'Una infraestructura,<br/>siete mercados.'
    },
    'about.audience.sub': {
      en: 'SOVE provides new opportunities for every participant in the cultural arts ecosystem — from creators to institutional investors — a global marketplace on a single platform.',
      ko: 'SOVE는 문화예술 생태계의 모든 참여자에게 새로운 기회를 제공합니다. 창작자에서 기관 투자자까지 — 한 플랫폼 위에서 만나는 글로벌 마켓플레이스입니다.',
      zh: 'SOVE 为文化艺术生态的所有参与者提供新的机会。从创作者到机构投资者 —— 在同一平台上汇聚的全球市场。',
      ja: 'SOVE は文化芸術エコシステムのすべての参加者に新たな機会を提供します。クリエイターから機関投資家まで —— 一つのプラットフォーム上のグローバルマーケットプレイスです。',
      es: 'SOVE ofrece nuevas oportunidades a cada participante del ecosistema del arte y la cultura — desde creadores hasta inversores institucionales — un mercado global en una sola plataforma.'
    },

    'about.aud.1.name': { en: 'Art Collectors', ko: '아트 컬렉터', zh: '艺术收藏家', ja: 'アートコレクター', es: 'Coleccionistas de Arte' },
    'about.aud.1.need': { en: 'Liquidity, authenticity verification, reasonable fees. NFT-Fi loans backed by holdings.', ko: '유동성, 진위 검증, 합리적 수수료. 보유 자산을 담보로 한 NFT-Fi 대출.', zh: '流动性、真伪验证、合理手续费。基于持有资产的 NFT-Fi 抵押贷款。', ja: '流動性、真贋検証、合理的な手数料。保有資産を担保とした NFT-Fi 融資。', es: 'Liquidez, verificación de autenticidad, comisiones razonables. Préstamos NFT-Fi con activos como colateral.' },
    'about.aud.2.name': { en: 'New Investors', ko: '신규 투자자', zh: '新投资者', ja: '新規投資家', es: 'Nuevos Inversores' },
    'about.aud.2.need': { en: 'Low entry barrier, diversified opportunities. Fractional investment via edition NFTs.', ko: '낮은 진입 장벽, 분산된 수익 기회. 에디션 NFT로 소액 분할 투자.', zh: '低门槛，多元化收益机会。通过版式 NFT 进行小额分割投资。', ja: '低い参入障壁、分散された収益機会。エディション NFT で少額分割投資。', es: 'Barrera de entrada baja, oportunidades diversificadas. Inversión fraccionada mediante NFTs de edición.' },
    'about.aud.3.name': { en: 'Creators & Artists', ko: '창작자 · 아티스트', zh: '创作者 · 艺术家', ja: 'クリエイター・アーティスト', es: 'Creadores y Artistas' },
    'about.aud.3.need': { en: 'Automatic royalty (10% per secondary trade), global sales channel, permanent provenance.', ko: '자동 로열티(2차 거래마다 10%), 글로벌 판매 채널, 작품 출처 영구 기록.', zh: '自动版税（每次二次交易 10%）、全球销售渠道、作品出处永久记录。', ja: '自動ロイヤリティ（二次取引ごとに10%）、グローバル販売チャネル、作品の出所の永久記録。', es: 'Regalía automática (10% por reventa), canal de venta global, procedencia registrada de forma permanente.' },
    'about.aud.4.name': { en: 'Concert Promoters', ko: '공연 기획사', zh: '演出策划方', ja: '公演プロモーター', es: 'Promotores de Conciertos' },
    'about.aud.4.need': { en: 'Anti-scalping, secondary fee capture, automatic commemorative collectibles after the event.', ko: '암표 방지, 2차 거래 수수료 확보, 공연 후 기념 컬렉터블 자동 발행.', zh: '防黄牛、二次交易手续费收益、演出后自动发行纪念收藏品。', ja: 'チケット転売防止、二次取引手数料の獲得、公演後に記念コレクタブル自動発行。', es: 'Anti-reventa, captación de comisiones secundarias, coleccionables conmemorativos automáticos tras el evento.' },
    'about.aud.5.name': { en: 'Collectible Brands', ko: '컬렉터블 브랜드', zh: '收藏品品牌', ja: 'コレクタブルブランド', es: 'Marcas de Coleccionables' },
    'about.aud.5.need': { en: 'Authentication, secured resale market, limited-series issuance and tracking.', ko: '진품 인증, 리세일 마켓 확보, 한정판 시리즈 발행 및 추적.', zh: '正品认证、保障转售市场、限量系列发行与追溯。', ja: '真贋認証、リセールマーケット確保、限定シリーズの発行と追跡。', es: 'Autenticación, mercado de reventa asegurado, emisión y trazabilidad de series limitadas.' },
    'about.aud.6.name': { en: 'DeFi Participants', ko: 'DeFi 참여자', zh: 'DeFi 参与者', ja: 'DeFi 参加者', es: 'Participantes DeFi' },
    'about.aud.6.need': { en: 'Staking (8–18% APY), Liquidity Pools (15–35% APY), NFT-collateralized loans, insurance pool deposits.', ko: '스테이킹(8 — 18% APY), 유동성 풀(15 — 35% APY), NFT 담보 대출, 보험 풀 예치.', zh: '质押（8–18% APY）、流动性池（15–35% APY）、NFT 抵押贷款、保险池存款。', ja: 'ステーキング（8〜18% APY）、流動性プール（15〜35% APY）、NFT 担保貸付、保険プール預入。', es: 'Staking (8–18% APY), pools de liquidez (15–35% APY), préstamos con NFT como colateral, depósitos en pool de seguros.' },
    'about.aud.7.name': { en: 'Institutional Investors', ko: '기관 투자자', zh: '机构投资者', ja: '機関投資家', es: 'Inversores Institucionales' },
    'about.aud.7.need': { en: 'OTC (escrow contracts), bulk-trade fees of 1%, certified custodian trust.', ko: 'OTC(에스크로 컨트랙트), 대량 거래 수수료 1%, 인증 수탁기관 보관 신뢰.', zh: 'OTC（托管合约）、大宗交易手续费 1%、认证托管机构信任。', ja: 'OTC（エスクロー契約）、大口取引手数料1%、認証カストディアン信頼。', es: 'OTC (contratos de custodia), comisiones de gran volumen del 1%, confianza en custodios certificados.' },

    // ============ DOJANG PAGE ============
    'dojang.hero.eyebrow': { en: 'Trust Layer', ko: 'Trust Layer', zh: 'Trust Layer', ja: 'Trust Layer', es: 'Trust Layer' },
    'dojang.hero.title': {
      en: 'Dojang.<br/><span class="hl">Off-chain to on-chain</span>.',
      ko: '도장.<br/><span class="hl">오프체인을 온체인으로</span>.',
      zh: '印章。<br/><span class="hl">从链下到链上</span>。',
      ja: '印章。<br/><span class="hl">オフチェーンをオンチェーンへ</span>。',
      es: 'Dojang.<br/><span class="hl">De off-chain a on-chain</span>.'
    },
    'dojang.hero.lead': {
      en: 'GIWA Dojang is GIWA Chain\'s native trust layer that issues trusted off-chain information as verified on-chain attestations. SOVE seals every physical asset flow with Dojang.',
      ko: 'GIWA Dojang은 신뢰할 수 있는 오프체인 정보를 검증된 온체인 어테스테이션(Attestation)으로 발급하는 GIWA Chain의 네이티브 신뢰 레이어입니다. SOVE는 모든 실물 자산의 흐름을 도장으로 봉인합니다.',
      zh: 'GIWA Dojang 是 GIWA Chain 的原生信任层，将可信赖的链下信息发行为经过验证的链上认证（Attestation）。SOVE 用印章封存所有实物资产的流转。',
      ja: 'GIWA Dojang は信頼できるオフチェーン情報を検証済みオンチェーンアテステーション（Attestation）として発行する、GIWA Chain のネイティブ信頼レイヤーです。SOVE はすべての実物資産の流れを印章で封印します。',
      es: 'GIWA Dojang es la capa de confianza nativa de GIWA Chain que emite información off-chain confiable como atestaciones on-chain verificadas. SOVE sella con Dojang cada flujo de activos físicos.'
    },

    // ============ PLATFORM PAGE ============
    'platform.hero.eyebrow': { en: 'Platform', ko: 'Platform', zh: 'Platform', ja: 'Platform', es: 'Platform' },
    'platform.hero.title': {
      en: 'Five<br/><span class="hl">core modules</span>.',
      ko: '다섯 개의<br/><span class="hl">코어 모듈</span>.',
      zh: '五大<br/><span class="hl">核心模块</span>。',
      ja: '5つの<br/><span class="hl">コアモジュール</span>。',
      es: 'Cinco<br/><span class="hl">módulos principales</span>.'
    },
    'platform.hero.lead': {
      en: 'Independently operated, organically connected. Each module runs on its own smart contracts and shares value via the $SOVE token economy.',
      ko: '독립적으로 운영되며 유기적으로 연결됩니다. 각 모듈은 자체 스마트 컨트랙트로 작동하며 $SOVE 토큰 이코노미를 통해 가치를 공유합니다.',
      zh: '独立运营、有机互联。每个模块运行于各自的智能合约，并通过 $SOVE 代币经济共享价值。',
      ja: '独立して運営され、有機的に接続されます。各モジュールは独自のスマートコントラクトで動作し、$SOVE トークンエコノミーで価値を共有します。',
      es: 'Operación independiente, conexión orgánica. Cada módulo funciona con sus propios contratos y comparte valor mediante la economía del token $SOVE.'
    },

    // ============ TOKEN PAGE ============
    'token.hero.eyebrow': { en: 'Token', ko: 'Token', zh: 'Token', ja: 'Token', es: 'Token' },
    'token.hero.title': {
      en: '<span class="hl">$SOVE</span>.<br/>Asset-backed token.',
      ko: '<span class="hl">$SOVE</span>.<br/>실물 가치 연동 토큰.',
      zh: '<span class="hl">$SOVE</span>。<br/>实物价值挂钩代币。',
      ja: '<span class="hl">$SOVE</span>。<br/>実物価値連動トークン。',
      es: '<span class="hl">$SOVE</span>.<br/>Token vinculado al valor real.'
    },
    'token.hero.lead': {
      en: '$SOVE is the core token of the SOVE platform. It is minted in proportion to the appraised value of real-world assets and burned automatically on redemption and trading fees — a deflationary mechanism. Every mint and burn is verified through Dojang attestation.',
      ko: '$SOVE는 SOVE 플랫폼의 코어 토큰입니다. 실물 자산의 감정가에 따라 발행되며, 반환·거래 수수료에서 자동 소각되는 디플레이션 메커니즘을 가집니다. 모든 발행과 소각은 도장 어테스테이션을 통해 검증됩니다.',
      zh: '$SOVE 是 SOVE 平台的核心代币。按照实物资产的鉴定价值发行，并通过赎回与交易手续费自动销毁 —— 通缩机制。所有发行与销毁均通过印章认证进行验证。',
      ja: '$SOVE は SOVE プラットフォームのコアトークンです。実物資産の鑑定価値に応じて発行され、返還・取引手数料から自動焼却されるデフレメカニズムを持ちます。すべての発行と焼却は印章アテステーションを通じて検証されます。',
      es: '$SOVE es el token central de la plataforma SOVE. Se acuña proporcionalmente al valor tasado de los activos reales y se quema automáticamente en redenciones y comisiones — un mecanismo deflacionario. Cada acuñación y quema se verifica mediante atestación Dojang.'
    },

    // ============ Common nav helper (Connect Wallet button) ============
    // Menu items NOT translated per request — only buttons that aren't part of menu
    'btn.whitepaper': { en: 'Whitepaper', ko: 'Whitepaper', zh: 'Whitepaper', ja: 'Whitepaper', es: 'Whitepaper' },
    'btn.connect':    { en: 'Connect Wallet', ko: 'Connect Wallet', zh: 'Connect Wallet', ja: 'Connect Wallet', es: 'Connect Wallet' }
  };

  // ============================================
  // State + storage
  // ============================================
  function getCurrentLang() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored && LANGS.find(l => l.code === stored)) return stored;
    } catch {}
    return DEFAULT_LANG;
  }
  function setLang(code) {
    try { localStorage.setItem(STORAGE_KEY, code); } catch {}
  }

  // ============================================
  // Translation application
  // ============================================
  function translate(key, lang) {
    const entry = DICT[key];
    if (!entry) return null;
    return entry[lang] || entry[DEFAULT_LANG] || '';
  }

  function applyTranslations(lang) {
    document.documentElement.setAttribute('lang', lang);
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const text = translate(key, lang);
      if (text !== null) el.innerHTML = text;
    });
    // Translate attributes (e.g., placeholders, titles)
    document.querySelectorAll('[data-i18n-attr]').forEach(el => {
      const config = el.getAttribute('data-i18n-attr'); // format: "attr1:key1;attr2:key2"
      config.split(';').forEach(pair => {
        const [attr, key] = pair.split(':');
        const text = translate(key.trim(), lang);
        if (text !== null) el.setAttribute(attr.trim(), text.replace(/<[^>]+>/g, ''));
      });
    });
  }

  // ============================================
  // Language Switcher UI
  // ============================================
  function buildSwitcher() {
    // Inject into nav-cta if exists
    const navCta = document.querySelector('.nav-cta');
    if (!navCta) return;

    // Avoid duplicates
    if (document.querySelector('.i18n-switch')) return;

    const wrap = document.createElement('div');
    wrap.className = 'i18n-switch';
    wrap.innerHTML = LANGS.map(l => `
      <button type="button" class="i18n-btn" data-lang="${l.code}" title="${l.name}">${l.label}</button>
    `).join('');

    // Insert before whitepaper button
    navCta.insertBefore(wrap, navCta.firstChild);

    // Wire events
    wrap.querySelectorAll('.i18n-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const code = btn.dataset.lang;
        setLang(code);
        applyTranslations(code);
        updateSwitchActive(code);
      });
    });

    updateSwitchActive(getCurrentLang());
  }

  function updateSwitchActive(code) {
    document.querySelectorAll('.i18n-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.lang === code);
    });
  }

  // ============================================
  // Init
  // ============================================
  function init() {
    buildSwitcher();
    applyTranslations(getCurrentLang());
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose API
  window.SoveI18n = {
    setLang: (code) => { setLang(code); applyTranslations(code); updateSwitchActive(code); },
    getLang: getCurrentLang,
    t: (key) => translate(key, getCurrentLang()),
    LANGS
  };
})();
