// Given an integer x, return true if x is a palindrome, and false otherwise.

function isPalindrome(x: number): boolean {
  return x === parseInt(x.toString().split("").reverse().join(""));
}

// constrant, you can't convert to string;

function isPalindromeNoString(x: number): boolean {
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false;

  let half = 0;
  while (x > half) {
    half = half * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  return x === half || x === Math.floor(half / 10);
}

console.log(isPalindrome(121));
console.log(isPalindrome(12321));

console.log(isPalindromeNoString(121));
console.log(isPalindromeNoString(12321));
