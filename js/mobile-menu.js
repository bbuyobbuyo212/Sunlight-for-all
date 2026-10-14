document.addEventListener("DOMContentLoaded", () => {
    // 메뉴 열기 버튼, 전체 메뉴, 닫기 버튼을 찾음.
    const menuBox = document.querySelector(".header__menu-box");
    const menuButton = menuBox?.querySelector(".header__menu-btn");
    const mobileMenu = document.querySelector(".mobile-gnb");
    const closeButton = mobileMenu?.querySelector(".mobile-gnb__head button");

    if (
        !(menuBox instanceof HTMLElement) ||
        !(menuButton instanceof HTMLButtonElement) ||
        !(mobileMenu instanceof HTMLElement) ||
        !(closeButton instanceof HTMLButtonElement)
    ) {
        console.error("모바일 메뉴 초기화 안 됨. 메뉴 열기/닫기 요소가 필요해.");
        return;
    }

    // 메뉴 상태, 스크롤 잠금, 접근성 상태를 한꺼번에 맞춤.
    const setMenuOpen = (isOpen, restoreFocus = true) => {
        document.body.classList.toggle("mobile-menu-open", isOpen);
        menuButton.setAttribute("aria-expanded", String(isOpen));
        mobileMenu.setAttribute("aria-hidden", String(!isOpen));
        mobileMenu.inert = !isOpen;

        if (!restoreFocus) {
            return;
        }

        if (isOpen) {
            closeButton.focus();
        } else {
            menuButton.focus();
        }
    };

    // 모바일 화면에서 메뉴 버튼을 누르면 메뉴를 엶.
    menuBox.addEventListener("click", () => {
        if (window.innerWidth < 1024) {
            setMenuOpen(true);
        }
    });

    // 메뉴 상단 닫기 버튼을 누르면 메뉴를 닫음.
    closeButton.addEventListener("click", () => setMenuOpen(false));

    // 메뉴 안의 링크를 누르면 메뉴를 닫음.
    mobileMenu.addEventListener("click", (event) => {
        if (event.target instanceof Element && event.target.closest("a")) {
            setMenuOpen(false);
        }
    });

    // Escape 키를 누르면 메뉴를 닫고 버튼으로 포커스를 돌림.
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && document.body.classList.contains("mobile-menu-open")) {
            setMenuOpen(false);
        }
    });

    // 화면이 1024px 이상이면 열린 메뉴를 닫음.
    const closeMenuOnDesktop = () => {
        if (window.innerWidth >= 1024 && document.body.classList.contains("mobile-menu-open")) {
            setMenuOpen(false, false);
        }
    };

    window.addEventListener("resize", closeMenuOnDesktop);

    // 처음부터 데스크톱 화면이면 메뉴 상태를 정리함.
    closeMenuOnDesktop();
});
