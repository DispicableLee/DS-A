function reduce(nums, fn, init) {
    if (nums.length===0) return init
    let sum = init
    for(const n of nums){
        sum = fn(sum, n)
    }
    return sum
};

const a = [1,2,3,4]
const funca = function sum(accum, curr) { return accum + curr; }
const ini = 0

console.log(reduce(a, funca, ini))