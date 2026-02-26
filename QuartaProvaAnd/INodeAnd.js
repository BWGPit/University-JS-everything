class INode {
    constructor([a, b]) {
        this.a = a; 
        this.b = b; 
        this.left = null;
        this.right = null; 
    }

    add(n) {
        if (n.a < this.a || (n.a === this.a && n.b < this.b)) {
            if (this.left === null) this.left = n;
            else this.left.add(n);
        } else {
            if (this.right === null) this.right = n;
            else this.right.add(n);
        }
    }

    findValue(x) {
        if (x >= this.a && x <= this.b) return this;
        let res = null;
        if (this.left) res = this.left.findValue(x);
        if (!res && this.right) res = this.right.findValue(x);
        
        return res;
    }

    get maxd() {
        let l = this.left ? this.left.maxd : 0;
        let r = this.right ? this.right.maxd : 0;
        return 1 + Math.max(l, r); 
    }

    get mind() {
        let l = this.left ? this.left.mind : 0;
        let r = this.right ? this.right.mind : 0;
        if (!this.left) return 1 + r;
        if (!this.right) return 1 + l;
        return 1 + Math.min(l, r); 
    }
}

class YetAnotherAlbero {
    constructor() {
        this.root = null; 
        this.size = 0;
    }

    addInterval([a, b]) {
        const newNode = new INode([a, b]);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.root.add(newNode);
        }
        this.size++;
    }
}