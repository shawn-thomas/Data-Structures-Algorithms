"use strict";

export default function productExceptSelf(nums) {
  let res = [];
  let left = 1;
  let right = 1;

  for (let i = 0; i < nums.length; i++){
    res[i] = left;
    left = left * nums[i];
  }

  for (let j = nums.length - 1; j >= 0; j--){
    res[j] = right * res[j];
    right = right * nums[j];
  }

  return res;
}