// const stylesColor = {
//     blueNotfillArc: {color: 'blue'},
//     blueLine: {/* style */},
//     blueFillArc: {/* style */},
//     redNotfillArc: {/* style */},
//     redLine: {/* style */},
//     redFillArc: {/* style */}
//   }

//   function getRandomStyles(items) {
//     return items.map(item => {
//       const randomStyles = [];
//       for (let i = 0; i < 3; i++) {
//         const randomStyle = stylesColor[
//           Object.keys(stylesColor)[Math.floor(Math.random() * Object.keys(stylesColor).length)]
//         ];
//         console.log(randomStyle);
//         randomStyles.push(randomStyle);
//       }
//       return {
//         item,
//         styles: randomStyles
//       };
//     });
//   }

//   const result = getRandomStyles(["B", "S"]);

//   console.log(result);
//   console.log( Object.keys(stylesColor));

const stylesColor = {
  1: "blueNotfillArc",
  2: "blueLine",
  3: "blueFillArc",
  4: "redNotfillArc",
  5: "redLine",
  6: "redFillArc",
};

// function getRandomStyles(items) {
//   return items.reduce((acc, item) => {
//     acc[item] = {};
//     for (let i = 0; i < 3; i++) {
//       const randomKey = Math.floor(Math.random() * 6) + 1;
//       const randomStyle = stylesColor[randomKey];
//       acc[item][randomKey] = randomStyle;
//     }
//     return acc;
//   }, {});
// }

// const result = getRandomStyles(["B", "S"]);
// // const result = getRandomStyles(["B", "S"]);

// console.log(result);

function getRandomStyles(items) {
  const styles = Object.values(stylesColor);
  const keys = Object.keys(stylesColor);

  const usedStyles = new Set();

  return items.reduce((acc, item) => {
    acc[item] = {};

    const usedKeys = new Set();

    while (usedKeys.size < 3) {
      const key = keys[Math.floor(Math.random() * keys.length)];
      if (!usedKeys.has(key)) {
        let style = styles[Math.floor(Math.random() * styles.length)];
        while (usedStyles.has(style)) {
          style = styles[Math.floor(Math.random() * styles.length)];
        }
        usedStyles.add(style);
        acc[item][key] = style;
        usedKeys.add(key);
      }
    }

    return acc;
  }, {});
}
// const result = getRandomStyles(["B", "S"]);
// const result2 = getRandomStyles(["O", "E"]);
// console.log(result);
// console.log(result2);

// five different numbers between 0-9
let drawNumbers = [
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 6],
  [1, 2, 3, 5, 6],
  [1, 2, 4, 5, 6],
  [1, 3, 4, 5, 6],
  [2, 3, 4, 5, 6],
];
//  write a function takes drawNumbers and any of 1st, 2nd, 3rd, 4th, 5th, sum, as params where each number represents a ball
//if 1st ball, 2nd ball, 3rd ball, 4th ball, 5th ball, sum (all five balls),

//sum should return odd/even, big/small and dragon/tiger
// for odd/even
// rule adds all the 5 balls Odd: unit digit 1, 3, 5, 7, 9; Even: unit digit 0, 2, 4, 6, 8), unit meaning the last digit of the number
// eg. 29, unit digit is 9 so outcome is odd; 30, unit digit is 0 so outcome is even

// for big/small
//rules adds all the 5 balls (Big: 23-45; Small: 0-22; )

// for dragon/tiger
//rules picks last 2 balls
//if Former bigger as Dragon; Or else Tiger; Equal as Tie.

//1st~5th should return odd/even, big/small and prime/composite
//should pick one ball passed could be 1st, 2nd, 3rd, 4th, 5th ball
// for odd/even
// Odd: 1, 3, 5, 7, 9;Even: 0, 2, 4, 6, 8)

// for big/small
// Big: 5-9; Small: 0-4

// for prime/composite
// 1, 2, 3, 5, 7 as "Prime"; 0, 4, 6, 8, 9 as "Composite."

// assuming if 1st is passed to the function it should return the results in alternating order of big and small
//[2, 3, 4, 5, 6] means when it checked big occured two consecutive times and followed by small occured three consecutive times followed by big occured four consecutive times and followed by small occured five consecutive times and followed by big occured six consecutive times for the list of drawnumbers passed to the function

