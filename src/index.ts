import "./styles/index.css";
import { Pages, PageKeys } from "./data/pages";

window.addEventListener("DOMContentLoaded", () => {
   const pageCont = document.querySelector(".pageCont");

   const navInnerHtml = Pages.map((el: PageKeys, index: number) => {
      return `
      <a
         class="w-[100px] h-[50px] flex justify-center items-center bg-camel text-richBlack m-1 rounded-md hover:bg-camelLight duration-500"
         href="${el.src}"
      >
         ${el.name}
      </a>
   `;
   });

   pageCont.innerHTML = navInnerHtml.join("");
});

//Home

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
      return `
         <div class="flex w-[500px] h-[217px] m-2">
            <img src=${el.image} width="200px" height="217px" />
            <div class="w-[300px] h-[217px] bg-camel text-black p-2">
               <p>${el.name}</p>
               <p>${el.location}</p>
               <p>${el.role}</p>
               <p>${el.quote}</p>
            </div>
         </div>
      `;
   });

   npcCont.innerHTML = npcInnerHtml.join("");
});

//figure out how to add multiple pages
// https://stackoverflow.com/questions/60021318/what-is-the-right-way-to-configure-multiple-pages-in-webpack

// map html element with cat into npcinnerhtml variable
// https://www.youtube.com/watch?v=llnoLJy9fFw&t=332s
