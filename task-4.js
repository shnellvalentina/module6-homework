function setNumbers(num1, num2) {
    let currentNumber = num1;
    const intervalId = setInterval(() => {
      console.log(currentNumber);
      currentNumber++;
      if (currentNumber > num2) {
        clearInterval(intervalId);
      }
    }, 1000);
  }
  setNumbers(4, 25);