// 1st, 2nd, 3rd, 4th, 5th, sum, odd/even, big/small, prime/composite

/*
  {
    "B": { 
      "1": "blueFillArc",
      "4": "blueLine",
      "6": "redNotfillArc"
    },
    "S": {
      "2": "redLine",
      "3": "blueNotfillArc",  
      "5": "redFillArc"
    }
  }
  */

/*
  {
    "B": {
      "3": "blueFillArc",
      "5": "redLine",
      "6": "redFillArc" 
    },
    "S": {
      "2": "blueLine",
      "4": "redNotfillArc",
      "6": "redFillArc"
    } 
  }
  */

//
// "B": [
//     "6": "redFillArc",
//     "3" : "blueFillArc",
//     "6" : "redFillArc"
// ]
//  "S": [
//     "4" : "redNotfillArc",
//     "5" : "redLine",
//     "1" : "blueNotfillArc"
// ]
/*
  [
    {
      item: "B",
      styles: ["blueFillArc", "redLine", "blueNotfillArc"]
    },
    {  
      item: "S",
      styles: ["redNotfillArc", "blueLine", "redFillArc"] 
    }
  ] 
  */

/*
  [
    {
      item: "B",
      styles: [stylesColor.redLine, stylesColor.blueFillArc, stylesColor.redNotfillArc] 
    },
    {
      item: "S",  
      styles: [stylesColor.blueNotfillArc, stylesColor.redFillArc, stylesColor.blueLine]
    }
  ]
  */

//write reduce function to get the sum of the array
function sum(arr) {
  return arr.reduce((acc, item) => acc + item, 0);
}

const drawNumbers1 = [
  [1, 2, 3, 7, 5],
  [1, 2, 3, 4, 6],
  [1, 2, 3, 5, 6],
  [1, 2, 4, 5, 6],
  [1, 3, 4, 5, 6],
  [2, 3, 4, 6, 6],
  [9, 2, 4, 6, 6],
  [9, 3, 4, 5, 6],
  [9, 3, 4, 5, 6],
  [9, 3, 5, 5, 6],
];
console.log(sum(drawNumbers1[0]));
console.log(sum(drawNumbers1[1]));
console.log(sum(drawNumbers1[2]));
console.log(sum(drawNumbers1[3]));
console.log(sum(drawNumbers1[4]));
console.log(sum(drawNumbers1[5]));
console.log(sum(drawNumbers1[6]));
console.log(sum(drawNumbers1[7]));
console.log(sum(drawNumbers1[8]));
console.log(sum(drawNumbers1[9]));
// console.log(sum(drawNumbers1[10]));

const s = [
  [
    "",
    "T",
    "",
    "T",
    "D",
    "",
    "D",
    "",
    "T",
    "D",
    "",
    "T",
    "D",
    "T",
    "D",
    "",
    "D",
    "",
  ],
  [
    "",
    "T",
    "",
    "T",
    "D",
    "",
    "D",
    "",
    "T",
    "A",
    "",
    "T",
    "D",
    "",
    "D",
    "",
    "D",
    "",
  ],
  [
    "",
    "A",
    "",
    "",
    "D",
    "",
    "D",
    "",
    "",
    "A",
    "",
    "",
    "D",
    "",
    "A",
    "",
    "A",
    "",
  ],
  [
    "",
    "A",
    "",
    "",
    "D",
    "",
    "D",
    "",
    "",
    "",
    "",
    "",
    "D",
    "",
    "A",
    "",
    "A",
    "",
  ],
  ["", "", "", "", "D", "", "A", "", "", "", "", "", "D", "", "A", "", "A", ""],
  ["", "", "", "", "D", "", "A", "", "", "", "", "", "", "", "A", "", "A", ""],
  ["", "", "", "", "D", "", "", "", "", "", "", "", "", "", "A", "", "A", ""],
  ["", "", "", "", "A", "", "", "", "", "", "", "", "", "", "A", "", "A", ""],
  ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "A", "", "A", ""],
  ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "A", ""],
];
