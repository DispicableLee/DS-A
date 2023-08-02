function threeNumberSum(array, targetSum) {
  array.sort((a,b)=>a-b)
  const triplets = []
  for(let i = 0;i<array.length-1; i++ ){
    //just use the standard array index as a third pointer
    //initialize left  pointer
    let left = i+1
    //initialize right pointer
    let right = array.length -1
    while(left< right){
        //set a currentSum value as the result of all three pointers added together
      const currentSum = array[i] + array[left] + array[right]
      if(currentSum === targetSum){
        //if the currentSum is the target value, add all three pointers to an array, and push that to the returned array
        triplets.push([array[i], array[left], array[right]])
        //update the left and right pointers
        left++
        right--
        //if the currentSum is less than the target sum, move the left pointer up by one
      }else if(currentSum < targetSum){
        left++
        //if the currentSum is greater than the target sum, move the right pointer down by one
      }else if(currentSum >targetSum)
        right--
    }
  }
  return triplets
}


//=============================================================================================================

function threeSum (nums) {
    nums = nums.sort((a, b) => a - b);
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        const target = nums[i];

        if (i > 0 && target === nums[i - 1]) continue;

        for (let l = i + 1, r = nums.length - 1; l < r;) {
            const left = nums[l];
            const right = nums[r];
            const sum = left + right + target;

            if (sum === 0) {
                result.push([target, left, right]);
                l++;
                while (nums[l] === nums[l - 1] && l < r) {
                    l++;
                }
            }
            else if (sum < 0) l++;
            else r--;
        }
    }

    return result;
};