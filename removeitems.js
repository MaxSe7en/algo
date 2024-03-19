let arr = [8, 8, 9, 5, 5];
let itemToRemoveIndex = [3, 1];

function removeItems(arr, itemTorRemove) {
  // return arr.filter((item) => !itemTorRemove.includes(item));
  return arr.filter((item, index) => !itemTorRemove.includes(index));
}

// console.log(removeItems(arr, itemToRemoveIndex));
// const user = [
//     {
//         id: 1,
//         name: "hush"
//     },
//     {
//         id: 2,
//         name: "hush"
//     },
//     {
//         id: 3,
//         name: "hush"
//     },
//     {
//         id: 4,
//         name: "hush"
//     }
// ]
// for (let i = 0; i < values.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j] === values[i]) {
//         indices.push(j);
//       }
//     }
//   }

//   let arr3 = [1, 2, 3, 2, 5];

// let values = [2, 3];
// let indices = [];

// for (let i = 0; i < values.length; i++) {
//   let value = values[i];
//   let index = arr3.indexOf(value);
//   while (index !== -1) {
//     indices.push(index);
//     index = arr3.indexOf(value, index + 1);
//   }
// }
const arr3 = [5, 5, 5, 9, 1];
let values = [5, 9];
const indexes = [];
// &&
// ? :
// ??

// function aaa(arr3, values) {
//   let indexes = [];
//   let a = [...new Set(arr3)];
//   if (values[0] === values[1]) {

//     arr3.includes(values[0]) ? indexes.push(arr3.indexOf(values[0])) : null;
//     // arr3.forEach((item, index) => {
//     //     console.log(item, index)
//     //   item === values[0] || (item === values[1] ? indexes.push(index): null);
//     // });
//   } else {

//     // a.forEach((item, index) => {
//     //     console.log(item, index)
//     //   item === values[0] || (item === values[1] ? null.push(index): null);
//     // });
//   }
//   return indexes;
// }

function aaa() {
  if (values[0] === values[1]) {
    for (let i = 0; i < arr3.length; i++) {
      if (arr3[i] === values[0] || arr3[i] === values[1]) {
        indexes.push(i);
      }
    }
  } else {
    console.log("kkkkkkkkkkkkkkkkkkkkk");
    let a = [...new Set(arr3)];
    a.forEach((item, _) => {
      if (item === values[0] || item === values[1]) {
        indexes.push(arr3.lastIndexOf(item));
      }
    });
  }
}

function getIndexes(originalArray, valuesToFind) {
  const indexes = [];

  const hasDuplicates = new Set(valuesToFind).size !== valuesToFind.length;

  for (let i = 0; i < originalArray.length; i++) {
    const value = originalArray[i];
    if (valuesToFind.includes(value)) {
      indexes.push(i);
      if (hasDuplicates) break;
    }
  }

  return indexes;
}

// console.log(aaa(arr3, values));
// aaa();
// console.log(getIndexes(arr3,values));
// console.log(values[0] === values[1]);

// for (let i = 0; i < arr3.length; i++) {
//     // console.log(a)
//     if (values[0] === values[1]) {
//         if (arr3[i] === values[0]) {
//             console.log("first", i);
//             indexes.push(i);
//         }
//         if (arr3[i] === values[1]) {
//             console.log("second", i);
//             indexes.push(i);
//         }
//     } else {
//       let a = [...new Set(arr3)];
//     indexes.push(i);
//     break;
//     // continue;
//   }
// }

/*
function aaa() {
  if (values[0] === values[1]) {
    for (let i = 0; i < arr3.length; i++) {
      if (arr3[i] === values[0] || arr3[i] === values[1]) {
        indexes.push(i);
      }
    }
  } else {
    let a = [...new Set(arr3)];
    a.forEach((item, index) => {
      if (item === values[0] || item === values[1]) {
        indexes.push(index);
      }
    });
  }
}
*/
// console.log("llll", indexes);

// const indexes = [];

// function getIndexes(arr, values) {
//   const indexes = [];

//   for (let i = 0; i < arr.length; i++) {
//     const value = arr[i];

//     if (values.includes(value)) {
//       const isDuplicateValue = values.filter((val) => val === value).length > 1;
//       const isDuplicateIndex = indexes.includes(i);

//       if (!isDuplicateValue || !isDuplicateIndex) {
//         indexes.push(i);
//       }
//     }
//   }

//   return indexes;
// }
// console.log(getIndexes(arr3, values)); // [1, 3]
// let arr1 = [1, 2, 3, 2, 5];
// let values = [2, 2];

// let indices = arr
//   .filter((item, index) => values.includes(item))
//   .map(item => index);
// console.log(indices);
// function cutObject(show, userId){
//     if (show){
//         return user.filter((item) => item.id !== userId)
//     }
// }

// console.log(cutObject(false, 3))

// let drawNumbers = [2, 2, 9, 2, 2];
// let drawNumbers = [6,2,0,2,8];
// let drawNumbers = [4,8,5,1,8];
// let drawNumbers = [5,5,7,6,3];
// let drawNumbers = [1,2,0,3,3];
let drawNumbers = [1,4,9,5,8]

function calculateResult(drawNumbers) {
  const [leftPair, rightPair] = splitIntoPairs(drawNumbers);
  let left = sumPair(leftPair);
  let right = sumPair(rightPair);

  return [
    checkWhichIsGreater(padNumberWithZeros(left), padNumberWithZeros(right)),
    ...checkIdlePairOrZhuang(leftPair, rightPair),
  ];
}

function sumPair(pair) {
  return pair.reduce((a, b) => a + b, 0);
}

function padNumberWithZeros(num) {
  return num < 10 ? num.toString().padStart(2, "0") : num;
}

function checkWhichIsGreater(village, idle) {
  let _village = village.toString()[1];
  let _idle = idle.toString()[1];
  if (_village > _idle) return "village";
  if (_village < _idle) return "idle";
  return "and";
}

function checkIdlePairOrZhuang(arr, values) {
  let final = [];
  if (arr[0] === arr[1]) {
    final.push("Zhuang");
  }
  if (values[0] === values[1]) {
    final.push("Idle pair");
  }
  return final;
}

function splitIntoPairs(drawNumber) {
  let first = drawNumber.slice(0, 2);
  let second = drawNumber.slice(3);

  return [first, second];
}

console.log(calculateResult(drawNumbers));
