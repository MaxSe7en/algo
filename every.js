// // const fig = {
// //   firstRow: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
// //   secondRow: [1, 3, 4, 5, 6, 7, 8, 9, 10],
// //   thirdRow: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
// //   fourthRow: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
// //   fifthRow: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
// //   sixthRow: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
// //   seventhRow: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
// //   eighthRow: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
// //   ninthRow: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
// //   tenthRow: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
// // };

// // // function test(userSelection) {
// // //   //    fig

// // //   let a = Object.values(fig).every((selectedNumebr, i) => selectedNumebr.includes(userSelection));
// // //   return a;
// // // }
// // // console.log(["01", "03", "05", "07", "09", "11"].find((item) => item == "01"));
// // // console.log(
// // //   ["01"].filter(
// // //     (ite) =>
// // //       ite !== ["01", "03", "05", "07", "09", "11"].find((item) => item == ite)
// // //   )
// // // );
// // function getCombination(n, r) {
// //   if (!(r >= 0 && n >= r)) return 0;
// //   return factorial(n) / (factorial(r) * factorial(n - r));
// // }


// //  function factorial(num) {
// //   if (num == 0) return 1;
// //   if (num < 0) return 0;
// //   let result = num;
// //   for (let i = num - 1; i > 1; i--) result *= i;
// //   return result;
// // }

// // console.log(getCombination(9, 3));
// // console.log()

// function findCombinations(targetSum, start = 1, end = 24) {
//   const validCombinations = [];

//   function backtrack(currentSum, path, start) {
//       if (currentSum === targetSum) {
//           validCombinations.push([...path]);
//           return;
//       }

//       for (let i = start; i <= end; i++) {
//           if (currentSum + i <= targetSum) {
//               path.push(i);
//               backtrack(currentSum + i, path, i + 1);
//               path.pop();
//           }
//       }
//   }

//   backtrack(0, [], start);

//   return validCombinations;
// }

// // Example usage:
// const targetSumRange = { min: 76, max: 109 };
// const result = findCombinations(targetSumRange.min);
// console.log(`Combinations that sum to ${targetSumRange.max}:`, result);
