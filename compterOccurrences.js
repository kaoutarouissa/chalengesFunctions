function compterOccurrences(tab, valeur){
    let counter=0
    for(let i=0;i<tab.length;i++){
if(tab[i]===valeur){
    counter++

}

}
return counter

// console.log(counter)

}
let tab=[1,2,3,2,5,5,5]
console.log(compterOccurrences(tab, 5))