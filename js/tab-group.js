document.querySelectorAll(".tab-group").forEach((group) => {
    // 탭 버튼을 한꺼번에 찾음.
    const buttons = Array.from(group.querySelectorAll(".tab-group__button"));

    // 선택된 탭을 감싼 li가 보이도록 가로 위치를 맞춤.
    const scrollToSelectedItem = (button) => {
        const item = button.closest("li");

        if (!item) {
            return;
        }

        const groupRect = group.getBoundingClientRect();
        const itemRect = item.getBoundingClientRect();
        const paddingLeft = parseFloat(getComputedStyle(group).paddingLeft);
        const itemLeft = group.scrollLeft + itemRect.left - groupRect.left - paddingLeft;
        const itemRight = itemLeft + itemRect.width;
        const visibleLeft = group.scrollLeft;
        const visibleRight = visibleLeft + group.clientWidth - paddingLeft - parseFloat(getComputedStyle(group).paddingRight);
        let targetLeft = visibleLeft;

        if (itemLeft < visibleLeft) {
            targetLeft = itemLeft;
        } else if (itemRight > visibleRight) {
            targetLeft = itemRight - (visibleRight - visibleLeft);
        }

        group.scrollLeft = targetLeft;
    };

    // 처음 선택된 탭의 위치를 맞춤.
    const initiallySelectedButton = buttons.find((button) => button.getAttribute("aria-pressed") === "true");

    if (initiallySelectedButton) {
        scrollToSelectedItem(initiallySelectedButton);
    }

    group.addEventListener("click", (event) => {
        // 클릭한 탭을 찾음.
        const selectedButton = event.target.closest(".tab-group__button");

        if (!selectedButton || !group.contains(selectedButton)) {
            return;
        }

        buttons.forEach((button) => {
            button.setAttribute("aria-pressed", String(button === selectedButton));
        });

        // 선택된 탭이 가로 스크롤 영역 안에 들어오게 이동함.
        scrollToSelectedItem(selectedButton);
    });
});
