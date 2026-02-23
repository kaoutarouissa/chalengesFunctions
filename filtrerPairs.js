function filtrerPairs(tab){
    let arr=[]
    for(let i=0;i<tab.length;i++){
        if(tab[i]%2===0){
           arr.push(tab[i])
        }

    }
    console.log(arr)
    // return arr
}
let tab=[1,2,5,8]
filtrerPairs(tab)