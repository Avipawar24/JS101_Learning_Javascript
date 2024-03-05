function customSlice(arr, start, end){
    if(typeof start === "undefined"){
      start =0;
    }
    if(typeof end === "undefined"){
      end = arr.length;
    }
    if(start < 0){
      start = Math.max(arr.length + start, 0);
    }
    if(end < 0){
      end = Math.max(arr.length + end, 0);
    }
    let slicedArr =[];
  
    for (let i= start; i < end && i < arr.length; i++){
      slicedArr.push(arr[i]);
    }
    return slicedArr;
  }
  let heroes = ["Batman", "Superman", "Spiderman", "Ironman"];
  let slicedheores = customSlice(heroes, 1, 3);
  console.log(slicedheores);