const a = [
  [1, 2, 3],
  [4, 5, 6],
  [1, 2, 3],
];

const b = new Set();
b.add([1, 2, 3]);
b.add([4, 5, 6]);
b.add([1, 2, 3]);

// console.log(JSON.stringify(a[0])===JSON.stringify(a[2]))
// console.log(a.includes([1, 2, 3]));
// console.log(b)
// console.log(b.has([1, 2, 3]));

// console.log(JSON.parse(`[1, 2, 3]`))
// // console.log(['1,2,3', '1,2,3'].includes(`1,2,3`))
// console.log(['1,2,3', '1,2,3'].filter((a)=> {
//     console.log(a)
//     return a !== '1,2,3'}))
// console.log(['1,2,3', '3'].map((a)=> Array(a)));
const combArr = [
  [1, 2, 3],
  [2, 3, 4],
  [3, 4, 5],
  [4, 5, 6],
];

// console.log(combArr.flat().toString())

//  const ab = {
//     "firstRow": [],
//     "secondRow": [
//         "1,2,3",
//         "2,3,4",
//         "3,4,5",
//         "4,5,6"
//     ],
//     "thirdRow": [],
//     "fourthRow": [],
//     "fifthRow": [],
//     "sixthRow": [],
//     "seventhRow": [],
//     "eighthRow": [],
//     "ninthRow": [],
//     "tenthRow": []
// }

// console.log(Object.values(ab).flat().toString().includes(combArr.flat().toString()))

// const ni = []

// ni[0] = 1
// ni[1] = 2
// ni[2] = 3
// console.log(ni)

let state = {
  firstRow: [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
    "47",
    "48",
    "49",
  ],
  secondRow: [],
  thirdRow: [],
  fourthRow: [],
  fifthRow: [],
  sixthRow: [],
  seventhRow: [],
  eighthRow: [],
  ninthRow: [],
  tenthRow: [],
};

function updateState(userSelection, rowName) {
  const currentRow = rowName;
  let newState
  // state[currentRow] = userSelection
  if (currentRow === "firstRow") {
     newState = {
      ...state,
      [currentRow]: [...state[currentRow], userSelection],
      secondRow: [...state[currentRow].filter(presentSele => userSelection.includes(presentSele))],
    };
  } else{
    // console.log("---------------->", typeof userSelection[0], [...state["firstRow"]].filter(presentSele =>  userSelection.includes(presentSele)))
      newState = {
        ...state,
        [currentRow]: [...state[currentRow], userSelection],
        firstRow: [...state["firstRow"]].filter(presentSele => userSelection.includes(presentSele))
      };

  }
  state = newState;
}

updateState(["49"], "secondRow");
updateState(["30"], "secondRow");
updateState(["20"], "secondRow");

// const BSOE = {
//   Odd: "Even",
//   Even: "Odd",
//   Big: "Small",
//   Small: "Big",

// }

// function modi(currentItem) {
//   let currentItems = state.firstRow;
//   let newItems = currentItem;
//   if (currentItem == "Odd") {
//     if (currentItems.includes("Even")) {
//       currentItems = currentItems.filter((a) => a !== "Even");
//       currentItems.push(newItems);
//     }
//   } else if (currentItem == "Even") {
//     if (currentItems.includes("Odd")) {
//       currentItems = currentItems.filter((a) => a !== "Odd");
//       currentItems.push(newItems);
//     }
//   } else if (currentItem == "Big") {
//     if (currentItems.includes("Small")) {
//       currentItems = currentItems.filter((a) => a !== "Small");
//       currentItems.push(newItems);
//     }
//   } else if (currentItem == "Small") {
//     if (currentItems.includes("Big")) {
//       currentItems = currentItems.filter((a) => a !== "Big");
//       currentItems.push(newItems);
//     }
//   } else {
//     currentItems.push(newItems);
//   }

// }

// modi("Odd");
// modi("Big");
// modi("Small");
// modi("Even");
// modi("Odd");
// modi("Big");
// modi("Small");
// modi("Even");
// modi("Odd");
// modi("Big");
console.log(state);

// console.log(Object.values(y)[0].map((x) => x.split(',')[0]))
// console.log(Array(Object.values(y)[0][0][0]))

// function checkSum(numbers) {
//     let sum = 0;

//     // Iterate through the numbers and add them up
//     for (let i = 0; i < numbers.length; i++) {
//       sum += numbers[i];
//     }

//     // Check if the sum is negative
//     if (sum < 0) {
//       return "The sum is negative!";
//     } else {
//       return "The sum is not negative.";
//     }
//   }

//   // Example usage
//   const numbers = [1, -3, 5, 2];
//   console.log(checkSum(numbers)); // Output: "The sum is negative!"
