import "./styles/index.css";

//test code
// const redButton = document.querySelector<HTMLButtonElement>(".redbutton");
// const heading = document.querySelector<HTMLHeadingElement>(".heading");

// console.log("hello");

// redButton.addEventListener("click", () => {
//    heading.classList.toggle("hidden");
// });

// NPC functions--------------------------------
//fetch NPC data
const FetchNPCs = async (): Promise<any> => {
   const response = await fetch("https://eldenring.fanapis.com/api/npcs", {
      method: "GET",
   });
   const allNPCs = await response.json();

   return allNPCs;
};

const npcCont = document.querySelector(".npcCont");

//callback function when dom is loaded, to grab .data from response json object
window.addEventListener("DOMContentLoaded", async () => {
   //code to grab data from fetch function above
   let allNPCs = [];

   try {
      allNPCs = await FetchNPCs();
   } catch (e) {
      console.log("Error!");
      console.log(e);
   }

   console.log(allNPCs.data);

   //interface for data's object types
   interface DataValues {
      id?: string;
      image?: string;
      location?: string;
      name?: string;
      quote?: string;
      role?: string;
   }

   const npcInnerHtml = allNPCs.data.map((el: DataValues, index: number) => {
      return ``;
   });
});

//figure out how to add multiple pages
// https://stackoverflow.com/questions/60021318/what-is-the-right-way-to-configure-multiple-pages-in-webpack

// map html element with cat into npcinnerhtml variable
// https://www.youtube.com/watch?v=llnoLJy9fFw&t=332s
