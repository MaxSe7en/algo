// function analyzeDraw(drawNumbers, whatToAnalyze) {

//   const results = {
//     oddEven: [],
//     bigSmall: [],
//     primeComposite: [],
//     dragonTiger: []
//   };

//   for (let draw of drawNumbers) {

//     if (whatToAnalyze === 'sum') {

//       // Sum analysis
//       let sum = draw.reduce((a, b) => a + b, 0);
//       results.oddEven.push(sum % 2 === 0 ? 'even' : 'odd');
//       results.bigSmall.push(sum >= 23 ? 'big' : 'small');

//       let lastTwo = draw.slice(-2);
//       results.dragonTiger.push(lastTwo[0] > lastTwo[1] ? 'dragon' : 'tiger');

//     } else {

//       // Individual ball analysis
//       let ball = draw[parseInt(whatToAnalyze) - 1];

//       results.oddEven.push(ball % 2 === 0 ? 'even' : 'odd');
//       results.bigSmall.push(ball >= 5 ? 'big' : 'small');

//       if ([1, 3, 5, 7].includes(ball)) {
//         results.primeComposite.push('prime');
//       } else {
//         results.primeComposite.push('composite');
//       }

//     }

//   }

//   return results;

// }

// // Usage:

// const drawNumbers = [
//   [1, 2, 3, 4, 5],
//   [1, 2, 3, 4, 6],
//   [6, 2, 3, 5, 6],
//   [1, 2, 4, 5, 6],
//   [1, 3, 4, 5, 6],
//   [8, 3, 4, 5, 6]
// ];

// console.log(analyzeDraw(drawNumbers, 'sum'));
// console.log(analyzeDraw(drawNumbers, '1st'));

// function analyzeDraw(drawNumbers, whatToAnalyze) {

//   const results = {
//     oddEven: [],
//     bigSmall: [],
//     primeComposite: [],
//     dragonTiger: []
//   };

//   let prevOddEven, prevBigSmall, prevPrimeComposite, prevDragonTiger;

//   for (let draw of drawNumbers) {

//     let ball;
//     if (whatToAnalyze === 'sum') {
//       ball = draw.reduce((a, b) => a + b, 0);
//     } else {
//       ball = draw[parseInt(whatToAnalyze) - 1];
//     }

//     let oddEven = ball % 2 === 0 ? 'even' : 'odd';
//     let bigSmall = ball >= 5 ? 'big' : 'small';
//     let primeComposite = [1, 3, 5, 7].includes(ball) ? 'prime' : 'composite';

//     if (oddEven === prevOddEven) {
//       results.oddEven[results.oddEven.length - 1]++;
//     } else {
//       results.oddEven.push(1);
//     }

//     if (bigSmall === prevBigSmall) {
//       results.bigSmall[results.bigSmall.length - 1]++;
//     } else {
//       results.bigSmall.push(1);
//     }

//     if (primeComposite === prevPrimeComposite) {
//       results.primeComposite[results.primeComposite.length - 1]++;
//     } else {
//       results.primeComposite.push(1);
//     }

//     prevOddEven = oddEven;
//     prevBigSmall = bigSmall;
//     prevPrimeComposite = primeComposite;

//   }

//   return results;

// }

// function analyzeDraw(drawNumbers, whatToAnalyze) {

//   const results = {
//     oddEven: [],
//     bigSmall: [],
//     primeComposite: [],
//     dragonTiger: []
//   };

//   let prevOddEven, prevBigSmall, prevDragonTiger;

//   for (let draw of drawNumbers) {

//     let sum = draw.reduce((a, b) => a + b, 0);

//     let oddEven = sum % 2 === 0 ? 'even' : 'odd';
//     let bigSmall = sum >= 23 ? 'big' : 'small';

//     let lastTwo = draw.slice(-2);
//     let dragonTiger = lastTwo[0] > lastTwo[1] ? 'dragon' : 'tiger';

