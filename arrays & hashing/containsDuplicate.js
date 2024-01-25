"use strict";

export default function containsDuplicate(nums) {
  const numSet = new Set(nums);
  return numSet.size !== nums.length;
};


// var containsDuplicate = function(nums) {
//   let obj = {};
//   for (let num of nums){
//       if (obj[num] === undefined) {
//           obj[num] = 1;
//       } else {
//           obj[num]++;
//       }
//   }

//   for (let val in obj){
//       if (obj[val] > 1){
//           return true;
//       }
//   }
//   return false;
// };