function bfs(graph, start) {
    const visited = new Set();
    const queue = [start];

    while (queue.length > 0) {
        const node = queue.shift(); // Dequeue the first node
        if (!visited.has(node)) {
            console.log(node);
            visited.add(node);
            graph[node].forEach(neighbor => {
                if (!visited.has(neighbor)) {
                    queue.push(neighbor); // Enqueue unvisited neighbors
                }
            });
        }
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

bfs(graph, 'A');
