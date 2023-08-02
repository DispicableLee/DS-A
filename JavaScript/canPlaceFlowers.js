let k = [1,0,0,0,0,1]
let z = [1,0,1,0,1,0,1,0]


function canPlaceFlowers(flowerbed, n) {
    let triple = []
    for(let i = 0; i<flowerbed.length; i++){
        if(flowerbed[i]===0){
            let next = i+1
            let nextOver = i+2
            if(flowerbed[next] ===0 && flowerbed[nextOver] ===0){
                triple.push([flowerbed[i], flowerbed[next], flowerbed[nextOver]])
                flowerbed = flowerbed.slice(nextOver+1)
            }
        }
    }
    console.log(flowerbed)
    console.log(triple)
    if(triple.length>=n){
        return true
    }else{
        return false
    }
};

console.log(canPlaceFlowers(z, 1))
