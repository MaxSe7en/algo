// // const a = {
// //   1: {
// //     "4v5": [2, "Tiger"],
// //     "3v5": [2, "Tiger"],
// //     "3v4": [1, "Dragon"],
// //     "1v5": [2, "Tiger", 1, "Dragon"],
// //   },
// //   8: {
// //     "4v5": [2, "Tiger"],
// //     "3v5": [2, "Tiger"],
// //     "3v4": [2, "Tiger"],
// //     "1v4": [3, "Tie", 2, "Tiger"],
// //     "1v3": [2, "Tiger"],
// //   },
// // };
// // const manyTableTabs = 1;
// // const multiplier = 1;
// // const unit = 0.1;

// // function filterEmptyValues(selections) {
// //   const result = {};

// //   for (const key in selections) {
// //     if (selections.hasOwnProperty(key)) {
// //       const value = selections[key];
// //       if (Array.isArray(value)) {
// //         // Filter out non-string items from the array
// //         const filteredArray = value.filter((item) => typeof item !== "string");

// //         if (filteredArray.length > 0) {
// //           result[key] = filteredArray;
// //         }
// //       }
// //     }
// //   }

// //   return result;
// // }

// // function createBetOutputsForManyTable(inputData) {
// //   const outputArray = [];
// //   console.log(a);

// //   for (const lotteryId in inputData) {
// //     const keyData = inputData[lotteryId];

// //     const allSelections = [];
// //     let totalBets = 0;
// //     let a;
// //     for (const rowName in keyData) {
// //       // const rowItems = keyData[rowName];
// //       const rowItems =
// //         manyTableTabs === 0 ? keyData[rowName] : [filterEmptyValues(keyData)];
// //       if (rowItems.length > 0) {
// //         console.log("rowItems====>", rowItems);
// //         allSelections.push(rowItems);
// //         a = rowItems.map((rowItem) => {
// //           console.log("rowItem i", rowItem);
// //           return Object.values(rowItem)
// //             .filter((item) => typeof item !== "number")
// //             .flat();
// //         });
// //         console.log("a =====>", a, a[0].length);
// //         // manyTableTabs === 0
// //         //   ? (totalBets = rowItems.length)
// //         //   : (totalBets = rowItems.map((rowItem) =>
// //         //       Object.values(rowItem)
// //         //         .filter((item) => typeof item !== "number")
// //         //         .flat()
// //         //     )[0].length);
// //         if (manyTableTabs === 0) {
// //           totalBets = rowItems.length;
// //         } else {
// //           totalBets = rowItems.map((rowItem) =>
// //             Object.values(rowItem)
// //               .filter((item) => typeof item !== "number")
// //               .flat()
// //           )[0].length;
// //         }
// //       } else {
// //         allSelections.push([]);
// //       }
// //     }

// //     const userSelections = Object.values(keyData)
// //       .map((rowName) => `${rowName}`)
// //       .join(" | ");

// //     const output = {
// //       uid: 1,
// //       allSelections: allSelections,
// //       userSelections: userSelections,
// //       multiplier: multiplier,
// //       totalBets,
// //       gameId: 99,
// //       totalBetAmt: a[0].length * multiplier * unit,
// //       unitStaked: unit,
// //       betId: "sss", //manyTableBetIds[lotteryId],
// //       lottery_id: +lotteryId,
// //       game_label: manyTableTabs === 0 ? "Fixed place" : "Dragon/Tiger/Tie",
// //       bet_date: "ss", //getDate("" + new Date()),
// //       bet_time: "", //getTimeTwo(new Date()),
// //     };

// //     outputArray.push(output);
// //   }

// //   return outputArray;
// // }

// // console.log(createBetOutputsForManyTable(a));

// // function generateCombinations(array1, array2, array3) {
// //   const combinations = [];

