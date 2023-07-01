function PrimeNam(num) {
    if (num > 1000) {
      console.log('Данные не верны');
    } else if (num === 0 || num === 1) {
      console.log('Число не простое');
    } else {
      for (let i = 2; i < num; i++) {
        if (num % i === 0) {
          console.log('Число не простое');
          return;
        }
      }
      console.log('Число простое');
    }
  }
  PrimeNam(17); 
  PrimeNam(1001); 
  PrimeNam(0); 
  PrimeNam(1); 
  PrimeNam(20); 