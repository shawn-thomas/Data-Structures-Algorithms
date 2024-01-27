import topKFrequent from "./topKFrequent";

describe('topKFrequent', () => {
  it('should return [1,2] for input [1,1,1,2,2,3] and k = 2', () => {
    const nums = [1, 1, 1, 2, 2, 3];
    const k = 2;
    const result = topKFrequent(nums, k);
    console.log(result);
    expect(result).toEqual(expect.arrayContaining(["1", "2"]));
    expect(result.length).toBe(2);
  });

  it('should return [1] for input [1] and k = 1', () => {
    const nums = [1];
    const k = 1;
    const result = topKFrequent(nums, k);
    expect(result).toEqual(expect.arrayContaining(["1"]));
    expect(result.length).toBe(1);
  });

});