// //   for (const element1 of array1) {
// //     for (const element2 of array2.filter(el => el !== element1)) {
// //       for (const element3 of array3.filter(el => el !== element1 && el !== element2)) {
// //         const combination = [element1, element2, element3];
// //         combinations.push(combination);
// //       }
// //     }
// //   }

// //   return combinations;
// // }

// // const array1 =  [1,]//2,3,4,5,6,7,8,9,0];
// // const array2 =  [2,3,4]//[1,2,3,4,5,6,7,8,9,0];
// // const array3 =  [3,4,5,6,7,8,9,0]//[1,2,3,4,5,6,7,8,9,0];

// // const allCombinations = generateCombinationsf([1], [2], [1]);
// // console.log(allCombinations.length, allCombinations);

// // function generateCombinationsf(...arrays) {

// //   const results = [];

// //   generateCombinationsHelper(arrays, 0, [], results);

// //   return results;

// // }

// // function generateCombinationsHelper(arrays, idx, currCombo , results) {

// //   if(idx === arrays.length) {
// //     results.push([...currCombo]);
// //     return;
// //   }

// //   for(let i = 0; i < arrays[idx].length; i++) {

// //     let elem = arrays[idx][i];

// //     if(!currCombo.includes(elem)) {

// //       currCombo.push(elem);
// //       generateCombinationsHelper(arrays, idx + 1, currCombo, results);
// //       currCombo.pop();

// //     }

// //   }

// // }

// function getRows(userSelectionsObj, start, end) {
//   const rows = {};

//   for (let i = start; i <= end; i++) {
//     let selectionsRow = "";
//     /**
//      * Get the key name for the current row number
//      */
//     switch (i) {
//       case 1:
//         selectionsRow = "firstRow";
//         break;
//       case 2:
//         selectionsRow = "secondRow";
//         break;
//       case 3:
//         selectionsRow = "thirdRow";
//         break;
//       case 4:
//         selectionsRow = "fourthRow";
//         break;
//       case 5:
//         selectionsRow = "fifthRow";
//         break;
//       case 6:
//         selectionsRow = "sixthRow";
//         break;
//       case 7:
//         selectionsRow = "seventhRow";
//         break;
//       case 8:
//         selectionsRow = "eighthRow";
//         break;
//       case 9:
//         selectionsRow = "ninthRow";
//         break;
//       case 10:
//         selectionsRow = "tenthRow";
//         break;
//     }

//     /**
//      * If the row exists in the object, add it to the result
//      */
//     if (userSelectionsObj[selectionsRow]) {
//       rows[selectionsRow] = userSelectionsObj[selectionsRow];
//     }
//   }

//   return rows;
// }

// // Example usage:
const obj = {
  firstRow: [1, 6, 7],
  secondRow: [],
  thirdRow: [3],
  fourthRow: [],
  fifthRow: [5],
  sixthRow: [10],
  seventhRow: [10],
  eighthRow: [10],
  ninthRow: [10],
  tenthRow: [10],
};

// // function formatFixedPlaceSelections(userSelectionsObj){

// //  return Object.values(userSelectionsObj).join("|").replaceAll("||", "|_|");
// // };
// function formatFixedPlaceSelections(userSelectionsObj) {

//   let result = '';

//   for (let userSelection in userSelectionsObj) {

//     let values = userSelectionsObj[userSelection];

//     if (values.length === 0) {
//       values = '_';
//     } else {
//       values = values.join(',');
//     }

//     result += `${values} | `;

//   }

//   return result.slice(0, -3);

// }
// console.log(formatFixedPlaceSelections(obj))
// console.log(Object.values(getRows(obj, 1, 5)).flat())
// // const rows1_5 = getRows(obj, 1, 5);
// // // Returns first 5 rows

// // const rows6_10 = getRows(obj, 6, 10);
// // // Returns last 5 rows
// // const filteredRows = getRows(obj, 1, 5);
// // console.log(rows1_5);

// function generateCombinations(arrays, maxCombinations){

//   const results = [];

