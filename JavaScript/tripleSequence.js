function tripleSequence(start, length) {
    // your code here
    let count = 0
    let returned = []
    returned.push(start)
    while(count<=length){
        insertMultiple(returned)
        //need to move the index of returned 

        
    }
    console.log(returned)


}
//helper function that takes an array, then takes the last element of the array, then 
function insertMultiple(array){
    const lastIndex = array[array.length-1]
    array.push(timesThree(lastIndex))
    return array
}


//helper function that multiplies a number by three
function timesThree(num){
    return num*3
}

console.log(tripleSequence(2, 4)); // [2, 6, 18, 54]
// console.log(tripleSequence(4, 5)); // [4, 12, 36, 108, 324]