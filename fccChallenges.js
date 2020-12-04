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

/* remove elements provided from the array. the user can provide any number of elements to be removed. */
function destroyer(arr, ...args) {
  let newArr = [];
  for(let i =0; i < arr.length; i++){
    if(args.indexOf(arr[i]) == -1){
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
