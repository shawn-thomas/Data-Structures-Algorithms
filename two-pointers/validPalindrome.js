"use strict";

export default function isPalindrome(s) {
  const validChars = "abcdefghijklmnopqrstuvwxyz0123456789";
  let cleanStr = "";

  for (let char of s.toLowerCase()) {
    if (!validChars.includes(char)) {
      continue;
    } else {
      cleanStr += char;
    }
  }

  let left = 0;
  let right = cleanStr.length - 1;

  while (left < right) {
    if (cleanStr[left] !== cleanStr[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}