//     if (oddEven === prevOddEven) {
//       results.oddEven[results.oddEven.length - 1]++;
//     } else {
//       results.oddEven.push(1);
//     }

//     if (bigSmall === prevBigSmall) {
//       results.bigSmall[results.bigSmall.length - 1]++;
//     } else {
//       results.bigSmall.push(1);
//     }

//     if (dragonTiger === prevDragonTiger) {
//       results.dragonTiger[results.dragonTiger.length - 1]++;
//     } else {
//       results.dragonTiger.push(1);
//     }

//     prevOddEven = oddEven;
//     prevBigSmall = bigSmall;
//     prevDragonTiger = dragonTiger;

//   }

//   return results;

// }

function analyzeDraw1(drawNumbers, whatToAnalyze) {
  const results = {
    oddEven: [],
    bigSmall: [],
    primeComposite: [],
    dragonTiger: [],
  };

  let prevOddEven, prevBigSmall, prevDragonTiger;

  for (let draw of drawNumbers) {
    let sum = draw.reduce((a, b) => a + b, 0);

    let oddEven = sum % 2 === 0 ? "even" : "odd";
    let bigSmall = sum >= 23 ? "big" : "small";

    let lastTwo = draw.slice(-2);
    let dragonTiger;
    if (lastTwo[0] > lastTwo[1]) {
      dragonTiger = "dragon";
    } else if (lastTwo[0] < lastTwo[1]) {
      dragonTiger = "tiger";
    } else {
      dragonTiger = "T"; // Tie
    }

    if (oddEven === prevOddEven) {
      results.oddEven[results.oddEven.length - 1]++;
    } else {
      results.oddEven.push(1);
    }

    if (bigSmall === prevBigSmall) {
      results.bigSmall[results.bigSmall.length - 1]++;
    } else {
      results.bigSmall.push(1);
    }

    if (dragonTiger === prevDragonTiger) {
      results.dragonTiger[results.dragonTiger.length - 1]++;
    } else {
      results.dragonTiger.push(1);
    }

    prevOddEven = oddEven;
    prevBigSmall = bigSmall;
    prevDragonTiger = dragonTiger;
  }

  return results;
}
// function analyzeDraw(drawNumbers) {

//   const results = {
//     oddEven: [],
//     bigSmall: [],
//     primeComposite: [],
//     dragonTigerCounts: []
//   };

//   let prevOddEven, prevBigSmall, prevDragonTiger;

//   for (let draw of drawNumbers) {

//     let sum = draw.reduce((a, b) => a + b, 0);

//     let oddEven = sum % 2 === 0 ? "even" : "odd";
//     let bigSmall = sum >= 23 ? "big" : "small";

//     // Update oddEven and bigSmall counts

//     let lastTwo = draw.slice(-2);
//     // console.log(lastTwo)
//     // console.log(lastTwo,lastTwo[0] < lastTwo[1])
//     // console.log(lastTwo,lastTwo[0] > lastTwo[1])

//     let dragonTiger;
//     if (lastTwo[0] > lastTwo[1]) {
//       dragonTiger = "dragon";
//     } else if (lastTwo[0] < lastTwo[1]) {
//       dragonTiger = "tiger";
//     } else {
//       dragonTiger = "tie";
//     }

//     if (dragonTiger !== prevDragonTiger) {
//       results.dragonTigerCounts.push({
//         [dragonTiger]: 1
//       });
//     } else {
//       let lastEntry = results.dragonTigerCounts[results.dragonTigerCounts.length - 1];
//       lastEntry[dragonTiger]++;
//     }

//     prevDragonTiger = dragonTiger;

//   }

//   return results;

// }

// function analyzeDraw(drawNumbers, whatToAnalyze) {

//   const results = {
//     oddEven: [],
//     bigSmall: [],
//     primeComposite: [],
//     dragonTigerCounts: []
//   };

