import productExceptSelf from "./productExceptSelf";

describe('productExceptSelf', () => {
  it('should return the correct product array for a given input array', () => {
    const input1 = [1, 2, 3, 4];
    const output1 = productExceptSelf(input1);
    expect(output1).toEqual([24, 12, 8, 6]);

    const input2 = [5, 2, 3, 1, 4];
    const output2 = productExceptSelf(input2);
    expect(output2).toEqual([24, 60, 40, 120, 30]);
  });

  it('should handle arrays with zeros', () => {
    const input3 = [1, 0, 3, 4];
    const output3 = productExceptSelf(input3);
    expect(output3).toEqual([0, 12, 0, 0]);

    const input4 = [0, 2, 3, 4];
    const output4 = productExceptSelf(input4);
    expect(output4).toEqual([24, 0, 0, 0]);
  });

});