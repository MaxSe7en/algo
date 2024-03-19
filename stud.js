let drawNumbers = [1, 4, 9, 5, 0];
let numbers = [6, 6, 6, 4, 7]; //[2, 2, 1, 1, 3];
let expectedResults = [
  "Quintuple", // examples  [1,1,1,1,1]  [5,5,5,5,5]                        0
  "Quadruple", // examples  [1,2,2,2,2]  [2,3,3,3,3] occ = 4                        1
  "A Pair", // examples  [2,2,1,6,8]  [4,4,6,7,8] occ = 2                       2
  "Triple Pair", // examples  [2,2,1,1,1]  [4,4,6,6,6] occ = 2 & occ = 3                        3
  "Triple", // examples [6,6,6,4,7] [8,8,8,4,2] occ = 3                       4
  "Two Pairs", //examples [2,2,1,1,3] [4,4,6,6,8] occ = 2 & occ = 2                       5
  "Streak", // examples [1,2,3,4,5] [4,5,6,7,8] [6,7,8,9,0]                       6
  "Lose Cards", //examples [2,4,6,9,1]                        7
  "Half Streak", // examples [1,2,5] occ = 1                        8
  "Pair", // examples [2,2,1,6,8] [4,4,6,7,8] occ = 2                       9
  "Odd Odd", //examples [1,3] [7,3] just the first items of draw number
  "Even Even", //examples [2,4] [4,8] just the first items of draw number
  "Odd Even", //examples [2,3] [7,4] just the first items of draw number
  "Even Odd", //examples [6,3] [0,3] just the first items of draw number
];

function stud(drawNumbers) {
  let obj = {};
  let stud = returnExpectResults(returnCountOfNumbers(drawNumbers), drawNumbers);
  let firstThree = switcher(arraySlicer(drawNumbers, 0, 3))
  let middleThree = switcher(arraySlicer(drawNumbers, 1, 4))
  let lastThree = switcher(arraySlicer(drawNumbers, 2, 5))
  let firstTwo = OddEven(arraySlicer(drawNumbers, 0, 2))

  obj = {
    stud,
    firstThree,
    middleThree,
    lastThree,
    firstTwo
  }

  console.log(obj);
  return obj;
}

// stud([1, 2, 3, 4, 6]); //[2,2,1]
// function to check if the drawNumber meets any expectedResults
function checker(drawNumbers){
  
}

function returnCountOfNumbers(drawNumbers) {
  let count = {};
  drawNumbers.forEach((item) => {
    if (count[item]) {
      count[item] += 1;
    } else {
      count[item] = 1;
    }
  });
  return count;
}

function returnExpectResults(occurrence, drawNumbers) {
  let values = sortNumbersInArray(Object.values(occurrence), "asc");
  let b = [];
  let sorted = JSON.stringify(values);
  console.log("sorted", sorted);
  if (sorted === '[5]'){
    b.push(expectedResults[0]);
  }
  if (sorted === '[1,4'){
    b.push(expectedResults[1]);
  }
  if (sorted === '[1,1,1,2]'){
    b.push(expectedResults[2]);
  }
  if (sorted === '[2,3]'){
    b.push(expectedResults[3]);
  }
  if (sorted === '[1,1,3]'){
    b.push(expectedResults[4]);
  }
  if (sorted === '[1,2,2]'){
    b.push(expectedResults[5]);
  }
  if (sorted === '[1,1,1,1,1]'){
    if (isStreak(drawNumbers)){
      b.push(expectedResults[6]);
    } else {
      b.push(expectedResults[7]);
    }
  }
  return b;
  switch (sorted) {
    case "[5]":
      b.push(expectedResults[0]);
      break;
    case "[1,4]":
      b.push(expectedResults[1]);
      break;
    case "[1,1,1,2]":
      b.push(expectedResults[2]);
      break;
    case "[2,3]":
      b.push(expectedResults[3]);
      break;
    case "[1,1,3]":
      b.push(expectedResults[4]);
      break;
    case "[1,2,2]":
      b.push(expectedResults[5]);
      break;
    case "[1,1,1,1,1]":
      if (isStreak(drawNumbers)) {
        b.push(expectedResults[6]);
      } else {
        b.push(expectedResults[7]);
      }
      break;
    default:
      return null;
  }
  return b;
}

console.log(returnExpectResults(returnCountOfNumbers([1,1,1,1,1]), [1,1,1,1,1]));
// function to slice draw number to return 3 numbers
function arraySlicer(drawNumbers, from, to) {
  return drawNumbers.slice(from, to);
}


function switcher(drawNumbers) {
  let values = sortNumbersInArray(Object.values(returnCountOfNumbers(drawNumbers)), "asc");
  let b = [];
  let sorted = JSON.stringify(values);

  switch (sorted) {
    case "[3]":
      b.push(expectedResults[4]);
      break;
    case "[1,1,1]":
      if (isStreak(drawNumbers)) {
        b.push(expectedResults[6]);
        break;
      } else if (isHalfStreak(drawNumbers)) {
        b.push(expectedResults[8]);
        break;
      } else {
        b.push(expectedResults[7]);
        break;
      }
    case "[1,2]":
      b.push(expectedResults[9]);
      break;

  }
  return b;
}


