import twoSum from "./twoSum";

describe('twoSum', () => {
  it('returns the indices of two numbers that add up to the target - Example 1', () => {
    const nums = [2, 7, 11, 15];
    const target = 9;
    expect(twoSum(nums, target)).toEqual([1, 2]);
  });

  it('returns the indices of two numbers that add up to the target - Example 2', () => {
    const nums = [2, 3, 4];
    const target = 6;
    expect(twoSum(nums, target)).toEqual([1, 3]);
  });

  it('returns the indices of two numbers that add up to the target - Example 3', () => {
    const nums = [-1, 0];
    const target = -1;
    expect(twoSum(nums, target)).toEqual([1, 2]);
  });

});

