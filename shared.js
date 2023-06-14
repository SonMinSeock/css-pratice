const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const selectPlanButtons = document.querySelectorAll(".plan button");

selectPlanButtons.forEach((selectPlanButton) =>
  selectPlanButton.addEventListener("click", (event) => {
    backdrop.style.display = "block";
    modal.style.display = "block";
  })
);