//   generateCombinationsHelper(arrays, 0, [], results, 0, maxCombinations);

//   return results;

// }

// function generateCombinationsHelper(arrays, idx, currCombo, results, currCount, maxCombinations) {

//   if(currCount === maxCombinations) {
//     return;
//   }

//   if(idx === arrays.length) {

//     results.push([...currCombo]);

//     currCount++;
//     return;
//   }

//   for(let i = 0; i < arrays[idx].length; i++) {

//     let elem = arrays[idx][i];

//     if(!currCombo.includes(elem)) {

//       currCombo.push(elem);

//       generateCombinationsHelper(arrays, idx + 1, currCombo, results, currCount, maxCombinations);

//       currCombo.pop();

//     }

//   }

// }
// function generateCombinations(arrays, length) {

//   const results = [];

//   generateCombinationsHelper(arrays, 0, [], results, length);

//   return results;

// }

// function generateCombinationsHelper(arrays, idx, currCombo, results, length) {

//   // Base case
//   if(currCombo.length === length) {
//     results.push([...currCombo]);
//     return;
//   }

//   if(idx === arrays.length) {
//     return;
//   }

//   for(let i = 0; i < arrays[idx].length; i++) {

//     let elem = arrays[idx][i];

//     if(!currCombo.includes(elem)) {

//       currCombo.push(elem);
//       generateCombinationsHelper(arrays, idx + 1, currCombo, results, length);
//       currCombo.pop();

//     }

//   }

// }

function generateCombinationss(arrays, length) {
  const results = [];

  generateCombinationsHelper(arrays, 0, [], results, length);

  return results;
}

function generateCombinationsHelper(arrays, idx, currCombo, results, length) {
  if (currCombo.length === length) {
    // Only push if no repeats within combo
    if (new Set(currCombo).size === currCombo.length) {
      results.push([...currCombo]);
    }

    return;
  }

  if (idx === arrays.length) {
    return;
  }

  for (let i = 0; i < arrays[idx].length; i++) {
    let elem = arrays[idx][i];

    // Allow repeats between arrays but not within current combo
    if (!currCombo.includes(elem)) {
      currCombo.push(elem);
      generateCombinationsHelper(arrays, idx, currCombo, results, length);
      currCombo.pop();
    }
  }
}

// function generateCombinations(arrays, pairLength) {

//   const results = [];

//   for(let i = 0; i < arrays.length; i++) {
//     for(let j = i + 1; j < arrays.length; j++) {

//       generatePairs(arrays[i], arrays[j], results, pairLength);

//     }
//   }

//   return results;

// }

// function generatePairs(arr1, arr2, results, length) {

//   for(let x of arr1) {
//     for(let y of arr2) {

//       if(x !== y) {

//         let pair = [x, y];

//         if(pair.length === length) {
//           results.push(pair);
//         }

//       }

//     }
//   }

// }

// Usage
// generateCombinations([[1,2,3],[4,5,6]], 2);

// Returns:
// [[1,4], [1,5], [1,6], [2,4], [2,5], [2,6], [3,4], [3,5], [3,6]]

function generateCombinationx(arrays, pairLength) {
  const results = [];

  for (let i = 0; i < arrays.length; i++) {
    for (let j = i + 1; j < arrays.length; j++) {
      let pairs = [];

      generatePairs(arrays[i], arrays[j], pairs, pairLength);

      results.push(...pairs);
    }
  }

  return results;
}

function generatePairsx(arr1, arr2, pairs, length) {
  const combos = [];

  for (let x of arr1) {
    for (let y of arr2) {
      let combo = [x, y];

      if (combo.length === length) {
        combos.push(combo);
      }
    }
  }

  pairs.push(...combos);
}

function generateCombinations(arrays, pairLength) {
  let results = [];

  for (let i = 0; i < arrays.length; i++) {
    for (let j = i + 1; j < arrays.length; j++) {
      let pairs = [];

      generatePairs(arrays[i], arrays[j], pairs, pairLength);

      results.push(...pairs);
    }
  }

  return results;
}

