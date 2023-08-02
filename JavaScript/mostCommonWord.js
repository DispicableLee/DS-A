let c = "Bob hit a ball, the hit BALL flew far after it was hit."
let k = ["hit"]


function mostCommonWord(paragraph, banned){
    let map = {}
    let x = paragraph
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
        .toLowerCase()
        .split(" ")
    console.log(x)
    for(const i of x){
        if(!(banned.includes(i))) map[i] = (map[i]|| 0) +1
    }   
    console.log(map)
    return _.max(Object.keys(map), o => map[o])
}

console.log(mostCommonWord(c,k))