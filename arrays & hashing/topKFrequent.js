"use strict";

export default function topKFrequent(nums, k) {
  const seen = {};

  for (let num of nums){
    if (seen[num] === undefined){
      seen[num] = 1;
    } else {
      seen[num]++;
    }
  }

  const bucket = [];
  for (let i = 0; i <= nums.length; i++){
    bucket.push([]);
  }

  for (let key in seen){
    let idx = seen[key];
    bucket[idx].push(key);
  }

  let res = [];
  for (let i = bucket.length - 1; i >= 0; i--){
    if (bucket[i] === 0){
      continue;
    } else {
      res = [...res, ...bucket[i]];
    }
  }
  return res.slice(0, k);
}