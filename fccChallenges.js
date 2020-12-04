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

/** search for an object from an array of objects to match particular properties. */
function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line
  for(let i = 0; i < collection.length; i++){
    if(compare(collection[i], source)){
      arr.push(collection[i]);
    }
  }

  // Only change code above this line
  return arr;
}

function compare(real_obj, search_obj) {
  let real_prop = Object.keys(real_obj);
  let search_prop = Object.keys(search_obj);
  if(search_prop.every(function(element){
    return real_prop.indexOf(element) >= 0;
  })){
    
    for(let i = 0; i < search_prop.length; i++){
      if(search_obj[search_prop[i]] !=  real_obj[search_prop[i]]){
        return false;
      }
    }
    return true;
  };
  return false;
}
//console.log(Object.values({name:'ben', age:20}))

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
