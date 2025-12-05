
// Definizione delle classi per il Grafo
// Utilizziamo una Lista di Adiacenza per rappresentare il grafo, in quanto è più efficiente per le visite.

class Graph {
    constructor() {
        // Mappa dove la chiave è il nodo (o la sua etichetta) e il valore è un array di nodi adiacenti
        this.adjList = new Map();
    }

    // Aggiunge un nodo al grafo
    addNode(node) {
        if (!this.adjList.has(node)) {
            this.adjList.set(node, []);
        }
    }

    // Aggiunge un arco orientato da 'from' a 'to'
    addEdge(from, to) {
        if (!this.adjList.has(from)) this.addNode(from);
        if (!this.adjList.has(to)) this.addNode(to);
        
        this.adjList.get(from).push(to);
    }

    // Ritorna i vicini di un nodo
    getNeighbors(node) {
        return this.adjList.get(node) || [];
    }

    // Ritorna tutti i nodi
    getNodes() {
        return Array.from(this.adjList.keys());
    }
}

// --- 1. Depth First Search (DFS) - Visita in Profondità ---
// La DFS esplora il grafo andando il più in profondità possibile lungo ogni ramo prima di tornare indietro (backtracking).
// Può essere implementata in modo ricorsivo o iterativo (usando uno stack).

// Implementazione Ricorsiva
function dfsRecursive(graph, startNode, visited = new Set()) {
    console.log("DFS (Ricorsiva) visitando:", startNode);
    visited.add(startNode);

    const neighbors = graph.getNeighbors(startNode);
    for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
            dfsRecursive(graph, neighbor, visited);
        }
    }
}

// Implementazione Iterativa
function dfsIterative(graph, startNode) {
    const visited = new Set();
    const stack = [startNode]; // Lo stack simula la call stack della ricorsione

    console.log("--- Inizio DFS Iterativa ---");

    while (stack.length > 0) {
        const currentNode = stack.pop(); // Prendi l'ultimo elemento inserito (LIFO)

        if (!visited.has(currentNode)) {
            console.log("DFS (Iterativa) visitando:", currentNode);
            visited.add(currentNode);

            // Aggiungi i vicini allo stack. 
            // Nota: li aggiungiamo in ordine inverso se vogliamo mantenere lo stesso ordine di visita della ricorsiva (opzionale)
            const neighbors = graph.getNeighbors(currentNode);
            for (let i = neighbors.length - 1; i >= 0; i--) {
                stack.push(neighbors[i]);
            }
        }
    }
}

// --- 2. Breadth First Search (BFS) - Visita in Ampiezza ---
// La BFS esplora il grafo livello per livello. Visita tutti i vicini del nodo corrente prima di passare ai vicini dei vicini.
// Utilizza una Coda (Queue).

function bfs(graph, startNode) {
    const visited = new Set();
    const queue = [startNode]; // La coda gestisce l'ordine di visita (FIFO)
    
    visited.add(startNode); // Marchiamo subito come visitato quando lo mettiamo in coda

    console.log("--- Inizio BFS ---");

    while (queue.length > 0) {
        const currentNode = queue.shift(); // Rimuovi il primo elemento (FIFO)
        console.log("BFS visitando:", currentNode);

        const neighbors = graph.getNeighbors(currentNode);
        for (const neighbor of neighbors) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }
}


// --- ESEMPIO DI UTILIZZO ---

const myGraph = new Graph();
// Creiamo un grafo di esempio:
// A -> B, C
// B -> D
// C -> E
// D -> F
// E -> F
// F -> (nessuno)

myGraph.addEdge('A', 'B');
myGraph.addEdge('A', 'C');
myGraph.addEdge('B', 'D');
myGraph.addEdge('C', 'E');
myGraph.addEdge('D', 'F');
myGraph.addEdge('E', 'F');

console.log("--- Esecuzione DFS Ricorsiva ---");
dfsRecursive(myGraph, 'A');

console.log("\n--- Esecuzione DFS Iterativa ---");
dfsIterative(myGraph, 'A');

console.log("\n--- Esecuzione BFS ---");
bfs(myGraph, 'A');
