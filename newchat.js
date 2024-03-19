// const data = [
//     { D: 2 },
//     { T: 5 },
//     { A: 2 },
//     { T: 1 },
//     { D: 5 },
//     { T: 3 },
//     { A: 3 },
// ];

// // Initialize an empty grid
// const numRows = data.reduce((max, item) => {
//     const letterCount = Object.values(item)[0];
//     return Math.max(max, letterCount);
// }, 0);

// const numCols = data.length;
// const grid = Array.from({ length: numRows }, () => Array(numCols).fill(''));

// // Fill the grid based on the data
// let currentCol = 0;
// for (const item of data) {
//     const letter = Object.keys(item)[0];
//     const letterCount = item[letter];

//     for (let i = 0; i < letterCount; i++) {
//         grid[i][currentCol] = letter;
//     }

//     currentCol++;
// }

// // Print the grid
// for (const row of grid) {
//     console.log(row);
// }
// const data = [
//     { D: 2 },
//     { T: 5 },
//     { A: 2 },
//     { T: 1 },
//     { D: 5 },
//     { T: 3 },
//     { A: 3 },
// ];

// // Initialize an empty grid
// const numRows = data.reduce((max, item) => {
//     const letterCount = Object.values(item)[0];
//     return Math.max(max, letterCount);
// }, 0);

// const numCols = data.length;
// const grid = Array.from({ length: numRows }, () => Array(numCols).fill(''));

// // Fill the grid based on the data
// let currentCol = 0;
// let previousLetter = null;

// for (const item of data) {
//     const letter = Object.keys(item)[0];
//     // console.log(letter)
//     const letterCount = item[letter];
//     // console.log(letterCount)
//     if (previousLetter && letter !== previousLetter) {
//         currentCol++;
//     }

//     for (let i = 0; i < letterCount; i++) {
//         grid[i][currentCol] = letter;
//         console.log("col",currentCol, letter)
//         console.log("current", letterCount)
//     }

//     previousLetter = letter;
// }

// // Print the grid
// for (const row of grid) {
//     console.log(row);
// }

// const data = [
//     { D: 2 },
//     { T: 5 },
//     { A: 2 },
//     { T: 1 },
//     { D: 5 },
//     { T: 3 },
//     { A: 3 },
// ];

// // Initialize an empty grid
// const numRows = data.reduce((max, item) => {
//     const letterCount = Object.values(item)[0];
//     return Math.max(max, letterCount);
// }, 0);

// const numCols = data.length;
// const grid = Array.from({ length: numRows }, () => Array(numCols).fill(''));

// // Fill the grid based on the data
// let currentCol = 0;
// let previousLetter = null;
// let previousLetterCount = 0;

// for (const item of data) {
//     const letter = Object.keys(item)[0];
//     const letterCount = item[letter];

//     if (previousLetter && letter !== previousLetter) {
//         currentCol++;
//         previousLetterCount = 0;
//     }

//     for (let i = 0; i < letterCount; i++) {
//         grid[i + previousLetterCount][currentCol] = letter;
//     }

//     previousLetter = letter;
//     previousLetterCount += letterCount;
// }

// // Print the grid
// for (const row of grid) {
//     console.log(row);
// }

const data = 
    [
        {
            "A": 3
        },
        {
            "T": 2
        },
        {
            "A": 2
        },
        {
            "T": 2
        },
        {
            "D": 7
        },
        {
            "A": 1
        },
        {
            "D": 4
        },
        {
            "A": 2
        },
        {
            "T": 2
        },
        {
            "D": 1
        },
        {
            "A": 2
        },
        {
            "T": 2
        },
        {
            "D": 5
        },
        {
            "T": 1
        },
        {
            "D": 2
        },
        {
            "A": 7
        },
        {
            "D": 2
        },
        {
            "A": 10
        }
    
];


// function any(data) {
//     let numRows = 0;
//     let prevLetter = null;
//     const maxCount = data.reduce((max, item) => {
//         const letterCount = Object.values(item)[0];
//         return Math.max(max, letterCount);
//       }, 0)
//     let consecutiveSeQuenceCount = 0;


//     data.forEach((item, index) => {
//         const letter = Object.keys(item)[0];
        
//         const nextLetter = index < data.length-1 ? Object.keys(data[index+1])[0] : null;
//         const _nextLetter = index < data.length-2 ? Object.keys(data[index+2])[0] : null;
        
