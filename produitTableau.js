function produitTableau(tab){
    let multiple=1
    for(let i=0;i<tab.length;i++){
        multiple=multiple*tab[i]
    }
    return multiple
}
let tab=[1,3,2,1,5]
console.log(produitTableau(tab))