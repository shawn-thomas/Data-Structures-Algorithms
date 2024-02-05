import isPalindrome from "./validPalindrome";

describe('validPalindrome', () => {
  it('should return true for valid palindrome string', () => {
    const input = "A man, a plan, a canal: Panama";
    const output = true;
    expect(isPalindrome(input)).toBe(output);
  });

  it('should return false for non-palindrome string', () => {
    const input = "race a car";
    const output = false;
    expect(isPalindrome(input)).toBe(output);
  });

  it('should return true for an empty string', () => {
    const input = " ";
    const output = true;
    expect(isPalindrome(input)).toBe(output);
  });

  it('should handle strings with only non-alphanumeric characters', () => {
    const input = "!@#$%^&*()";
    const output = true; 
    expect(isPalindrome(input)).toBe(output);
  });

  it('should handle mixed cases and alphanumeric characters', () => {
    const input = "A man, a plan, a canal, Panama";
    const output = true;
    expect(isPalindrome(input)).toBe(output);
  });
});