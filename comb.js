// function generateCombinations(arrays[]):number {
//     let count = 0;

//     for (let i = 0; i < arrays.length; i++) {
//         for (let j = i + 1; j < arrays.length; j++) {

//             let pairs = [];

//             generatePairs(arrays[i], arrays[j], pairs,);

//             count += pairs.length;
//         }
//     }
//     return count;

// }

// function generatePairs(arr1, arr2, pairs[]) {

//     for (let x of arr1) {
//         for (let y of arr2) {
//             if (x !== y) {
//                 pairs.push([x, y]);
//             }
//         }
//     }

// }
function getCombination(n, r) {
  if (!(r >= 0 && n >= r)) return 0;
  return factorial(n) / (factorial(r) * factorial(n - r));
}

/**
 * the factorial of a number
 * @param {number} num what is the factorial of 'num'? the 'num' what is supplied to the function
 * @returns the factorial of a number
 */
function factorial(num) {
  if (num == 0) return 1;
  if (num < 0) return 0;
  let result = num;
  for (let i = num - 1; i > 1; i--) result *= i;
  return result;
}
function generateCombinations(arrays) {
  let count = 0;

  for (let i = 0; i < arrays.length; i++) {
    for (let j = i + 1; j < arrays.length; j++) {
      const pairs = new Set();

      generatePairs(arrays[i], arrays[j], pairs);

      count += pairs.size;
    }
  }

  return count;
}

function generatePairs(arr1, arr2, pairs) {
  for (let x of arr1) {
    for (let y of arr2) {
      if (x !== y) {
        pairs.add([x, y]);
      }
    }
  }
}

function generate3Combinations(arrays) {
  let count = 0;

  for (let i = 0; i < arrays.length; i++) {
    for (let j = i + 1; j < arrays.length; j++) {
      for (let k = j + 1; k < arrays.length; k++) {
        const pairs = new Set();

        generate3Pairs(arrays[i], arrays[j], arrays[k], pairs);

        count += pairs.size;
      }
    }
  }

  return count;
}

function generate3Pairs(arr1, arr2, arr3, pairs) {
  for (let x of arr1) {
    for (let y of arr2) {
      for (let z of arr3) {
        if (x !== y && y !== z && x !== z) {
          pairs.add([x, y, z]);
        }
      }
    }
  }
}

//   let arrays = [[1,2,3], [4,5,6], [7,8,9], [1,2,3], [8,7,5]];
//   let result = generateCombinations(arrays, 2);
const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const array4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const array5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const array6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const array7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const array8 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const array9 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const array10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const allCombinations = generateCombinations(arrays);
const allCombinations = generate3Combinations([
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
]);

console.log(allCombinations); // [[1,4], [1,5], [1,6], [2,4], [2,5] ... ]
