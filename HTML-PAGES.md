# HTML 페이지 목록

현재 저장소에 포함된 HTML 페이지의 경로와 역할을 정리한 문서입니다.

## 페이지 목록

| 경로 | 페이지명 | 설명 |
|---|---|---|
| [`index.html`](./index.html) | 모두의 햇빛 플랫폼 | 플랫폼 메인 페이지입니다. 햇빛발전소 현황, 플랫폼 소개, 시민 출자·배당 안내, 주요 서비스 진입점을 제공합니다. |
| [`pages/platform/platform.html`](./pages/platform/platform.html) | 플랫폼 소개 | 시민이 함께 만드는 지역 에너지 전환 플랫폼의 목적과 주요 기능을 소개합니다. |
| [`pages/guide/guide.html`](./pages/guide/guide.html) | 이용안내 | 가입·활동, 조합 설립·운영, 발전소, 통합관제 등 대상별 이용 방법과 서비스 흐름을 안내합니다. |
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

## 참고

- 모든 페이지는 공통 헤더와 푸터를 사용합니다.
- 회원 관련 페이지의 공통 스타일은 [`css/join.css`](./css/join.css)에 정의되어 있습니다.
- 모니터링용 공통 헤더·푸터와 본문 스타일은 [`css/monitoring.css`](./css/monitoring.css)에 정의되어 있습니다. 수치·시각은 Figma 시안의 예시이며, 실제 데이터 수신 및 자동 갱신은 연동 전입니다.
- 모니터링 3개 페이지의 주요 반응형 배치 전환은 1024px 이하에서 시작합니다. 데스크톱은 1920px 시안 비율에 맞춰 글자·그래프를 축소하며, 태블릿·모바일은 공통 rem 배율을 유지하면서 글자·도넛 그래프 크기를 추가 조정합니다. 세부 미디어쿼리는 해당 클래스 아래에 정의합니다.
- 페이지 경로는 저장소 루트 기준의 상대 경로로 작성했습니다.
