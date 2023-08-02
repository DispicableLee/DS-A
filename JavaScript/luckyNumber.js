let a = [2,2,3,4]
let b = [1,2,2,3,3,3]
let c = [2,2,2,3,3]


function luckyNumber(arr){
    let map = {}
    for(const i of arr){
        map[i] = (map[i]||0) +1
    }
    let keys = Object.entries(map).reverse()
    for(let j = 0; j<keys.length; j++){
        console.log(keys[j][0])
        if(keys[j][0]===keys[j][1]) console.log(keys[j][0])
    }
    return -1
}

console.log(luckyNumber(a))