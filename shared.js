const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const selectPlanButtons = document.querySelectorAll(".plan button");
const modalNoButton = document.querySelector(
  ".modal__actions .modal__action--negative"
);
const hambugerToggle = document.querySelector(".main-header .toggle-button");
const mobileNav = document.querySelector(".mobile-nav");

function openModal() {
  backdrop.style.display = "block";
  modal.style.display = "block";
}

function closeModal() {
  backdrop.style.display = "none";
  modal.style.display = "none";
}

function openMenu() {
  mobileNav.style.display = "block";
  backdrop.style.display = "block";
}

function closeMenu() {
  mobileNav.style.display = "none";
  backdrop.style.display = "none";
}

selectPlanButtons.forEach((selectPlanButton) =>
  selectPlanButton.addEventListener("click", (event) => {
    openModal();
  })
);

backdrop.addEventListener("click", function () {
  closeModal();
  closeMenu();
});

modalNoButton.addEventListener("click", () => {
  closeModal();
});

hambugerToggle.addEventListener("click", () => {
  openMenu();
});
