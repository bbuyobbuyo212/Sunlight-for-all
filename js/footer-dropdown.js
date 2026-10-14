document.addEventListener("DOMContentLoaded", () => {
    // 페이지 안의 footer 드롭다운을 모두 찾음.
    const dropdowns = [...document.querySelectorAll(".footer__dropdown")];

    dropdowns.forEach((dropdown) => {
        const summary = dropdown.querySelector("summary");

        if (!summary) {
            return;
        }

        const syncExpandedState = () => {
            summary.setAttribute("aria-expanded", String(dropdown.open));
        };

        // details 열림 상태를 보조기기에 전달함.
        syncExpandedState();
        dropdown.addEventListener("toggle", syncExpandedState);
        dropdown.addEventListener("click", (event) => {
            if (event.target instanceof Element && event.target.closest("a")) {
                // 목록 항목을 누르면 메뉴를 닫음.
                dropdown.open = false;
            }
        });
    });

    // 드롭다운 바깥을 누르면 열린 메뉴를 닫음.
    document.addEventListener("click", (event) => {
        dropdowns.forEach((dropdown) => {
            if (!dropdown.contains(event.target)) {
                dropdown.open = false;
            }
        });
    });

    // Escape 키를 누르면 메뉴를 닫고 버튼으로 포커스를 돌림.
    document.addEventListener("keydown", (event) => {
        if (event.key !== "Escape") {
            return;
        }

        const openDropdown = dropdowns.find((dropdown) => dropdown.open);

        if (openDropdown) {
            openDropdown.open = false;
            openDropdown.querySelector("summary")?.focus();
        }
    });
});