//   let prevOddEven, prevBigSmall, prevDragonTiger;

//   for (let draw of drawNumbers) {

//     let sum = draw.reduce((a, b) => a + b, 0);

//     let oddEven = sum % 2 === 0 ? "even" : "odd";
//     let bigSmall = sum >= 23 ? "big" : "small";

//     if (oddEven !== prevOddEven) {
//       prevOddEven = oddEven;
//       results.oddEven.push(1);
//     } else {
//       results.oddEven[results.oddEven.length - 1]++;
//     }

//     if (bigSmall !== prevBigSmall) {
//       prevBigSmall = bigSmall;
//       results.bigSmall.push(1);
//     } else {
//       results.bigSmall[results.bigSmall.length - 1]++;
//     }

//     let lastTwo = draw.slice(-2);
//     let dragonTiger;
//     if (lastTwo[0] > lastTwo[1]) {
//       dragonTiger = "dragon";
//     } else if (lastTwo[0] < lastTwo[1]) {
//       dragonTiger = "tiger";
//     } else {
//       dragonTiger = "tie";
//     }

//     if (dragonTiger !== prevDragonTiger) {
//       results.dragonTigerCounts.push({
//         [dragonTiger]: 1
//       });
//     } else {
//       let lastEntry = results.dragonTigerCounts[results.dragonTigerCounts.length - 1];
//       lastEntry[dragonTiger]++;
//     }

//     prevDragonTiger = dragonTiger;

//   }

//   return results;

// }
// Test

// function analyzeDraw(drawNumbers, whatToAnalyze) {

//   const results = {
//     oddEven: [],
//     bigSmall: [],
//     primeComposite: [],
//     dragonTiger: []
//   };

//   let prevOddEven, prevBigSmall, prevPrimeComposite, prevDragonTiger;

//   for (const element of drawNumbers) {

//     const draw = element;

//     let ball;
//     if (whatToAnalyze === 'sum') {
//       ball = draw.reduce((a, b) => a + b, 0);
//     } else {
//       ball = draw[parseInt(whatToAnalyze) - 1];
//     }

//     let oddEven, bigSmall, primeComposite, dragonTiger;

//     if (whatToAnalyze === 'sum') {

//       oddEven = getOddEven(ball);
//       bigSmall = getBigSmallForSum(ball);

//       let lastTwo = draw.slice(-2);
//       dragonTiger = getDragonTiger(lastTwo);

//     } else {

//       oddEven = getOddEven(ball);
//       bigSmall = getBigSmallForBall(ball);
//       primeComposite = getPrimeComposite(ball);

//     }

//     // Update counts
//     updateCount(oddEven, results.oddEven, prevOddEven);
//     updateCount(bigSmall, results.bigSmall, prevBigSmall);
//     updateCount(primeComposite, results.primeComposite, prevPrimeComposite);
//     updateCount(dragonTiger, results.dragonTiger, prevDragonTiger);

//     // Update prev values
//     prevOddEven = oddEven;
//     prevBigSmall = bigSmall;
//     prevPrimeComposite = primeComposite;
//     prevDragonTiger = dragonTiger;

//   }

//   return results;

// }

