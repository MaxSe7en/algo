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

//   const expectedResults = [
//     "Quintuple",
//     "Quadruple",
//     "A Pair",
//     "Triple Pair",
//     "Triple",
//     "Two Pairs",
//     "Streak",
//     "Lose Cards",
//   ];
  
  function determineResults(drawnumber) {
    const matchingResults = [];
  
    for (let i = 0; i < expectedResults.length; i++) {
      const expectedResult = expectedResults[i];
      const meetsCriteria = (() => {
        switch (i) {
          case 0:
            return drawnumber.every(num => num === drawnumber[0]);
          case 1:
            return hasPairs(drawnumber, 4);
          case 2:
            return hasPairs(drawnumber, 1);
          case 3:
            return hasPairs(drawnumber, 2) && hasPairs(drawnumber, 3);
          case 4:
            return hasPairs(drawnumber, 3);
          case 5:
            return hasPairs(drawnumber, 2);
          case 6:
            return isConsecutive(drawnumber);
          case 7:
            return true;
          default:
            return false;
        }
      })();
  
      if (meetsCriteria) {
        matchingResults.push(expectedResult);
      }
    }
  
    return matchingResults;
  }
  
  function hasPairs(drawnumber, numPairs) {
    const occurrences = {};
  
    for (const num of drawnumber) {
      occurrences[num] = (occurrences[num] || 0) + 1;
    }
  
    const pairsCount = Object.values(occurrences).filter(count => count >= 2).length;
  
    return pairsCount === numPairs;
  }
  
  function isConsecutive(drawnumber) {
    const sortedNumbers = [...drawnumber].sort((a, b) => a - b);
  
    for (let i = 1; i < sortedNumbers.length; i++) {
      if (sortedNumbers[i] !== sortedNumbers[i - 1] + 1) {
        return false;
      }
    }
  
    return true;
  }
  
  const drawnumber = [5, 5, 5, 5, 1]; // Replace this with your input array
  const matchingResults = determineResults(drawnumber);
  console.log(matchingResults);
  
  
//   function determineResults(drawnumber) {
//     const matchingResults = [];
  
//     for (let i = 0; i < expectedResults.length; i++) {
//       const expectedResult = expectedResults[i];
//       const meetsCriteria = (() => {
//         switch (i) {
//           case 0:
//           case 1:
//             return drawnumber.every(num => num === drawnumber[0]);
//           case 2:
//             return hasPairs(drawnumber, 1);
//           case 3:
//             return hasPairs(drawnumber, 2) && hasPairs(drawnumber, 3);
//           case 4:
//             return hasPairs(drawnumber, 3);
//           case 5:
//             return hasPairs(drawnumber, 2);
//           default:
//             return false;
//         }
//       })();
  
//       if (meetsCriteria) {
//         matchingResults.push(expectedResult);
//       }
//     }
  
//     return matchingResults.length > 0 ? matchingResults : [expectedResults[7]];
//   }
  
//   function hasPairs(drawnumber, numPairs) {
//     const occurrences = {};
  
//     for (const num of drawnumber) {
//       occurrences[num] = (occurrences[num] || 0) + 1;
//     }
  
//     const pairsCount = Object.values(occurrences).filter(count => count >= 2).length;
  
//     return pairsCount === numPairs;
//   }
  
//   const drawnumber = [5, 5, 5, 5, 1]; // Replace this with your input array
//   const matchingResults = determineResults(drawnumber);
//   console.log(matchingResults);
  


//   function determineResults(drawnumber) {
//     const matchingResults = [];
  
//     for (let i = 0; i < expectedResults.length; i++) {
//       const expectedResult = expectedResults[i];
//       const meetsCriteria = (() => {
//         switch (i) {
//           case 0:
//           case 1:
//             return drawnumber.every(num => num === drawnumber[0]);
//           case 2:
//           case 5:
//             return hasPairs(drawnumber, 2 - (i - 2));
//           case 3:
//             return hasPairs(drawnumber, 2) && hasPairs(drawnumber, 3);
//           case 4:
//             return hasPairs(drawnumber, 3);
//           case 6:
//             return isConsecutive(drawnumber);
//           case 7:
//             return true;
//           default:
//             return false;
//         }
//       })();
  
//       if (meetsCriteria) {
//         matchingResults.push(expectedResult);
//       }
//     }
  
//     return matchingResults.length > 0 ? matchingResults : [expectedResults[7]];
//   }
  
//   function hasPairs(drawnumber, numPairs) {
//     const occurrences = {};
  
//     for (const num of drawnumber) {
//       occurrences[num] = (occurrences[num] || 0) + 1;
//     }
  
//     const pairsCount = Object.values(occurrences).filter(count => count >= 2).length;
  
//     return pairsCount === numPairs;
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
  
//   const drawnumber = [1, 2, 2, 2, 2]; // Replace this with your input array
//   const matchingResults = determineResults(drawnumber);
//   console.log(matchingResults);
  
  
// function determineResult(drawnumber) {
//     const occurrences = {};
//     let maxOccurrence = 0;
  
//     // Count the occurrences of each number in the drawnumber array
//     for (const num of drawnumber) {
//       occurrences[num] = (occurrences[num] || 0) + 1;
//       maxOccurrence = Math.max(maxOccurrence, occurrences[num]);
//     }
  
//     // Check for specific patterns and return the corresponding result
//     if (maxOccurrence === 5) return expectedResults[0];
//     if (maxOccurrence === 4) return expectedResults[1];
  
//     const uniqueOccurrences = Object.values(occurrences).filter((count, index, self) => {
//       return count === 2 && self.indexOf(count) === index;
//     });
  
//     if (uniqueOccurrences.length === 2) return expectedResults[3];
//     if (maxOccurrence === 3) return expectedResults[4];
//     if (uniqueOccurrences.length === 1) return expectedResults[5];
    
//     if (drawnumber.every((num, index) => num === drawnumber[0] + index)) {
//       return expectedResults[6];
//     }
    
//     return expectedResults[7];
//   }
  
//   const drawnumber = [2, 2, 2, 2, 2]; // Replace this with your input array
//   const result = determineResult(drawnumber);
//   console.log(result);
  