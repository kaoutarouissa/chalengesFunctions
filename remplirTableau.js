const prompt = require("prompt-sync")();
function remplirTableau(length) { 
  let tab=[]  
         for (let i=0 ; i<length ;i++){  
             let numbers = Number(prompt("ecrit un nbr: "));
            tab.push(numbers);
          }
          console.log(tab)
         }
         remplirTableau(3)