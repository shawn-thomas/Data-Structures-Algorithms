"use strict";

export default function validAnagram(s, t) {
  if (s.length !== t.length) return false;

  let sDict = strToDict(s);
  let tDict = strToDict(t);

  for (let char in sDict){
    if (sDict[char] !== tDict[char]){
      return false;
    }
  }

  return true;
}

function strToDict(str) {
  const strLowercased = str.toLowerCase();
  let dict = {};

  for (let char of strLowercased){
    if (!dict[char]) dict[char] = 1;
    else dict[char]++;
  }
  return dict;
}

// another solution
// export default function validAnagram(s, t) {
//   const sSorted = sLower.split("").sort().join();
//   const tSorted = tLower.split("").sort().join();

//   return sSorted === tSorted;
// }