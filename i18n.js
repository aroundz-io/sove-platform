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
    'token.gov.title':         { en: 'The path to DAO.', ko: 'DAO로 가는 길.', zh: '通往 DAO 之路。', ja: 'DAO への道。', es: 'El camino hacia la DAO.' }
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