function analyzeDraw(drawNumbers, whatToAnalyze) {
  const results = {
    oddEven: [],
    smallBig: [],
    primeComposite: [],
    dragonTiger: [],
    dragonTigerCounts: [], // Add an array to store detailed dragon-tiger-tie counts
  };

  let prevOddEven,
    prevBigSmall,
    prevPrimeComposite,
    prevDragonTiger,
    prevDragonTigerCounts = {};

  for (const element of drawNumbers) {
    const draw = element;

    let ball;
    if (whatToAnalyze === "sum") {
      ball = draw.reduce((a, b) => a + b, 0);
    } else {
      ball = draw[parseInt(whatToAnalyze) - 1];
    }

    let oddEven, bigSmall, primeComposite, dragonTiger;

    if (whatToAnalyze === "sum") {
      oddEven = getOddEven(ball);
      bigSmall = getBigSmallForSum(ball);

      let lastTwo = firstAndLast(draw);
      dragonTiger = getDragonTiger(lastTwo);
    } else {
      oddEven = getOddEven(ball);
      bigSmall = getBigSmallForBall(ball);

      primeComposite = getPrimeComposite(ball);
      dragonTiger = getDragonTiger(["dragon", "tiger", "tie"]); // Initialize dragonTiger value
    }

    // Update counts
    updateCount(oddEven, results.oddEven, prevOddEven);
    updateCount(bigSmall, results.smallBig, prevBigSmall);
    updateCount(primeComposite, results.primeComposite, prevPrimeComposite);
    // updateCount(dragonTiger, results.dragonTiger, prevDragonTiger)
    if (dragonTiger !== prevDragonTiger) {
      results.dragonTiger.push(dragonTiger);
      results.dragonTigerCounts.push({ [dragonTiger]: 1 });
    } else {
      let lastEntry =
        results.dragonTigerCounts[results.dragonTigerCounts.length - 1];
      lastEntry[dragonTiger]++;
    }

    // Update prev values
    prevOddEven = oddEven;
    prevBigSmall = bigSmall;
    prevPrimeComposite = primeComposite;
    prevDragonTiger = dragonTiger;
  }

  return results;
}

function firstAndLast(arr) {
  if (arr.length === 0) {
      return []; // Return an empty array for an empty input array.
  }

  const first = arr[0];
  const last = arr[arr.length - 1];

  return [first, last];
}
// Helper functions
function getOddEven(num) {
  return num % 2 === 0 ? "even" : "odd";
}

function getBigSmallForSum(sum) {
  return sum >= 23 && sum <= 45 ? "big" : "small";
}

//remember this is the inverse of bigsmall
function getBigSmallForBall(ball) {
  return ball >= 0 && ball <= 4 ?  "small":  "big" ;
}

// function getBigSmallForBall(ball) {
//   return ball >= 5 && ball <= 9 ? "big" : "small";
// }

function getDragonTiger(lastTwo) {
  if (lastTwo[0] > lastTwo[1]) {
    return "D";
  } else if (lastTwo[0] < lastTwo[1]) {
    return "T";
  } else {
    return "A";
  }
}

function getPrimeComposite(ball) {
  const primes = [1, 2, 3, 5, 7];

  if (primes.includes(ball)) {
    return "prime";
  } else {
    return "composite";
  }
}

function updateCount(value, results, prev) {
  if (prev === undefined || value !== prev) {
    results.push(1);
  } else {
    results[results.length - 1]++;
  }
}

// ["D","T", "A"]

// [1, 2, 3]
// [ 4, 5, 6]
// [7, 8, 9]

// [1, 2, 0, 4, 5, 6, 7, 8, 9]


