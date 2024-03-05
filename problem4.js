function customSubstring(str, start, end){
    if (typeof start === "undefined"){
      start = 0;
    }
    if (typeof end === "undefined"){
      end = str.length;
    }
    if (start < 0){
      start = Math.max(str.length + start, 0);
    }
    if (end < 0){
      end = Math.max(str.length + end, 0);
    }
    let substring = "";
    
    for (let i = start; i < end && i < str.length; i++){
      substring += str[i];
    }
    return substring;
  }
  let str = "Hello, World!";
  let substr = customSubstring(str, 7, 12);
  console.log(substr);