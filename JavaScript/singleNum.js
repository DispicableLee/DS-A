//find the first number in a given array that is not a duplicate

const n = [1,1,2,3,3,4,5]

var singleNumber = function(nums) {
    //hash-map, baby
    let map = {}
    //for each element(c) in the array, perform the following loop
        //if (c) is not in the map, set it's value to 0
        //then increment it's value by one
    for(const c of nums){
        if(!(c in map)) map[c] = 0
        map[c]++
    }
    //for each element(key) in the map, perform the following
        //if (key)'s value is equal to one, return (key)
    for(key in map){
        if(map[key]===1) return key
    }
};

console.log(singleNumber(n))