const drawNumbers = [
  [5, 2, 3, 7, 5],
  [5, 2, 3, 7, 5],
  [5, 2, 3, 7, 5],
  [1, 2, 3, 4, 6],
  [1, 2, 3, 5, 6],
  [6, 2, 4, 6, 6],
  [6, 2, 4, 6, 6],
  [1, 3, 4, 5, 6],
  [2, 3, 4, 6, 6],
  [9, 2, 4, 6, 6],
  [9, 3, 4, 5, 6],
  [4, 0, 4, 5, 1],
  [9, 3, 5, 5, 6],
  [9, 4, 4, 8, 6],
  [8, 3, 5, 5, 6],
  [9, 3, 5, 5, 2],
  [6, 3, 5, 5, 6],
  [9, 3, 5, 5, 6],
  [9, 3, 5, 5, 6],
  //generate 100 more randomly
  [9, 3, 5, 5, 6],
  [9, 1, 3, 7, 2],
  [6, 2, 3, 4, 6],
  [6, 2, 3, 4, 6],
  [1, 2, 3, 5, 6],
  [1, 2, 4, 5, 6],
  [8, 2, 4, 5, 6],
  [1, 3, 4, 5, 1],
  [1, 3, 4, 5, 1],
  [1, 3, 4, 5, 6],
  [2, 3, 6, 6, 6],
  [9, 2, 4, 6, 6],
  [9, 3, 0, 5, 6],
  [9, 3, 4, 5, 6],
  [9, 3, 5, 7, 6],
  [9, 3, 7, 5, 6],
  [4, 3, 5, 5, 6],
  [9, 3, 5, 5, 6],
  [6, 3, 2, 1, 0],
  [0, 3, 2, 1, 0],
  [0, 3, 2, 1, 0],
  [0, 3, 2, 1, 0],
  [0, 3, 2, 1, 0],
  [0, 3, 2, 1, 0],
  [0, 3, 2, 1, 0],
  [0, 3, 2, 1, 0],
  [9, 3, 2, 1, 0],
  [7, 3, 2, 1, 0],
  [7, 3, 2, 1, 7],
  [7, 3, 2, 1, 7],
  [7, 3, 2, 1, 7],
  [7, 3, 2, 1, 7],
  [7, 3, 2, 1, 7],
  [7, 3, 2, 1, 7],
  [7, 3, 2, 1, 7],
  [7, 3, 2, 1, 7],
  [7, 3, 2, 1, 7],
  [7, 3, 2, 1, 7],

  // [2, 7, 2, 5, 3],
  // [1, 5, 2, 7, 8],
  // [0, 8, 9, 0, 6],
  // [4, 1, 6, 7, 3],
  // [0, 0, 2, 3, 8],
  // [5, 3, 7, 2, 2],
  // [2, 6, 0, 2, 7],
  // [8, 4, 0, 0, 3],
  // [6, 1, 4, 6, 8],
  // [1, 9, 8, 7, 5],
  // [6, 0, 1, 1, 6],
  // [4, 4, 6, 8, 3],
  // [1, 4, 3, 2, 0],
  // [8, 1, 5, 3, 2],
  // [9, 3, 4, 9, 7],
  // [6, 4, 4, 8, 1],
  // [1, 1, 5, 9, 4],
  // [1, 9, 6, 2, 2],
  // [2, 5, 9, 3, 3],
  // [2, 2, 5, 5, 4],
  // [1, 6, 2, 9, 3],
  // [7, 4, 7, 9, 7],
  // [1, 8, 8, 9, 4],
  // [1, 5, 4, 4, 8],
  // [1, 1, 0, 7, 7],
  // [4, 2, 1, 2, 7],
  // [7, 3, 9, 4, 8],
  // [7, 9, 9, 3, 3],
  // [4, 0, 6, 3, 5],
  // [4, 1, 0, 0, 3],
  // [0, 4, 2, 4, 0],
  // [8, 9, 7, 5, 6],
  // [3, 1, 7, 8, 6],
  // [0, 6, 3, 0, 3],
  // [1, 0, 4, 1, 1],
  // [8, 6, 9, 0, 7],
  // [0, 8, 5, 2, 5],
  // [4, 5, 1, 4, 9],
  // [6, 2, 8, 5, 6],
  // [2, 2, 9, 2, 3],
  // [7, 1, 4, 6, 6],
  // [9, 9, 6, 1, 0],
  // [1, 5, 6, 3, 8],
  // [3, 0, 0, 3, 6],
  // [5, 3, 5, 5, 5],
  // [9, 0, 4, 6, 8],
  // [0, 3, 5, 7, 6],
  // [1, 5, 6, 4, 0],
  // [6, 1, 3, 9, 3],
  // [3, 9, 3, 7, 3],
  // [5, 8, 4, 8, 7],
  // [2, 4, 1, 7, 2],
  // [2, 0, 0, 4, 3],
  // [6, 6, 4, 1, 2],
  // [2, 1, 5, 0, 3],
  // [1, 8, 3, 3, 7],
  // [6, 5, 9, 6, 8],
  // [1, 3, 3, 0, 1],
  // [1, 3, 0, 4, 8],
  // [5, 2, 2, 2, 0],
  // [0, 3, 8, 2, 4],
  // [0, 2, 3, 4, 0],
  // [3, 4, 6, 8, 9],
  // [8, 3, 4, 4, 2],
  // [6, 2, 2, 1, 3],
  // [7, 8, 3, 2, 8],
  // [6, 8, 6, 5, 7],
  // [4, 0, 4, 6, 1],
  // [4, 0, 2, 5, 7],
  // [3, 4, 5, 2, 7],
  // [7, 9, 0, 6, 5],
  // [9, 0, 4, 9, 0],
  // [4, 6, 4, 4, 4],
  // [4, 3, 2, 3, 2],
  // [5, 5, 9, 6, 8],
  // [5, 9, 1, 7, 4],
  // [5, 4, 4, 6, 3],
  // [6, 4, 1, 3, 8],
  // [0, 7, 5, 0, 4],
  // [2, 9, 7, 4, 0],
  // [0, 2, 8, 6, 2],
  // [4, 5, 5, 6, 9],
  // [6, 7, 2, 6, 1],
  // [2, 4, 9, 8, 3],
  // [8, 5, 7, 9, 9],
  // [4, 7, 8, 7, 4],
  // [9, 4, 9, 0, 4],
  // [7, 5, 3, 2, 5],
  // [7, 3, 2, 4, 8],
  // [4, 8, 8, 5, 7],
  // [9, 8, 4, 2, 6],
  // [5, 3, 8, 0, 5],
  // [2, 3, 9, 2, 6],
  // [4, 6, 0, 1, 1],
  // [4, 6, 0, 1, 1],
  // [5, 6, 4, 7, 4],
  // [2, 5, 2, 1, 0],
  // [6, 9, 5, 2, 1],
  // [8, 4, 1, 7, 5],
  // [8, 5, 7, 3, 3],
  // [5, 4, 6, 2, 0],
];

