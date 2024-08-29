const showBenefitButtons = document.querySelectorAll(".show-benefit");
const benefitCards = document.querySelectorAll(".benefit-card");

showBenefitButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    benefitCards[index].style.display =
      benefitCards[index].style.display === "none" ? "flex" : "none";
  });
});

benefitCards.forEach((card) => {
  card.querySelector(".close-card").addEventListener("click", () => {
    card.style.display = "none";
  });
});