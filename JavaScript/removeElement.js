function removeElement(nums, val) {
    for(let i =0;i<nums.length; i++){
        let curr =nums[i]
        let cIdx = nums.indexOf(curr)
        if(curr===val){
            nums.splice(cIdx,1)
        }
    }
    console.log(nums)

};

const k= [0,1,2,2,3,0,4,2]
console.log(removeElement(k,2))