const gridArea = [
  [0, 1, "B"],
  [1, 1, "B"],
  [2, 1, "B"],
  [3, 1, "B"],
  [4, 1, "B"],
  [5, 1, "B"],
  [6, 1, "B"],//START BRANCHING
  [6, 2, "B"],
  [6, 3, "B"],
  [0, 2, "S"],
  [1, 2, "S"],
  [2, 2, "S"],
  [3, 2, "S"],
  [4, 2, "S"],
  [5, 2, "S"],
  [5, 3, "S"],
  [5, 4, "S"],
  [6, 4, "S"],
  [0, 3, "B"],
  [1, 3, "B"],
  [2, 3, "B"],
  [3, 3, "B"],
  [4, 3, "B"],
  [4, 4, "B"],
  [4, 5, "B"],
  [5, 5, "B"],
  [6, 5, "B"],
  [6, 6, "B"],
  [6, 7, "B"],
  [6, 8, "B"],
  [0, 4, "S"],
  [1, 4, "S"],
  [2, 4, "S"],
  [3, 4, "S"],
  [3, 5, "S"],
  [3, 6, "S"],
  [4, 6, "S"],
  [5, 6, "S"],
  [5, 7, "S"],
]

function gridArea(drawNumbers, area){
  // var grid = [];
  // for (var i = 0; i < drawNumbers.length; i++){
  //   grid.push(drawNumbers[i][area]);
  // }
  // return grid;
}

// }

console.log(analyzeDraw(drawNumbers, "sum"));
console.log(analyzeDraw(drawNumbers, "3rd"));
console.log(analyzeDraw(drawNumbers, "1st"));