function generatePairs(arr1, arr2, pairs, length) {
  for (let x of arr1) {
    for (let y of arr2) {
      if (x !== y) {
        pairs.push(
          [
            x < 10 ? x.toString().padStart(2, "0") : x,
            y < 10 ? y.toString().padStart(2, "0") : y,
          ].join("")
        );
      }
    }
  }
}

// Usage:

let arrays = [
  // [1, 2, 3],
  // [4, 5, 6],
  // [7, 8, 10],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
];
let result = generate4Combinations(arrays, 2);

console.log(result.toString()); // [[1,4], [1,5], [1,6], [2,4], [2,5] ... ]
// Returns:
// [[1,4], [1,5], [1,6], [2,4], [2,5], [2,6], [3,4], [3,5], [3,6]]
// // Usage:
// const array1 = [1, 2, 3];
// const array2 = [3, 4, 5];
// const array3 = [5, 6, 7];

// const combinations = generateCombinations([array1, array2, array3], 2);
// [[1,2], [1,3], [1,4] ...] - all length 2 combinations
const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const array4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const array5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const array6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const array7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const array8 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const array9 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const array10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// const allCombinations = generateCombinations([array1, array2, array3, ], 2);
const allCombinations = generate4Combinations(
  [
    array1,
    array2,
    array3,
    array4,
    array5,
    array6,
    array7,
    array8,
    array9,
    array10,
  ],
  4
);

// function uniq(a) {
//   var seen = {};
//   return a.filter(function(item) {
//       return seen.hasOwnProperty(item) ? false : (seen[item] = true);
//   });
// }
console.log(allCombinations.length);
// console.log(allCombinations.length,[...new Set(allCombinations)] ,allCombinations);
// console.log(allCombinations.length,uniq(allCombinations));

function generate3Combinations(arrays, pairLength) {
  let results = [];

  for (let i = 0; i < arrays.length; i++) {
    for (let j = i + 1; j < arrays.length; j++) {
      for (let k = i + 1; k < arrays.length; k++) {
        let pairs = [];

        generate3Pairs(arrays[i], arrays[j], arrays[j], pairs, pairLength);

        results.push(...pairs);
      }
    }
  }

  return results;
}

function generate3Pairs(arr1, arr2, arr3, pairs, length) {
  for (let x of arr1) {
    for (let y of arr2) {
      for (let z of arr3) {
        if (x !== y && y !== z && x !== z) {
          pairs.push(
            [
              x < 10 ? x.toString().padStart(2, "0") : x,
              y < 10 ? y.toString().padStart(2, "0") : y,
              z < 10 ? z.toString().padStart(2, "0") : z,
            ].join("")
          );
        }
      }
    }
  }
}

function generate4Combinations(arrays) {
  let results = [];

  for (let i = 0; i < arrays.length; i++) {
    for (let j = i + 1; j < arrays.length; j++) {
      for (let k = i + 1; k < arrays.length; k++) {
        for (let l = i + 1; l < arrays.length; l++) {
          let pairs = [];

          generate4Pairs(arrays[i], arrays[j], arrays[k], arrays[l], pairs);

          results.push(...pairs);
        }
      }
    }
  }

  return results;
}

function generate4Pairs(arr1, arr2, arr3, arr4, pairs) {
  for (let x of arr1) {
    for (let y of arr2) {
      for (let z of arr3) {
        for (let w of arr4) {
          if (x !== y && y !== z && x !== z && x !== w && y !== w && z !== w) {
            pairs.push(
              [
                x < 10 ? x.toString().padStart(2, "0") : x,
                y < 10 ? y.toString().padStart(2, "0") : y,
                z < 10 ? z.toString().padStart(2, "0") : z,
                w < 10 ? w.toString().padStart(2, "0") : w,
              ].join("")
            );
          }
        }
      }
    }
  }
}
