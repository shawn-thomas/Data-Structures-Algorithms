import groupAnagrams from "./groupAnagrams";

describe('Group Anagrams', () => {
  it('should group anagrams together', () => {
    const strs = ["eat","tea","tan","ate","nat","bat"];
    const result = groupAnagrams(strs);
    const expected = [['eat', 'tea', 'ate'],['tan', 'nat'],['bat']]
    expect(result).toEqual(expected);
  });

  it('should handle an empty string', () => {
    const strs = [""];
    const result = groupAnagrams(strs);
    const expected = [[""]];
    expect(result).toEqual(expected);
  });

  it('should handle a single character string', () => {
    const strs = ["a"];
    const result = groupAnagrams(strs);
    const expected = [["a"]];
    expect(result).toEqual(expected);
  });

  it('should handle an array with multiple anagram groups', () => {
    const strs = ["bat", "tab", "cat", "act", "rat", "tar"];
    const result = groupAnagrams(strs);
    const expected = [["bat", "tab"], ["cat", "act"], ["rat", "tar"]];
    expect(result).toEqual(expected);
  });

  it('should handle an array with no anagrams', () => {
    const strs = ["apple", "banana", "orange", "kiwi"];
    const result = groupAnagrams(strs);
    const expected = [["apple"], ["banana"], ["orange"], ["kiwi"]];
    expect(result).toEqual(expected);
  });

});
