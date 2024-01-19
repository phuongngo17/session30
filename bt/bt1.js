function isPalindrome(arr) {
  for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
    if (arr[i] !== arr[j]) {
      return false; 
    }
  }
  return true; 
}

const arr = [1, 2, 3, 2, 1];

console.log(isPalindrome(arr));