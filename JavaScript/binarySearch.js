const a = [0,1,22,33,34,53,65,72]
const t = 53

function binarySearch(array, target){
    let left = 0

    let right = array.length - 1

    while(left<=right){
        const mid = Math.floor((left + right) /2)

        if(array[mid]===target) return mid
    
        else if(array[mid] < target) left = mid+ 1

        else right = mid -1
    }
    return -1


}

console.log(binarySearch(a,t))