//         // console.log("next", _k)
//         if (nextLetter === "A" && _nextLetter === letter){
//           // console.log("A")
//           let _k = index < data.length-1 ? Object.values(item)[0] + Object.values(data[index+1])[0] + Object.values(data[index+2])[0] : 0
//           if((Object.values(item)[0] + Object.values(data[index+1])[0] + Object.values(data[index+2])[0])> _k){

//               consecutiveSeQuenceCount = Object.values(item)[0] + Object.values(data[index+1])[0] + Object.values(data[index+2])[0]
//           }
//         }else if(nextLetter === "A"){
//         let _u = index < data.length-1 ? Object.values(item)[0] + Object.values(data[index+1])[0] : 0

//             if((Object.values(item)[0] + Object.values(data[index+1])[0]) > _u){
//             consecutiveSeQuenceCount = Object.values(item)[0] + Object.values(data[index+1])[0]
//             }
//         }
        
        
        
        
        
//         if (consecutiveSeQuenceCount > maxCount){
//           numRows = consecutiveSeQuenceCount;
//         //   console.log("numRows", numRows)
//         }else{
//             // console.log("numRows")
//           numRows = maxCount;
//         }
//     })  
//     // console.log("consecutiveSeQuenceCount", consecutiveSeQuenceCount)
//     // console.log("maxCount", maxCount)
//     // console.log("numRows", numRows)



//     data.forEach((item, index) => {
//       const letter = Object.keys(item)[0];
//       let count = Object.values(item)[0];
//       let letterCount = Object.values(item)[0];
      
//       const nextLetter = index < data.length-1 ? Object.keys(data[index+1])[0] : null;
//       const nextLetterCount = index < data.length-1 ? Object.values(data[index+1])[0] : null;
//       const _nextLetter = index < data.length-2 ? Object.keys(data[index+2])[0] : null;
//       const _nextLetterCount = index < data.length-2 ? Object.values(data[index+2])[0] : null;
//     //   console.log("next", _nextLetter)
//       if (nextLetter === "A" && _nextLetter === letter){
//         // console.log("A")
//         // console.log("letter", letter)
//         count = Object.values(item)[0] + Object.values(data[index+1])[0] + Object.values(data[index+2])[0];
//       }else if(nextLetter === "A"){
//         count = Object.values(item)[0] + Object.values(data[index+1])[0];
//         // console.log("_letter", letter)
//       }
      
//     //   console.log(count)

//     //   console.log("numRows", numRows)


//     //   if(count > letterCount){
//         // console.log("me")
//         //   for(let i = 0; i < count; i++) {
//             // console.log(letter)
//             // console.log(`Prev letter: ${prevLetter}`);
//             // console.log(`Current letter: ${letter}`);    
//             // console.log(`Next letter: ${nextLetter}`);
//             for(let j = 0; j < letterCount; j++) {
//                 // console.log("j", letter)
//             }
//             if(nextLetter){
    
//                 for(let k = 0; k < nextLetterCount; k++) {
//                     // console.log("k", nextLetter)
//                 }
//             }
//             if(_nextLetter){
//                 for(let l = 0; l < _nextLetterCount; l++) {
//                     // console.log("l", _nextLetter)
//                 }
//             }
    
//             // prevLetter = letter;
//         //   }
//     //   }else{
//     //     for(let i = 0; i < count; i++) {

//     //         console.log("you", letter)
//     //     }
//     //   }

//     });
//   }
// console.log(any(data))




let g = [
  ["D", "T", "A", "T", "D", "T", "A"],
  ["D", "T", "A", "", "D", "T", "A"],
  ["", "T", "", "", "D", "T", "A"],
  ["", "T", "", "", "D", "", ""],
  ["", "T", "", "", "D", "", ""],
  ["", "", "", "", "D", "", ""],
  ["", "", "", "", "D", "", ""],
  ["", "", "", "", "D", "", ""],
  ["", "", "", "", "D", "", ""],
];
let f = [
  ["D", "T", "D", "T"],
  ["D", "T", "D", "T"],
  ["", "T", "D", "T"],
  ["", "T", "D", "A"],
  ["", "T", "D", "A"],
  ["", "A", "D", "A"],
  ["", "A", "D", ""],
  ["", "T", "D", ""],
  ["", "", "D", ""],
];

let maxConsecutiveChains = 0;
let currentChains = 0;