function sortNumbersInArray(drawNumbers, order = "asc") {
  if (order === "desc") {
    return drawNumbers.sort((a, b) => b - a);
  } else {
    return drawNumbers.sort((a, b) => a - b);
  }
}

function isStreak(array) {
  let streak = array.every((_, i, arr) => {
    if (i === arr.length - 1) return true;
    return arr[i] + 1 === arr[i + 1] || arr[i] + 9 === arr[arr.length - 1];
  });
  return streak;
}

function isHalfStreak(array) {
  let streak = sortNumbersInArray(array).some((_, i, arr) => {
    return arr[i] + 1 === arr[i + 1] || arr[i] + 9 === arr[arr.length - 1];
  });
  return streak;
}


function OddEven(drawNumber) {
  let final = "";
  drawNumber.forEach((item) => {
    if (item % 2 === 0) {
      final += "Even ";
    } else {
      final += "Odd ";
    }
  });
  return [final.trim()];
}

// OddEven([4, 3]);

// console.log(
//   sortNumbersInArray([1, 2, 3], "asc").every((_, i, arr) => {
//     if (i === arr.length - 1) return true;

//     return arr[i] + 1 === arr[i + 1];
//   })
// );

// let a = 0;
// [2, 2, 1, 1, 3].forEach((item, ind, arr) => {
//   if (arr[ind] === arr[ind + 1]) a += 1;
//   // return a;
// });
// console.log(a);

// function multiplyDrawNumbers(drawNumbers) {
//   let digits = drawNumbers.reduce((acc, curr) => curr + acc, 1);
//   return digits;
// }

// function _stud(drawNumbers) {
//   let digits = [...new Set(drawNumbers)];

//   if (digits.length === 1) {
//     return expectedResults[0];
//   } else if (digits.length === 2) {
//     return expectedResults[1];
//   }
// }

// decipherDrawNumbers(numbers);
// decipherDrawNumbers([2, 2, 1, 1, 3]);
// decipherDrawNumbers([2, 2, 1, 1, 1]);


// console.log(switcher(arraySlicer(drawNumbers, 0, 3)))
// console.log(switcher(arraySlicer(drawNumbers, 1, 4)))
// console.log(switcher(arraySlicer(drawNumbers, 2, 5)))

// let occ = returnCountOfNumbers([4, 4, 6, 6, 8]);
// console.log(occ);

// function returnExpectResults(occurence, drawNumbers) {
//   let values = sortNumbersInArray(Object.values(occurence), "asc");
//   // values.sort((a, b) => a - b);
//   // console.log(values, occurence)
// let b = []
//   let sorted = JSON.stringify(values);
//   console.log(sorted)
//   switch (sorted) {
//     case "[5]":
//       b.push(expectedResults[0])
//       break
//       // return expectedResults[0];
//       case "[1,4]":
//       b.push(expectedResults[1])

//       // return expectedResults[1];
//     case "[1,1,1,2]":
//       b.push(expectedResults[1])

//       // return expectedResults[2];
//     case "[2,3]":
//       b.push(expectedResults[3])

//       // return expectedResults[3];
//     case "[1,1,3]":
//       b.push(expectedResults[4])

//       // return expectedResults[4];
//     case "[1,2,2]":
//       b.push(expectedResults[5])

//       // return expectedResults[5];
//     case "[1,1,1,1,1]":
//       if (isStreak(drawNumbers)) {
//       b.push(expectedResults[6])
//         // return expectedResults[6];
//       } else {
//       b.push(expectedResults[7])
//         // return expectedResults[7];
//       }

//     // case "[3]":
//     //   b.push(expectedResults[4])

//       // return expectedResults[4];
//     case "[1,1,1]":
//       if (isHalfStreak(drawNumbers)) {
//         b.push(expectedResults[8])
//         // return expectedResults[8];
//       }else {
//         b.push(expectedResults[7])
//         // return expectedResults[7];
//       }

//     default:
//       return b;
//   }
// }


// [1, 3, 2, 4, 5];

// function decipherDrawNumbers(drawNumbers) {
//   console.log(drawNumbers);
//   // console.log(acc, curr)
//   let quints = [...new Set(drawNumbers)]; //length is 1
//   let remove = drawNumbers
//     .sort()
//     .filter((item) => item !== Math.min(...drawNumbers));
//   let quads = [...new Set(remove)]; //length is 2

//   let aPair = [...new Set(drawNumbers)]; //length is 4
//   let triplePair = [...new Set(drawNumbers)]; //length is 2
//   let triple = [...new Set(drawNumbers)]; //length is 3
//   let twoPairs = [...new Set(drawNumbers)]; //length is 3
//   let _g = drawNumbers.filter((drawNumber, i) => drawNumber === twoPairs[i]);
//   let ui = drawNumbers.filter((drawNumber, i) => drawNumber === triple[i]);

//   // console.log(_g);
//   // console.log(ui);
//   // console.log(twoPairs);
//   // console.log(triple);
//   // console.log("quads", quads);
//   // console.log("triplePair", triplePair);
// }
