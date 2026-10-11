// 有三种砝码重量 2g,3g,7g，现在给出 weight，问最少用几个砝码可以称出 weight
// 公司：虾皮
// 回溯
function getWeight(weight: number) {
    const helper = (rest: number, count: number): number => {
        if (rest === 0) {
            return count;
        }
        if (rest < 0) {
            return Number.MAX_SAFE_INTEGER;
        }
        const count1 = helper(rest - 2, count + 1);
        const count2 = helper(rest - 3, count + 1);
        const count3 = helper(rest - 7, count + 1);
        return Math.min(count1, count2, count3);
    }
    return helper(weight, 0);
}

console.log(getWeight(23));

// 动态规划
// dp[i]：称 i g 最少用多少个砝码
// dp[0] = 0
// dp[i < 0] = Infinity
// dp[i] = min(dp[i-2], dp[i-3], dp[i-7]);
function getWeight1(weight: number) {
    const dp: number[] = new Array(weight).fill(0);
    for (let i = 1; i <= weight; i++) {
        dp[i] = Math.min(dp[i - 2] ?? Infinity, dp[i - 3] ?? Infinity, dp[i - 7] ?? Infinity) + 1;
    }
    return dp[weight];
}

console.log(getWeight1(100));
console.log(getWeight1(1));

