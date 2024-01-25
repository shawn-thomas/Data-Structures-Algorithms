"use strict";

import containsDuplicate from "./containsDuplicate";

describe('containsDuplicate', () => {
  it('returns true when there are duplicate numbers', () => {
    const nums = [1, 2, 3, 1];
    expect(containsDuplicate(nums)).toBe(true);
  });

  it('returns false when there are no duplicate numbers', () => {
    const nums = [1, 2, 3, 4];
    expect(containsDuplicate(nums)).toBe(false);
  });

  it('returns false for an empty array', () => {
    const nums = [];
    expect(containsDuplicate(nums)).toBe(false);
  });

  it('returns false for an array with a single element', () => {
    const nums = [1];
    expect(containsDuplicate(nums)).toBe(false);
  });

  it('works with negative numbers', () => {
    const nums = [-1, 2, -1, 4];
    expect(containsDuplicate(nums)).toBe(true);
  });

  it('works with zero', () => {
    const nums = [0, 1, 2, 3, 0];
    expect(containsDuplicate(nums)).toBe(true);
  });
});