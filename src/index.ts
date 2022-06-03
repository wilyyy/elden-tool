import "./styles/index.css";

//test code

// const redButton = document.querySelector<HTMLButtonElement>(".redbutton");
// const heading = document.querySelector<HTMLHeadingElement>(".heading");

// console.log("hello");

// redButton.addEventListener("click", () => {
//    heading.classList.toggle("hidden");
// });

//fetching npcs test
const GetNpcs = async (): Promise<any> => {
   const response = await fetch("https://eldenring.fanapis.com/api/npcs", {
      method: "GET",
   });
   console.log(response.json());
   return response.json();
};

GetNpcs();
