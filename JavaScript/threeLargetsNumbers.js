//find the three largest numbers in a given array



const t = [10,2,13,45,3,17]

function findThreeLargestNumbers(array) {
  //sort the array in ascending order
  array.sort((a,b)=>a-b)
  //return a spliced version of the array containing the last three elements
  return array.splice(array.length-3)
}

console.log(findThreeLargestNumbers(t))