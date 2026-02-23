function inverserTableau(tab){
    let variable=(tab.length)-1
    for(let i=variable;i>=0;i--){
        console.log(tab[i])
    }
   return tab
}
let tab=[1,2,3]
inverserTableau(tab)
