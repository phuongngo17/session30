function capitalizeLastLetter(str) {
  const words = str.split(" ");

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    if (word.length > 0) {
      const capitalizedWord =
        word.slice(0, word.length - 1) + word[word.length - 1].toUpperCase();

      words[i] = capitalizedWord;
    }
  }

  const result = words.join(" ");
  return result;
}

const inputString = prompt("Nhập vào một chuỗi:");

const result = capitalizeLastLetter(inputString);
console.log(result);