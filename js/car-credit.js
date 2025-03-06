document.addEventListener("DOMContentLoaded", function() {
    const amountSlider = document.getElementById("amount");
    const amountValue = document.getElementById("amountValue");

    const termSlider = document.getElementById("term");
    const termValue = document.getElementById("termValue");

    const initialPaymentSlider = document.getElementById("initialPayment");
    const initialPaymentValue = document.getElementById("initialPaymentValue");

    const calculatedInitialPayment = document.getElementById("calculatedInitialPayment");
    const calculatedRemainingAmount = document.getElementById("calculatedRemainingAmount");

    function updateCalculations() {
        const amount = parseInt(amountSlider.value);
        const initialPayment = parseInt(initialPaymentSlider.value);

        calculatedInitialPayment.textContent = new Intl.NumberFormat('ru-RU').format(initialPayment) + " руб";
        calculatedRemainingAmount.textContent = new Intl.NumberFormat('ru-RU').format(amount - initialPayment) + " руб";
    }

    amountSlider.addEventListener("input", function() {
        amountValue.textContent = new Intl.NumberFormat('ru-RU').format(this.value);
        updateCalculations();
    });

    termSlider.addEventListener("input", function() {
        termValue.textContent = this.value;
    });

    initialPaymentSlider.addEventListener("input", function() {
        initialPaymentValue.textContent = new Intl.NumberFormat('ru-RU').format(this.value);
        updateCalculations();
    });

    // Инициализация расчетов при загрузке страницы
    updateCalculations();
});