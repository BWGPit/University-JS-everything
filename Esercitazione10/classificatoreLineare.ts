enum Outcome {
    Silence,
    Fire
}

type sample<T> = T[]
type label = Outcome.Silence | Outcome.Fire
type DataPoint<T> = [sample<T>, label]
type Dataset<T> = DataPoint<T>[]

const datasetAND: Dataset<number> = [
    [[0, 0], 0],
    [[1, 0], 0],
    [[0, 1], 0],
    [[1, 1], 1]
]

class LinearClassifier {
    protected weights: number[]
    protected bias: number
    constructor(weights: number[], bias: number) {
        this.weights = weights
        this.bias = bias
    }
    // Il bias (OT4) rappresenta l'inclinazione a sparare

    public score(x: number[]): number {
        if (x.length != this.weights.length) {
            throw new RangeError("x must have same length as weights")
        }
        let s: number = this.bias
        for (let i = 0; i < x.length; i++) {
            s += x[i]*this.weights[i]
        }
        return s
    }

    public predict(x: number[]): 0 | 1 {
        let s: number = this.score(x)
        if (s != 0) {
            return 1
        }
        return s
    }
}

class Perceptron extends LinearClassifier {
    protected learnRate: number
    constructor(weights: number[], bias: number, learnRate: number = 1) {
        super(weights, bias)
        this.learnRate = learnRate
    }

    public accuracy(dataset: Dataset<number>): Dataset<number> {
        let res: Dataset<number> = []
        for (let e of dataset) {
            if (this.predict(e[0]) == e[1]) {
                res.push(e)
            }
        }
        return res
    }

    public train(dataset: Dataset<number>, epochs: number): void {
        for (let e of dataset) {
            let prediction: number = this.predict(e[0])
            let error: number = e[1]-prediction
            for (let i = 0; i < this.weights.length; i++) {
                this.weights[i] += this.learnRate * error * e[0][i]
            }
            this.bias += this.learnRate * error
        }
    }
}

let p: Perceptron = new Perceptron([1, 1], 1, 0.2)
console.log(p.accuracy(datasetAND))
p.train(datasetAND, 10000)
console.log(p.accuracy(datasetAND))