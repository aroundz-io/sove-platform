# SOVE — Sovereign Value Economy

문화 자산 RWA 토큰화 플랫폼. GIWA Chain(Ethereum L2) 위에서 작동합니다.

## Tech

- 정적 HTML/CSS/JS (빌드 스텝 없음)
- 폰트: Pretendard Variable, JetBrains Mono
- 디자인: XYLO 톤 (네온 레드 액센트 on 순수 블랙)

## 로컬 실행

```
python -m http.server 5173
```

브라우저에서 `http://localhost:5173` 접속.

## 배포

Vercel — 정적 사이트로 자동 배포. 빌드 스텝 없이 루트의 `index.html`을 서빙합니다.

## 구조

```
.
├── index.html          # 메인 페이지 (10개 섹션)
├── styles.css          # XYLO 톤 스타일
├── script.js           # 인터랙션
└── vercel.json         # 헤더 및 캐시 정책
```

## 섹션

1. Hero — RWA Tokenization
2. About — Sovereign Value Economy
3. Audience — 7개 시장
4. Platform — 5개 코어 모듈
5. Dojang — GIWA 도장 기술 신뢰 레이어
6. Token — $SOVE Mint / Burn / Governance
7. Technology — 엔터프라이즈 스택
8. Security — 6대 보안 체계
9. Roadmap — 2026–2028
10. KPI — 측정 가능한 성장
