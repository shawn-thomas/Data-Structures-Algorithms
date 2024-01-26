import longestConsecutive from "./longestConsecutive";


describe('longestConsecutive', () => {
  it('returns 0 for an empty array', () => {
    expect(longestConsecutive([])).toBe(0);
  });

  it('returns 1 for an array with no consecutive elements', () => {
    expect(longestConsecutive([1, 7, 3, 9])).toBe(1);
  });

  it('returns the correct count for consecutive elements', () => {
    expect(longestConsecutive([100, 4, 200, 1, 3, 2])).toBe(4);
  });

  it('handles negative numbers correctly', () => {
    expect(longestConsecutive([-1, -2, -3, 0, 1])).toBe(5);
  });

});
