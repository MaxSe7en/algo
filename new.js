// function checkUniquePairs(str) {
//   let pairs = {};

//   for (let i = 0; i < str.length - 1; i += 2) {
//     let pair = str.substring(i, i + 2);
//     if (!pairs[pair]) {
//       pairs[pair] = 0;
//     }
//     pairs[pair]++;
//   }

//   for (let pair in pairs) {
//     if (pairs[pair] > 1) {
//       return false;
//     }
//   }

//   return true;
// }

// const str1 = "010203";
// const str2 = "010202";
// // const matrix = ["100203", "010203"];
// // const transposeData = //[];
// //   matrix?.map((mat, i) => {
// //     // console.log("trans", mat.substring(i, 2))
// //     for (let j = 0; j < mat.length - 1; j += 2) {
// //       let pair = [mat.substring(j, j + 2)];
// //       console.log("pair", pair);
// //       // [pair];
// //     }
// //   });

// // const transposeDat = matrix.map((mat, j) =>
// //   matrix.map((item, k) => {
// //     console.log(mat);
// //     // return mat.substring(k, k + 2);
// //     let pairs = [];
// //     for (let j = 0; j < mat.length - 1; j += 2) {
// //       // let pair =
// //       pairs.push(mat.substring(j, j + 2));
// //       // console.log("pair", pair);
// //       // [pair];
// //     }
// //     return pairs;
// //   })
// // );
//                 // ["row1""row2""row3"]
// const matrix = ["100203", "010203", "090802", "030702"];

// const rows = matrix.map((mat) => {
//     let pair = [];
//     for (let j = 0; j < mat.length - 1; j += 2) {
//     pair.push(mat.substring(j, j + 2));
//     // item[ind] = pair
//     item = mat.substring(j, j + 2);
//     console.log(item);
//     // [pair];
//   }
//   return pair
// });

// console.log(rows);
// const transposeData = [];

// // Loop through columns
// for (let c = 0; c < rows[0].length; c++) {
//   // Initialize row
//   transposeData.push([]);

//   // Loop rows
//   for (let r = 0; r < rows.length; r++) {
//     // Add value to column array
//     transposeData[c].push(rows[r][c]);
//   }
// }

// console.log(transposeData);
// // let y = Array.from({ length: 5 }, () => Array.from({ length: 2 }));
// // // let x = Array.from({length: 5}, () => Array.from({length: 2}).fill(0));
// // // y[0][0] = 1;
// // // y[0][1] = 2;
// // let a = y.map((item, i) => item.map((item, ind) => {
// //     matrix?.map((mat, i) => {
// //         let pair = [];
// //         for (let j = 0; j < mat.length - 1; j += 2) {
// //              pair.push( mat.substring(j, j + 2));
// //             // item[ind] = pair
// //             item = mat.substring(j, j + 2)
// //             console.log(item)
// //             // [pair];
// //         }
// //         console.log("pair", pair);
// //     })
// // }));

// // let y = new Array(5).fill(0).map(() => new Array(2).fill(0));

// // matrix.forEach((mat, i) => {
// //   let pair = new Array(Math.floor(mat.length / 2));

// //   for (let j = 0; j < mat.length - 1; j += 2) {
// //     let firstCode = mat.charCodeAt(j);
// //     let secondCode = mat.charCodeAt(j + 1);

// //     pair[j/2] = firstCode + '-' + secondCode;
// //   }

// //   y[i][0] = pair[0];
// //   y[i][1] = pair[1];
// // });
// // console.log(y);
// // matrix?.map((row, idx) => {
// //     console.log("row", row[i]);
// //     row[i]
// // }));
// // console.log("gggg", transposeData, transposeDat);

// //   console.log(checkUniquePairs(str1)); // true
// //   console.log(checkUniquePairs(str2)); // false
// // console.log(checkUniquePairs(str3));

// const matrix = arr.map((item: any) => Array.from(item, Number));
const matrices = ["100203", "010203", "090802", "030702", "030802", "030704"];
const matrix = [
  ["10", "02", "03"],
  ["01", "02", "03"],
  ["09", "08", "02"],
  ["03", "07", "02"],
  ["03", "08", "02"],
  ["03", "07", "04"],
];
// const rows = matrices.map((mat) => {
//   let pair = [];
//   for (let j = 0; j < mat.length - 1; j += 2) {
//     pair.push(mat.substring(j, j + 2));
//   }
//   return pair;
// });

const rows = [];

for (const mat of matrices) {
  const numPairs = Math.floor((mat.length - 1) / 2);
  const pairs = new Array(numPairs);

  for (let j = 0; j < mat.length - 1; j += 2) {
    const a = mat.charCodeAt(j);
    const b = mat.charCodeAt(j + 1);
    console.log(a, b);
    pairs[j / 2] = String.fromCharCode(a) + String.fromCharCode(b);
  }

  rows.push(pairs);
}

console.log("matrixcccccccccccc", matrix);
console.log("rows", rows);
const transposeData = matrix[0]?.map((_, i) => matrix?.map((row) => row[i]));
