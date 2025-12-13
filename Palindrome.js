//Program to find palindrome number
function isPalindrome(num) {
  //check not a number
  if (isNaN(num) || num === "") return false;
  //check negative
  if (num < 0) return false;
  //single digit are palindrome
  if (num >= 0 && num < 10) return true;

  //get rid of negative num
  num = Math.abs(num);

  let revDigit = 0;
  let original = num;

  while (num != 0) {
    let lastDig = num % 10;
    revDigit = revDigit * 10 + lastDig;
    num = Math.floor(num / 10);
  }

  return revDigit === original;
}

console.log(isPalindrome(9));
