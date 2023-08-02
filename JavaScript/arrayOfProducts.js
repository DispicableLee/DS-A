//for every element of the given array,
//create the product of every other element in the array when multiplied

const a = [5,1,4,2]


function arrayOfProducts(array) {
  // Write your code here.
  const products = []
  //create a while loop 
  let i = 0
  while(i<array.length){
    //take the given elemt of the array and remove it
      const currNum = array.shift()
      //multiply the remaining elements of the array
      const currTotalProd = array.reduce((a,b)=> a*b)
      //set the result as a new element of the products array
      products[i] = currTotalProd
      array.push(currNum)
      i++
  }
  return products
}

console.log(arrayOfProducts(a))