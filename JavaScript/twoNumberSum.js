//twoSum
//using a given array of integers and a target integer,
//return the two numbers that, when added together, result in the target integer

var twoSum = function(nums, target) {
    //initialize two forLoops
    //the first forLoop is going through each element of the array
    for(var i=0;i<nums.length;i++){
        //for each element of the array, the second forLoop goes through
        //every other element of the array and adds them together
        for(var j = i+1;j<nums.length;j++){
            //if the resulting sum is equal to the target,
            //return the INDICES of those numbers in the array
            if(nums[i]+nums[j] == target){
                return [i,j]
            }
        }
    }
};