function solution(blocks) {
    const n = blocks.length;

    const prefixSums = Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
        prefixSums[i] = prefixSums[i - 1] + blocks[i - 1];
    }
   

   let maxDistance = 0;
   for (let i = 1; i < n; i++) {
    const leftSum = prefixSums[i];
    const rightSum = prefixSums[n] - prefixSums[i];
    const distance = Math.abs(leftSum - rightSum);
    maxDistance = Math.max(maxDistance, distance);
   }
   return maxDistance;
}

const blocks1 = [2, 6, 8, 5];
console.log(solution(blocks1));

const blocks2 = [1, 5, 5, 2, 6];
console.log(solution(blocks2));