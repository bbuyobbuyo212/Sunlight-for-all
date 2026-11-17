// 접수 API 연결 전에는 입력값을 서버로 전송하지 않습니다.
document.querySelector(".increase-form")?.addEventListener("submit", (event) => {
    event.preventDefault();
});
