document.addEventListener("DOMContentLoaded", () => {
    // 헤더 고정 시 원래 자리를 유지할 간격 요소를 추가함.
    const header = document.querySelector(".header");

    if (!(header instanceof HTMLElement)) {
        return;
    }

    const spacer = document.createElement("div");
    spacer.setAttribute("aria-hidden", "true");
    header.before(spacer);

    const updateHeader = () => {
        // 페이지를 스크롤하면 헤더를 화면 위에 고정함.
        const shouldFix = window.scrollY > 0;

        if (shouldFix) {
            spacer.style.height = `${header.offsetHeight}px`;
            header.classList.add("fixed");
        } else {
            header.classList.remove("fixed");
            spacer.style.height = "0";
        }

    };

    // 스크롤 위치에 따라 고정 상태를 갱신하고 레이아웃 점프를 방지함.
    window.addEventListener("scroll", updateHeader, { passive: true });
    window.addEventListener("resize", () => {
        if (header.classList.contains("fixed")) {
            // 화면 크기 변경 시 간격 요소 높이를 헤더에 맞춤.
            spacer.style.height = `${header.offsetHeight}px`;
        }
        updateHeader();
    });

    // 페이지 로드 시 현재 스크롤 위치에 맞춰 헤더 상태를 갱신함.
    updateHeader();
});
