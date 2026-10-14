const form = document.querySelector(".search-group__form");
const input = document.querySelector(".search-group__input");
const list = document.querySelector(".search-faq__list");
const emptyMessage = document.querySelector(".search-faq__empty");
const moreGroup = document.querySelector(".search-faq__more-group");
const items = Array.from(document.querySelectorAll(".search-faq__item"));
const tabGroup = document.querySelector(".tab-group");
let selectedCategory = "전체";

if (form && input && list && emptyMessage && moreGroup && tabGroup) {
    // 검색어와 선택한 분류를 한꺼번에 맞춤.
    const filterQuestions = () => {
        const keyword = input.value.trim().toLocaleLowerCase("ko");
        let visibleCount = 0;

        items.forEach((item) => {
            const categoryMatches = selectedCategory === "전체" || item.dataset.category === selectedCategory;
            const textMatches = item.textContent.toLocaleLowerCase("ko").includes(keyword);
            const isVisible = categoryMatches && textMatches;

            item.hidden = !isVisible;
            visibleCount += Number(isVisible);
        });

        emptyMessage.hidden = visibleCount > 0;
        moreGroup.hidden = visibleCount === 0;
    };

    // 검색 버튼이나 Enter 키 입력을 찾음. 결과 영역은 새로고침 없이 갱신함.
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        filterQuestions();
    });

    // 입력하는 동안 검색 결과를 맞춤.
    input.addEventListener("input", filterQuestions);

    // FAQ 버튼을 찾음. 열린 답변은 한꺼번에 하나만 유지함.
    list.addEventListener("click", (event) => {
        const trigger = event.target.closest(".search-faq__trigger");

        if (!trigger || !list.contains(trigger)) {
            return;
        }

        const willExpand = trigger.getAttribute("aria-expanded") !== "true";

        items.forEach((item) => {
            const itemTrigger = item.querySelector(".search-faq__trigger");
            const answer = item.querySelector(".search-faq__answer");
            const isExpanded = itemTrigger === trigger && willExpand;

            item.classList.toggle("is-expanded", isExpanded);
            itemTrigger.setAttribute("aria-expanded", String(isExpanded));
            answer.hidden = !isExpanded;
        });
    });

    // 분류 탭을 찾음. 선택 상태와 질문 목록을 한꺼번에 맞춤.
    tabGroup.addEventListener("click", (event) => {
        const button = event.target.closest(".tab-group__button");

        if (!button || !tabGroup.contains(button)) {
            return;
        }

        selectedCategory = button.textContent.trim();
        tabGroup.querySelectorAll(".tab-group__button").forEach((tab) => {
            tab.setAttribute("aria-pressed", String(tab === button));
        });
        filterQuestions();
    });
}
