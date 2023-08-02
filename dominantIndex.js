let c = [1, 4, 6, 2, 7];
let k = [3,6,1,0]
//=============================== my solution =======================================
function dominantIndex(nums) {
    let highest = 0;
    for (const i of nums) {
        if (i > highest) highest = i;
    }
    let array = nums.filter((n)=>n!=highest)
    console.log(array)
  console.log(highest)
  for(const j of array){
    if((j*2)>highest) return -1
  }
  return nums.indexOf(highest)
}

console.log(dominantIndex(k))
//=================================== better solution with math.max ===========================
function dominantIndexOne(nums) {
    const max = Math.max(...nums);
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== max && nums[i] * 2 > max) return -1;
    }
    return nums.indexOf(max);
};