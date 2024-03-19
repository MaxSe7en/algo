function generateGrid(values, counts) {
    const grid = [];
    let col = 0;
    
    for (const [value, count] of Object.entries(counts)) {
      for (let i = 0; i < count[0]; i++) {
        if (!grid[i]) {
          grid[i] = [];
        }
        grid[i][col] = value;
      }
      col++;
    }
    
    col = 0;
    
    for (const [value, count] of Object.entries(counts)) {
        console.log(count[0])
      if (count[1]) {
        for (let i = 0; i < count[1]; i++) {
          if (!grid[i]) {
            grid[i] = [];
          }
          grid[i][col] = value;
        }
        col++;
      }
    }
    
    return grid;
  }

  const values = ["D", "T", "A"]; 
const counts = {D: [2, 3], T: [5], A: [2]};

const grid = generateGrid(values, counts);

console.log(grid)