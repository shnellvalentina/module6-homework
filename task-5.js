const numdegree = (x, n) => {
    let result = 1;
    for (let i = 0; i < n; i++) {
      result *= x;
    }
    return result;
  }
  console.log(numdegree(3, 5));
  console.log(numdegree(7, 3));
  console.log(numdegree(8, 2));