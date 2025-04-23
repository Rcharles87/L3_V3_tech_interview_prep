const { reverseString, findMax, isPalindrome } = require('./problems');

test('reverseString reverses a word', () => {
  expect(reverseString('hello')).toBe('olleh');
});

test('findMax returns the largest number', () => {
  expect(findMax([1, 5, 3, 9])).toBe(9);
  expect(findMax([9, 5, 3, 1])).toBe(9);
  expect(findMax([1, 5, 3, 1])).toBe(5);
});

test('isPalindrome checks for palindrome correctly', () => {
  expect(isPalindrome('racecar')).toBe(true);
  expect(isPalindrome('hello')).toBe(false);
});