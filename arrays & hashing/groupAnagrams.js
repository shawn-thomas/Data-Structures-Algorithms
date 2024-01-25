"use strict";

// export default function groupAnagrams(strs) {
//   const map = {};
//   for (let s of strs){
//     const key = s.split("").sort().join("");
//     if (map[key]){
//       map[key].push(s);
//     } else {
//       map[key] = [s];
//     }
//   }
//   console.log("result --->: ", Object.values(map))
//   return Object.values(map);
// }

export default function groupAnagrams(strs) {
  const map = new Map();

  for (let s of strs) {
    const key = s.split("").sort().join("");

    if (map.has(key)) {
      map.get(key).push(s);
    } else {
      map.set(key, [s]);
    }
  }
  
  return [...map.values()];
}
