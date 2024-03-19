const a = [1, 2, 3, 4, 5];
function isStreaks(drawNumber) {
  let startIndex = 0;
  let count = 1;
  let endIndex = 4;
  let bool = false;

  let drawNumbers = drawNumber.sort((a, b) => a - b);

  console.log(drawNumber);
  for (let i = startIndex; ; i++) {
    const index = (i + drawNumbers.length) % drawNumbers.length; // Wrap around array
    console.log(index, " ", drawNumbers[index]);

    let sortedDrawNumbers = [...drawNumbers].sort();
    const constant = 1;
    if (index === endIndex) {
      break;
    }

    if (sortedDrawNumbers[i] + 1 === sortedDrawNumbers[i + 1]) {
      // console.log("continuing with starting index");
      // bool = true;
      // count+=1;
      count++;
      continue;
    } else if (sortedDrawNumbers[i] + 1 !== sortedDrawNumbers[i + 1]) {
      if (
        sortedDrawNumbers[i] === 9 &&
        +(sortedDrawNumbers[i] + constant).toString().padStart(2, "0")[1] ===
          sortedDrawNumbers[0]
      ) {
        // bool = true;
        // console.log("djshfsdgajhgfjsdgajfgsdjagfjsdfsdfsdfasd")
        count++;
      } else {
        // console.log("changing starting index in the else", startIndex, sortedDrawNumbers[i], i);
        // bool = false;
        startIndex = i;
        endIndex = i;
        // console.log("iiiiiiiiiiiiiiiiiii", i, endIndex)
      }
    } else {
      // console.log("changing starting index in the elset", startIndex);
      // bool = false;
      startIndex = i + 1;
      endIndex = i - 1;
    }
    if (i === a.length + startIndex - 1) {
      i = -1; // Will be incremented to 0 in the next iteration
    }
  }
  // console.log("count", count)
  // console.log("start index", startIndex)
  // console.log("end index", endIndex)
  // console.log(bool);
  count === 5 ? (bool = true) : (bool = false);
  return bool;
}

function isStreak(drawNumber, streakLength) {
  const sortedDrawNumbers = [...drawNumber].sort((a, b) => a - b);

  for (let i = 0; i < sortedDrawNumbers.length; i++) {
    let count = 1;
    let currentIndex = i;

    for (let j = 0; j < streakLength - 1; j++) {
      const nextIndex = (currentIndex + 1) % sortedDrawNumbers.length;

      if (
        sortedDrawNumbers[nextIndex] === sortedDrawNumbers[currentIndex] + 1 ||
        (sortedDrawNumbers[nextIndex] === 0 &&
          sortedDrawNumbers[currentIndex] === 9)
      ) {
        count++;
        currentIndex = nextIndex;
      } else {
        break;
      }
    }

    if (count === streakLength) {
      return true;
    }
  }

  return false;
}

// let numbers = [8, 0, 1, 7, 9];
// let numbers = [4,5,6,3,7,8];
let numbers = [7, 0, 8, 9, 1]; // [9, 8, 7, 1, 6]
// let numbers = [8, 0, 2, 7, 9];
//[0,1,7,8,9 ]
//[ 0, 2, 7, 8, 9]
// console.log(isStreak([8,9,1], 3));

const aa = {
  firstRow: [],
  secondRow: [],
  thirdRow: [],
  fourthRow: [],
  fifthRow: [],
  sixthRow: [],
  seventhRow: [],
  eighthRow: [],
  ninthRow: [],
  tenthRow: [],
  HEAD: [1,4 ,7],
  TAIL: [6,9],
};

// console.log([[], []])

const ra = {
  "firstRow": [],
  "secondRow": [],
  "thirdRow": [],
  "fourthRow": [],
  "fifthRow": [],
  "sixthRow": [],
  "seventhRow": [],
  "eighthRow": [],
  "ninthRow": [],
  "tenthRow": [],
  "Ball 1": [
      "Red Balls", "Blue Balls"
  ],
  "Ball 2": [
      "Red Balls"
  ],
  "Ball 3": [
      "Red Balls"
  ],
  "Ball 4": [
      "Red Balls"
  ]
}

// function to return this [[0],[1,6,7,2]] for head and tail
function getHeadAndTail(selectionsObj) {
  const head = selectionsObj.HEAD;
  const tail = selectionsObj.TAIL;

  const headAndTail = [head, tail];
  return headAndTail;
}

//function to format the selection to string head 0 tail 1,6,7,2
function formatHeadNTailSelection(selectionsObj) {
  const head = selectionsObj.HEAD;
  const tail = selectionsObj.TAIL;

  const headString = head.join(", ");
  const tailString = tail.join(", ");
  let formattedSelection = "";
  
  if (headString && tailString) {
    formattedSelection = `Head ${headString} Tail ${tailString}`;
  } else if (headString && !tailString) {
    formattedSelection = `Head ${headString}`;
  } else if (!headString && tailString) {
    formattedSelection = `Tail ${tailString}`;
  }
  
 
  // const formattedSelection = `${headString} Head ${tailString} Tail`;
  return formattedSelection;
}

// function to format selections object to [{1: ["Red Balls"]}, {2: ["Red Balls"]}, {3: ["Red Balls"]}, {4: ["Red Balls"]}]
function formatSelections4BallColor(userSelectionsObj) {
  const allSelections = [];
  for (const key in userSelectionsObj) {
    if (userSelectionsObj.hasOwnProperty(key)) {
      const element = userSelectionsObj[key];
      const obj = {};
      obj[key.split(" ")[1]] = element;
      allSelections.push(obj);
    }
  }
  return allSelections;
}

//funtion to format the selections object to string "Ball 1: Red Balls, Ball 2: Red Balls, Ball 3: Red Balls, Ball 4: Red Balls"
function formatSelectionsString(userSelectionsObj) {
  let formattedSelection = "";
  for (const key in userSelectionsObj) {
    if (userSelectionsObj.hasOwnProperty(key)) {
      const element = userSelectionsObj[key];
      formattedSelection += `${key}: ${element}, `;
    }
  }

  return formattedSelection;
}

// console.log(getHeadAndTail(aa));
// console.log(formatHeadNTailSelection(aa));
console.log(formatSelections4BallColor(ra));

// console.log([[0], [1, 6, 7, 2]]);
