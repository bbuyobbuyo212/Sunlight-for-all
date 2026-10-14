document.querySelectorAll(".terms-group__toggle").forEach((toggle) => {
    const group = toggle.closest(".terms-group");
    const content = group?.querySelector(".terms-group__content");

    if (!content) {
        console.error("Terms content is missing for its disclosure button.", toggle);
        return;
    }

    toggle.addEventListener("click", () => {
        const isExpanded = toggle.getAttribute("aria-expanded") !== "true";

        toggle.setAttribute("aria-expanded", String(isExpanded));
        toggle.querySelector("span").textContent = isExpanded ? "전문 닫기" : "전문 보기";
        content.hidden = !isExpanded;
    });
});
