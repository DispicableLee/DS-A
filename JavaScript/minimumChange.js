function nonConstructibleChange(coins) {
  // if the length of the coins array is zero, then the minimum amount of change we cannot create is 1

  if(coins.length===0)return 1

  //it always helps to sort out arrays of numbers in ascending order
    coins.sort((a,b)=>a - b)

    //instantiate a minimum change tracker
    let minChange = 0

    //loop through the array of coins
    for(let i = 0;i<coins.length; i++){

        //if the current element of the coins array is greater than the minimum amount of change plus 1,
        //return the minimum amount of change plus one, because if we can't add one to make that amount of change,
        //we can't do much else
      if(coins[i]>minChange + 1) break
      
      //if the current element is NOT greater than the minimumCHange plus 1, add it to minimumChange,
      //because it is not the smallest amount of change we can create 
        minChange +=coins[i]
    }
  return minChange + 1
}