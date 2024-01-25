"use strict";

export default function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++){
    const diff = target - nums[i];
    if (map.has(diff)) {
      return [map.get(diff), i];
    }
    map.set(nums[i], i);
  }
}

// intuitive solution
// export default function twoSum(nums, target) {
//   for (let i = 0; i < nums.length; i++){
//     for (let j = i + 1; j < nums.length; j++){
//       if (nums[i] + nums[j] === target){
//         return [i, j]
//       }
//     }
//   }
// }