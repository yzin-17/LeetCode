function combinationSum(candidates: number[], target: number): number[][] {
    const res: number[][] = [];
    const fun = (sum: number, start: number, arr: number[]) => {
        if (sum === target) {
            res.push([...arr]);
            return;
        }
        if (sum > target) {
            return;
        }
        for (let i = start; i < candidates.length; i++) {
            const cur = candidates[i];
            arr.push(cur);
            fun(sum + cur, i, arr);
            arr.pop();
        }
    }
    fun(0, 0, []);
    return res;
};

console.log(combinationSum([2, 3, 6, 7], 7));
console.log(combinationSum([2, 3, 5], 8));