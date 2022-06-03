import "./styles/index.css";

const redButton = document.querySelector<HTMLButtonElement>(".redbutton");
const heading = document.querySelector<HTMLHeadingElement>(".heading");

redButton.addEventListener("click", () => {
   heading.classList.toggle("hidden");
});
