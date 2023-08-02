const n = [1,2,2,3,]

var containsDuplicate = function(nums) {
    let map = {}
    for(const i of nums){
        if(!(i in map)) map[i] = 0
        map[i]++
        if(map[i]===2) return true
    }
    console.log(map)
    return false
};

console.log(containsDuplicate(n))