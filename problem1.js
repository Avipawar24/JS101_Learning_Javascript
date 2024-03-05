function customJoin(arr, seperator){
    if(seperator === "undefined"){
      seperator = ",";
    }
    let result = "";
    for(let i = 0; i < arr.length; i++){
      if(i > 0){
        result += seperator;
      }
      result += arr[i];
    }
    return result;
  }
  let heroes = ["Batman", "Superman", "Spiderman"];
  let result = customJoin(heroes, ", ");
  console.log(result);