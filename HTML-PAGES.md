# HTML 페이지 목록

현재 저장소에 포함된 HTML 페이지의 경로와 역할을 정리한 문서입니다.

## 페이지 목록

| 경로 | 페이지명 | 설명 |
|---|---|---|
| [`index.html`](./index.html) | 모두의 햇빛 플랫폼 | 플랫폼 메인 페이지입니다. 햇빛발전소 현황, 플랫폼 소개, 시민 출자·배당 안내, 주요 서비스 진입점을 제공합니다. |
| [`pages/platform/info.html`](./pages/platform/info.html) | 플랫폼 소개 | 시민이 함께 만드는 지역 에너지 전환 플랫폼의 목적과 주요 기능을 소개합니다. |
| [`pages/guide/services.html`](./pages/guide/services.html) | 이용안내 | 가입·활동, 조합 설립·운영, 발전소, 통합관제 등 대상별 이용 방법과 서비스 흐름을 안내합니다. |
| [`pages/monitoring/monitoring_1.html`](./pages/monitoring/monitoring_1.html) | 실시간 통합관제 | 대구시민햇빛발전소의 발전 현황, 시간대별 발전 추이, 운영 상태, 환경 기여도를 표시하는 공개 현황판의 정적 마크업입니다. |
| [`pages/monitoring/monitoring_2.html`](./pages/monitoring/monitoring_2.html) | 세부 관제 (드릴다운) | 발전소별 출력·효율과 분포를 표시합니다. 상태필터 드롭다운은 항목 선택·키보드 이동·Esc 및 바깥 클릭 닫기를 지원하며, 실제 데이터 필터링은 연동 전입니다. |
| [`pages/monitoring/monitoring_3.html`](./pages/monitoring/monitoring_3.html) | 표출 설정·순환 화면 미리보기 | 전체화면·자동 순환 설정 토글과 네 화면의 미리보기 정적 마크업입니다. 설정 저장 및 실제 모니터 표출·화면 순환은 연동 전입니다. |
| [`pages/search/search.html`](./pages/search/search.html) | 햇빛발전소 찾기 | 출자 모집 중 또는 운영 중인 햇빛발전소를 카드 목록으로 조회하고 모집률과 발전소 정보를 확인합니다. |
| [`pages/search/search_map.html`](./pages/search/search_map.html) | 햇빛발전소 지도 찾기 | 햇빛발전소를 지도 기반으로 탐색하고 지역 및 운영 상태별 위치 정보를 확인합니다. |
| [`pages/faq/faq.html`](./pages/faq/faq.html) | 자주 묻는 질문(FAQ) | 가입, 출자·증자, 배당, 펀드, 조합 설립·운영과 관련된 자주 묻는 질문과 답변을 제공합니다. |
| [`pages/notice/notice.html`](./pages/notice/notice.html) | 알림마당 | 모두의 햇빛 플랫폼의 공지사항과 새 소식을 목록 형태로 안내합니다. |
| [`pages/member/login.html`](./pages/member/login.html) | 로그인 | 아이디·비밀번호 로그인, 자동 로그인, 소셜 로그인 진입, 아이디·비밀번호 찾기 및 햇빛시민 가입 연결을 제공합니다. |
| [`pages/member/find_id.html`](./pages/member/find_id.html) | 아이디 찾기 | 이름, 휴대전화, 인증번호를 입력해 본인확인 후 아이디를 찾는 화면입니다. |
| [`pages/member/find_pw.html`](./pages/member/find_pw.html) | 비밀번호 재설정 | 이름, 아이디, 휴대전화, 인증번호를 입력해 본인확인 후 비밀번호를 재설정하는 화면입니다. |
| [`pages/member/join.html`](./pages/member/join.html) | 햇빛시민 가입 약관 동의 | 햇빛시민 가입 절차의 첫 단계입니다. 서비스 이용약관, 개인정보 처리, 조합 관련 약관을 확인하고 동의합니다. |
| [`pages/member/join2.html`](./pages/member/join2.html) | 햇빛시민 가입 개인정보 입력 | 가입 아이디, 비밀번호, 이름, 휴대전화, 주소, 추천인 등 회원 개인정보를 입력하는 두 번째 단계입니다. |
| [`pages/member/join3.html`](./pages/member/join3.html) | 조합원 가입·출자 신청 | 가입 조합과 발전소를 선택하고, 조합원 가입·정관 동의·출자 구좌·배당 계좌 정보를 입력하는 세 번째 단계입니다. |
| [`pages/member/join4.html`](./pages/member/join4.html) | 신청 확인 | 조합원 가입·출자 신청 접수번호, 가입 조합, 가입 상태, 입금 계좌·금액, 승인 상태를 확인하는 마지막 단계입니다. |

## 회원가입 단계

1. [`join.html`](./pages/member/join.html) — 약관 동의
2. [`join2.html`](./pages/member/join2.html) — 개인정보 입력
3. [`join3.html`](./pages/member/join3.html) — 조합원 가입·출자 신청
4. [`join4.html`](./pages/member/join4.html) — 신청 확인

## 구형 iOS의 세로 Flex 간격