const numRows = data.reduce((max, item) => {
    const letterCount = Object.values(item)[0];
    return Math.max(max, letterCount);
  }, 0);
  
  const numCols = data.length;
  console.log("numRows", numRows)
  const grid = Array.from({ length: numRows }, () => Array(numCols).fill(""));
  console.log("grid", grid)
  let currentCol = 0;
  let previousLetter = null;
  let currentLetter = null;
  let currentLetterCount = 0;
  let remainingLetterCount = 0;
  
 
  


  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    const letter = Object.keys(item)[0];
    const letterCount = item[letter];
    const nextItem = data[i + 1];
    const nextLetter = nextItem ? Object.keys(nextItem)[0] : null;
    const _nextLetter = i < data.length-2 ? Object.keys(data[i+2])[0] : null;
    const _nextLetterCount = i < data.length-2 ? Object.values(data[i+2])[0] : null;
    if (previousLetter && letter !== previousLetter) {
      currentCol++;
      currentLetterCount = 0;
    }
  
    if (letter !== 'A') {
      currentLetter = letter;
      remainingLetterCount = letterCount;
    }
    console.log("remainingLetterCount", remainingLetterCount)
    while (remainingLetterCount > 0) {
      grid[currentLetterCount][currentCol] = currentLetter;
      currentLetterCount++;
      remainingLetterCount--;
  
      if (remainingLetterCount === 0 && nextLetter === 'A') {
        // Fill with 'A' for its count without exceeding the total count
        const aCount = Math.min(nextItem[nextLetter], numRows - currentLetterCount);
        for (let j = 0; j < aCount; j++) {
          grid[currentLetterCount][currentCol] = 'A';
        //   console.log("A", currentCol)
          currentLetterCount++;
        }
      }
    //   if (_nextLetter === letter ) {
    //     console.log("fsssssss", _nextLetterCount, currentCol)

    //     grid[currentLetterCount][currentCol] = _nextLetter;
    // //     console.log("f", _nextLetterCount)
    // //     // Fill with the letter coming after 'A' for its count without exceeding the total count
    // //     const _nextLetterCounts = Math.min(_nextLetterCount, numRows - currentLetterCount);
    // //     for (let j = 0; j < _nextLetterCounts; j++) {
    // //       grid[currentLetterCount][currentCol] = _nextLetter;
    // //       currentLetterCount++;
    // //     }
    //   }
    }
    // console.log("ufisisdisdf", letter)
    previousLetter = letter;
  }
  
  // Output the grid
  for (const row of grid) {
    // console.log(row.join(" "));
  }
  
//   function clearEmptyColumnCells(grid) {
//     // Find first empty column
//     const firstEmptyColIndex = grid[0].findIndex(c => c === '');
  
//     if(firstEmptyColIndex === -1) {
//       return grid; // no empty columns
//     }
  
//     // Clear cells in column if empty
//     return grid.map((row, i) => {
//       if(row[firstEmptyColIndex] === '') {
//         row[firstEmptyColIndex] = '';
//       } 
//       return row;
//     });
  
//   }
  
//   const clearedGrid = clearEmptyColumnCells(grid);

//   console.log(clearedGrid)
// const numRows = data.reduce((max, item) => {
//   const letterCount = Object.values(item)[0];
//   return Math.max(max, letterCount);
// }, 0);

// const numCols = data.length;
// const grid = Array.from({ length: numRows }, () => Array(numCols).fill(""));

// let currentCol = 0;
// let previousLetter = null;
// let previousLetterCount = 0;

// for (let i = 0; i < data.length; i++) {
//   const item = data[i];
//   let letter = Object.keys(item)[0];
//   let letterCount = item[letter];
//   let nextItem = data[i + 1];
//   let nextLetter = nextItem ? Object.keys(nextItem)[0] : null;

//   if (nextLetter === "A") {
//     // If the next letter is 'A', add its count to the current letter count
//     let nextLetterCount = nextItem[nextLetter];
//     letterCount += nextLetterCount;
//     i++; // Skip the next item since it has been combined with the current letter
//   }

//   if (previousLetter && letter !== previousLetter) {
//     currentCol++;
//   }

//   for (let row = 0; row < letterCount; row++) {
//     grid[row][currentCol] = letter;
//   }

//   previousLetter = letter;
// }

// // Output the grid
// for (const row of grid) {
//   console.log(row.join(" "));
// }

