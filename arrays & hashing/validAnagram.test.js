"use strict";

import validAnagram from "./validAnagram";

describe('validAnagram', () => {
  it('returns true for valid anagrams', () => {
    const s1 = 'listen';
    const t1 = 'silent';
    expect(validAnagram(s1, t1)).toBe(true);

    const s2 = 'heart';
    const t2 = 'earth';
    expect(validAnagram(s2, t2)).toBe(true);
  });

  it('returns false for invalid anagrams', () => {
    const s1 = 'hello';
    const t1 = 'world';
    expect(validAnagram(s1, t1)).toBe(false);

    const s2 = 'abc';
    const t2 = 'xyz';
    expect(validAnagram(s2, t2)).toBe(false);
  });

  it('handles different lengths', () => {
    const s = 'abcd';
    const t = 'abc';
    expect(validAnagram(s, t)).toBe(false);
  });

  it('handles empty strings', () => {
    const s = '';
    const t = '';
    expect(validAnagram(s, t)).toBe(true);
  });

  it('ignores spaces and is case-insensitive', () => {
    const s = 'Race car';
    const t = 'Car race';
    expect(validAnagram(s, t)).toBe(true);
  });
});
