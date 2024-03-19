const data = [
    {D: 2}, 
    {T: 5},
    {A: 2},
    {T: 1},
    {D: 5},
    {T: 3},
    {A: 3},
  ];
  let grid = [];
  let colIndex = 0;
  const values = ['D', 'T', 'A'];
  let prevColIndex = 0;
  let prevCount = 0;
//   data.forEach(item => {

//     const value = Object.keys(item)[0];
//     let count = item[value];
  
//     if (value === 'A') {
//       count += prevCount;
//     }
  
//     for (let i = 0; i < count; i++) {
//       if (!grid[i]) {
//         grid[i] = Array(values.length).fill('');
//       }
      
//       if (value === 'A') {
//         // console.log('prevColIndex', prevColIndex)
//         grid[i][prevColIndex - 1] = value; 
//       } else {
//         grid[i][prevColIndex] = value;
//       }
//     }
  
//     if (value !== 'A') {
//       prevColIndex++;
//     }
  
//     prevCount = count;
  
//   });
// const colFilledRow = Array(values.length).fill(0); 

// data.forEach(item => {

//   const value = Object.keys(item)[0];
//   let count = item[value];

//   if (value === 'A') {
//     count += prevCount; 
//   }

//   for (let i = 0; i < count; i++) {

//     if (!grid[i]) {
//       grid[i] = Array(values.length).fill('');
//     }

//     const rowIndex = colFilledRow[colIndex];
//     if (!grid[rowIndex]) {
//         grid[rowIndex] = Array(values.length).fill(''); // Initialize row
//       }
//     if (value === 'A') {
//       grid[rowIndex][colIndex] = value;
//       colFilledRow[colIndex]++;

//     } else {
//       grid[i][colIndex] = value;
//     }

//   }

//   if (value !== 'A') {
//     colIndex++;
//   }

//   prevCount = count;

// });

let prevValue = null;

data.forEach(item => {

  let value = Object.keys(item)[0];
  let count = item[value];

  if (value === 'A') {
    value = prevValue;
  }

  for (let i = 0; i < count; i++) {
    
    if (!grid[i]) {
      grid[i] = Array(values.length).fill('');
    }

    const colIndex = values.indexOf(value);
    grid[i][colIndex] = value;

  }

  prevValue = value;

});
// data.forEach(item => {

//     const value = Object.keys(item)[0];
//     let count = item[value];
  
//     if (value === 'A' && colIndex > 0) {
//       // If 'A' follows another value, 
//       // fill same column as previous
//       colIndex--; 
//     }
  
//     for (let i = 0; i < count; i++) {
//       if (!grid[i]) {
//         grid[i] = Array(values.length).fill(''); 
//       }
//       grid[i][colIndex] = value;
//     }
  
//     if (value !== 'A') {
//       colIndex++; // Move to next column
//     }
  
//   });
//   data.forEach(item => {
  
//     const value = Object.keys(item)[0];
//     const count = item[value];
  
//     if (value === 'A') {
//       // Fill A in the next available column
//       for (let i = 0; i < count; i++) {
//         if (!grid[i]) {
//           grid[i] = Array(values.length).fill('');
//         }
//         grid[i][prevColIndex + 1] = value; 
//         console.log("a previous-------------->", [prevColIndex + 1])
//         console.log("gird-------------->", grid[i])
//         console.log("value-------------->", value)
//         console.log("a-------------->", grid[i][prevColIndex + 1])
//       }
//       console.log("a", count)
  
//     } else {
//       // Fill other values in current column  
//       for (let i = 0; i < count; i++) {
//         if (!grid[i]) {
//           grid[i] = Array(values.length).fill('');
//         }
//         grid[i][prevColIndex] = value;
//         console.log("val", grid[i][prevColIndex])
//       }
//       prevColIndex++; 
//     }
  
//   });
//     data.forEach(item => {
//     const value = Object.keys(item)[0];
//     const count = item[value];
  
//     for (let i = 0; i < count; i++) {
//       if (!grid[i]) {
//         grid[i] = Array(values.length).fill(''); 
//        console.log("cols",grid[i])

//       }
//     //   console.log(value)
//       if (value === 'A') {
//        console.log("cols",colIndex)
//         // grid[i][colIndex] = value;
//         grid[i][colIndex-1] = value; 
//       }else{
//         grid[i][colIndex] = value;
//       }
//     }
  
//     colIndex++;
//   });
  
  console.log(grid);

//   let grid = [];
//   let col = 0;

//   for (let obj of data) {
//     let key = Object.keys(obj)[0];
//     let value = obj[key];
  
//     for (let i = 0; i < value; i++) {
//       let row = ['', '', '', ''];
//       row[col] = key;
//       grid.push(row);
//     }
  
//     if (key === 'A') {
//       col--; 
//     } else {
//       col++;
//     }
//   }
  
//   console.log(grid);