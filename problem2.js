function customLastIndexOf(arr, searchElement, fromIndex){
    if(fromIndex === "undefined"){
      fromIndex = arr.length - 1;
    }
    for(let i = fromIndex; i >= 0; i--){
      if(arr[i] === searchElement){
        return i;
      }
    }
    return -1;
  }
  var fruits = ["Banana", "Orange", "Apple", "Mango"];
  var lastIndex = customLastIndexOf(fruits, "Mango");
  console.log(lastIndex);