document.querySelectorAll(".monitoring-filter").forEach((filter) => {
    const trigger = filter.querySelector(".monitoring-filter__trigger");
    const label = filter.querySelector(".monitoring-filter__label");
    const panel = filter.querySelector(".monitoring-filter__panel");
    const options = [...filter.querySelectorAll(".monitoring-filter__option")];

    const setOpen = (isOpen) => {
        trigger.setAttribute("aria-expanded", String(isOpen));
        panel.hidden = !isOpen;
    };

    trigger.addEventListener("click", () => {
        setOpen(trigger.getAttribute("aria-expanded") !== "true");
    });

    trigger.addEventListener("keydown", (event) => {
        if (event.key === "ArrowDown" || event.key === "ArrowUp") {
            event.preventDefault();
            setOpen(true);
            const selected = options.find((option) => option.getAttribute("aria-pressed") === "true");
            selected.focus();
        }
    });

    options.forEach((option, index) => {
        option.addEventListener("click", () => {
            options.forEach((item) => {
                item.setAttribute("aria-pressed", String(item === option));
            });
            label.textContent = option.textContent;
            trigger.setAttribute("aria-label", `상태필터: ${option.textContent}`);
            setOpen(false);
            trigger.focus();
        });

        option.addEventListener("keydown", (event) => {
            let nextIndex;
            if (event.key === "ArrowDown") {
                nextIndex = (index + 1) % options.length;
            } else if (event.key === "ArrowUp") {
                nextIndex = (index - 1 + options.length) % options.length;
            } else if (event.key === "Home") {
                nextIndex = 0;
            } else if (event.key === "End") {
                nextIndex = options.length - 1;
            } else {
                return;
            }
            event.preventDefault();
            options[nextIndex].focus();
        });
    });

    document.addEventListener("click", (event) => {
        if (!filter.contains(event.target)) {
            setOpen(false);
        }
    });

    filter.addEventListener("focusout", (event) => {
        if (!filter.contains(event.relatedTarget)) {
            setOpen(false);
        }
    });

    filter.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && trigger.getAttribute("aria-expanded") === "true") {
            event.preventDefault();
            setOpen(false);
            trigger.focus();
        }
    });
});
