function sommeTableau(tab){
    
    let somme=0
    for(let i=0;i<tab.length;i++){
        somme+=tab[i]
    }
    return somme
}
let tab=[1,2,3]
console.log(sommeTableau(tab))