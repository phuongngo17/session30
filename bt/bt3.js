function getCharacterOrder(str) {
  const letters = [];
  const numbers = [];
  const specials = [];

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (/[a-zA-Z]/.test(char)) {
      letters.push(char);
    } else if (/[0-9]/.test(char)) {
      numbers.push(char);
    } else {
      specials.push(char);
    }
  }

  const result = letters.concat(numbers, specials);
  return result;
}

const inputString = prompt("Nhập vào một chuỗi:");

const result = getCharacterOrder(inputString);
console.log(result);