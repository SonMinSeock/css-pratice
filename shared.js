const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const selectPlanButtons = document.querySelectorAll(".plan button");
const modalNoButton = document.querySelector(
  ".modal__actions .modal__action--negative"
);
const hambugerToggle = document.querySelector(".main-header .toggle-button");
const mobileNav = document.querySelector(".mobile-nav");

function openModal() {
  backdrop.classList.add("open");
  modal.classList.add("open");
}

function closeModal() {
  backdrop.classList.remove("open");
  modal.classList.remove("open");
}

function openMenu() {
  mobileNav.classList.add("open");
  backdrop.classList.add("open");
}

function closeMenu() {
  mobileNav.classList.remove("open");
  backdrop.classList.remove("open");
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
