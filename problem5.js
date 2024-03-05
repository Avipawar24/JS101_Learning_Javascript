function customIncludes(arr, searchElement){
    for (let i = 0; i < arr.length; i++){
      if ( arr[i] === searchElement){
        return true;
      }
    }
    return false;
  }
  let num = [1, 2, 3, 4, 5];
  let result = customIncludes(num, 3);
  console.log(result);