function inputInterger(msg) {
  let number = 0;
  do {
    number = Number(prompt(msg));
  } while (isNaN(number) || !Number.isInteger(number) || number <= 0);
  return number;
}
