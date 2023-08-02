function mergeSort(arr) {
   if (arr.length <= 1) return arr;
//    get the midpoint of the array
   const mid = Math.floor(arr.length / 2);
//    get both the left and right halves of the array
   const left = arr.slice(0, mid);
   const right = arr.slice(mid);
//    
   return merge(mergeSort(left), mergeSort(right));
}




// helper function 'merge' that takes in two arrays, the left and right halves
function merge(left, right) {
// instantiate a dummy array
   const result = [];
// while the left and right arrays still have elements in them:
   while (left.length && right.length) {
       if (left[0] < right[0]) {
          // if the nth index of the lArray is smaller than that of rArray:
            // push the first element of lArray to 'result', then shift it out
         result.push(left.shift());
      } else {
        // vice versa if vice versa
         result.push(right.shift());
      }
   }
    
   return [...result, ...left, ...right];
}