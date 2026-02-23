function moyenne(tab){
    let moyenne=0
    for(let i=0;i<tab.length;i++){
        moyenne+=tab[i]
    }
return moyenne/tab.length
}
let tab=[2,1,3]
console.log(moyenne(tab))