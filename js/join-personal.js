const personalForm = document.querySelector(".join-personal");

if (personalForm) {
    const memberId = personalForm.querySelector("#member-id");
    const idMessage = personalForm.querySelector("#member-id-message");

    const showMessage = (message, text, isError = false) => {
        message.textContent = text;
        message.classList.remove("personal-form__message--success");
        message.classList.toggle("personal-form__message--error", isError);
        message.hidden = false;
    };

    const memberIdCheck = personalForm.querySelector("#member-id-check");
    memberIdCheck?.addEventListener("click", () => {
        if (!/^[A-Za-z0-9]{6,20}$/.test(memberId.value)) {
            showMessage(idMessage, "아이디는 영문·숫자 6~20자로 입력해 주세요.", true);
            memberId.setAttribute("aria-invalid", "true");
            memberId.focus();
            return;
        }

        memberId.removeAttribute("aria-invalid");
        showMessage(idMessage, "아이디 중복확인 기능이 아직 연결되지 않았습니다. 현재는 사용 가능 여부를 확인할 수 없습니다.");
    });

    memberId?.addEventListener("input", () => {
        memberId.removeAttribute("aria-invalid");
        idMessage.hidden = true;
        idMessage.textContent = "";
        idMessage.classList.remove("personal-form__message--error", "personal-form__message--success");
    });

    personalForm.querySelector("#member-phone-check")?.addEventListener("click", () => {
        showMessage(
            personalForm.querySelector("#member-phone-message"),
            "휴대전화 본인확인 기능이 아직 연결되지 않았습니다."
        );
    });

    personalForm.querySelector("#member-address-search")?.addEventListener("click", () => {
        showMessage(
            personalForm.querySelector("#member-address-message"),
            "주소검색 기능이 아직 연결되지 않았습니다. 주소를 직접 입력해 주세요."
        );
    });

    // Prevent personal data from being sent until registration is connected.
    if (memberId && idMessage) {
        personalForm.addEventListener("submit", (event) => {
            event.preventDefault();
            showMessage(idMessage, "회원가입 기능이 아직 연결되지 않아 입력한 개인정보는 전송되지 않습니다.");
        });
    }

    const investmentUnits = personalForm.querySelector("#investment-units");
    const investmentAmount = personalForm.querySelector("#investment-amount");
    const investmentAmountValue = personalForm.querySelector("#investment-amount-value");
    const applicationStatus = personalForm.querySelector("#application-status");
    const unitPrice = 200000;

    const showApplicationStatus = (text, isError = false) => {
        if (!applicationStatus) {
            return;
        }

        applicationStatus.textContent = text;
        applicationStatus.classList.toggle("join-application__status--error", isError);
        applicationStatus.hidden = false;
    };

    const updateInvestmentAmount = () => {
        const units = Number.parseInt(investmentUnits.value, 10);
        const amount = Number.isInteger(units) && units > 0 ? units * unitPrice : 0;
        investmentAmount.value = `${amount.toLocaleString("ko-KR")}원`;
        investmentAmountValue.value = String(amount);
    };

    investmentUnits?.addEventListener("input", updateInvestmentAmount);

    personalForm.querySelectorAll("[data-verification]").forEach((button) => {
        button.addEventListener("click", () => {
            const type = button.dataset.verification;
            const input = type === "identity"
                ? personalForm.querySelector("#resident-number")
                : personalForm.querySelector("#dividend-account");

            if (!input.checkValidity()) {
                input.reportValidity();
                input.focus();
                return;
            }

            const message = type === "identity"
                ? "본인인증 서비스가 연결되면 입력하신 정보로 인증을 진행합니다."
                : "계좌확인 서비스가 연결되면 입력하신 계좌의 유효성을 확인합니다.";
            showApplicationStatus(message);
        });
    });

    personalForm.querySelectorAll(".cooperative-item__terms-toggle").forEach((termsToggle) => {
        termsToggle.addEventListener("click", () => {
            const termsContent = personalForm.querySelector(`#${termsToggle.getAttribute("aria-controls")}`);
            const isExpanded = termsToggle.getAttribute("aria-expanded") === "true";
            termsToggle.setAttribute("aria-expanded", String(!isExpanded));
            termsToggle.querySelector("span").textContent = isExpanded ? "전문 보기" : "전문 닫기";
            termsContent.hidden = isExpanded;
        });
    });

    if (investmentUnits && applicationStatus) {
        personalForm.addEventListener("submit", (event) => {
            event.preventDefault();

            if (!personalForm.checkValidity()) {
                showApplicationStatus("필수 입력 및 동의 항목을 모두 확인해 주세요.", true);
                personalForm.reportValidity();
                return;
            }

            showApplicationStatus("신청 내용이 확인되었습니다. 접수 연동 전까지 입력 정보는 전송되지 않습니다.");
        });
    }
}
