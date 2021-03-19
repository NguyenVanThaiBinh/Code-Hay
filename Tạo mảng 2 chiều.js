function generateMatrix(number) {
  let caro = [];
  for (let i = 0; i < number; i++) {
    let arr = [];
    for (let j = 0; j < number; j++) {
      let random = Math.floor(Math.random() * (99 - 10 + 1) + 10);
      arr[j] = random;
    }
    caro.push(arr);
  }
  return caro;
}
