let l = [1,4,5,2,3]

function largestSubarray(nums,k){
    let array = []
    if(k===1){ 
        array.push(Math.max(...nums))
        return array
    }
    for(let i = 0,j=k; i<nums.length;i++, j++){
        array.push(nums.slice(i,j))
    }
    array = array.filter((i)=>i.length===k).sort(([a,],[b,])=>a-b)
    return array[array.length-1]
    console.log(array)
}

console.log(largestSubarray(l,3))