let n = 15

//================================ Brute Force Solution ========================================
function fizzBuzz(n) {
    let answer = []
    for(let i = 1;i<=n;i++){
        if( i%5===0 && i%3===0){
            answer.push("FizzBuzz")
        }else if(i%5===0){
            answer.push("Buzz")
        }else if(i%3===0){
            answer.push("Fizz")
        }else answer.push(`${i}`)
    }
    return answer
};
console.log(fizzBuzz(n))
//======================== Brute Force Solution with Wizardry =============================

var fizzBuzzTwo = function(n) {
    return Array.from({length: n}, (_, i) => {
        i += 1;
        return i % 3 === 0 && i % 5 === 0 ? 'FizzBuzz'
            : i % 3 === 0 ? 'Fizz' 
            : i % 5 === 0 ? 'Buzz'
            : `${i}`;
    });
};

console.log(fizzBuzzTwo(n))


let rob = "Rob"

console.log(rob.charAt(0))