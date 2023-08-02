const k = [2,5,6,9,10]


function greatestCommonDivisor(nums){
    nums.sort((a,b)=>a-b)
    let returned = []
    let start = nums[0]
    let end = nums[nums.length-1]
    let i = 0
    while(i<Infinity){
        if(start%i===0 && end%i===0){
            returned.push(i)
            i++
        }else{
            i++
        }
    }
    console.log(returned)
}

console.log(greatestCommonDivisor(k))