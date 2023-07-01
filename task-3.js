function getNum(num1){
    return function(num2){
      return num1 + num2;
    }
    
  }
  let result = getNum(3);
  console.log(result(0), result(2), result(7));