export default function longestConsecutive(nums) {
  let set = new Set(nums);
  let max = 0;
  for (let num of set){
    if (set.has(num - 1)){
      continue;
    }

    let currNum = num;
    let currMax = 1;
    while (set.has(currNum + 1)){
      currNum++;
      currMax++;
    }
    max = Math.max(max, currMax);
  }
  return max
}