// // Print the grid
// for (const row of grid) {
//   // console.log(row);
// }

function reformatGrid(grid) {
  const numRows = grid.length;
  const numCols = grid[0].length;
  const newGrid = [];

  for (let col = 0; col < numCols; col++) {
    let previousChar = null;

    for (let row = 0; row < numRows; row++) {
      const currentChar = grid[row][col];

      // console.log(previousChar)
      if (currentChar === "A") {
        if (previousChar !== null) {
          newGrid[newGrid.length - 1].push("A"); // Append 'A' to the previous array
        } else {
          newGrid[newGrid.length - 1].push("A"); // Create a new array for 'A'
        }
      } else if (currentChar !== "") {
        if (!newGrid[col]) newGrid[col] = []; // Create a new array for the column if it doesn't exist
        newGrid[col].push(currentChar);
      }

      previousChar = currentChar;
    }
  }

  return newGrid;
}

function removeEmptyAlternating(arr) {
    let removing = false;
    let foundLetter = false;
  
    return arr.filter((item, index) => {
      if (item !== '') {
        foundLetter = true;
      }
  
      if (foundLetter) {
        if (item === '') {
          if (removing) {
            removing = false;
            return false;
          } else {
            removing = true;
            return true;
          }
        } else {
          removing = false;
          return true;
        }
      } else {
        return true;
      }
    });
  }

  function removeEmptyAlternating(arr) {

    let removing = false;
    let foundLetter = false;
  
    return arr.filter((item, index) => {
  
      if (item !== '') {
        foundLetter = true; 
      }
  
      if (foundLetter) {
        if (item === '') {
          if (index === 0 || arr[index-1] !== '') {
            return false; 
          }
          if (removing) {
            removing = false;
            return false;
          } else {
            removing = true;
            return true;
          }
        } else {
          removing = false;
          return true;
        }
      } else {
        return true;
      }
  
    });
  
  }

//   function removeEmptyAlternating(arr) {
//     let removing = false;
  
//     return arr.filter(item => {
//       if (item !== '') {
//         removing = true;
//         return true;
//       } else {
//         if (removing) {
//           removing = false;
//           return false;
//         } else {
//           return true;
//         }
//       }
//     });
//   }
function _filter (grid){
    let newGrid = [];
    grid.forEach((row, i) => {
       newGrid.push( removeEmptyAlternating(row));
    //    console.log(removeEmptyAlternating(row))
    })
    return newGrid;
}
// const fillEmptyColumns = (data) => {

//     const numRows = data.reduce((max, item) => {
//       return Math.max(max, Object.values(item)[0]); 
//     }, 0);
  
//     const numCols = data.length;
  
//     const grid = Array.from({ length: numRows }, () => Array(numCols).fill(""));
  
//     let currentCol = 0;
//     let previousLetter = null;
//     let currentLetter = null;
//     let filledRows = 0;
  
//     for (let i = 0; i < data.length; i++) {
      
//       const item = data[i];
//       const letter = Object.keys(item)[0];
//       const letterCount = item[letter];
  
//       if (previousLetter && letter !== previousLetter) {
//         currentCol++;
//       }
  
//       if (letter !== 'A') {
//         currentLetter = letter;
//         for (let j = 0; j < letterCount; j++) {
//           grid[j][currentCol] = currentLetter;
//         }
//       } else {
//         // Handle 'A' case  
//         const aCount = Math.min(letterCount, numRows);
//         for (let j = 0; j < aCount; j++) {
//           grid[j][currentCol] = letter;
//         }
//       }
  
//       // Fill any remaining empty rows
//       filledRows += letterCount;
//       if (filledRows < numRows) {
//         for (let j = filledRows; j < numRows; j++) {
//           grid[j][currentCol] = currentLetter;
//         }
//       }
  
//       previousLetter = letter;
  
//     }
  
//     return grid;
  
//   };
//   const grids = fillEmptyColumns(data);

console.log(grid);
console.log(_filter(grid));
// console.log(reformatGrid(grid));
// let arr = []

// for(let i =0; i<10;i++){
//     arr[i] = []
//     for(let j =0; j<10;j++){
//         // console.log(i,j)
//         arr[i][j]= i+j
//     }
// }
// console.log(arr)
// console.log(
// grid.forEach((item) => {
//   console.log(item)
//   item.map((row) => {
//     if (row === "A") {
//       console.log("A");
//     }
//   });
// });
// )



