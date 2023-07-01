let arr = [0, 1, 2, 'five', null, undefined, true, 5, -3, -4, -1];
function countEvenOdd(arr){
  let evennum = 0;
let oddnum = 0;
let zeronum = 0;

for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
    if (arr[i] === 0) {
      zeronum++;
    } else if (arr[i] % 2 === 0) {
      evennum++;
    } else {
      oddnum++;
    }
  }
}

console.log('В массиве найдено четных элементов: ' + evennum);
console.log('В массиве найдено нечетных элементов: ' + oddnum);
console.log('В массиве найдено нулевых элементов: ' + zeronum);
}
countEvenOdd(arr);