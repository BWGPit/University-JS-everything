
// Esercizio: Verificare se un grafo diretto è aciclico (DAG - Directed Acyclic Graph)
// Un grafo contiene un ciclo se, partendo da un nodo, è possibile tornare allo stesso nodo seguendo gli archi.

class Graph {
    constructor() {
        this.adjList = new Map();
    }

    addNode(node) {
        if (!this.adjList.has(node)) {
            this.adjList.set(node, []);
        }
    }

    addEdge(from, to) {
        if (!this.adjList.has(from)) this.addNode(from);
        if (!this.adjList.has(to)) this.addNode(to);
        this.adjList.get(from).push(to);
    }

    getNeighbors(node) {
        return this.adjList.get(node) || [];
    }

    getNodes() {
        return Array.from(this.adjList.keys());
    }
}

/**
 * Funzione per verificare se un grafo è aciclico.
 * Utilizza una DFS (Depth First Search).
 * 
 * Per rilevare un ciclo in un grafo diretto, dobbiamo tenere traccia non solo dei nodi visitati globalmente,
 * ma anche dei nodi attualmente nello "stack di ricorsione" (il percorso corrente).
 * Se incontriamo un nodo che è già nello stack di ricorsione corrente, abbiamo trovato un ciclo (back edge).
 * 
 * @param {Graph} graph 
 * @returns {boolean} true se il grafo è aciclico, false se contiene cicli.
 */
function isAcyclic(graph) {
    const visited = new Set();        // Nodi visitati in generale (per non ripeterli)
    const recursionStack = new Set(); // Nodi nel percorso corrente

    const nodes = graph.getNodes();

    for (const node of nodes) {
        if (!visited.has(node)) {
            // Se troviamo un ciclo partendo da questo nodo, ritorniamo false (non è aciclico)
            if (hasCycleDFS(graph, node, visited, recursionStack)) {
                return false; 
            }
        }
    }

    return true; // Nessun ciclo trovato
}

function hasCycleDFS(graph, node, visited, recursionStack) {
    visited.add(node);
    recursionStack.add(node);

    const neighbors = graph.getNeighbors(node);

    for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
            if (hasCycleDFS(graph, neighbor, visited, recursionStack)) {
                return true;
            }
        } else if (recursionStack.has(neighbor)) {
            // Se il vicino è già stato visitato ED è nello stack di ricorsione corrente,
            // significa che abbiamo trovato un arco che torna indietro a un antenato -> CICLO!
            return true;
        }
    }

    // Rimuoviamo il nodo dallo stack di ricorsione prima di tornare su (backtracking)
    recursionStack.delete(node);
    return false;
}

// --- TEST ---

const dagGraph = new Graph();
// Grafo Aciclico: A -> B -> C
dagGraph.addEdge('A', 'B');
dagGraph.addEdge('B', 'C');

console.log("Il grafo dagGraph è aciclico?", isAcyclic(dagGraph)); // Dovrebbe essere true


const cyclicGraph = new Graph();
// Grafo Ciclico: A -> B -> C -> A
cyclicGraph.addEdge('A', 'B');
cyclicGraph.addEdge('B', 'C');
cyclicGraph.addEdge('C', 'A');

console.log("Il grafo cyclicGraph è aciclico?", isAcyclic(cyclicGraph)); // Dovrebbe essere false

const complexCyclic = new Graph();
// A -> B -> C
// A -> D -> E -> B (Ciclo qui? No, A->B e A->D->E->B sono due percorsi diversi che arrivano a B, ma non tornano indietro)
// Ma se aggiungiamo E -> A diventa ciclico.
complexCyclic.addEdge('A', 'B');
complexCyclic.addEdge('B', 'C');
complexCyclic.addEdge('A', 'D');
complexCyclic.addEdge('D', 'E');
complexCyclic.addEdge('E', 'B'); // Questo non crea ciclo
console.log("Il grafo complexCyclic (senza ritorno) è aciclico?", isAcyclic(complexCyclic)); // true

complexCyclic.addEdge('E', 'A'); // Ora aggiungiamo il ciclo E -> A
console.log("Il grafo complexCyclic (con ritorno E->A) è aciclico?", isAcyclic(complexCyclic)); // false
