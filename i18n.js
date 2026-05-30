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
    'btn.whitepaper': { en: 'Whitepaper', ko: 'Whitepaper', zh: 'Whitepaper', ja: 'Whitepaper', es: 'Whitepaper' },
    'btn.connect':    { en: 'Connect Wallet', ko: 'Connect Wallet', zh: 'Connect Wallet', ja: 'Connect Wallet', es: 'Connect Wallet' },

    // ============ HOME — Module panels ============
    'home.mod.nft.process.h':  { en: 'Asset Onboarding Process', ko: '자산 등록 프로세스', zh: '资产入驻流程', ja: '資産登録プロセス', es: 'Proceso de Onboarding' },
    'home.mod.nft.trade.h':    { en: 'Trading Methods', ko: '거래 방식', zh: '交易方式', ja: '取引方式', es: 'Métodos de Trading' },
    'home.mod.nft.eng':        { en: 'English Auction', ko: 'English Auction', zh: 'English Auction', ja: 'English Auction', es: 'English Auction' },
    'home.mod.nft.eng.d':      { en: 'Ascending price · auto-extend on last-minute bids', ko: '가격 상승식 · 마감 임박 자동 연장', zh: '升价式 · 临近结束自动延长', ja: '価格上昇式 · 終了直前自動延長', es: 'Precio ascendente · prórroga automática' },
    'home.mod.nft.fix':        { en: 'Fixed Price', ko: 'Fixed Price', zh: 'Fixed Price', ja: 'Fixed Price', es: 'Fixed Price' },
    'home.mod.nft.fix.d':      { en: '50% fee discount when paying with $SOVE', ko: '$SOVE 결제 시 수수료 50% 할인', zh: '使用 $SOVE 支付手续费 50% 折扣', ja: '$SOVE 決済で手数料 50% 割引', es: '50% de descuento al pagar con $SOVE' },
    'home.mod.nft.offer':      { en: 'Make Offer', ko: 'Make Offer', zh: 'Make Offer', ja: 'Make Offer', es: 'Make Offer' },
    'home.mod.nft.offer.d':    { en: 'Buyer proposes price · bilateral negotiation', ko: '구매자 가격 제안 · 양방향 협상', zh: '买家提价 · 双向协商', ja: '購入者が価格提示 · 双方向交渉', es: 'Comprador propone precio · negociación bilateral' },
    'home.mod.nft.otc':        { en: 'OTC', ko: 'OTC', zh: 'OTC', ja: 'OTC', es: 'OTC' },
    'home.mod.nft.otc.d':      { en: '$100K+ · escrow contract · enhanced KYC', ko: '$100K 이상 · 에스크로 컨트랙트', zh: '$100K 以上 · 托管合约', ja: '$100K 以上 · エスクロー契約', es: '$100K+ · contrato de custodia' },

    'home.mod.ex.lead':        { en: 'Hybrid exchange combining Orderbook and AMM. Smart Order Router automatically matches the best price for every trade.', ko: 'Orderbook과 AMM을 결합한 하이브리드 거래소. Smart Order Router가 매 거래마다 최적 가격을 자동 매칭합니다.', zh: '订单簿与 AMM 结合的混合交易所。Smart Order Router 自动为每笔交易匹配最优价格。', ja: 'オーダーブックと AMM を結合したハイブリッド取引所。Smart Order Router が取引毎に最適価格を自動マッチング。', es: 'Exchange híbrido que combina Orderbook y AMM. Smart Order Router empareja automáticamente el mejor precio para cada operación.' },
    'home.mod.ex.alloc.h':     { en: 'Fee Distribution', ko: '수수료 배분', zh: '手续费分配', ja: '手数料配分', es: 'Distribución de Comisiones' },
    'home.mod.ex.op':          { en: 'Operations', ko: '운영', zh: '运营', ja: '運営', es: 'Operaciones' },
    'home.mod.ex.burn':        { en: 'Token Burn', ko: '토큰 소각', zh: '代币销毁', ja: 'トークン焼却', es: 'Quema de Token' },
    'home.mod.ex.stake':       { en: 'Staking', ko: '스테이킹', zh: '质押', ja: 'ステーキング', es: 'Staking' },
    'home.mod.ex.royalty':     { en: 'Creator Royalty', ko: '창작자 로열티', zh: '创作者版税', ja: 'クリエイターロイヤリティ', es: 'Regalía del Creador' },

    'home.mod.defi.lead':      { en: 'Held assets become income sources. 4-Tier staking, LP pools, NFT-collateral loans, and insurance pool all in one interface.', ko: '보유한 자산이 곧 수익원이 됩니다. 4-Tier 스테이킹, 유동성 풀, NFT 담보 대출, 보험 풀을 단일 인터페이스에서 제공합니다.', zh: '所持资产即为收益来源。4-Tier 质押、流动性池、NFT 抵押贷款、保险池统一界面提供。', ja: '保有資産がそのまま収益源に。4-Tier ステーキング、流動性プール、NFT 担保融資、保険プールを単一画面で提供。', es: 'Tus activos se convierten en fuente de ingresos. Staking 4-Tier, pools de liquidez, préstamos con NFT y pool de seguros en una sola interfaz.' },
    'home.mod.defi.tier.h':    { en: 'Staking Tiers', ko: '스테이킹 티어', zh: '质押等级', ja: 'ステーキングティア', es: 'Niveles de Staking' },

    'home.mod.ticket.lead':    { en: 'ERC-1155 NFT tickets. Bound to GIWA ID — scalping is blocked at the protocol level. Auto-converts to commemorative collectible after the event.', ko: 'ERC-1155 기반 NFT 티켓. GIWA ID에 바인딩되어 암표가 원천 차단되며, 공연 종료 후 기념 컬렉터블로 자동 전환됩니다.', zh: '基于 ERC-1155 的 NFT 门票。绑定 GIWA ID，从源头阻断黄牛；演出后自动转为纪念收藏品。', ja: 'ERC-1155 ベースの NFT チケット。GIWA ID にバインドされ転売を根本から遮断し、公演終了後に記念コレクタブルへ自動変換。', es: 'Entradas NFT ERC-1155 vinculadas a GIWA ID — la reventa se bloquea a nivel de protocolo. Conversión automática a coleccionable conmemorativo tras el evento.' },
    'home.mod.ticket.anti.h':  { en: 'Anti-Scalping', ko: '암표 방지 메커니즘', zh: '防黄牛机制', ja: 'チケット転売防止メカニズム', es: 'Mecanismo Anti-Reventa' },

    'home.mod.admin.lead':     { en: 'Assets, users, transactions, token issuance, governance — every operational tool unified in a single console.', ko: '자산, 사용자, 거래, 토큰 발행, 거버넌스 — 플랫폼 운영에 필요한 모든 지표와 도구를 단일 콘솔에서 통합 관리합니다.', zh: '资产、用户、交易、代币发行、治理 —— 平台运营所需的全部指标与工具，统一控制台管理。', ja: '資産・ユーザー・取引・トークン発行・ガバナンス —— プラットフォーム運営に必要なすべての指標とツールを単一コンソールで統合管理。', es: 'Activos, usuarios, transacciones, emisión de tokens y gobernanza — todas las herramientas operativas unificadas en una sola consola.' },

    // ============ ABOUT — Vision/Background/Principles/Differentiators/Foundation ============
    'about.vision.eyebrow':    { en: '01 — Vision', ko: '01 — Vision', zh: '01 — Vision', ja: '01 — Vision', es: '01 — Vision' },
    'about.vision.title':      { en: 'Own culture,<br/>trade value.', ko: '문화를 소유하고,<br/>가치를 거래하다.', zh: '拥有文化，<br/>交易价值。', ja: '文化を所有し、<br/>価値を取引する。', es: 'Posee cultura,<br/>intercambia valor.' },
    'about.bg.eyebrow':        { en: '02 — Background', ko: '02 — Background', zh: '02 — Background', ja: '02 — Background', es: '02 — Background' },
    'about.bg.title':          { en: 'Why now, RWA.', ko: '왜 지금, RWA인가.', zh: '为什么是现在的 RWA。', ja: 'なぜ今、RWA なのか。', es: '¿Por qué RWA, y por qué ahora?' },
    'about.bg.1.t':            { en: 'Entry Barriers', ko: '진입 장벽', zh: '准入门槛', ja: '参入障壁', es: 'Barreras de Entrada' },
    'about.bg.1.d':            { en: 'The high-end art market is almost inaccessible to retail investors — reserved for institutions and a few collectors.', ko: '고가 예술품 시장은 기관과 소수 컬렉터에게만 열려 있어, 일반 투자자의 접근이 거의 불가능합니다.', zh: '高端艺术品市场仅向机构与少数收藏家开放，散户几乎无法进入。', ja: '高価な芸術品市場は機関と一部のコレクターにのみ開かれ、一般投資家のアクセスはほぼ不可能です。', es: 'El mercado del arte de gama alta es casi inaccesible para inversores minoristas — reservado a instituciones y unos pocos coleccionistas.' },
    'about.bg.2.t':            { en: 'Illiquidity', ko: '유동성 부족', zh: '流动性不足', ja: '流動性不足', es: 'Falta de Liquidez' },
    'about.bg.2.d':            { en: 'Selling requires waiting for the auction cycle, and outside major galleries trading is nearly impossible.', ko: '한 번 구매한 작품을 매도하려면 옥션 사이클을 기다려야 하며 대형 갤러리 외에는 거래가 어렵습니다.', zh: '出售一件作品需等待拍卖周期，主流画廊之外几乎无法成交。', ja: '購入した作品を売却するにはオークションサイクルを待つ必要があり、大手ギャラリー以外では取引が困難です。', es: 'Vender requiere esperar al ciclo de subasta y fuera de las galerías principales el comercio es casi imposible.' },
    'about.bg.3.t':            { en: 'Opaque Ownership', ko: '소유권 불투명', zh: '所有权不透明', ja: '所有権の不透明性', es: 'Propiedad Opaca' },
    'about.bg.3.d':            { en: 'Forgery disputes, lost provenance, costly authentication — all structural factors eroding market trust.', ko: '위작 시비, Provenance(이력) 분실, 진위 검증 비용 — 모두 시장 신뢰를 갉아먹는 구조적 요인입니다.', zh: '伪作纠纷、Provenance（来源）丢失、鉴定成本 —— 这些结构性因素侵蚀市场信任。', ja: '贋作紛争、Provenance（来歴）の喪失、真贋検証コスト — いずれも市場の信頼を蝕む構造的要因です。', es: 'Disputas de falsificación, pérdida de procedencia y costosas autenticaciones — factores estructurales que erosionan la confianza del mercado.' },
    'about.bg.4.t':            { en: 'Creator Compensation', ko: '창작자 보상', zh: '创作者报酬', ja: 'クリエイター報酬', es: 'Compensación al Creador' },
    'about.bg.4.d':            { en: 'Most of the value appreciation in secondary markets flows to collectors and intermediaries — rarely reaching creators.', ko: '2차 시장에서 발생하는 가치 상승의 대부분이 컬렉터와 중개업자에게 돌아가며, 창작자에게는 이르지 못합니다.', zh: '二级市场的价值增长大多归属收藏家与中介，鲜少抵达创作者。', ja: '二次市場で発生する価値上昇のほとんどはコレクターと仲介業者に流れ、クリエイターに届きにくいです。', es: 'La mayor parte de la apreciación en el mercado secundario va a coleccionistas e intermediarios — rara vez al creador.' },

    'about.pr.eyebrow':        { en: '04 — Principles', ko: '04 — Principles', zh: '04 — Principles', ja: '04 — Principles', es: '04 — Principles' },
    'about.pr.title':          { en: 'Four principles<br/>that drive SOVE.', ko: 'SOVE를 작동시키는<br/>네 가지 원칙.', zh: '驱动 SOVE 的<br/>四大原则。', ja: 'SOVE を動かす<br/>4つの原則。', es: 'Cuatro principios<br/>que impulsan SOVE.' },
    'about.pr.1.t':            { en: 'Dojang Verification', ko: '도장 검증', zh: '印章验证', ja: '印章による検証', es: 'Verificación Dojang' },
    'about.pr.1.d':            { en: 'All off-chain info is converted to on-chain attestations via six Dojang types issued by appraisers, custodians, insurers, and KYC providers.', ko: '감정기관·수탁기관·보험사·KYC 인증사가 발급하는 6종 도장(Dojang)으로 모든 오프체인 정보를 온체인 어테스테이션화합니다.', zh: '所有链下信息通过鉴定、托管、保险与 KYC 机构发行的 6 类印章（Dojang）转化为链上认证。', ja: '鑑定機関・カストディアン・保険会社・KYC 認証機関が発行する6種の印章（Dojang）で、すべてのオフチェーン情報をオンチェーンアテステーション化。', es: 'Toda la información off-chain se convierte en atestaciones on-chain mediante seis tipos de Dojang emitidos por tasadores, custodios, aseguradoras y verificadores KYC.' },
    'about.pr.2.t':            { en: 'Liquidity First', ko: '유동성 우선', zh: '流动性优先', ja: '流動性優先', es: 'Liquidez Primero' },
    'about.pr.2.d':            { en: 'Hybrid Orderbook + AMM engine with a Smart Order Router that always matches the best price automatically.', ko: 'Orderbook과 AMM을 결합한 하이브리드 거래 엔진과 Smart Order Router가 항상 최적 가격을 자동 매칭합니다.', zh: '订单簿 + AMM 混合引擎与 Smart Order Router 始终自动撮合最优价格。', ja: 'オーダーブック + AMM のハイブリッドエンジンと Smart Order Router が常に最適価格を自動マッチング。', es: 'Motor híbrido Orderbook + AMM con Smart Order Router que siempre empareja el mejor precio automáticamente.' },
    'about.pr.3.t':            { en: 'Physical Redemption', ko: '실물 반환권', zh: '实物赎回权', ja: '実物返還権', es: 'Redención Física' },
    'about.pr.3.d':            { en: 'NFTs are not mere digital assets. Holders can burn the NFT at any time to claim the underlying physical asset.', ko: 'NFT는 단순한 디지털 자산이 아닙니다. 보유자는 언제든 NFT를 소각하고 실물 자산을 인도받을 권리를 행사할 수 있습니다.', zh: 'NFT 不只是数字资产。持有者可随时销毁 NFT，行使实物资产交付的权利。', ja: 'NFT は単なるデジタル資産ではありません。保有者はいつでも NFT を焼却し、実物資産の引渡を受ける権利を行使できます。', es: 'Los NFTs no son simples activos digitales. Los tenedores pueden quemarlos en cualquier momento para reclamar el activo físico.' },
    'about.pr.4.t':            { en: 'Automatic Royalty', ko: '자동 로열티', zh: '自动版税', ja: '自動ロイヤリティ', es: 'Regalía Automática' },
    'about.pr.4.d':            { en: 'Smart contracts auto-distribute 1–3% royalty to creators on every secondary trade. All trades are enforced by contract.', ko: '2차 거래마다 스마트 컨트랙트가 창작자에게 1 — 3%의 로열티를 자동 분배합니다. 모든 거래는 컨트랙트로 강제됩니다.', zh: '每次二次交易由智能合约自动向创作者分配 1–3% 版税。所有交易由合约强制执行。', ja: '二次取引のたびにスマートコントラクトがクリエイターに 1〜3% のロイヤリティを自動分配。すべての取引はコントラクトで強制されます。', es: 'En cada reventa, los contratos inteligentes distribuyen automáticamente 1–3% de regalía al creador. Todas las operaciones se ejecutan por contrato.' },

    'about.diff.eyebrow':      { en: '05 — Differentiators', ko: '05 — Differentiators', zh: '05 — Differentiators', ja: '05 — Differentiators', es: '05 — Differentiators' },
    'about.diff.title':        { en: 'What makes SOVE different.', ko: 'SOVE가 다른 이유.', zh: 'SOVE 与众不同之处。', ja: 'SOVE が違う理由。', es: 'Qué hace diferente a SOVE.' },
    'about.diff.1.t':          { en: 'vs Generic NFT Markets', ko: 'vs 일반 NFT 마켓', zh: 'vs 普通 NFT 市场', ja: 'vs 一般的な NFT マーケット', es: 'vs Mercados NFT genéricos' },
    'about.diff.1.d':          { en: 'Most NFT markets handle only digital assets. SOVE tokenizes physical assets after appraisal, custody, and insurance — every NFT guarantees a physical redemption right.', ko: '대부분의 NFT 마켓은 디지털 자산만 다룹니다. SOVE는 실물 자산을 감정·수탁·보험 후 토큰화하며, 모든 NFT는 실물 반환권을 보장합니다.', zh: '多数 NFT 市场仅处理数字资产。SOVE 在鉴定、托管与保险后将实物资产代币化，所有 NFT 均保证实物赎回权。', ja: 'ほとんどの NFT マーケットはデジタル資産のみを扱います。SOVE は鑑定・カストディ・保険を経た実物資産をトークン化し、すべての NFT に実物返還権が保証されます。', es: 'La mayoría de mercados NFT solo trabajan activos digitales. SOVE tokeniza activos físicos tras tasación, custodia y seguro — cada NFT garantiza un derecho de redención física.' },
    'about.diff.2.t':          { en: 'vs Traditional Auctions', ko: 'vs 전통 옥션', zh: 'vs 传统拍卖', ja: 'vs 伝統的なオークション', es: 'vs Subastas Tradicionales' },
    'about.diff.2.d':          { en: 'Christie\'s/Sotheby\'s: one auction per cycle, 25% fees. SOVE: always-on trading, 2.5% (1.25% with SOVE), 24/7 global.', ko: '크리스티·소더비의 옥션은 사이클당 한 번, 수수료 25%. SOVE는 상시 거래, 2.5% 수수료(SOVE 결제 시 1.25%)이며 글로벌 24/7 운영됩니다.', zh: '佳士得 / 苏富比每周期一次拍卖，手续费 25%。SOVE 全天候交易，手续费 2.5%（SOVE 支付 1.25%），全球 24/7 运营。', ja: 'クリスティーズ・サザビーズはサイクルあたり1回、手数料 25%。SOVE は常時取引、手数料 2.5%（SOVE 決済時 1.25%）でグローバル 24/7 運営。', es: 'Christie\'s/Sotheby\'s: una subasta por ciclo, 25% de comisión. SOVE: trading siempre activo, 2.5% (1.25% con SOVE), 24/7 a nivel global.' },
    'about.diff.3.t':          { en: 'vs Other RWA Protocols', ko: 'vs 다른 RWA 프로토콜', zh: 'vs 其他 RWA 协议', ja: 'vs 他の RWA プロトコル', es: 'vs Otros protocolos RWA' },
    'about.diff.3.d':          { en: 'Most RWAs focus on real estate or bonds. SOVE specializes in cultural assets, offering curation by artist, genre, and series.', ko: '대부분의 RWA는 부동산·채권에 집중합니다. SOVE는 문화 자산 카테고리에 특화하여 작가별·장르별·시리즈별 세분화된 큐레이션을 제공합니다.', zh: '多数 RWA 聚焦地产与债券。SOVE 专注于文化资产类别，按艺术家、流派与系列提供精细化策展。', ja: '多くの RWA は不動産・債券に集中。SOVE は文化資産カテゴリに特化し、作家別・ジャンル別・シリーズ別の細分化されたキュレーションを提供。', es: 'La mayoría de RWAs se enfocan en bienes raíces o bonos. SOVE se especializa en activos culturales con curaduría por artista, género y serie.' },
    'about.diff.4.t':          { en: 'vs Chainlink Oracle', ko: 'vs Chainlink Oracle', zh: 'vs Chainlink Oracle', ja: 'vs Chainlink Oracle', es: 'vs Chainlink Oracle' },
    'about.diff.4.d':          { en: 'Chainlink focuses on price feeds. GIWA Dojang is per-asset attestation — appraised value, custody location, insurance, KYC — all sealed as stamps.', ko: 'Chainlink는 가격 피드 중심입니다. GIWA Dojang은 자산 단위로 발급되는 어테스테이션으로 — 감정가, 수탁 위치, 보험 증서, KYC가 모두 도장으로 봉인됩니다.', zh: 'Chainlink 以价格喂价为主。GIWA Dojang 是按资产发行的认证 —— 鉴定价、托管位置、保险凭证、KYC 全部以印章封存。', ja: 'Chainlink は価格フィード中心。GIWA Dojang は資産単位で発行されるアテステーションで、鑑定価・カストディ位置・保険証券・KYC がすべて印章で封印されます。', es: 'Chainlink se centra en feeds de precios. GIWA Dojang es atestación por activo — valor tasado, ubicación de custodia, seguro, KYC — todo sellado como Dojang.' },

    'about.fnd.eyebrow':       { en: '06 — Foundation', ko: '06 — Foundation', zh: '06 — Foundation', ja: '06 — Foundation', es: '06 — Foundation' },
    'about.fnd.title':         { en: 'SOVE Foundation.', ko: 'SOVE Foundation.', zh: 'SOVE Foundation.', ja: 'SOVE Foundation.', es: 'SOVE Foundation.' },
    'about.fnd.sub':           { en: 'SOVE Foundation is a non-profit foundation responsible for long-term operation, token governance, security audits, and partnerships. All treasury actions require 4-of-7 Multi-Sig.', ko: 'SOVE Foundation은 비영리 재단으로 플랫폼의 장기 운영, 토큰 거버넌스, 보안 감사, 파트너십 관리를 담당합니다. 4-of-7 Multi-Sig로 모든 재단 자금을 집행합니다.', zh: 'SOVE Foundation 是非营利基金会，负责平台长期运营、代币治理、安全审计与合作管理。所有资金通过 4-of-7 Multi-Sig 执行。', ja: 'SOVE Foundation は非営利財団として、プラットフォームの長期運営、トークンガバナンス、セキュリティ監査、パートナーシップ管理を担当。すべての財団資金は 4-of-7 Multi-Sig で執行。', es: 'SOVE Foundation es una fundación sin fines de lucro responsable de la operación a largo plazo, gobernanza del token, auditorías de seguridad y alianzas. Todos los fondos se ejecutan con Multi-Sig 4-of-7.' },

    // ============ PLATFORM PAGE — 5 modules deep ============
    'platform.nft.eyebrow':    { en: '01 — Module', ko: '01 — Module', zh: '01 — Module', ja: '01 — Module', es: '01 — Module' },
    'platform.nft.title':      { en: 'NFT Marketplace.', ko: 'NFT Marketplace.', zh: 'NFT Marketplace.', ja: 'NFT Marketplace.', es: 'NFT Marketplace.' },
    'platform.nft.sub':        { en: 'Only physical assets with GIWA Dojang issuance (appraisal, custody, insurance) are minted as NFTs. The authenticity of off-chain data is permanently recorded on-chain via Dojang attestation.', ko: '감정 · 수탁 · 보험 정보가 GIWA Dojang으로 도장 발급된 실물 자산만 NFT로 발행됩니다. 오프체인 데이터의 진위는 도장 어테스테이션으로 온체인에 영구 기록됩니다.', zh: '只有经 GIWA Dojang 印章发行（鉴定、托管、保险）的实物资产才可铸造为 NFT。链下数据的真伪通过印章认证永久记录在链上。', ja: '鑑定・カストディ・保険情報が GIWA Dojang で印章発行された実物資産のみ NFT として発行。オフチェーンデータの真正性は印章アテステーションでオンチェーンに永久記録されます。', es: 'Solo los activos físicos con emisión Dojang (tasación, custodia, seguro) se acuñan como NFT. La autenticidad de los datos off-chain queda permanentemente registrada on-chain mediante Dojang.' },

    'platform.ex.eyebrow':     { en: '02 — Module', ko: '02 — Module', zh: '02 — Module', ja: '02 — Module', es: '02 — Module' },
    'platform.ex.title':       { en: 'SOVE Exchange.', ko: 'SOVE Exchange.', zh: 'SOVE Exchange.', ja: 'SOVE Exchange.', es: 'SOVE Exchange.' },
    'platform.ex.sub':         { en: 'Hybrid exchange combining Orderbook and AMM. Smart Order Router auto-matches the best price for every trade. All settlement runs on GIWA Chain with 1-second block time.', ko: 'Orderbook과 AMM을 결합한 하이브리드 거래소. Smart Order Router가 매 거래마다 최적 가격을 자동 매칭합니다. 모든 정산은 GIWA Chain 위에서 1초 블록 타임으로 처리됩니다.', zh: '订单簿与 AMM 结合的混合交易所。Smart Order Router 自动为每笔交易匹配最优价格。所有结算在 GIWA Chain 上以 1 秒出块时间处理。', ja: 'オーダーブックと AMM を結合したハイブリッド取引所。Smart Order Router が取引毎に最適価格を自動マッチング。すべての決済は GIWA Chain 上で1秒ブロックタイムにて処理されます。', es: 'Exchange híbrido Orderbook + AMM. Smart Order Router empareja el mejor precio en cada operación. Toda la liquidación corre en GIWA Chain con bloques de 1 segundo.' },

    'platform.defi.eyebrow':   { en: '03 — Module', ko: '03 — Module', zh: '03 — Module', ja: '03 — Module', es: '03 — Module' },
    'platform.defi.title':     { en: 'DeFi Hub.', ko: 'DeFi Hub.', zh: 'DeFi Hub.', ja: 'DeFi Hub.', es: 'DeFi Hub.' },
    'platform.defi.sub':       { en: 'Held assets become income sources. 4-Tier staking, LP pools, NFT-collateralized loans, and an insurance pool — all in a single interface.', ko: '보유한 자산이 곧 수익원이 됩니다. 4-Tier 스테이킹, 유동성 풀, NFT 담보 대출, 보험 풀을 단일 인터페이스에서 제공합니다.', zh: '所持资产即为收益来源。4-Tier 质押、流动性池、NFT 抵押贷款、保险池统一界面提供。', ja: '保有資産がそのまま収益源に。4-Tier ステーキング、流動性プール、NFT 担保融資、保険プールを単一画面で提供。', es: 'Tus activos se convierten en fuente de ingresos. Staking 4-Tier, pools de liquidez, préstamos con NFT y pool de seguros en una sola interfaz.' },

    'platform.ticket.eyebrow': { en: '04 — Module', ko: '04 — Module', zh: '04 — Module', ja: '04 — Module', es: '04 — Module' },
    'platform.ticket.title':   { en: 'Ticket Center.', ko: 'Ticket Center.', zh: 'Ticket Center.', ja: 'Ticket Center.', es: 'Ticket Center.' },
    'platform.ticket.sub':     { en: 'ERC-1155 NFT tickets bound to GIWA ID — scalping blocked at the protocol level. Auto-converts to commemorative collectible after the show.', ko: 'ERC-1155 기반 NFT 티켓. GIWA ID에 바인딩되어 암표가 원천적으로 차단되며, 공연 종료 후 기념 컬렉터블로 자동 전환됩니다.', zh: '基于 ERC-1155 的 NFT 门票。绑定 GIWA ID 从源头阻断黄牛；演出后自动转为纪念收藏品。', ja: 'ERC-1155 ベースの NFT チケット。GIWA ID にバインドされ転売を根本から遮断し、公演終了後に記念コレクタブルへ自動変換。', es: 'Entradas NFT ERC-1155 vinculadas a GIWA ID — reventa bloqueada a nivel de protocolo. Conversión automática a coleccionable conmemorativo tras el espectáculo.' },

    'platform.admin.eyebrow':  { en: '05 — Module', ko: '05 — Module', zh: '05 — Module', ja: '05 — Module', es: '05 — Module' },
    'platform.admin.title':    { en: 'Admin Console.', ko: 'Admin Console.', zh: 'Admin Console.', ja: 'Admin Console.', es: 'Admin Console.' },
    'platform.admin.sub':      { en: 'Assets, users, transactions, token issuance, governance — all KPIs and tools unified in a single console.', ko: '자산, 사용자, 거래, 토큰 발행, 거버넌스 — 플랫폼 운영에 필요한 모든 지표와 도구를 단일 콘솔에서 통합 관리합니다.', zh: '资产、用户、交易、代币发行、治理 —— 平台运营所需的所有指标与工具，统一控制台管理。', ja: '資産・ユーザー・取引・トークン発行・ガバナンス —— プラットフォーム運営に必要なすべての指標とツールを単一コンソールで統合管理。', es: 'Activos, usuarios, transacciones, emisión de tokens y gobernanza — todos los KPIs y herramientas en una sola consola.' },

    // ============ DOJANG PAGE — sections ============
    'dojang.what.eyebrow':     { en: '01 — Concept', ko: '01 — Concept', zh: '01 — Concept', ja: '01 — Concept', es: '01 — Concept' },
    'dojang.what.title':       { en: 'What is Dojang.', ko: '도장은 무엇인가.', zh: '何为印章。', ja: '印章とは何か。', es: '¿Qué es Dojang?' },
    'dojang.what.lead':        { en: 'Dojang is an <strong>on-chain attestation issued by an approved issuer</strong>. Just as a traditional Korean seal authenticates identity and intent, a digital Dojang records the truth of off-chain data permanently on-chain.', ko: '도장(Dojang)은 <strong>승인된 발급자(Issuer)가 발급하는 온체인 어테스테이션</strong>입니다. 한국 전통의 인장이 신원과 결정을 봉인하듯, 디지털 도장은 오프체인 데이터의 진위를 온체인에 영구 기록합니다.', zh: '印章（Dojang）是<strong>由经认证发行方发行的链上认证</strong>。如同韩国传统印章封存身份与决定，数字印章将链下数据的真伪永久记录上链。', ja: '印章（Dojang）は<strong>承認された発行者（Issuer）が発行するオンチェーンアテステーション</strong>です。韓国伝統の印鑑が身元と決定を封印するように、デジタル印章はオフチェーンデータの真正性をオンチェーンに永久記録します。', es: 'Dojang es <strong>una atestación on-chain emitida por un Issuer aprobado</strong>. Igual que un sello tradicional coreano autentica identidad y decisión, el Dojang digital registra la veracidad de los datos off-chain de forma permanente.' },
    'dojang.what.body':        { en: 'For example, an <strong>Identity Stamp</strong> is issued as an SBT proving the wallet passed KYC. In the GIWA ecosystem, Upbit Korea is currently the sole official issuer of Identity Stamps. With the same logic, SOVE adds appraiser, custodian, and insurer-issued stamps to put a physical asset\'s entire lifecycle on a chain of trust.', ko: '예를 들어 <strong>Identity Stamp</strong>는 KYC를 거친 지갑임을 증명하는 SBT 형태로 발급됩니다. 현재 GIWA 생태계에서 Identity Stamp는 Upbit Korea가 유일한 공식 발급자입니다. 같은 원리로 SOVE는 감정기관·수탁기관·보험사가 발급하는 추가 도장으로 실물 자산의 전 생애주기를 신뢰 체인 위에 올립니다.', zh: '例如，<strong>Identity Stamp</strong> 以 SBT 形式发行，证明钱包已通过 KYC。GIWA 生态中目前由 Upbit Korea 作为唯一官方发行方。SOVE 以同样的逻辑，由鉴定、托管与保险机构发行附加印章，将实物资产的全生命周期纳入信任链。', ja: '例えば <strong>Identity Stamp</strong> は KYC を経た財布であることを証明する SBT として発行されます。現在 GIWA エコシステムでは Upbit Korea が Identity Stamp の唯一の公式発行者です。同じ原理で SOVE は鑑定機関・カストディアン・保険会社が発行する追加印章により、実物資産の全ライフサイクルを信頼チェーンに乗せます。', es: 'Por ejemplo, un <strong>Identity Stamp</strong> se emite como SBT demostrando que la billetera pasó KYC. En el ecosistema GIWA, Upbit Korea es actualmente el único emisor oficial. Con la misma lógica, SOVE agrega sellos emitidos por tasadores, custodios y aseguradoras para llevar todo el ciclo de vida del activo físico a una cadena de confianza.' },

    'dojang.flow.eyebrow':     { en: '02 — Trust Flow', ko: '02 — Trust Flow', zh: '02 — Trust Flow', ja: '02 — Trust Flow', es: '02 — Trust Flow' },
    'dojang.flow.title':       { en: 'The moment<br/>off-chain becomes on-chain.', ko: '오프체인이<br/>온체인이 되는 순간.', zh: '链下成为链上<br/>的瞬间。', ja: 'オフチェーンが<br/>オンチェーンになる瞬間。', es: 'El momento en que<br/>off-chain se vuelve on-chain.' },

    'dojang.stamps.eyebrow':   { en: '03 — Stamp Types', ko: '03 — Stamp Types', zh: '03 — Stamp Types', ja: '03 — Stamp Types', es: '03 — Stamp Types' },
    'dojang.stamps.title':     { en: 'Six Dojang types<br/>issued by SOVE.', ko: 'SOVE에서 발급되는<br/>6종 도장.', zh: 'SOVE 发行的<br/>六类印章。', ja: 'SOVE が発行する<br/>6種の印章。', es: 'Seis tipos de Dojang<br/>emitidos por SOVE.' },
    'dojang.stamps.sub':       { en: 'Each stamp can only be created by an approved issuer; issuance time, issuer signature, and target asset ID are sealed on-chain. All stamps are non-transferable <strong>SBTs</strong>.', ko: '각 도장은 승인된 발급자만 생성할 수 있으며, 발급 시점·발급자 서명·대상 자산 ID가 온체인에 봉인됩니다. 모든 도장은 <strong>SBT(Soul Bound Token)</strong> 형태로 양도 불가합니다.', zh: '每种印章只能由经认证的发行方创建，发行时间、发行方签名、目标资产 ID 均封存上链。所有印章为不可转让的 <strong>SBT</strong>。', ja: '各印章は承認された発行者のみが作成可能で、発行時刻・発行者署名・対象資産 ID がオンチェーンに封印されます。すべての印章は譲渡不可の <strong>SBT</strong> 形態です。', es: 'Cada Dojang solo puede ser creado por un emisor aprobado; el momento de emisión, la firma del emisor y el ID del activo se sellan on-chain. Todos los Dojang son <strong>SBTs</strong> intransferibles.' },

    'dojang.att.eyebrow':      { en: '04 — Data Structure', ko: '04 — Data Structure', zh: '04 — Data Structure', ja: '04 — Data Structure', es: '04 — Data Structure' },
    'dojang.att.title':        { en: 'Dojang Attestation Structure.', ko: '도장 어테스테이션 구조.', zh: '印章认证的数据结构。', ja: '印章アテステーションの構造。', es: 'Estructura de Atestación Dojang.' },

    'dojang.cycle.eyebrow':    { en: '05 — Lifecycle', ko: '05 — Lifecycle', zh: '05 — Lifecycle', ja: '05 — Lifecycle', es: '05 — Lifecycle' },
    'dojang.cycle.title':      { en: 'Lifecycle of a Dojang.', ko: '도장의 생애주기.', zh: '印章的生命周期。', ja: '印章のライフサイクル。', es: 'Ciclo de Vida del Dojang.' },

    // ============ TOKEN PAGE — sections ============
    'token.eco.eyebrow':       { en: '01 — Economics', ko: '01 — Economics', zh: '01 — Economics', ja: '01 — Economics', es: '01 — Economics' },
    'token.eco.title':         { en: 'Mint · Burn · Governance.', ko: 'Mint · Burn · Governance.', zh: 'Mint · Burn · Governance.', ja: 'Mint · Burn · Governance.', es: 'Mint · Burn · Governance.' },
    'token.eco.sub':           { en: '$SOVE is not infinite-issuance. It is minted only when one real asset is registered, in a defined amount. Burn/redemption cycles regulate circulating supply.', ko: '$SOVE는 무한 발행이 아닙니다. 실물 자산 1개가 등록될 때만 정해진 양만큼 발행되며, 반환·소각 사이클을 통해 시장에 유통되는 양이 조정됩니다.', zh: '$SOVE 非无限发行。仅当注册一件实物资产时按既定数量发行，并通过赎回与销毁周期调节流通量。', ja: '$SOVE は無限発行ではありません。実物資産1件の登録時のみ定められた量を発行し、返還・焼却サイクルで流通量を調整します。', es: '$SOVE no es de emisión infinita. Se acuña solo cuando se registra un activo real, en cantidad definida. Los ciclos de redención/quema regulan la oferta circulante.' },

    'token.circ.eyebrow':      { en: '02 — Circulation', ko: '02 — Circulation', zh: '02 — Circulation', ja: '02 — Circulation', es: '02 — Circulation' },
    'token.circ.title':        { en: 'How the token flows.', ko: '토큰이 흐르는 길.', zh: '代币流转之路。', ja: 'トークンが流れる道。', es: 'Cómo fluye el token.' },

    'token.uc.eyebrow':        { en: '03 — Use Cases', ko: '03 — Use Cases', zh: '03 — Use Cases', ja: '03 — Use Cases', es: '03 — Use Cases' },
    'token.uc.title':          { en: '$SOVE Use Cases.', ko: '$SOVE 활용처.', zh: '$SOVE 应用场景。', ja: '$SOVE の活用先。', es: 'Casos de uso de $SOVE.' },

    'token.stake.eyebrow':     { en: '04 — Staking', ko: '04 — Staking', zh: '04 — Staking', ja: '04 — Staking', es: '04 — Staking' },
    'token.stake.title':       { en: '4-Tier Staking.', ko: '4-Tier Staking.', zh: '4-Tier Staking.', ja: '4-Tier Staking.', es: '4-Tier Staking.' },
    'token.stake.sub':         { en: 'Locking $SOVE unlocks more than yield — it grants progressive operational privileges. Longer locks bring greater authority.', ko: '$SOVE를 락업하면 단순 이자 수익을 넘어 플랫폼의 다양한 혜택이 잠금 해제됩니다. 고티어일수록 락업 기간이 길어지지만 그만큼의 운영 권한이 부여됩니다.', zh: '锁定 $SOVE 不仅获得利息，更解锁多种平台权益。等级越高锁定时长越长，相应运营权限也越大。', ja: '$SOVE をロックすると単なる利息収益を超えてプラットフォームの様々な特典がアンロックされます。高ティアほどロック期間は長くなりますが、その分の運営権限が付与されます。', es: 'Bloquear $SOVE desbloquea más que rendimiento — otorga privilegios operativos progresivos. Cuanto mayor el bloqueo, más autoridad.' },

    'token.dist.eyebrow':      { en: '05 — Distribution', ko: '05 — Distribution', zh: '05 — Distribution', ja: '05 — Distribution', es: '05 — Distribution' },
    'token.dist.title':        { en: 'Token Distribution.', ko: '토큰 분배.', zh: '代币分配。', ja: 'トークン分配。', es: 'Distribución del Token.' },
    'token.dist.sub':          { en: '$SOVE\'s initial distribution prioritizes long-term ecosystem growth. Team and investor allocations are fully locked, while community incentives and ecosystem development get the largest share.', ko: '$SOVE의 초기 분배는 장기적 생태계 성장을 우선하도록 설계되었습니다. 팀과 투자자 분량은 모두 락업되며, 커뮤니티 인센티브와 생태계 발전에 가장 큰 비중을 둡니다.', zh: '$SOVE 初始分配以长期生态增长为优先。团队与投资者份额全部锁定；社区激励与生态发展占据最大份额。', ja: '$SOVE の初期分配は長期的なエコシステム成長を優先する設計です。チームと投資家分はすべてロックされ、コミュニティインセンティブとエコシステム発展に最大の比重を置きます。', es: 'La distribución inicial de $SOVE prioriza el crecimiento del ecosistema a largo plazo. Las asignaciones de equipo e inversores están totalmente bloqueadas y los incentivos comunitarios reciben la mayor parte.' },

    'token.gov.eyebrow':       { en: '06 — Governance', ko: '06 — Governance', zh: '06 — Governance', ja: '06 — Governance', es: '06 — Governance' },
    'token.gov.title':         { en: 'The path to DAO.', ko: 'DAO로 가는 길.', zh: '通往 DAO 之路。', ja: 'DAO への道。', es: 'El camino hacia la DAO.' },

    // ============ PLATFORM — NFT Marketplace deep ============
    'pf.nft.h.process': { en: 'Asset Onboarding Process', ko: '자산 등록 프로세스', zh: '资产入驻流程', ja: '資産登録プロセス', es: 'Proceso de Onboarding' },
    'pf.nft.h.std':     { en: 'NFT Standards by Asset Type', ko: '자산 유형별 NFT 표준', zh: '按资产类型的 NFT 标准', ja: '資産タイプ別 NFT 標準', es: 'Estándares NFT por Tipo de Activo' },
    'pf.nft.h.trade':   { en: 'Trading Methods', ko: '거래 방식', zh: '交易方式', ja: '取引方式', es: 'Métodos de Trading' },

    'pf.nft.s.1.n': { en: 'Asset Registration', ko: '자산 등록 신청', zh: '资产注册申请', ja: '資産登録申請', es: 'Solicitud de Registro' },
    'pf.nft.s.1.d': { en: 'Creator/owner submits asset information', ko: '창작자/소유자가 자산 정보 제출', zh: '创作者/所有者提交资产信息', ja: 'クリエイター/オーナーが資産情報を提出', es: 'Creador/propietario envía la información del activo' },
    'pf.nft.s.2.n': { en: 'Platform Pre-Screening', ko: '플랫폼 사전 심사', zh: '平台预审', ja: 'プラットフォーム事前審査', es: 'Pre-revisión de la Plataforma' },
    'pf.nft.s.2.d': { en: 'Eligibility check + category classification', ko: '자격 확인 및 카테고리 분류', zh: '资格确认与类别分类', ja: '資格確認とカテゴリー分類', es: 'Verificación de elegibilidad + clasificación' },
    'pf.nft.s.3.n': { en: 'Appraiser Inspection', ko: '감정기관 검수', zh: '鉴定机构核验', ja: '鑑定機関による検査', es: 'Inspección del Tasador' },
    'pf.nft.s.3.d': { en: 'USD-based appraisal + Appraisal Stamp issuance', ko: 'USD 기준 감정가 산정 + Appraisal Stamp 발급', zh: '按 USD 鉴定估值 + 发行 Appraisal Stamp', ja: 'USD 基準で鑑定価値算定 + Appraisal Stamp 発行', es: 'Tasación en USD + emisión de Appraisal Stamp' },
    'pf.nft.s.4.n': { en: 'Custody Intake', ko: '수탁기관 입고', zh: '托管入库', ja: 'カストディアン入庫', es: 'Ingreso en Custodia' },
    'pf.nft.s.4.d': { en: 'Physical storage + Custody Stamp issuance', ko: '실물 보관 + Custody Stamp 발급', zh: '实物保管 + Custody Stamp 发行', ja: '実物保管 + Custody Stamp 発行', es: 'Almacenamiento físico + Custody Stamp' },
    'pf.nft.s.5.n': { en: 'Insurance Coverage', ko: '보험 가입', zh: '保险投保', ja: '保険加入', es: 'Cobertura de Seguro' },
    'pf.nft.s.5.d': { en: '110% of appraisal mandatory + Insurance Stamp', ko: '감정가 110% 의무 + Insurance Stamp 발급', zh: '强制 110% 鉴定价 + Insurance Stamp', ja: '鑑定価 110% 必須 + Insurance Stamp 発行', es: '110% del valor tasado obligatorio + Insurance Stamp' },
    'pf.nft.s.6.n': { en: 'NFT Issuance', ko: 'NFT 발행', zh: 'NFT 发行', ja: 'NFT 発行', es: 'Emisión del NFT' },
    'pf.nft.s.6.d': { en: 'Minted on-chain as ERC-721 or ERC-1155', ko: 'ERC-721 또는 ERC-1155로 온체인 발행', zh: '以 ERC-721 或 ERC-1155 链上铸造', ja: 'ERC-721 または ERC-1155 でオンチェーン発行', es: 'Acuñado on-chain como ERC-721 o ERC-1155' },
    'pf.nft.s.7.n': { en: '$SOVE Mint', ko: '$SOVE Mint', zh: '$SOVE 铸造', ja: '$SOVE Mint', es: '$SOVE Mint' },
    'pf.nft.s.7.d': { en: 'Auto-mint based on appraisal + market listing', ko: '감정가 기반 자동 발행 + 마켓 리스팅', zh: '基于鉴定价自动发行 + 市场上架', ja: '鑑定価ベース自動発行 + マーケット掲載', es: 'Auto-emisión por valor tasado + listado en mercado' },

    'pf.nft.t.h':   { en: 'Asset Type', ko: '자산 유형', zh: '资产类型', ja: '資産タイプ', es: 'Tipo de Activo' },
    'pf.nft.t.std': { en: 'NFT Standard', ko: 'NFT 표준', zh: 'NFT 标准', ja: 'NFT 標準', es: 'Estándar NFT' },
    'pf.nft.t.cond':{ en: 'Conditions', ko: '발행 조건', zh: '发行条件', ja: '発行条件', es: 'Condiciones' },
    'pf.nft.t.meta':{ en: 'Key Metadata', ko: '주요 메타데이터', zh: '主要元数据', ja: '主なメタデータ', es: 'Metadatos Clave' },
    'pf.nft.t.1.a': { en: 'Unique Artwork', ko: '유일 예술품', zh: '唯一艺术品', ja: '唯一の芸術品', es: 'Obra Única' },
    'pf.nft.t.1.c': { en: 'Certificate + Custody + Insurance', ko: '감정서 + 수탁 + 보험', zh: '鉴定书 + 托管 + 保险', ja: '鑑定書 + カストディ + 保険', es: 'Certificado + Custodia + Seguro' },
    'pf.nft.t.1.m': { en: 'Artist, year, medium, size, value, provenance, custody location', ko: '작가, 제작년도, 소재, 크기, 감정가, Provenance, 수탁 위치', zh: '作者、制作年份、材质、尺寸、鉴定价、Provenance、托管位置', ja: '作家、制作年、素材、サイズ、鑑定価、Provenance、カストディ位置', es: 'Artista, año, soporte, tamaño, valor, procedencia, ubicación' },
    'pf.nft.t.2.a': { en: 'Edition Artwork', ko: '에디션 예술품', zh: '版式艺术品', ja: 'エディション芸術品', es: 'Obra de Edición' },
    'pf.nft.t.2.c': { en: 'Edition Certificate + Custody', ko: '에디션 증명서 + 수탁', zh: '版式证明 + 托管', ja: 'エディション証明 + カストディ', es: 'Certificado de Edición + Custodia' },
    'pf.nft.t.2.m': { en: 'Artist, edition no (x/N), total supply, appraisal', ko: '작가, 에디션 번호(x/N), 총 발행량, 감정가', zh: '作者、版号 (x/N)、总发行量、鉴定价', ja: '作家、エディション番号(x/N)、総発行量、鑑定価', es: 'Artista, número de edición (x/N), total, valor' },
    'pf.nft.t.3.a': { en: 'Concert Ticket', ko: '공연 티켓', zh: '演出门票', ja: '公演チケット', es: 'Entrada de Concierto' },
    'pf.nft.t.3.c': { en: 'Promoter contract + API integration', ko: '기획사 계약 + API 연동', zh: '主办合约 + API 集成', ja: 'プロモーター契約 + API 連携', es: 'Contrato del promotor + API' },
    'pf.nft.t.3.m': { en: 'Show name, date, venue, seat, tier, price', ko: '공연명, 일시, 장소, 좌석, 등급, 가격', zh: '演出名、日期、场地、座位、等级、价格', ja: '公演名、日時、会場、座席、ランク、価格', es: 'Nombre, fecha, lugar, asiento, categoría, precio' },
    'pf.nft.t.4.a': { en: 'Collectible', ko: '컬렉터블', zh: '收藏品', ja: 'コレクタブル', es: 'Coleccionable' },
    'pf.nft.t.4.c': { en: 'Brand authentication + Custody', ko: '브랜드 인증 + 수탁', zh: '品牌认证 + 托管', ja: 'ブランド認証 + カストディ', es: 'Autenticación de marca + Custodia' },
    'pf.nft.t.4.m': { en: 'Brand, series, serial number, rarity, appraisal', ko: '브랜드, 시리즈, 시리얼번호, 희소 등급, 감정가', zh: '品牌、系列、序列号、稀有度、鉴定价', ja: 'ブランド、シリーズ、シリアル、希少度、鑑定価', es: 'Marca, serie, número de serie, rareza, valor' },

    'pf.nft.tr.1.k': { en: 'English Auction', ko: 'English Auction', zh: 'English Auction', ja: 'English Auction', es: 'English Auction' },
    'pf.nft.tr.1.v': { en: 'Lowest start price → highest bidder wins. Min 5% bid increment. Auto-extend 10 min on bids in last 5 min. Forfeit after 24h non-payment.', ko: '최저가 시작 → 최고 입찰자 낙찰. 최소 입찰 증가율 5%. 마감 5분 전 입찰 시 자동 10분 연장. 낙찰 후 24시간 내 미결제 시 차순위 전환.', zh: '最低价起拍 → 最高出价者中标。最小加价 5%。结束前 5 分钟出价自动延长 10 分钟。中标后 24 小时未付款则顺延。', ja: '最低価格開始 → 最高入札者落札。最小入札増加率 5%。終了 5 分前入札時自動 10 分延長。落札後 24 時間以内未決済時に次順位へ転換。', es: 'Inicia al precio más bajo → gana el mejor postor. Incremento mínimo 5%. Auto-extensión de 10 min con pujas en los últimos 5 min. Si no paga en 24 h, pasa al siguiente.' },
    'pf.nft.tr.2.k': { en: 'Fixed Price', ko: 'Fixed Price', zh: 'Fixed Price', ja: 'Fixed Price', es: 'Fixed Price' },
    'pf.nft.tr.2.v': { en: 'Instant purchase at seller-set price. Auto 50% fee discount when paying with $SOVE. Price changes possible while keeping existing offers.', ko: '출품자 설정 가격으로 즉시 구매. $SOVE 결제 시 수수료 50% 할인 자동 적용. 가격 변경은 기존 오퍼 유지 상태에서 가능.', zh: '按卖家定价即时购买。使用 $SOVE 支付自动享 50% 手续费折扣。可在保留现有报价的情况下改价。', ja: '出品者設定価格で即時購入。$SOVE 決済時に手数料 50% 割引自動適用。価格変更は既存オファーを維持したまま可能。', es: 'Compra inmediata al precio del vendedor. 50% de descuento al pagar con $SOVE. Cambios de precio manteniendo las ofertas existentes.' },
    'pf.nft.tr.3.k': { en: 'Make Offer', ko: 'Make Offer', zh: 'Make Offer', ja: 'Make Offer', es: 'Make Offer' },
    'pf.nft.tr.3.v': { en: 'Buyer proposes desired price. Seller accept/reject/counter. Offer validity: 24h / 48h / 7d.', ko: '구매 희망자가 원하는 가격 제시. 판매자 수락/거절/역제안 가능. 오퍼 유효기간: 24h / 48h / 7일.', zh: '买家提出期望价格。卖家可接受/拒绝/还价。报价有效期：24h / 48h / 7 天。', ja: '購入希望者が希望価格を提示。販売者は承諾/拒否/反対提案が可能。オファー有効期間：24h / 48h / 7日。', es: 'El comprador propone un precio. El vendedor acepta, rechaza o contraoferta. Validez: 24h / 48h / 7 días.' },
    'pf.nft.tr.4.k': { en: 'OTC (Over-the-Counter)', ko: 'OTC (장외거래)', zh: 'OTC（场外交易）', ja: 'OTC（場外取引）', es: 'OTC (Mercado Extrabursátil)' },
    'pf.nft.tr.4.v': { en: '$100K+ bulk trades only. Escrow smart-contract for safe settlement. Mutually agreed price. Enhanced KYC required.', ko: '$100K 이상 대규모 거래 전용. 에스크로 스마트컨트랙트 기반 안전 거래. 양 당사자 합의 가격. KYC 강화 적용.', zh: '仅限 $100K 以上大额交易。托管智能合约保障安全。双方议定价格。需加强 KYC。', ja: '$100K 以上の大規模取引専用。エスクロースマートコントラクトによる安全取引。両当事者合意価格。KYC 強化適用。', es: 'Solo operaciones de $100K+. Contrato escrow para liquidación segura. Precio mutuamente acordado. KYC reforzado.' },

    // PLATFORM — Exchange
    'pf.ex.h.engine': { en: 'Trading Engine Architecture', ko: '거래 엔진 구조', zh: '交易引擎架构', ja: '取引エンジン構造', es: 'Arquitectura del Motor' },
    'pf.ex.h.fee':    { en: 'Fee Structure', ko: '수수료 구조', zh: '手续费结构', ja: '手数料構造', es: 'Estructura de Comisiones' },
    'pf.ex.h.alloc':  { en: 'Auto Fee Distribution', ko: '수수료 배분 (자동)', zh: '手续费分配（自动）', ja: '手数料配分（自動）', es: 'Distribución Automática' },
    'pf.ex.ob':       { en: 'Limit / Market orders · optimal for large size', ko: '지정가/시장가 주문 · 고액 거래 최적', zh: '限价 / 市价订单 · 大额最优', ja: '指値 / 成行注文 · 大口取引最適', es: 'Órdenes Límite / Mercado · óptimo para volumen' },
    'pf.ex.amm':      { en: 'Concentrated Liquidity · 24/7 price discovery', ko: 'Concentrated Liquidity · 24/7 가격 발견', zh: 'Concentrated Liquidity · 24/7 价格发现', ja: 'Concentrated Liquidity · 24/7 価格発見', es: 'Liquidez Concentrada · descubrimiento 24/7' },
    'pf.ex.router':   { en: 'Smart Order Router — auto-match optimal price', ko: 'Smart Order Router — 최적 가격 자동 매칭', zh: 'Smart Order Router — 自动撮合最优价', ja: 'Smart Order Router — 最適価格自動マッチング', es: 'Smart Order Router — empareja al mejor precio' },
    'pf.ex.settle':   { en: 'GIWA Chain Settlement · ≤3s', ko: 'GIWA Chain Settlement · ≤3s 결제 완료', zh: 'GIWA Chain 结算 · ≤3 秒完成', ja: 'GIWA Chain 決済 · ≤3秒完了', es: 'Liquidación GIWA Chain · ≤3s' },
    'pf.ex.ft.type':  { en: 'Trade Type', ko: '거래 유형', zh: '交易类型', ja: '取引タイプ', es: 'Tipo' },
    'pf.ex.ft.base':  { en: 'Base Fee', ko: '기본 수수료', zh: '基础手续费', ja: '基本手数料', es: 'Comisión Base' },
    'pf.ex.ft.sove':  { en: 'With $SOVE', ko: '$SOVE 결제', zh: '$SOVE 支付', ja: '$SOVE 決済', es: 'Con $SOVE' },
    'pf.ex.ft.roy':   { en: 'Creator Royalty', ko: '창작자 로열티', zh: '创作者版税', ja: 'クリエイターロイヤリティ', es: 'Regalía Creador' },
    'pf.ex.ft.1.t':   { en: 'NFT Primary', ko: 'NFT 1차 판매', zh: 'NFT 一级销售', ja: 'NFT 一次販売', es: 'NFT Primaria' },
    'pf.ex.ft.2.t':   { en: 'NFT Secondary', ko: 'NFT 2차 거래', zh: 'NFT 二级交易', ja: 'NFT 二次取引', es: 'NFT Secundaria' },
    'pf.ex.ft.3.t':   { en: 'Ticket Issuance', ko: '공연티켓 발행', zh: '门票发行', ja: 'チケット発行', es: 'Emisión de Entradas' },
    'pf.ex.ft.4.t':   { en: 'Ticket Resale', ko: '공연티켓 재판매', zh: '门票转售', ja: 'チケット転売', es: 'Reventa de Entradas' },
    'pf.ex.ft.5.t':   { en: 'OTC', ko: 'OTC 거래', zh: 'OTC 交易', ja: 'OTC 取引', es: 'OTC' },
    'pf.ex.al.1':     { en: 'Operations · Foundation', ko: '운영 · 재단', zh: '运营 · 基金会', ja: '運営 · 財団', es: 'Operaciones · Fundación' },
    'pf.ex.al.2':     { en: 'Token Auto Burn', ko: '토큰 자동 소각', zh: '代币自动销毁', ja: 'トークン自動焼却', es: 'Quema Automática del Token' },
    'pf.ex.al.3':     { en: 'Staker Reward Pool', ko: '스테이커 보상풀', zh: '质押者奖励池', ja: 'ステーカー報酬プール', es: 'Pool de Recompensas Stakers' },
    'pf.ex.al.4':     { en: 'Creator Auto-Payout', ko: '창작자 자동 지급', zh: '创作者自动支付', ja: 'クリエイター自動支払', es: 'Pago Automático al Creador' },

    // PLATFORM — DeFi
    'pf.defi.h.tiers': { en: 'Staking — 4 Tier', ko: '스테이킹 — 4 Tier', zh: '质押 — 4 Tier', ja: 'ステーキング — 4 Tier', es: 'Staking — 4 Tier' },
    'pf.defi.h.lp':    { en: 'Liquidity Pools (LP)', ko: '유동성 풀 (LP)', zh: '流动性池（LP）', ja: '流動性プール（LP）', es: 'Pools de Liquidez (LP)' },
    'pf.defi.h.nftfi': { en: 'NFT-Fi Collateral Loans', ko: 'NFT-Fi 담보 대출', zh: 'NFT-Fi 抵押贷款', ja: 'NFT-Fi 担保融資', es: 'Préstamos NFT-Fi' },
    'pf.defi.h.ins':   { en: 'Insurance Pool', ko: '보험 풀', zh: '保险池', ja: '保険プール', es: 'Pool de Seguros' },
    'pf.defi.t.1':     { en: '30-day lock · 20% fee discount', ko: '30일 락업 · 수수료 20% 할인', zh: '30 天锁定 · 20% 手续费折扣', ja: '30日ロック · 手数料 20% 割引', es: 'Bloqueo 30 días · 20% descuento' },
    'pf.defi.t.2':     { en: '90 days · 35% discount + early NFT access', ko: '90일 · 수수료 35% + 신규 NFT 조기 접근', zh: '90 天 · 35% 折扣 + 新 NFT 提前访问', ja: '90日 · 35% + 新規 NFT 早期アクセス', es: '90 días · 35% + acceso temprano a NFTs' },
    'pf.defi.t.3':     { en: '180 days · 50% + curation voting', ko: '180일 · 수수료 50% + 큐레이션 투표권', zh: '180 天 · 50% + 策展投票权', ja: '180日 · 50% + キュレーション投票権', es: '180 días · 50% + voto de curaduría' },
    'pf.defi.t.4':     { en: '365 days · all benefits + DAO governance', ko: '365일 · 모든 혜택 + DAO 거버넌스 투표권', zh: '365 天 · 全部权益 + DAO 治理', ja: '365日 · 全特典 + DAO ガバナンス投票権', es: '365 días · todos los beneficios + gobernanza DAO' },
    'pf.defi.lp.1':    { en: 'Stable · main liquidity', ko: 'Stable · 메인 유동성', zh: '稳定 · 主流动性', ja: 'Stable · メイン流動性', es: 'Stable · liquidez principal' },
    'pf.defi.lp.2':    { en: 'Volatile · ETH pair', ko: 'Volatile · ETH 페어', zh: 'Volatile · ETH 配对', ja: 'Volatile · ETH ペア', es: 'Volatile · par ETH' },
    'pf.defi.lp.3':    { en: 'Native · GIWA pair', ko: 'Native · GIWA 페어', zh: 'Native · GIWA 配对', ja: 'Native · GIWA ペア', es: 'Native · par GIWA' },
    'pf.defi.fi.col':  { en: 'Collateral', ko: '담보 자산', zh: '抵押资产', ja: '担保資産', es: 'Colateral' },
    'pf.defi.fi.col.v':{ en: 'SOVE platform ERC-721 NFT', ko: 'SOVE 플랫폼 ERC-721 NFT', zh: 'SOVE 平台 ERC-721 NFT', ja: 'SOVE プラットフォーム ERC-721 NFT', es: 'NFT ERC-721 de SOVE' },
    'pf.defi.fi.borrow':  { en: 'Borrow Asset', ko: '대출 자산', zh: '借出资产', ja: '借入資産', es: 'Activo Prestado' },
    'pf.defi.fi.ltv':  { en: 'LTV (Loan-to-Value)', ko: 'LTV (담보 인정 비율)', zh: 'LTV（贷款价值比）', ja: 'LTV（担保認定比率）', es: 'LTV (Préstamo/Valor)' },
    'pf.defi.fi.ltv.v':{ en: '30 — 50% (based on appraisal)', ko: '30 — 50% (감정가 기준)', zh: '30–50%（按鉴定价）', ja: '30〜50%（鑑定価ベース）', es: '30–50% (sobre la tasación)' },
    'pf.defi.fi.rate': { en: 'Interest Rate', ko: '이자율', zh: '利率', ja: '金利', es: 'Interés' },
    'pf.defi.fi.rate.v':{ en: '8 — 15% APY (varies with LTV)', ko: '연 8 — 15% (LTV에 따라 차등)', zh: '年化 8–15%（按 LTV 调整）', ja: '年 8〜15%（LTV により段階的）', es: '8–15% APY (varía con LTV)' },
    'pf.defi.fi.liq':  { en: 'Liquidation', ko: '청산 기준', zh: '清算条件', ja: '清算基準', es: 'Liquidación' },
    'pf.defi.fi.liq.v':{ en: 'LTV > 70% triggers 48h top-up call', ko: 'LTV 70% 초과 시 48시간 추가 담보 요청', zh: 'LTV 超 70% 触发 48 小时追加担保', ja: 'LTV 70% 超過時に 48 時間追加担保要請', es: 'LTV > 70% activa 48h para añadir colateral' },
    'pf.defi.fi.prepay':{ en: 'Early Repay', ko: '조기 상환', zh: '提前还款', ja: '繰上返済', es: 'Pago Anticipado' },
    'pf.defi.fi.prepay.v':{ en: 'No penalty', ko: '수수료 없음', zh: '无手续费', ja: '手数料なし', es: 'Sin penalización' },
    'pf.defi.ins.p':   { en: 'Deposit $SOVE into the insurance pool to share the risk of damage/loss of physical assets and earn <span class="hl">6–10% APY</span> from insurance premiums. Sovereign-tier stakers join the claims committee to decide payouts.', ko: '$SOVE를 보험 풀에 예치하면 실물 자산 훼손/분실 리스크 대비 보험금 지급에 기여하며, 대가로 보험료 수익의 일부(<span class="hl">6 — 10% APY</span>)를 분배받습니다. Sovereign 티어 스테이커는 보험 심사 위원회에 참여하여 보험금 지급 여부를 결정합니다.', zh: '将 $SOVE 存入保险池可分担实物资产损坏/丢失风险并赚取保险费收益（<span class="hl">6–10% APY</span>）。Sovereign 等级质押者加入理赔委员会决定赔付。', ja: '$SOVE を保険プールに預け、実物資産の損傷/紛失リスクを分担し、保険料収益（<span class="hl">6〜10% APY</span>）を受け取ります。Sovereign ティアのステーカーは保険審査委員会で支払いを判断します。', es: 'Deposita $SOVE en el pool de seguros para compartir riesgos de daño/pérdida y ganar <span class="hl">6–10% APY</span>. Los stakers Sovereign integran el comité de siniestros.' },

    // PLATFORM — Ticket
    'pf.tk.h.process':  { en: 'Ticket Issuance Process', ko: '티켓 발행 프로세스', zh: '门票发行流程', ja: 'チケット発行プロセス', es: 'Proceso de Emisión' },
    'pf.tk.h.anti':     { en: 'Anti-Scalping 5-Layer Mechanism', ko: '암표 방지 5단 메커니즘', zh: '防黄牛 5 层机制', ja: 'チケット転売防止 5 層メカニズム', es: 'Mecanismo Anti-Reventa de 5 Capas' },
    'pf.tk.s.1.n':      { en: 'Partnership', ko: '파트너십 체결', zh: '签订合作', ja: 'パートナーシップ締結', es: 'Acuerdo' },
    'pf.tk.s.1.d':      { en: 'Contract with concert promoter and SOVE', ko: '공연 기획사와 SOVE 계약', zh: '与演出主办方与 SOVE 签约', ja: '公演プロモーターと SOVE 契約', es: 'Contrato entre promotor y SOVE' },
    'pf.tk.s.2.n':      { en: 'Show Info Registration', ko: '공연 정보 등록', zh: '演出信息登记', ja: '公演情報登録', es: 'Registro de Información' },
    'pf.tk.s.2.d':      { en: 'Date, venue, seat map, tiers, price', ko: '일시, 장소, 좌석 배치, 등급, 가격', zh: '日期、场地、座位、等级、价格', ja: '日時、会場、座席、ランク、価格', es: 'Fecha, lugar, asientos, categorías, precio' },
    'pf.tk.s.3.n':      { en: 'NFT Ticket Mint', ko: 'NFT 티켓 발행', zh: '铸造 NFT 门票', ja: 'NFT チケット発行', es: 'Acuñación de Entrada NFT' },
    'pf.tk.s.3.d':      { en: 'ERC-1155 with per-seat metadata', ko: 'ERC-1155 좌석별 메타데이터', zh: 'ERC-1155 含座位元数据', ja: 'ERC-1155 座席別メタデータ', es: 'ERC-1155 con metadatos por asiento' },
    'pf.tk.s.4.n':      { en: 'Primary Sale', ko: '1차 판매', zh: '一级销售', ja: '一次販売', es: 'Venta Primaria' },
    'pf.tk.s.4.d':      { en: 'Fixed price · GIWA ID binding', ko: '고정가 · GIWA ID 바인딩', zh: '固定价 · 绑定 GIWA ID', ja: '固定価格 · GIWA ID バインド', es: 'Precio fijo · vinculado a GIWA ID' },
    'pf.tk.s.5.n':      { en: 'Secondary Trading', ko: '2차 거래', zh: '二级交易', ja: '二次取引', es: 'Reventa' },
    'pf.tk.s.5.d':      { en: 'Resale cap may be set', ko: '가격 상한선 설정 가능', zh: '可设置价格上限', ja: '価格上限を設定可能', es: 'Se puede fijar tope de precio' },
    'pf.tk.s.6.n':      { en: 'QR / NFC Check-in', ko: 'QR / NFC 체크인', zh: 'QR / NFC 入场', ja: 'QR / NFC チェックイン', es: 'Check-in QR / NFC' },
    'pf.tk.s.6.d':      { en: 'Identity verification on event day', ko: '공연 당일 본인 확인', zh: '演出当日身份核验', ja: '公演当日本人確認', es: 'Verificación de identidad el día del evento' },
    'pf.tk.s.7.n':      { en: 'Commemorative NFT', ko: '기념 NFT 전환', zh: '转为纪念 NFT', ja: '記念 NFT 変換', es: 'NFT Conmemorativo' },
    'pf.tk.s.7.d':      { en: 'Auto-conversion after the event', ko: '공연 종료 후 자동 컬렉터블 발행', zh: '演出后自动发行收藏品', ja: '公演終了後に自動コレクタブル発行', es: 'Conversión automática tras el evento' },
    'pf.tk.a.1.h':      { en: 'Price Cap', ko: '가격 상한선', zh: '价格上限', ja: '価格上限', es: 'Tope de Precio' },
    'pf.tk.a.1.d':      { en: 'Promoter sets resale max (e.g., 150% of original). Contracts reject trades above the cap.', ko: '기획사가 설정하는 재판매 최고가 (예: 원가의 150%). 상한 초과 거래는 컨트랙트에서 reject.', zh: '主办方设定转售上限（如原价 150%）。超出上限的交易由合约拒绝。', ja: 'プロモーターが設定する転売上限（例：原価の 150%）。上限超過取引はコントラクトで拒否。', es: 'El promotor fija el tope (p. ej., 150% del precio). El contrato rechaza ventas por encima.' },
    'pf.tk.a.2.h':      { en: 'GIWA ID Binding', ko: 'GIWA ID 바인딩', zh: '绑定 GIWA ID', ja: 'GIWA ID バインド', es: 'Vinculación a GIWA ID' },
    'pf.tk.a.2.d':      { en: 'SBT linked at purchase, enforces 1-person N-ticket limit. Both transferor and receiver must pass KYC.', ko: '티켓 구매 시 SBT 연결 — 1인 N매 제한 강제. 양도 시 양도자/양수자 모두 KYC 통과 필수.', zh: '购买时连接 SBT，强制单人 N 张限购。转让时双方须通过 KYC。', ja: '購入時 SBT 連結 — 1人 N 枚制限強制。譲渡時に譲渡者/譲受者ともに KYC 必須。', es: 'SBT vinculado al comprar, fuerza límite por persona. Ambas partes deben pasar KYC.' },
    'pf.tk.a.3.h':      { en: 'Transfer Lock', ko: '전송 제한', zh: '转让限制', ja: '送付制限', es: 'Bloqueo de Transferencia' },
    'pf.tk.a.3.d':      { en: 'Transfers/resales blocked starting 48h before event. Enforced at contract level — cannot be bypassed.', ko: '공연 48시간 전부터 전송/재판매 차단. 컨트랙트 레벨에서 강제되어 우회 불가.', zh: '演出前 48 小时起停止转让/转售。合约级强制，无法绕过。', ja: '公演 48 時間前から送付/転売を遮断。コントラクトレベルで強制され回避不可。', es: 'Transferencias/reventas bloqueadas desde 48h antes del evento. Aplicado por contrato — sin bypass.' },
    'pf.tk.a.4.h':      { en: 'Check-in Identity Verification', ko: '체크인 본인 확인', zh: '入场身份核验', ja: 'チェックイン本人確認', es: 'Verificación en Check-in' },
    'pf.tk.a.4.d':      { en: 'QR scan + GIWA ID match check. Both must match for entry.', ko: 'QR 코드 스캔 + GIWA ID 일치 검증. 두 가지가 동시에 일치해야 입장.', zh: '扫码 + GIWA ID 匹配验证。两者一致方可入场。', ja: 'QR スキャン + GIWA ID 一致検証。両方一致で入場。', es: 'Escaneo de QR + coincidencia con GIWA ID. Ambos deben coincidir.' },
    'pf.tk.a.5.h':      { en: 'Auto Royalty', ko: '자동 로열티', zh: '自动版税', ja: '自動ロイヤリティ', es: 'Regalía Automática' },
    'pf.tk.a.5.d':      { en: '2% auto-distributed to the artist on every resale. Scalping behavior is converted into artist revenue.', ko: '재판매마다 아티스트에게 2% 자동 분배. 암표 행위가 아티스트 수익으로 환원되는 구조.', zh: '每次转售自动向艺人分 2%。黄牛行为转化为艺人收入。', ja: '転売のたびにアーティストへ 2% を自動分配。転売行為がアーティスト収益に還元される構造。', es: '2% se distribuye al artista en cada reventa. La reventa se convierte en ingreso para el artista.' },

    // PLATFORM — Admin tabs + portal
    'pf.admin.h.tabs':  { en: '8 Operational Tabs', ko: '8개 운영 탭', zh: '8 个运营标签', ja: '8つの運営タブ', es: '8 Pestañas Operativas' },
    'pf.admin.tab.1':   { en: 'Realtime KPI dashboard · volume · TVL · users', ko: '실시간 KPI 대시보드 · 거래량 · TVL · 사용자', zh: '实时 KPI 看板 · 交易量 · TVL · 用户', ja: 'リアルタイム KPI ダッシュボード · 取引量 · TVL · ユーザー', es: 'Dashboard KPI en tiempo real · volumen · TVL · usuarios' },
    'pf.admin.tab.2':   { en: 'Asset onboarding review · appraisal · custody · dojang monitoring', ko: '자산 등록 심사 · 감정 현황 · 수탁 상태 · 도장 모니터링', zh: '资产入驻审核 · 鉴定 · 托管 · 印章监控', ja: '資産登録審査 · 鑑定状況 · カストディ状態 · 印章モニタリング', es: 'Onboarding · tasación · custodia · monitoreo Dojang' },
    'pf.admin.tab.3':   { en: 'KYC · user tiers · blacklist · GIWA ID integration', ko: 'KYC 현황 · 사용자 티어 · 블랙리스트 · GIWA ID 연동', zh: 'KYC · 用户等级 · 黑名单 · GIWA ID 集成', ja: 'KYC · ユーザーティア · ブラックリスト · GIWA ID 連携', es: 'KYC · niveles · lista negra · integración GIWA ID' },
    'pf.admin.tab.4':   { en: 'Realtime monitoring · anomaly detection · fee aggregation', ko: '실시간 거래 모니터링 · 이상 거래 탐지 · 수수료 집계', zh: '实时监控 · 异常检测 · 手续费汇总', ja: 'リアルタイム監視 · 異常取引検知 · 手数料集計', es: 'Monitoreo en tiempo real · detección de anomalías · agregación de comisiones' },
    'pf.admin.tab.5':   { en: '$SOVE supply · mint/burn · collateral ratio · fee revenue', ko: '$SOVE 유통량 · Mint/Burn 현황 · 담보율 · 수수료 수익', zh: '$SOVE 流通量 · Mint/Burn · 担保率 · 手续费收入', ja: '$SOVE 流通量 · Mint/Burn · 担保率 · 手数料収益', es: 'Oferta $SOVE · mint/burn · ratio · ingresos por comisión' },
    'pf.admin.tab.6':   { en: 'Proposal management · vote status · DAO transition', ko: '제안 관리 · 투표 현황 · DAO 전환 진행률', zh: '提案管理 · 投票情况 · DAO 转型进度', ja: '提案管理 · 投票状況 · DAO 移行進捗', es: 'Gestión de propuestas · estado de votación · transición a DAO' },
    'pf.admin.tab.7':   { en: 'Multi-Sig activity log · timelock status · security score', ko: 'Multi-Sig 활동 로그 · Timelock 현황 · 보안 점수', zh: 'Multi-Sig 活动日志 · Timelock · 安全评分', ja: 'Multi-Sig 活動ログ · Timelock 状態 · セキュリティスコア', es: 'Registro Multi-Sig · estado Timelock · puntuación de seguridad' },
    'pf.admin.tab.8':   { en: 'Auto-generated reports · Dojang issuance history', ko: '일간/주간/월간/분기 보고서 자동 생성 · 도장 발급 이력', zh: '日/周/月/季报告自动生成 · 印章发行历史', ja: '日次/週次/月次/四半期レポート自動生成 · 印章発行履歴', es: 'Reportes automáticos · historial de emisión Dojang' },
    'pf.admin.h.portal':{ en: 'Appraiser Portal', ko: '감정기관 포털', zh: '鉴定机构门户', ja: '鑑定機関ポータル', es: 'Portal del Tasador' },
    'pf.admin.p.1.k':   { en: 'Appraisal Request Intake', ko: '감정 요청 수신', zh: '鉴定请求接收', ja: '鑑定リクエスト受信', es: 'Recepción de Solicitud' },
    'pf.admin.p.1.v':   { en: 'Auto-assigned at asset registration', ko: '자산 등록 시 자동 배정', zh: '资产注册时自动分派', ja: '資産登録時に自動割当', es: 'Asignación automática al registrar el activo' },
    'pf.admin.p.2.k':   { en: 'Certificate Format', ko: '감정서 양식', zh: '鉴定书格式', ja: '鑑定書フォーマット', es: 'Formato del Certificado' },
    'pf.admin.p.2.v':   { en: 'Standardized USD-based · image attachable', ko: '표준화된 USD 기준 · 이미지 첨부', zh: '标准化 USD · 可附图', ja: '標準化 USD ベース · 画像添付可', es: 'Estandarizado en USD · admite imagen' },
    'pf.admin.p.3.k':   { en: 'Appraisal Recording', ko: '감정가 등록', zh: '鉴定价记录', ja: '鑑定価登録', es: 'Registro de Tasación' },
    'pf.admin.p.3.v':   { en: 'On-chain record + Appraisal Stamp issuance', ko: '온체인 기록 + Appraisal Stamp 발급', zh: '链上记录 + 发行 Appraisal Stamp', ja: 'オンチェーン記録 + Appraisal Stamp 発行', es: 'Registro on-chain + emisión de Appraisal Stamp' },
    'pf.admin.p.4.k':   { en: '$SOVE Mint Trigger', ko: '$SOVE Mint 트리거', zh: '$SOVE Mint 触发', ja: '$SOVE Mint トリガー', es: 'Trigger de $SOVE Mint' },
    'pf.admin.p.4.v':   { en: 'Auto-mint', ko: '자동 발행', zh: '自动发行', ja: '自動発行', es: 'Acuñación automática' },
    'pf.admin.p.5.k':   { en: 'Re-Appraisal Cycle', ko: '재감정 주기', zh: '复鉴周期', ja: '再鑑定サイクル', es: 'Ciclo de Re-tasación' },
    'pf.admin.p.5.v':   { en: 'Annual + special re-appraisal requests', ko: '연 1회 정기 + 특별 재감정 요청', zh: '每年一次 + 特别复鉴', ja: '年 1 回定期 + 特別再鑑定要求', es: 'Anual + solicitudes especiales' },

    // ============ DOJANG — flow off-chain ============
    'dj.off.1.h': { en: 'Appraiser', ko: '감정기관', zh: '鉴定机构', ja: '鑑定機関', es: 'Tasador' },
    'dj.off.1.d': { en: 'USD-based appraisal and certificate issuance', ko: 'USD 기준 감정가 산정 및 감정서 발급', zh: '按 USD 进行鉴定与证书发行', ja: 'USD 基準で鑑定価値算定および鑑定書発行', es: 'Tasación en USD y emisión de certificado' },
    'dj.off.2.h': { en: 'Custodian', ko: '수탁기관', zh: '托管机构', ja: 'カストディアン', es: 'Custodio' },
    'dj.off.2.d': { en: 'Physical storage check and condition verification', ko: '실물 보관 확인 및 보관 조건 검증', zh: '实物保管确认与条件验证', ja: '実物保管確認および保管条件検証', es: 'Verificación de almacenamiento y condiciones' },
    'dj.off.3.h': { en: 'Insurer', ko: '보험사', zh: '保险公司', ja: '保険会社', es: 'Aseguradora' },
    'dj.off.3.d': { en: 'Issues policy at 110% of appraised value', ko: '감정가 110% 보험 증서 발행', zh: '签发 110% 鉴定价的保单', ja: '鑑定価 110% の保険証券発行', es: 'Emite póliza por el 110% del valor tasado' },
    'dj.off.4.h': { en: 'Upbit KYC', ko: 'Upbit KYC', zh: 'Upbit KYC', ja: 'Upbit KYC', es: 'Upbit KYC' },
    'dj.off.4.d': { en: 'Identity check and GIWA ID issuance', ko: '신원 확인 및 GIWA ID 인증', zh: '身份核验与 GIWA ID 认证', ja: '本人確認および GIWA ID 認証', es: 'Verificación de identidad y GIWA ID' },
    'dj.on.1.h':  { en: 'Appraisal Stamp', ko: '감정 도장', zh: '鉴定印章', ja: '鑑定印章', es: 'Sello de Tasación' },
    'dj.on.1.d':  { en: 'Appraisal recorded on-chain · triggers $SOVE Mint', ko: '감정가가 온체인에 영구 기록 · $SOVE Mint 트리거', zh: '鉴定价永久上链 · 触发 $SOVE Mint', ja: '鑑定価をオンチェーンに永久記録 · $SOVE Mint トリガー', es: 'Tasación registrada on-chain · activa $SOVE Mint' },
    'dj.on.2.h':  { en: 'Custody Stamp', ko: '수탁 도장', zh: '托管印章', ja: 'カストディ印章', es: 'Sello de Custodia' },
    'dj.on.2.d':  { en: 'Physical-to-NFT 1:1 attestation', ko: '실물-NFT 1:1 매칭 어테스테이션', zh: '实物-NFT 1:1 认证', ja: '実物-NFT 1:1 マッチングアテステーション', es: 'Atestación 1:1 entre físico y NFT' },
    'dj.on.3.h':  { en: 'Insurance Stamp', ko: '보험 도장', zh: '保险印章', ja: '保険印章', es: 'Sello de Seguro' },
    'dj.on.3.d':  { en: 'Coverage limit and validity verification', ko: '커버리지 한도와 유효기간 검증', zh: '验证保额与有效期', ja: 'カバレッジ上限と有効期間検証', es: 'Verificación de cobertura y vigencia' },
    'dj.on.4.h':  { en: 'Identity Stamp', ko: '신원 도장', zh: '身份印章', ja: '身元印章', es: 'Sello de Identidad' },
    'dj.on.4.d':  { en: 'Verified Address SBT · auto-pass KYC', ko: 'Verified Address SBT · KYC 자동 통과', zh: 'Verified Address SBT · 自动通过 KYC', ja: 'Verified Address SBT · KYC 自動通過', es: 'Verified Address SBT · KYC automático' },
    'dj.off':     { en: 'Off-Chain', ko: 'Off-Chain', zh: 'Off-Chain', ja: 'Off-Chain', es: 'Off-Chain' },
    'dj.on':      { en: 'On-Chain', ko: 'On-Chain', zh: 'On-Chain', ja: 'On-Chain', es: 'On-Chain' },
    'dj.cap':     { en: 'Dojang Attestation Issued', ko: '도장 어테스테이션 발급', zh: '印章认证发行', ja: '印章アテステーション発行', es: 'Atestación Dojang emitida' },

    // DOJANG — 6 stamp types
    'dj.s.1.n': { en: 'Appraisal Stamp', ko: 'Appraisal Stamp', zh: 'Appraisal Stamp', ja: 'Appraisal Stamp', es: 'Appraisal Stamp' },
    'dj.s.1.i': { en: 'Issuer · Certified Appraiser', ko: '발급자 · 인증 감정기관', zh: '发行方 · 认证鉴定机构', ja: '発行者 · 認証鑑定機関', es: 'Emisor · Tasador Certificado' },
    'dj.s.1.d': { en: 'Records appraised value (USD), date, appraiser signature, and methodology permanently on-chain. Direct trigger for $SOVE Mint.', ko: '감정가(USD), 감정일, 감정기관 서명, 감정 방법론을 온체인에 영구 기록. $SOVE Mint의 직접 트리거가 됩니다.', zh: '将鉴定价（USD）、鉴定日期、机构签名与方法论永久上链。直接触发 $SOVE Mint。', ja: '鑑定価（USD）、鑑定日、鑑定機関の署名、方法論をオンチェーンに永久記録。$SOVE Mint の直接トリガー。', es: 'Registra valor (USD), fecha, firma del tasador y metodología on-chain. Trigger directo de $SOVE Mint.' },
    'dj.s.2.n': { en: 'Custody Stamp', ko: 'Custody Stamp', zh: 'Custody Stamp', ja: 'Custody Stamp', es: 'Custody Stamp' },
    'dj.s.2.i': { en: 'Issuer · Certified Custodian', ko: '발급자 · 인증 수탁기관', zh: '发行方 · 认证托管机构', ja: '発行者 · 認証カストディアン', es: 'Emisor · Custodio Certificado' },
    'dj.s.2.d': { en: 'Seals storage location, conditions (temp/humidity), intake time, and 1:1 physical-NFT matching. Renewed after monthly audits.', ko: '보관 위치, 보관 조건(온/습도), 입고 시점, 실물-NFT 1:1 매칭을 봉인. 월간 실사 후 갱신됩니다.', zh: '封存保管位置、条件（温/湿度）、入库时间、实物-NFT 1:1 匹配。每月实地审查后续签。', ja: '保管位置、保管条件（温/湿度）、入庫時刻、実物-NFT 1:1 マッチングを封印。月次実査後に更新。', es: 'Sella ubicación, condiciones, tiempo de ingreso y emparejamiento 1:1. Renovado tras auditoría mensual.' },
    'dj.s.3.n': { en: 'Insurance Stamp', ko: 'Insurance Stamp', zh: 'Insurance Stamp', ja: 'Insurance Stamp', es: 'Insurance Stamp' },
    'dj.s.3.i': { en: 'Issuer · Insurer', ko: '발급자 · 보험사', zh: '发行方 · 保险公司', ja: '発行者 · 保険会社', es: 'Emisor · Aseguradora' },
    'dj.s.3.d': { en: 'Policy number, coverage (110% of appraisal), validity, insurer signature. Auto-renewal notice before expiry.', ko: '보험 증서 번호, 커버리지(감정가 110%), 유효기간, 보험사 서명. 만료 전 자동 갱신 알림.', zh: '保单号、保额（鉴定价 110%）、有效期、保险公司签名。到期前自动续期提醒。', ja: '保険証券番号、カバレッジ（鑑定価 110%）、有効期間、保険会社の署名。期限前に自動更新通知。', es: 'Número de póliza, cobertura (110%), vigencia, firma del asegurador. Aviso de renovación antes del vencimiento.' },
    'dj.s.4.n': { en: 'Identity Stamp', ko: 'Identity Stamp', zh: 'Identity Stamp', ja: 'Identity Stamp', es: 'Identity Stamp' },
    'dj.s.4.i': { en: 'Issuer · Upbit Korea', ko: '발급자 · Upbit Korea', zh: '发行方 · Upbit Korea', ja: '発行者 · Upbit Korea', es: 'Emisor · Upbit Korea' },
    'dj.s.4.d': { en: 'GIWA Verified Address — KYC-passed SBT. One issuance grants automatic KYC across all dApps.', ko: 'GIWA Verified Address — KYC 완료 SBT. 1회 발급으로 모든 dApp에서 KYC 자동 통과.', zh: 'GIWA Verified Address — KYC 通过的 SBT。一次发行后所有 dApp 自动通过 KYC。', ja: 'GIWA Verified Address — KYC 完了 SBT。1 回発行ですべての dApp で KYC 自動通過。', es: 'GIWA Verified Address — SBT con KYC. Una sola emisión da KYC automático en todas las dApps.' },
    'dj.s.5.n': { en: 'Redemption Stamp', ko: 'Redemption Stamp', zh: 'Redemption Stamp', ja: 'Redemption Stamp', es: 'Redemption Stamp' },
    'dj.s.5.i': { en: 'Issuer · Custodian', ko: '발급자 · 수탁기관', zh: '发行方 · 托管机构', ja: '発行者 · カストディアン', es: 'Emisor · Custodio' },
    'dj.s.5.d': { en: 'Issued on physical redemption claim. Seals release confirmation, shipping info, and delivery completion — basis for permanent NFT burn.', ko: '실물 반환 청구 시 발급. 출고 확인, 배송 정보, 인도 완료를 봉인. NFT 영구 소각의 근거.', zh: '在赎回请求时发行。封存出库确认、运输信息与交付完成 —— 作为 NFT 永久销毁的依据。', ja: '実物返還請求時に発行。出庫確認、配送情報、引渡完了を封印 — NFT 永久焼却の根拠。', es: 'Emitido al solicitar redención. Sella confirmación de salida, envío y entrega — base para quema permanente del NFT.' },
    'dj.s.6.n': { en: 'Re-Appraisal Stamp', ko: 'Re-Appraisal Stamp', zh: 'Re-Appraisal Stamp', ja: 'Re-Appraisal Stamp', es: 'Re-Appraisal Stamp' },
    'dj.s.6.i': { en: 'Issuer · Appraisal Committee', ko: '발급자 · 감정 위원회', zh: '发行方 · 鉴定委员会', ja: '発行者 · 鑑定委員会', es: 'Emisor · Comité de Tasación' },
    'dj.s.6.d': { en: 'Annual scheduled re-appraisal. Adjusts market value + recalculates collateral ratio. Special re-appraisal upon holder request.', ko: '연 1회 정기 재감정. 시장가 보정 + 담보율 재계산. 특별 재감정은 보유자 요청으로 진행.', zh: '每年一次定期复鉴。修正市场价 + 重算担保率。持有者请求可特别复鉴。', ja: '年 1 回定期再鑑定。市場価補正 + 担保率再計算。特別再鑑定は保有者要請で実施。', es: 'Re-tasación anual. Ajusta valor de mercado + recalcula ratio. Especial por solicitud del tenedor.' },

    // DOJANG — attestation step-list + cycle steps
    'dj.att.s.1.n': { en: 'Schema Validation', ko: '스키마 검증', zh: '模式验证', ja: 'スキーマ検証', es: 'Validación del Esquema' },
    'dj.att.s.1.d': { en: 'Check that schemaUID matches a registered Dojang type', ko: 'schemaUID가 등록된 도장 종류와 일치하는지 확인', zh: '校验 schemaUID 是否与已注册印章类型匹配', ja: 'schemaUID が登録された印章種類と一致するか確認', es: 'Verifica que schemaUID coincida con un tipo Dojang registrado' },
    'dj.att.s.2.n': { en: 'Issuer Authority', ko: '발급자 권한', zh: '发行方权限', ja: '発行者権限', es: 'Autoridad del Emisor' },
    'dj.att.s.2.d': { en: 'Confirm the issuer has authority for that Dojang type', ko: 'issuer가 해당 도장에 대한 발급 권한 보유 확인', zh: '确认发行方拥有该印章的发行权限', ja: 'issuer が該当印章の発行権限を保有しているか確認', es: 'Confirma que el emisor tiene autoridad para ese Dojang' },
    'dj.att.s.3.n': { en: 'Validity Period', ko: '유효기간', zh: '有效期', ja: '有効期間', es: 'Período de Validez' },
    'dj.att.s.3.d': { en: 'expiresAt > block.timestamp', ko: 'expiresAt > block.timestamp', zh: 'expiresAt > block.timestamp', ja: 'expiresAt > block.timestamp', es: 'expiresAt > block.timestamp' },
    'dj.att.s.4.n': { en: 'Signature Verification', ko: '서명 검증', zh: '签名验证', ja: '署名検証', es: 'Verificación de Firma' },
    'dj.att.s.4.d': { en: 'Verify signature was signed by issuer\'s private key via ecrecover', ko: 'signature가 issuer의 비공개키로 서명되었는지 ecrecover로 확인', zh: '通过 ecrecover 验证 signature 由 issuer 的私钥签名', ja: 'signature が issuer の秘密鍵で署名されたか ecrecover で確認', es: 'Verifica con ecrecover que la firma proviene de la clave del emisor' },
    'dj.att.s.5.n': { en: 'Data Hash', ko: '데이터 해시', zh: '数据哈希', ja: 'データハッシュ', es: 'Hash de Datos' },
    'dj.att.s.5.d': { en: 'Confirm SHA-256 of metadataURI = dataHash → valid', ko: 'metadataURI 내용 SHA-256 = dataHash 일치 확인 → 유효', zh: '确认 metadataURI 内容的 SHA-256 = dataHash → 有效', ja: 'metadataURI 内容の SHA-256 = dataHash 一致確認 → 有効', es: 'Confirma SHA-256 de metadataURI = dataHash → válido' },
    'dj.att.h':     { en: 'Verification Logic', ko: '검증 로직', zh: '验证逻辑', ja: '検証ロジック', es: 'Lógica de Verificación' },

    'dj.cyc.1.n': { en: 'Physical Intake', ko: '실물 입고', zh: '实物入库', ja: '実物入庫', es: 'Ingreso Físico' },
    'dj.cyc.1.d': { en: 'Appraisal → Custody → Insurance — all three off-chain checks must complete.', ko: '감정 → 수탁 → 보험 — 오프체인에서 세 가지 검수가 모두 완료되어야 합니다.', zh: '鉴定 → 托管 → 保险 —— 链下三项检验必须全部完成。', ja: '鑑定 → カストディ → 保険 —— オフチェーンの3つの検査がすべて完了する必要があります。', es: 'Tasación → Custodia → Seguro — los tres chequeos off-chain deben completarse.' },
    'dj.cyc.2.n': { en: 'Dojang Issuance', ko: '도장 발급', zh: '印章发行', ja: '印章発行', es: 'Emisión Dojang' },
    'dj.cyc.2.d': { en: 'Three stamps (Appraisal · Custody · Insurance) are attested on GIWA Chain.', ko: '3종 도장(Appraisal·Custody·Insurance)이 GIWA Chain에 어테스테이션됩니다.', zh: '三种印章（Appraisal·Custody·Insurance）在 GIWA Chain 上认证。', ja: '3種の印章（Appraisal·Custody·Insurance）が GIWA Chain にアテステーションされます。', es: 'Los tres sellos (Appraisal · Custody · Insurance) se atestan en GIWA Chain.' },
    'dj.cyc.3.n': { en: 'NFT Mint', ko: 'NFT 발행', zh: 'NFT 铸造', ja: 'NFT 発行', es: 'Acuñación NFT' },
    'dj.cyc.3.d': { en: 'When DojangVerifier validates all three stamps, SOVEMinter mints the NFT and $SOVE simultaneously.', ko: 'DojangVerifier가 3종 도장을 검증하면 SOVEMinter가 NFT 발행과 $SOVE Mint를 동시에 실행합니다.', zh: 'DojangVerifier 验证三种印章后，SOVEMinter 同时铸造 NFT 与 $SOVE。', ja: 'DojangVerifier が3種印章を検証すると、SOVEMinter が NFT 発行と $SOVE Mint を同時に実行。', es: 'Cuando DojangVerifier valida los tres sellos, SOVEMinter acuña NFT y $SOVE a la vez.' },
    'dj.cyc.4.n': { en: 'Redemption Stamp', ko: '반환 도장', zh: '赎回印章', ja: '返還印章', es: 'Sello de Redención' },
    'dj.cyc.4.d': { en: 'When a holder requests physical redemption, a Redemption Stamp is issued and the NFT is permanently burned.', ko: '보유자가 실물 반환을 청구하면 Redemption Stamp가 발급되고 NFT는 영구 소각됩니다.', zh: '持有者请求实物赎回时签发赎回印章，NFT 永久销毁。', ja: '保有者が実物返還を請求すると Redemption Stamp が発行され、NFT は永久焼却されます。', es: 'Cuando el tenedor pide redención física, se emite el Redemption Stamp y se quema el NFT.' },

    // ============ TOKEN — cards/circulation/uc/staking/distribution/gov ============
    'tk.eco.mint.h':  { en: 'Mint', ko: 'Mint', zh: 'Mint', ja: 'Mint', es: 'Mint' },
    'tk.eco.mint.l':  { en: 'Issued at appraised value when a real asset is registered.', ko: '실물 자산 등록 시 감정가만큼 발행됩니다.', zh: '实物资产注册时按鉴定价值发行。', ja: '実物資産登録時に鑑定価値分を発行します。', es: 'Se emite al valor tasado cuando se registra un activo real.' },
    'tk.eco.mint.f':  { en: 'Mint = Appraised(USD) ÷ Ref Price', ko: 'Mint = 감정가(USD) ÷ Ref Price', zh: 'Mint = 鉴定价(USD) ÷ Ref Price', ja: 'Mint = 鑑定価(USD) ÷ Ref Price', es: 'Mint = Tasación(USD) ÷ Ref Price' },
    'tk.eco.mint.m':  { en: 'Only allowed when collateral ratio ≥ 150%. DojangVerifier checks, then SOVEMinter executes.', ko: '담보율 ≥ 150% 시에만 허용 · DojangVerifier 검증 후 SOVEMinter가 실행', zh: '仅在担保率 ≥ 150% 时允许 · 经 DojangVerifier 验证后由 SOVEMinter 执行', ja: '担保率 ≥ 150% の時のみ許可 · DojangVerifier 検証後 SOVEMinter が実行', es: 'Solo permitido con ratio ≥ 150%. Tras verificación de DojangVerifier, SOVEMinter ejecuta.' },
    'tk.eco.burn.h':  { en: 'Burn', ko: 'Burn', zh: 'Burn', ja: 'Burn', es: 'Burn' },
    'tk.eco.burn.l':  { en: 'Auto-burned on physical redemption and from trading fees.', ko: '실물 반환과 거래 수수료에서 자동 소각됩니다.', zh: '实物赎回与交易手续费自动销毁。', ja: '実物返還と取引手数料から自動焼却されます。', es: 'Quemado automáticamente en redenciones y comisiones.' },
    'tk.eco.burn.f':  { en: 'On redemption: full corresponding mint burned', ko: '반환 시 대응 Mint분 전량 소각', zh: '赎回时对应 Mint 量全部销毁', ja: '返還時に対応 Mint 分を全量焼却', es: 'En redención: quema completa del mint correspondiente' },
    'tk.eco.burn.m':  { en: 'Plus 30% of trading fees auto-burned · deflationary mechanism', ko: '거래 수수료의 30%가 추가로 자동 소각 · 디플레이션 메커니즘', zh: '另自动销毁交易手续费的 30% · 通缩机制', ja: '取引手数料の 30% が追加で自動焼却 · デフレメカニズム', es: 'Además, el 30% de las comisiones se quema · mecanismo deflacionario' },
    'tk.eco.gov.h':   { en: 'Governance', ko: 'Governance', zh: 'Governance', ja: 'Governance', es: 'Governance' },
    'tk.eco.gov.l':   { en: 'Voting power proportional to holdings.', ko: '보유량 기반 의결권 행사', zh: '基于持有量的投票权', ja: '保有量ベースで議決権を行使', es: 'Poder de voto proporcional a la tenencia.' },
    'tk.eco.gov.f':   { en: 'Sovereign tier · DAO voting rights granted', ko: 'Sovereign 티어 · DAO 투표권 부여', zh: 'Sovereign 等级 · DAO 投票权', ja: 'Sovereign ティア · DAO 投票権付与', es: 'Nivel Sovereign · derecho de voto DAO' },
    'tk.eco.gov.m':   { en: 'Full DAO transition by Phase 4 · every parameter change requires governance', ko: 'Phase 4까지 완전 DAO 전환 · 모든 파라미터 변경에 거버넌스 필요', zh: 'Phase 4 完成 DAO 转型 · 任何参数变更均需治理', ja: 'Phase 4 までに完全 DAO 移行 · すべてのパラメータ変更にガバナンス必要', es: 'Transición completa a DAO en Fase 4 · cada cambio requiere gobernanza' },

    'tk.eco.h.ex':    { en: 'Mint / Burn Examples', ko: 'Mint / Burn 예시', zh: 'Mint / Burn 示例', ja: 'Mint / Burn 例', es: 'Ejemplos Mint / Burn' },
    'tk.eco.t.event': { en: 'Event', ko: '이벤트', zh: '事件', ja: 'イベント', es: 'Evento' },
    'tk.eco.t.cond':  { en: 'Condition', ko: '조건', zh: '条件', ja: '条件', es: 'Condición' },
    'tk.eco.t.calc':  { en: 'Calculation', ko: '계산', zh: '计算', ja: '計算', es: 'Cálculo' },
    'tk.eco.t.res':   { en: 'Result', ko: '결과', zh: '结果', ja: '結果', es: 'Resultado' },
    'tk.eco.t.1.e':   { en: 'NFT Issuance', ko: 'NFT 발행', zh: 'NFT 发行', ja: 'NFT 発行', es: 'Emisión de NFT' },
    'tk.eco.t.1.c':   { en: 'Appraisal $500K, Ref $0.10', ko: '감정가 $500K, Ref Price $0.10', zh: '鉴定价 $500K, Ref $0.10', ja: '鑑定価 $500K, Ref $0.10', es: 'Tasación $500K, Ref $0.10' },
    'tk.eco.t.1.r':   { en: '+5,000,000 SOVE Mint', ko: '+5,000,000 SOVE Mint', zh: '+5,000,000 SOVE Mint', ja: '+5,000,000 SOVE Mint', es: '+5,000,000 SOVE Mint' },
    'tk.eco.t.2.e':   { en: 'Physical Redemption', ko: '실물 반환', zh: '实物赎回', ja: '実物返還', es: 'Redención Física' },
    'tk.eco.t.2.c':   { en: 'Redemption of the above NFT', ko: '위 NFT 반환 청구', zh: '上述 NFT 赎回请求', ja: '上記 NFT の返還請求', es: 'Reclamación del NFT anterior' },
    'tk.eco.t.2.calc':{ en: 'Full corresponding mint', ko: '대응 Mint분 전량', zh: '对应 Mint 全部', ja: '対応 Mint 分全量', es: 'Mint correspondiente total' },
    'tk.eco.t.2.r':   { en: '−5,000,000 SOVE Burn', ko: '−5,000,000 SOVE Burn', zh: '−5,000,000 SOVE Burn', ja: '−5,000,000 SOVE Burn', es: '−5,000,000 SOVE Burn' },
    'tk.eco.t.3.e':   { en: 'Trading Fees', ko: '거래 수수료', zh: '交易手续费', ja: '取引手数料', es: 'Comisiones de Trading' },
    'tk.eco.t.3.c':   { en: 'Fee of 10,000 SOVE accrued', ko: '수수료 10,000 SOVE 발생', zh: '产生 10,000 SOVE 手续费', ja: '手数料 10,000 SOVE 発生', es: 'Comisión de 10,000 SOVE generada' },
    'tk.eco.t.3.calc':{ en: '10,000 × 30%', ko: '10,000 × 30%', zh: '10,000 × 30%', ja: '10,000 × 30%', es: '10,000 × 30%' },
    'tk.eco.t.3.r':   { en: '−3,000 SOVE Burn', ko: '−3,000 SOVE Burn', zh: '−3,000 SOVE Burn', ja: '−3,000 SOVE Burn', es: '−3,000 SOVE Burn' },

    'tk.circ.1.n': { en: 'Physical Asset', ko: '실물 자산', zh: '实物资产', ja: '実物資産', es: 'Activo Físico' },
    'tk.circ.1.d': { en: 'Appraisal + Custody + Insurance', ko: '감정 + 수탁 + 보험', zh: '鉴定 + 托管 + 保险', ja: '鑑定 + カストディ + 保険', es: 'Tasación + Custodia + Seguro' },
    'tk.circ.2.n': { en: 'NFT Issuance', ko: 'NFT 발행', zh: 'NFT 发行', ja: 'NFT 発行', es: 'Emisión NFT' },
    'tk.circ.2.d': { en: '+ $SOVE Mint', ko: '+ $SOVE Mint', zh: '+ $SOVE 铸造', ja: '+ $SOVE Mint', es: '+ $SOVE Mint' },
    'tk.circ.3.n': { en: 'SOVE Exchange', ko: 'SOVE Exchange', zh: 'SOVE Exchange', ja: 'SOVE Exchange', es: 'SOVE Exchange' },
    'tk.circ.3.d': { en: 'Trade occurs', ko: '거래 발생', zh: '交易发生', ja: '取引発生', es: 'Operación ocurre' },
    'tk.circ.4.n': { en: 'Fee Generated', ko: '수수료 발생', zh: '产生手续费', ja: '手数料発生', es: 'Comisión Generada' },
    'tk.circ.4.d': { en: 'Auto distribution', ko: '자동 분배', zh: '自动分配', ja: '自動分配', es: 'Distribución automática' },
    'tk.circ.h.fee': { en: 'Auto Fee Distribution', ko: '수수료 자동 분배', zh: '手续费自动分配', ja: '手数料自動分配', es: 'Distribución Automática' },
    'tk.circ.a.1': { en: 'SOVE Foundation Operations', ko: 'SOVE Foundation 운영', zh: 'SOVE Foundation 运营', ja: 'SOVE Foundation 運営', es: 'Operaciones SOVE Foundation' },
    'tk.circ.a.2': { en: '$SOVE Auto Burn', ko: '$SOVE 자동 Burn', zh: '$SOVE 自动销毁', ja: '$SOVE 自動 Burn', es: '$SOVE Auto Burn' },
    'tk.circ.a.3': { en: 'Staker Reward Pool', ko: '스테이커 보상풀', zh: '质押者奖励池', ja: 'ステーカー報酬プール', es: 'Pool de Recompensas Stakers' },
    'tk.circ.a.4': { en: 'Creator Auto-Payout', ko: '창작자 자동 지급', zh: '创作者自动支付', ja: 'クリエイター自動支払', es: 'Pago Automático al Creador' },

    // TOKEN — use cases
    'tk.uc.1': { en: '<strong>Fee Payment</strong> — 50% discount on all trading fees paid in $SOVE. The most common use case.', ko: '<strong>수수료 결제</strong> — 모든 거래 수수료를 $SOVE로 결제 시 50% 할인. 가장 일반적인 사용처.', zh: '<strong>手续费支付</strong> — 以 $SOVE 支付所有手续费享 50% 折扣。最常见的使用场景。', ja: '<strong>手数料決済</strong> — すべての取引手数料を $SOVE で支払うと 50% 割引。最も一般的な活用。', es: '<strong>Pago de Comisiones</strong> — 50% de descuento en comisiones al pagar con $SOVE.' },
    'tk.uc.2': { en: '<strong>Direct NFT Purchase</strong> — Buy NFTs directly with $SOVE alongside USDC and ETH.', ko: '<strong>NFT 직접 구매</strong> — USDC, ETH 외에 $SOVE로 NFT를 직접 구매할 수 있습니다.', zh: '<strong>直接购买 NFT</strong> — 除 USDC、ETH 外，可用 $SOVE 直接购买 NFT。', ja: '<strong>NFT 直接購入</strong> — USDC、ETH に加え $SOVE で NFT を直接購入可能。', es: '<strong>Compra Directa de NFT</strong> — Compra NFTs con $SOVE, además de USDC y ETH.' },
    'tk.uc.3': { en: '<strong>Staking Reward</strong> — Earn 8–18% APY across 4 tiers with platform perks per tier.', ko: '<strong>스테이킹 보상</strong> — 4티어로 락업 시 8 — 18% APY 수령. 티어별 플랫폼 혜택 동반.', zh: '<strong>质押奖励</strong> — 4 个等级锁定享 8–18% APY，附带等级权益。', ja: '<strong>ステーキング報酬</strong> — 4 ティアでロックし 8〜18% APY 受領。ティア別の特典付き。', es: '<strong>Recompensa de Staking</strong> — 8–18% APY en 4 niveles con beneficios por nivel.' },
    'tk.uc.4': { en: '<strong>Governance Voting</strong> — Voting weight by holdings; Sovereign tier holds DAO voting rights.', ko: '<strong>거버넌스 투표</strong> — 보유량 기반 투표 가중치. Sovereign 티어는 DAO 의결권 보유.', zh: '<strong>治理投票</strong> — 按持有量加权；Sovereign 等级享 DAO 投票权。', ja: '<strong>ガバナンス投票</strong> — 保有量ベース投票加重。Sovereign ティアは DAO 議決権を持つ。', es: '<strong>Voto en Gobernanza</strong> — Peso por tenencia; Sovereign tiene derecho de voto DAO.' },
    'tk.uc.5': { en: '<strong>Curation Reward</strong> — Gold+ tier nominators share rewards when nominated assets trade actively.', ko: '<strong>큐레이션 보상</strong> — Gold+ 티어가 추천한 신규 작품이 거래 활성화 시 보상 분배.', zh: '<strong>策展奖励</strong> — Gold+ 等级推荐的作品交易活跃时分享奖励。', ja: '<strong>キュレーション報酬</strong> — Gold+ ティアが推薦した新規作品の取引が活性化すると報酬分配。', es: '<strong>Recompensa por Curaduría</strong> — Nominadores Gold+ comparten recompensas si el activo es activo.' },
    'tk.uc.6': { en: '<strong>Insurance Pool Deposit</strong> — Deposit $SOVE into the insurance pool to earn 6–10% APY and share physical asset risk.', ko: '<strong>보험 풀 예치</strong> — $SOVE를 보험 풀에 예치하고 6 — 10% APY 수령. 실물 자산 리스크 분담.', zh: '<strong>保险池存款</strong> — 将 $SOVE 存入保险池获 6–10% APY，分担实物资产风险。', ja: '<strong>保険プール預入</strong> — $SOVE を保険プールに預け 6〜10% APY 受領。実物資産リスクを分担。', es: '<strong>Depósito en Pool de Seguros</strong> — Deposita $SOVE y gana 6–10% APY compartiendo riesgo.' },
    'tk.uc.7': { en: '<strong>NFT Loan Interest</strong> — Borrowers pay 8–15% APY interest distributed in $SOVE.', ko: '<strong>NFT 담보 대출 이자</strong> — 차입자가 지급하는 연 8 — 15% 이자가 $SOVE로 분배됩니다.', zh: '<strong>NFT 抵押贷款利息</strong> — 借款人支付 8–15% 年化利息以 $SOVE 分配。', ja: '<strong>NFT 担保融資金利</strong> — 借入者が支払う年 8〜15% の利息が $SOVE で分配されます。', es: '<strong>Interés de Préstamos NFT</strong> — 8–15% APY de los prestatarios distribuido en $SOVE.' },

    // TOKEN — staking tiers
    'tk.t.1.lock':  { en: '30-day lock', ko: '30일 락업', zh: '30 天锁定', ja: '30 日ロック', es: 'Bloqueo 30 días' },
    'tk.t.1.bonus': { en: '· 20% trading fee discount', ko: '· 거래 수수료 20% 할인', zh: '· 交易手续费 20% 折扣', ja: '· 取引手数料 20% 割引', es: '· 20% descuento en comisiones' },
    'tk.t.2.lock':  { en: '90-day lock', ko: '90일 락업', zh: '90 天锁定', ja: '90 日ロック', es: 'Bloqueo 90 días' },
    'tk.t.2.bonus': { en: '· 35% fee discount<br/>· Early access to new NFTs', ko: '· 수수료 35% 할인<br/>· 신규 NFT 조기 접근권', zh: '· 35% 手续费折扣<br/>· 新 NFT 提前访问', ja: '· 手数料 35% 割引<br/>· 新規 NFT 早期アクセス権', es: '· 35% descuento<br/>· Acceso anticipado a NFTs' },
    'tk.t.3.lock':  { en: '180-day lock', ko: '180일 락업', zh: '180 天锁定', ja: '180 日ロック', es: 'Bloqueo 180 días' },
    'tk.t.3.bonus': { en: '· 50% fee discount<br/>· Curation voting<br/>· OTC priority match', ko: '· 수수료 50% 할인<br/>· 큐레이션 투표권<br/>· OTC 우선 매칭', zh: '· 50% 手续费折扣<br/>· 策展投票权<br/>· OTC 优先撮合', ja: '· 手数料 50% 割引<br/>· キュレーション投票権<br/>· OTC 優先マッチング', es: '· 50% descuento<br/>· Voto curaduría<br/>· Prioridad OTC' },
    'tk.t.4.lock':  { en: '365-day lock', ko: '365일 락업', zh: '365 天锁定', ja: '365 日ロック', es: 'Bloqueo 365 días' },
    'tk.t.4.bonus': { en: '· All benefits included<br/>· DAO governance voting<br/>· Insurance claims committee', ko: '· 전 혜택 포함<br/>· DAO 거버넌스 투표권<br/>· 보험 심사 위원회', zh: '· 含所有权益<br/>· DAO 治理投票<br/>· 保险理赔委员会', ja: '· 全特典含む<br/>· DAO ガバナンス投票権<br/>· 保険審査委員会', es: '· Todos los beneficios<br/>· Voto DAO<br/>· Comité de siniestros' },

    // TOKEN — distribution
    'tk.d.1': { en: 'Ecosystem Incentives (Staking, LP)', ko: '생태계 인센티브 (스테이킹, LP)', zh: '生态激励（质押、LP）', ja: 'エコシステムインセンティブ（ステーキング、LP）', es: 'Incentivos Ecosistema (Staking, LP)' },
    'tk.d.2': { en: 'SOVE Foundation Treasury', ko: 'SOVE Foundation Treasury', zh: 'SOVE Foundation 资金', ja: 'SOVE Foundation Treasury', es: 'Tesorería SOVE Foundation' },
    'tk.d.3': { en: 'Team (4-year vesting · 1-year cliff)', ko: '팀 (4년 vesting · 1년 cliff)', zh: '团队（4 年线性 · 1 年悬崖）', ja: 'チーム（4年 vesting · 1年 cliff）', es: 'Equipo (4 años vesting · 1 año cliff)' },
    'tk.d.4': { en: 'Early Investors (3-year vesting)', ko: '초기 투자자 (3년 vesting)', zh: '早期投资者（3 年线性）', ja: '初期投資家（3年 vesting）', es: 'Inversores Iniciales (3 años)' },
    'tk.d.5': { en: 'Initial Liquidity (DEX LP)', ko: '초기 유동성 (DEX LP)', zh: '初始流动性（DEX LP）', ja: '初期流動性（DEX LP）', es: 'Liquidez Inicial (DEX LP)' },

    // TOKEN — governance
    'tk.g.1.k': { en: 'Voting Eligibility', ko: '투표 자격', zh: '投票资格', ja: '投票資格', es: 'Elegibilidad' },
    'tk.g.1.v': { en: 'Sovereign tier (200,000+ SOVE locked)', ko: 'Sovereign 티어 (200,000 SOVE 이상 락업)', zh: 'Sovereign 等级（锁定 200,000+ SOVE）', ja: 'Sovereign ティア（200,000 SOVE 以上ロック）', es: 'Sovereign (200,000+ SOVE bloqueados)' },
    'tk.g.2.k': { en: 'Proposal Threshold', ko: '제안 기준', zh: '提案门槛', ja: '提案基準', es: 'Umbral de Propuesta' },
    'tk.g.2.v': { en: 'Gold tier+ · 1M+ SOVE in supporting signatures', ko: 'Gold 티어 이상 · 1M SOVE 이상의 지지 서명', zh: 'Gold 等级以上 · 1M+ SOVE 支持签名', ja: 'Gold ティア以上 · 1M SOVE 以上の支持署名', es: 'Gold+ · 1M+ SOVE en firmas de apoyo' },
    'tk.g.3.k': { en: 'Voting Period', ko: '투표 기간', zh: '投票期', ja: '投票期間', es: 'Período de Voto' },
    'tk.g.3.v': { en: '7 days', ko: '7일', zh: '7 天', ja: '7 日', es: '7 días' },
    'tk.g.4.k': { en: 'Quorum', ko: '정족수', zh: '法定人数', ja: '定足数', es: 'Quórum' },
    'tk.g.4.v': { en: '≥ 10% of total supply', ko: '총 발행량의 10% 이상', zh: '总发行量 10% 以上', ja: '総発行量の 10% 以上', es: '≥ 10% del suministro total' },
    'tk.g.5.k': { en: 'Pass Threshold', ko: '통과 기준', zh: '通过门槛', ja: '通過基準', es: 'Umbral de Aprobación' },
    'tk.g.5.v': { en: '≥ 60% in favor', ko: '찬성 60% 이상', zh: '赞成 ≥ 60%', ja: '賛成 60% 以上', es: '≥ 60% a favor' },
    'tk.g.6.k': { en: 'Timelock', ko: 'Timelock', zh: 'Timelock', ja: 'Timelock', es: 'Timelock' },
    'tk.g.6.v': { en: '48 — 72 hours delayed execution after passing', ko: '통과 후 48 — 72시간 지연 집행', zh: '通过后 48–72 小时延时执行', ja: '通過後 48〜72 時間遅延執行', es: 'Ejecución diferida 48–72 h tras aprobación' },
    'tk.g.7.k': { en: 'Full DAO Transition', ko: '완전 DAO 전환', zh: '完全 DAO 转型', ja: '完全 DAO 移行', es: 'Transición Completa DAO' },
    'tk.g.7.v': { en: 'Phase 4 (2027 Q4 — 2028)', ko: 'Phase 4 (2027 Q4 — 2028)', zh: 'Phase 4 (2027 Q4 — 2028)', ja: 'Phase 4 (2027 Q4 — 2028)', es: 'Fase 4 (2027 Q4 — 2028)' },
    'tk.g.h.scope': { en: 'Governance Scope', ko: '거버넌스 대상', zh: '治理范围', ja: 'ガバナンス対象', es: 'Alcance de Gobernanza' },
    'tk.g.b.1': { en: 'Fee structure changes (currently 5 / 2.5 / 1%)', ko: '수수료 구조 변경 (현재 5/2.5/1%)', zh: '手续费结构变更（当前 5/2.5/1%）', ja: '手数料構造の変更（現行 5/2.5/1%）', es: 'Cambios en estructura de comisiones (5/2.5/1%)' },
    'tk.g.b.2': { en: 'Staking APY and lock period adjustments', ko: '스테이킹 APY 및 락업 기간 조정', zh: '质押 APY 与锁定期调整', ja: 'ステーキング APY およびロック期間調整', es: 'Ajustes de APY y bloqueo' },
    'tk.g.b.3': { en: 'Adding new Dojang types and approving issuers', ko: '신규 도장 종류 추가 및 발급자 승인', zh: '新增印章类型与发行方批准', ja: '新規印章種類追加と発行者承認', es: 'Nuevos Dojang y aprobación de emisores' },
    'tk.g.b.4': { en: 'Multi-Sig signer changes', ko: 'Multi-Sig 서명자 변경', zh: 'Multi-Sig 签名者变更', ja: 'Multi-Sig 署名者変更', es: 'Cambios en firmantes Multi-Sig' },
    'tk.g.b.5': { en: 'Treasury fund execution (1M+ SOVE)', ko: 'Treasury 자금 집행 (1M SOVE 이상)', zh: 'Treasury 资金执行（1M+ SOVE）', ja: 'Treasury 資金執行（1M SOVE 以上）', es: 'Ejecución de fondos del Tesoro (1M+ SOVE)' },
    'tk.g.b.6': { en: 'Platform parameters (LTV, liquidation, etc.)', ko: '플랫폼 파라미터 (LTV, 청산 기준 등)', zh: '平台参数（LTV、清算等）', ja: 'プラットフォームパラメータ（LTV、清算基準等）', es: 'Parámetros (LTV, liquidación, etc.)' }
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
    document.documentElement.classList.add('i18n-ready');
  }

  // FOUC guard — hide data-i18n elements until translated
  (function injectFouCGuard() {
    const style = document.createElement('style');
    style.textContent = 'html:not(.i18n-ready) [data-i18n]{visibility:hidden!important;}';
    (document.head || document.documentElement).appendChild(style);
  })();

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
