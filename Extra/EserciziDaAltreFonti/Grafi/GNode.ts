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

function isDAG(graph: Graph): boolean {
    let nodes = [...graph.nodes];
    let edges = [...graph.edges];

    while (nodes.length > 0) {
        // Find leaf nodes (nodes with no outgoing edges)
        const leafNodes = nodes.filter(
            (node) => !edges.some((edge) => edge.from === node)
        );

        // If no leaf nodes exist and graph is not empty, it's cyclic
        if (leafNodes.length === 0) {
            return false;
        }

        // Remove one leaf node
        const leafNode = leafNodes[0];
        nodes = nodes.filter((node) => node !== leafNode);

        // Remove all incoming edges to this leaf node
        edges = edges.filter((edge) => edge.to !== leafNode);
    }

    return true;
}