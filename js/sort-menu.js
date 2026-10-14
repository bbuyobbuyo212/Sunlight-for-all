document.querySelectorAll(".tap-menu__sort-wrap").forEach((sortMenu) => {
    const trigger = sortMenu.querySelector(".tap-menu__sort");
    const panel = sortMenu.querySelector(".tap-menu__sort-panel");
    const options = [...sortMenu.querySelectorAll(".tap-menu__sort-option")];

    if (!trigger || !panel || options.length === 0) {
        return;
    }

    const setOpen = (isOpen) => {
        trigger.setAttribute("aria-expanded", String(isOpen));
        panel.hidden = !isOpen;
    };

    trigger.addEventListener("click", () => {
        setOpen(trigger.getAttribute("aria-expanded") !== "true");
    });

    options.forEach((option) => {
        option.addEventListener("click", () => {
            options.forEach((item) => {
                item.setAttribute("aria-pressed", String(item === option));
            });
            trigger.querySelector("span").textContent = option.textContent;
            setOpen(false);
            trigger.focus();
        });
    });

    document.addEventListener("click", (event) => {
        if (!sortMenu.contains(event.target)) {
            setOpen(false);
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && trigger.getAttribute("aria-expanded") === "true") {
            setOpen(false);
            trigger.focus();
        }
    });
});
