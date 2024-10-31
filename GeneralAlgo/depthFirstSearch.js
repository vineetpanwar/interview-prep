function dfsRecursive(graph, node, visited = new Set()) {
    if (!visited.has(node)) {
        console.log(node);
        visited.add(node);
        graph[node].forEach(neighbor => {
            dfsRecursive(graph, neighbor, visited);
        });
    }
}

// Example usage:
const graph = {
    'A': ['B', 'C'],
    'B': ['D', 'E'],
    'C': ['F'],
    'D': [],
    'E': ['F'],
    'F': []
};

dfsRecursive(graph, 'A');
