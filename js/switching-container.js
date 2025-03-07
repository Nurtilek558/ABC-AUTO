function showCustomContainer(containerId, button) {
  document.querySelectorAll(".custom-container").forEach(function (container) {
    container.classList.remove("active");
  });

  document.querySelectorAll(".custom-nav button").forEach(function (btn) {
    btn.classList.remove("active");
  });

  document.getElementById(containerId).classList.add("active");

  button.classList.add("active");
}

document.querySelector(".custom-nav button").classList.add("active");