- `flex-direction: column`인 영역의 세로 간격은 Flex `gap` 대신 직접 자식 사이의 `margin-top`으로 지정합니다.
- 첫 번째 자식에는 간격을 추가하지 않습니다. 자식에 원래 있던 여백, 숨김 요소와 절대 위치 요소가 있으면 별도로 확인합니다.
- 반응형에서 가로 Flex가 세로로 바뀌는 경우 해당 미디어쿼리 안에서 `gap: 0`으로 중복 간격을 막고 자식 여백을 지정합니다.
- 역순 세로 배치(`column-reverse`)에는 `margin-bottom`을 사용합니다.
- Grid의 `gap`과 가로 Flex의 `gap`은 이번 교체 대상이 아닙니다. 이 변경만으로 구형 iOS의 모든 CSS 기능 호환성을 보장하는 것은 아닙니다.

```css
.example-stack {
    display: flex;
    flex-direction: column;
}

.example-stack > :not([hidden]) ~ :not([hidden]) {
    margin-top: 1.6rem;
}
```

## 공통 그리드와 카드

같은 형태의 2열 배치와 세로형 카드는 [`css/contents.css`](./css/contents.css)의 공통 클래스를 조합합니다.

```html
<section class="contents-grid contents-grid--2" aria-label="이용안내">
    <article class="contents-card">
        <header class="contents-section-heading">
            <h3 class="contents-section-heading__title">이용 순서</h3>
        </header>
        <!-- 페이지별 내용 -->
    </article>
    <article class="contents-card">다른 안내 내용</article>
</section>
```

- `contents-grid`: 그리드 배치, 간격 `2rem`, 좌우 패딩 `0.2rem`을 공통으로 관리합니다.
- `contents-grid--2`: 기본 2열이며, 화면 너비 `768px` 이하에서는 1열로 바뀝니다.
- `contents-card`: 세로 배치, 내부 간격 `1.6rem`, 패딩 `4rem 3.2rem 3.2rem`, 흰 배경, 둥근 모서리와 그림자를 공통으로 관리합니다. 그리드 없이 단독으로도 사용할 수 있습니다.
- `contents-card--roomy`: 하단 패딩을 `4rem`으로 늘립니다.
- `contents-card--stretch`: 내부 요소를 카드의 가로 폭에 맞춰 늘립니다.
- 페이지별 클래스는 바깥 여백, 개별 카드 높이, 이미지·목록 등 내용 스타일에 사용합니다. 기존 변형 클래스가 지정한 하단 패딩은 그대로 유지됩니다.
- 내부 배치나 패딩이 다른 소형 카드, 가로형 박스, 그리드형 카드 및 반응형 전환 기준이 다른 그리드는 이번 공통화 대상에서 제외했습니다.

## 공통 화살표 제목

화살표가 붙는 본문 제목은 [`css/contents.css`](./css/contents.css)의 공통 클래스를 사용합니다.

```html
<header class="contents-section-heading">
    <h3 class="contents-section-heading__title">시민 참여 흐름</h3>
</header>
```

- 장식 화살표는 CSS의 `::before`로 표시하므로 별도의 이미지 마크업이 필요하지 않습니다.
- 아이콘, 간격, 제목 색상·크기·굵기는 공통 CSS에서 수정합니다. 제목 색상은 `Grayscale-80`으로 통일합니다.
- 여러 줄 제목에서 화살표를 위쪽에 맞추려면 헤더에 `contents-section-heading--top`을 추가합니다.
- 제목 단계는 문서 구조에 맞게 선택하고, `aria-labelledby`에서 참조하는 `id`는 제목 요소에 둡니다.
- 페이지별 바깥 여백과 카드 배치는 해당 페이지의 CSS에서 관리합니다.

## 공통 본문 텍스트

본문 설명에는 [`css/contents.css`](./css/contents.css)의 `contents-text`를 사용합니다.

```html
<p class="contents-text">서비스 이용 방법을 안내합니다.</p>
```

- 기본값은 색상 `Grayscale-70`, 크기 `1.6rem`, 굵기 `400`, 줄 높이 `2.4rem`, 자간 `-0.1rem`입니다.
- 글꼴 토큰이 없으면 기본 글꼴 설정을 상속합니다.
- 여러 문단을 감싸는 영역에도 적용할 수 있습니다. 자식 요소에 명시된 글자 스타일은 상속보다 우선합니다.
- 여백, 목록 기호, 줄바꿈 방식은 페이지 전용 클래스에서 관리합니다.

## 참고

- 모든 페이지는 공통 헤더와 푸터를 사용합니다.
- 회원 관련 페이지의 공통 스타일은 [`css/join.css`](./css/join.css)에 정의되어 있습니다.
- 모니터링용 공통 헤더·푸터와 본문 스타일은 [`css/monitoring.css`](./css/monitoring.css)에 정의되어 있습니다. 수치·시각은 Figma 시안의 예시이며, 실제 데이터 수신 및 자동 갱신은 연동 전입니다.
- 모니터링 3개 페이지의 주요 반응형 배치 전환은 1024px 이하에서 시작합니다. 데스크톱은 1920px 시안 비율에 맞춰 글자·그래프를 축소하며, 태블릿·모바일은 공통 rem 배율을 유지하면서 글자·도넛 그래프 크기를 추가 조정합니다. 세부 미디어쿼리는 해당 클래스 아래에 정의합니다.
- 페이지 경로는 저장소 루트 기준의 상대 경로로 작성했습니다.
