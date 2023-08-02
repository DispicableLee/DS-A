const n = [5,1,4]



function minimumWaitingTime(queries) {
  // Write your code here.
  queries.sort((a,b)=>a-b)
  let totalWaitTime = 0
  let lastNum = 0

  for(const num of queries){
      totalWaitTime +=lastNum
      console.log(lastNum)
      lastNum +=num
      console.log(num)
      console.log(totalWaitTime)

  }
  return totalWaitTime;
}

console.log(minimumWaitingTime(n))