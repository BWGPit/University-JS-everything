class BTreeNode {
    value: number;
    left: BTreeNode | null;
    right: BTreeNode | null;
    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    public insert(value: number): void {
        if (!this) return;
        if (value < this.value) {
            if (this.left === null) {
                this.left = new BTreeNode(value);
            } else {
                this.left.insert(value);
            }
        } else {
            if (this.right === null) {
                this.right = new BTreeNode(value);
            } else {
                this.right.insert(value);
            }
        }
    }

    public isLeaf(): boolean {
        return this.left === null && this.right === null;
    }

    public minmax(): [number, number] {
        let min = this.value;
        let max = this.value;
        if (this.left !== null) {
            const [leftMin, leftMax] = this.left.minmax();
            min = Math.min(min, leftMin);
            max = Math.max(max, leftMax);
        }
        if (this.right !== null) {
            const [rightMin, rightMax] = this.right.minmax();
            min = Math.min(min, rightMin);
            max = Math.max(max, rightMax);
        }
        return [min, max];
    }

    public count(): number {
        let count = 1;
        if (this.left !== null) {
            count += this.left.count();
        }
        if (this.right !== null) {
            count += this.right.count();
        }
        return count;
    }
}