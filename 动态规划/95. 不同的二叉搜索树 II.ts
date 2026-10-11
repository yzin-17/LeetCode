class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

// 递归
function generateTrees(n: number): Array<TreeNode | null> {
    const recur = (num: number, res: any) => {
        if (num === 0) {
            return [null]
        }
            let tree: Array<TreeNode | null> = [];
            for (let j = 1; j <= num; j++) {
                const left = recur(j-1, []);
                const right = recur(num - j, []);
                tree = [...left, ...right];
            }
            tree.unshift(new TreeNode(num));
            res.push(tree);
        return res;
    }

    const ret = recur(n, []);
    return ret;
};

[null, 'r2']
'r2': [null, 'r1']
'r1': [null, null]



console.log(generateTrees(3));