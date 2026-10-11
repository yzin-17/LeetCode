function generateMatrix(n: number): number[][] {
    const total = Math.pow(n, 2);
    const arr = Array.from(new Array(n), () => new Array(n).fill(0));
    const direction = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let i = 0;
    let j = 0;
    let curDir = 0;
    for (let count = 1; count <= total; count++) {
        arr[i][j] = count;
        const nextI = i + direction[curDir][0];
        const nextJ = j + direction[curDir][1];
        const next = arr[nextI]?.[nextJ];
        if (next === undefined || next > 0) {
            curDir = (curDir + 1) % 4;
            i = i + direction[curDir][0];
            j = j + direction[curDir][1];
        } else {
            i = nextI;
            j = nextJ;
        }
    }
    return arr;
};

console.log(generateMatrix(3));
console.log(generateMatrix(1));