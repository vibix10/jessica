//code for my attempts on the fcc challeges.
/* function to return an array containing elements in one array but not both. */
function diffArray(arr1, arr2) {
  var newArr = [];
  //loop over arr1 elements to check if they are in arr2
  for(let i = 0; i < arr1.length; i++){
    if(arr2.indexOf(arr1[i]) == -1){
      newArr.push(arr1[i]);
    }
  }
  for(let i = 0; i < arr2.length; i++){
    if(arr1.indexOf(arr2[i]) == -1){
      newArr.push(arr2[i]);
    }
  }
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
