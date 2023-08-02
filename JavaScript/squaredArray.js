let c = [-4,0,1,43,100,25,3]



function squaredArray(nums){
    for(let i = 0; i<nums.length; i++){
        nums[i] = nums[i]* nums[i]
    }
    return nums.sort((a,b)=>a-b)
}

console.log(squaredArray(c))