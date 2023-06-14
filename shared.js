const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const selectPlanButtons = document.querySelectorAll(".plan button");
const modalNoButton = document.querySelector(
  ".modal__actions .modal__action--negative"
);

function openModal() {
  backdrop.style.display = "block";
  modal.style.display = "block";
}

function closeModal() {
  backdrop.style.display = "none";
  modal.style.display = "none";
}

selectPlanButtons.forEach((selectPlanButton) =>
  selectPlanButton.addEventListener("click", (event) => {
    openModal();
  })
);

backdrop.addEventListener("click", () => {
  closeModal();
});

modalNoButton.addEventListener("click", () => {
  closeModal();
});
