// PRIMA PARTE: GNode, GEdge, Graph

class GNode {
    label: number | string;

    constructor(label: number | string) {
        this.label = label;
    }
}

class GEdge {
    from: GNode;
    to: GNode;

    constructor(from: GNode, to: GNode) {
        this.from = from;
        this.to = to;
    }
}

class Graph {
    nodes: GNode[];
    edges: GEdge[];

    constructor(nodes: GNode[], edges: GEdge[]) {
        this.nodes = nodes;
        this.edges = edges;
    }
}

// SECONDA PARTE: connected function

function connected(graph: Graph): boolean {
    if (graph.nodes.length === 0) return true;

    const visited = new Set<GNode>();
    const queue: GNode[] = [graph.nodes[0]];
    visited.add(graph.nodes[0]);

    while (queue.length > 0) {
        const current = queue.shift()!;

        for (const edge of graph.edges) {
            const neighbor = edge.from === current ? edge.to : edge.to === current ? edge.from : null;
            if (neighbor && !visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }

    return visited.size === graph.nodes.length;
}

// TERZA PARTE: State, Transition, Automata

class State extends GNode {
    final: boolean;

    constructor(label: number | string, final: boolean = false) {
        super(label);
        this.final = final;
    }
}

class Transition extends GEdge {
    evt: (event: any) => boolean;
    act?: () => void;

    constructor(from: State, to: State, evt: (event: any) => boolean, act?: () => void) {
        super(from, to);
        this.evt = evt;
        this.act = act;
    }
}

class Automata extends Graph {
    states: State[];
    transitions: Transition[];
    initial: State;
    state: State;

    constructor(states: State[], transitions: Transition[], initial: State) {
        super(states, transitions);
        this.states = states;
        this.transitions = transitions;
        this.initial = initial;
        this.state = initial;
    }

    init(): void {
        this.state = this.initial;
    }

    done(): boolean {
        return this.state.final;
    }

    step(event: any): boolean {
        for (const transition of this.transitions) {
            if (transition.from === this.state && transition.evt(event)) {
                if (transition.act) {
                    transition.act();
                }
                this.state = transition.to;
                return true;
            }
        }
        return false;
    }
}

// QUARTA PARTE: Parser

class Parser extends Automata {
    constructor(states: State[], transitions: Transition[], initial: State) {
        super(states, transitions, initial);
    }

    accept(s: string): boolean {
        this.init();

        for (let i = 0; i < s.length; i++) {
            if (!this.step(s[i])) {
                return false;
            }
            if (this.done() && i < s.length - 1) {
                return false;
            }
        }

        return this.done();
    }
}