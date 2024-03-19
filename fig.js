//   function determineResults(drawnumber) {
//     const matchingResults = [];

//     if (drawnumber.every(num => num === drawnumber[0])) {
//       matchingResults.push(expectedResults[0]);
//     }

//     if (hasPairs(drawnumber, 2)) {
//       matchingResults.push(expectedResults[1]);
//     }

//     console.log("matching results", hasPairs(drawnumber, 1))
//     if (hasPairs(drawnumber, 1)) {
//       matchingResults.push(expectedResults[2]);
//     }

//     if (hasPairs(drawnumber, 2) && hasPairs(drawnumber, 3)) {
//       matchingResults.push(expectedResults[3]);
//     }

//     if (hasPairs(drawnumber, 3)) {
//       matchingResults.push(expectedResults[4]);
//     }

//     if (hasPairs(drawnumber, 2)) {
//       matchingResults.push(expectedResults[5]);
//     }

//     if (isConsecutive(drawnumber)) {
//       matchingResults.push(expectedResults[6]);
//     }

//     if (matchingResults.length === 0) {
//       matchingResults.push(expectedResults[7]);
//     }

//     return matchingResults;
//   }

// //   function hasPairs(drawnumber, numPairs) {
// //     const occurrences = {};

// //     for (const num of drawnumber) {
// //       occurrences[num] = (occurrences[num] || 0) + 1;
// //     }

// //     const pairsCount = Object.values(occurrences).filter(count => count >= 2).length;
// //     // console.log("pairs count", pairsCount)
// //     // console.log("pairs count", pairsCount)
// //     console.log("pairs count", occurrences)
// //     return pairsCount === numPairs;
// //   }

// function hasPairs(drawnumber, numPairs) {
//     const occurrences = {};

//     for (const num of drawnumber) {
//       occurrences[num] = (occurrences[num] || 0) + 1;
//     }

//     const pairsCount = Object.values(occurrences).filter(count => count >= 2).length;

//     return pairsCount >= numPairs;
//   }

//   function isConsecutive(drawnumber) {
//     const sortedNumbers = [...drawnumber].sort((a, b) => a - b);

//     for (let i = 1; i < sortedNumbers.length; i++) {
//       if (sortedNumbers[i] !== sortedNumbers[i - 1] + 1) {
//         return false;
//       }
//     }

//     return true;
//   }

