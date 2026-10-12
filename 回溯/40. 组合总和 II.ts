function combinationSum2(candidates: number[], target: number): number[][] {
    candidates.sort((a, b) => a - b);
    const res: number[][] = [];
    const fun = (sum: number, startIdx: number, arr: number[]) => {
        if (sum === target) {
            res.push([...arr]);
            return;
        }
        if (sum > target) {
            return;
        }
        for (let i = startIdx; i < candidates.length; i++) {
            if (i > startIdx && candidates[i] === candidates[i - 1]) {
                continue;
            }
            const cur = candidates[i];
            arr.push(cur);
            fun(sum + cur, i + 1, arr);
            arr.pop();
        }
    }
    fun(0, 0, []);
    return res;
};

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));