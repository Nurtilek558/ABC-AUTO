document.addEventListener("DOMContentLoaded", function () {
    const rangeInput = document.getElementById("price-range");
    const priceValue = document.getElementById("price-value");
  
    // Устанавливаем начальное значение
    priceValue.textContent = new Intl.NumberFormat("ru-RU").format(rangeInput.value);
  
    rangeInput.addEventListener("input", function () {
      priceValue.textContent = new Intl.NumberFormat("ru-RU").format(rangeInput.value);
    });
  });
  