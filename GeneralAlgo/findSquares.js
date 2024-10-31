function findSquare(points) {
    const pointsSet = new Set(points.map(p => `${p[0]},${p[1]}`)); // Use a set for quick lookup
  
    // Helper function to check if a point exists in the set
    function pointExists(x, y) {
      return pointsSet.has(`${x},${y}`);
    }
  
    // For each point, check for possible squares in all four orientations
    for (let i = 0; i < points.length; i++) {
      const [x, y] = points[i];
  
      // Check all 4 possible squares with (x, y) as one of the corners
      const potentialSquares = [
        [[x + 1, y], [x, y + 1], [x + 1, y + 1]],  // Right and up
        [[x + 1, y], [x, y - 1], [x + 1, y - 1]],  // Right and down
        [[x - 1, y], [x, y + 1], [x - 1, y + 1]],  // Left and up
        [[x - 1, y], [x, y - 1], [x - 1, y - 1]],  // Left and down
      ];
  
      // Check each potential square
      for (const square of potentialSquares) {
        const [p1, p2, p3] = square;
        if (pointExists(p1[0], p1[1]) && pointExists(p2[0], p2[1]) && pointExists(p3[0], p3[1])) {
          return true; // Found a square
        }
      }
    }
  
    return false; // No square found
  }
  
  // Example usage:
  const points = [[0, 0], [2, 0], [1, 1], [0, -1], [-1, -1], [0, 2], [0, 1], [1, 0]];
  console.log(findSquare(points)); // Output: true