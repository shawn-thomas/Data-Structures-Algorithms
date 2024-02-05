export default function twoSum(nums, target) {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high){
    if (nums[low] + nums[high] > target){
      high--;
    } else if (nums[low] + nums[high] < target){
      low--;
    } else {
      return [low + 1, high + 1]
    }
  }
}
