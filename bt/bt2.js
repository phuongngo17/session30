function printOddNumbers(n) {
  let sum = 0;
  let count = 0;

  for (let i = 1; i <= n; i += 2) {
    console.log(i);

    sum += i;
    count++;

    if (sum % 2 !== 0) {
      break;
    }
  }

  if (count === 0) {
    console.log("Không có số nguyên dương lẻ nào để in ra.");
  } else {
    console.log("Tổng các số nguyên dương lẻ đã in ra là số lẻ.");
  }
}

const n = +prompt("Nhập vào số nguyên dương n:");

printOddNumbers(n);