function returnCountOfNumbers(drawNumbers, occ) {
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

// const drawNumbers = [1, 1, 1, 4, 4]; // Replace this with your input array

// function callme(drawNumbers) {
//   if (Object.values(returnCountOfNumbers(drawNumbers))[0] === 5) {
//     console.log("Quintuple");
//     console.log("Quadruple");
//     console.log("A Pair");
//     console.log("Triple");
//   }
//   if (hasKeyWithValue(returnCountOfNumbers(drawNumbers), 4) === true) {
//     // console.log("Quintuple");
//     // console.log("Quadruple");
//     // console.log("A Pair");
//     // console.log("Triple");
//     console.log("Quadruple");
//     console.log("A Pair");
//     console.log("Triple");
//   }
// }

const expectedResults = [
  "Quintuple",
  "Quadruple",
  "A Pair",
  "Triple Pair",
  "Triple",
  "Two Pairs",
  "Streak",
  "Lose Cards",
];

function quintuple(drawnumbers) {
  return [...new Set(drawnumbers)].length === 1 && "Quintuple";
}

function quadruple(drawnumbers) {
  return [...new Set(drawnumbers)].length === 2 && "Quadruple";
}

function triple(drawnumbers) {
  return hasKeyWithValue(returnCountOfNumbers(drawnumbers), 2) && "Triple";
}

function aPair(drawNumbers) {
  console.log(hasKeyWithValue(returnCountOfNumbers(drawNumbers), 1));
  return hasKeyWithValue(returnCountOfNumbers(drawNumbers), 1)
    ? drawNumbers.length > 3
      ? "A Pair"
      : "Pair"
    : false;
}

function triplePair(drawNumbers) {
  console.log(Object.values(returnCountOfNumbers(drawNumbers)).sort());
  let arr = Object.values(returnCountOfNumbers(drawNumbers)).sort();
  return arr[0] === 2 && arr[1] === 3 && "Triple Pair";
}

function twoPair(drawNumbers) {
  return (
    JSON.stringify(Object.values(returnCountOfNumbers(drawNumbers)).sort()) ===
      "[1,2,2]" && "Two Pairs"
  );
}

// [1,1,1 ,6,5]

function streak(drawNumbers) {
  return isStreak(drawNumbers) && "Streak";
}

function loseCard(drawNumbers) { 
    let loseCard = sortNumbersInArray(drawNumbers).some((_, i, arr) => {
        return arr[i] + 1 === arr[i + 1] || arr[i] + 9 === arr[arr.length - 1];
        });
    return !loseCard && "Lose Cards";
}

function isStreak(array) {
  console.log("str", sortNumbersInArray(array));
  let streak = sortNumbersInArray(array).every((_, i, arr) => {
    if (i === arr.length - 1) return true;
    
    return arr[i] + 1 === arr[i + 1] || arr[i] + 9 === arr[arr.length - 1];
  });
  return streak;
}

function sortNumbersInArray(drawNumbers, order = "asc") {
  if (order === "desc") {
    return drawNumbers.sort((a, b) => b - a);
  } else {
    return drawNumbers.sort((a, b) => a - b);
  }
}

// console.log("pair", aPair([1,3,5,6,8]))

function filterFunction(array) {
  return array.filter((item) => item);
}

// let firstThree = switcher(arraySlicer(drawNumbers, 0, 3))
// let middleThree = switcher(arraySlicer(drawNumbers, 1, 4))
// let lastThree = switcher(arraySlicer(drawNumbers, 2, 5))

function stud(drawNumbers) {
  let obj = {};
  console.log("drawNumbers", drawNumbers)

  let stud = filterFunction([
    quintuple(drawNumbers),
    quadruple(drawNumbers),
    aPair(drawNumbers),
    triplePair(drawNumbers),
    twoPair(drawNumbers),
    streak(drawNumbers),
    triple(drawNumbers),
  ]);
  console.log("dawn", drawNumbers)
  let firstThree = filterFunction(switcher(arraySlicer(drawNumbers, 0, 3)));
  let middleThree = filterFunction(switcher(arraySlicer(drawNumbers, 1, 4)));
  let lastThree = filterFunction(switcher(arraySlicer(drawNumbers, 2, 5)));
  let firstTwo = OddEven(arraySlicer(drawNumbers, 0, 2));

  obj = {
    stud,
    firstThree,
    middleThree,
    lastThree,
    firstTwo,
  };

  console.log(obj);
  return obj;
}
// stud([1,2,1,1,5])
console.log("gdasjgsdgfjgasjdgfjgjsdkh", stud([7,6,7,2,2]));
// console.log( stud([4,6,7,9,1]))

function switcher(arraySlicer) {
  return [
    streak(arraySlicer),
    triple(arraySlicer),
    isHalfStreak(arraySlicer) && "Half Streak",
    aPair(arraySlicer),
    loseCard(arraySlicer),
  ];
}

function arraySlicer(drawNumbers, from, to) {
  return drawNumbers.slice(from, to);
}

function hasKeyWithValue(obj, targetValue) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key) && obj[key] > targetValue) {
      return true;
    }
  }
  return false;
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
// function arraySlicer(drawNumbers, from, to) {
//   return drawNumbers.slice(from, to);
// }
// console.log(hasKeyWithValue(returnCountOfNumbers(drawNumbers), 4));
// //   const matchingResults = determineResults(drawnumber);
// console.log(Object.values(returnCountOfNumbers(drawNumbers)));
// callme(drawNumbers);
//   console.log(returnCountOfNumbers(drawNumbers));
// console.log(filterFunction(firstThree), filterFunction(middleThree), filterFunction(lastThree))
// console.log(quintuple([1, 1, 1, 1, 1]));
// console.log(quadruple([1, 1, 1, 1, 2]));
// console.log(aPair([5, 4, 3, 1, 2]));
// console.log(triplePair([3, 3, 3, 1, 1]));
// console.log(twoPair([3, 3, 9, 1, 1]));
// console.log(streak([3, 2, 5, 6, 1]));
// console.log(triple([1, 1, 3, 6, 1])); //triple
