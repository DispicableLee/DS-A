var filter = function(arr, fn) {
    let filteredArr = []
    for(const a of arr){
        if (fn(a)) filteredArr.push(a)
    }
    return filteredArr
};

a = [0,10,20,30] 
f = function greaterThan10(n) { return n > 10; }
console.log(filter(a,f))