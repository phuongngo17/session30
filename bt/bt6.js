function countTriangles(arr) {
  let count = 0;

  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (
          arr[i] + arr[j] > arr[k] &&
          arr[j] + arr[k] > arr[i] &&
          arr[k] + arr[i] > arr[j]
        ) {
          count++;
        }
      }
    }
  }

  return count;
}

const numbers = [4, 6, 3, 7];

const result = countTriangles(numbers);
console.log(`Số lượng hình tam giác có thể tạo ra là: ${result}`);