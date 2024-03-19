// function generateGrid(values, counts) {
//     const grid = [];

//     values.forEach((key) => {
//       const count = counts[key];
//       const col = Array(count).fill(key);
//       grid.push(col);
//     });

//     const maxLength = Math.max(...grid.map(col => col.length));

//     grid.forEach((col) => {
//       while (col.length < maxLength) {
//         col.push("");
//       }
//     });

//     const transposedGrid = grid[0].map((_, i) => grid.map((row) => row[i]));

//     return transposedGrid;
//   }

//   const values = ["D", "T", "A"];
  const counts1 = { "0D": 2, "0T": 5, "0A": 2, "1D": 3, "1T": 5, "1A": 2 };
//   Object.keys(counts1).forEach((key) => {
//     const count = counts1[key];
//     const col = Array(count).fill(key);
//     grid.push(col);
//     });
//     const maxLength = Math.max(...grid.map(col => col.length));
//     grid.forEach((col) => {
//         while (col.length < maxLength) {
//             col.push("");
//         }
//     });

console.log(Object.keys(counts1))

//   const resultingGrid = generateGrid(values, counts);
//   console.log(resultingGrid)
//   resultingGrid.forEach(row => console.log(row.join(" ")));

function generateGrid(values, counts) {
    const grid = [];
    const maxRows = Math.max(...Object.values(counts).map(arr => arr.length));
    const maxCols = values.length;
  
    for (let row = 0; row < maxRows; row++) {
      const gridRow = [];
      for (let col = 0; col < maxCols; col++) {
        const currentChar = values[col];
        const countArray = counts[currentChar];
        const countIndex = countArray ? Math.min(row, countArray.length - 1) : 0;
        const countValue = countArray ? countArray[countIndex] : 0;
        
        if (currentChar === "A") {
          if (col === 0) {
            gridRow.push(currentChar);
            countArray[countIndex]--;
          } else {
            gridRow.push("");
          }
        } else {
          if (countValue > 0) {
            gridRow.push(currentChar);
            countArray[countIndex]--;
          } else {
            gridRow.push("");
          }
        }
      }
      grid.push(gridRow);
    }
  
    return grid;
  }
  
  const values = ["D", "T", "A"];
  const counts = { D: [2, 3], T: [5], A: [2] };
  
  const grid = generateGrid(values, counts1); [1,2,1,0,1]
  console.log(grid);
  


// const values = ["D", "T", "A"];
// const counts = { D: [2, 3], T: [5], A: [2] };
//i want a function that takes counts and returns a grid of this form
//it works first with the first item in each key in generating the grid and then it comes back for the second item in each key in generating the grid
//NB: that A is the only letter that cannot be in a column by itself it always goes into the column that preceeds it


grs = [
    ["D", "T", "D"],
    ["D", "T", "D"],
    ["", "T", "D"],
    ["", "T", ""],
    ["", "T",""],
    ["", "A",""],
    ["", "A",""],
]

grid = [
    ["D", "T", "D", "T"],
  
    ["D", "T", "D", "T"],
  
    ["", "T", "D", "T"],
  
    ["", "T", "D", ""],
  
    ["", "T", "D", ""],
  
    ["", "A", "", ""],
  
    ["", "A", "", ""],
  ];


const resultingGrid = generateGrid(values, counts);
console.log(resultingGrid);
resultingGrid.forEach((row) => console.log(row.join(" ")));
