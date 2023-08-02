const a = [1,2,2,3,4,5,2,2,2,7,8,9,2]


function swap(left, right, array){
    const temp = array[left]
    array[left] = array[right]
    array[right] = temp
}

function moveElementToEnd(array, toMove) {
  // Write your code here.
  let left = 0
  let right = array.length -1
  while(left< right){
    if(array[right] !=toMove){
        if(array[left] ===toMove) swap(left, right, array)
        left++
    }else right --
  }

  return array
}


console.log(moveElementToEnd(a,2))