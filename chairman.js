// 234714152223273138394042434850667980

// const NUMBERS ="1314262733344446485458596061626567717578" //
// const NUMBERS = "234714152223273138394042434850667980";
// const NUMBERS = "3481617192021222324343840476366687678";
// const NUMBERS = "";
const NUMBERS = "278919222730323742475154556165667176";
// const NUMBERS = "234714152223273138394042434850667980";
// const NUMBERS = "1592429374447495354606970717275767980";
// const NUMBERS = "67162325263031324142485354636870747780";
// const NUMBERS = "415171821222734373943455052555861627075";
// const NUMBERS = "410111216202232353639404448506065687073";

//function to return "2 3 4 7 14 15 22 23 27 31 38 39 40 42 43 48 50 66 79 80"

// function getChairmanNumbers() {
//     let result = "";
//     for (let i = 0; i < NUMBERS.length; i++) {
//         if (i % 2 === 0) {
//             result += NUMBERS[i];
//             if (i !== NUMBERS.length - 1) {
//                 result += " ";
//             }
//         }
//     }
//     return result;
// }

// function getChairmanNumbers1() {
//   let result = 0;
//   let myArr = [];
//   for (let i = NUMBERS.length; i >= 0; i = i - 2) {
//     // console.log(i)
//     if (NUMBERS[i + 1] !== undefined && NUMBERS[i] !== undefined) {
//       if (
//         myArr.length > 0 &&
//         parseInt(NUMBERS[i] + NUMBERS[i + 1]) > myArr.at(-1)
//       ) {
//         result = i + 1;
//         console.log(result);
//         myArr.push(
//           ...NUMBERS.substring(0, result + 1)
//             .split("")
//             .map(Number)
//         );
//         break;
//       }
//       myArr.push(parseInt(NUMBERS[i] + NUMBERS[i + 1]));
//     }
//   }
//   return myArr.length == 19
//     ? myArr
//         .concat(NUMBERS[0])
//         .toSorted((a, b) => a - b)
//         .join(", ")
//     : myArr.toSorted((a, b) => a - b).join(", ");
// }

// function getChairmanNumbers(numString) {
//   let myArr = [];
//   for (let i = numString.length; i >= 0; i = i - 2) {
//     if (numString[i + 1] !== undefined && numString[i] !== undefined) {
//       const EXTTRACTED_NUMBERS = parseInt(numString[i] + numString[i + 1]);
//       if (myArr.length > 0 && EXTTRACTED_NUMBERS > myArr.at(-1)) {
//         myArr.push(
//           ...numString
//             .substring(0, i + 1 + 1)
//             .split("")
//             .map(Number)
//         );
//         break;
//       }
//       myArr.push(EXTTRACTED_NUMBERS);
//     }
//   }
//   return myArr.length == 19
//     ? myArr
//         .concat(numString[0])
//         .toSorted((a, b) => a - b)
//         .join(", ")
//     : myArr.toSorted((a, b) => a - b).join(", ");
// }

// console.log(getChairmanNumbers(NUMBERS)); // 2 3 4 7 14 15 22 23 27 31 38 39 40 42 43 48 50 66 79 80

// console.log(NUMBERS); // 6b5a4d3c2b1a191

const STRIN = `4
8
2
3
8`;

function removeWhiteSpaces(str) {
  return str.toString().replace(/\s/g, "").split("").join(", ");
}

const obj = {
  "Extra No.": {
    "Big/Small": {
      1183: {
        Big: 2,
      },
    },
  },
};

const vv= {
  "Extra No.": {
      "1183": {
          "Big": 2
      }
  }
}

function processRoadBetSelections(roadBetSelections, nextBetId, lotteryId, multiplier) {
  const results = [];
  const groupType = {
    "Big": "Big/Small",
    "Small": "Big/Small",
    "Odd": "Odd/Even",
    "Even": "Odd/Even",
    "Prime": "Prime/Composite",
    "Composite": "Prime/Composite",
    "Dragon": "Dragon/Tiger",
    "Tiger": "Dragon/Tiger",
    "Tie": "Dragon/Tiger",
  }
  for (const place in roadBetSelections) {
    const selectedGamePlaces = roadBetSelections[place];
    // console.log("sssssssssssssssssssssssss", place);
    for (const gn_id in selectedGamePlaces) {
      const userSelections = selectedGamePlaces[gn_id];

      for (const userSelection in userSelections) {
        const betAmount = userSelections[userSelection];
        const gameLabel = `${place} ${groupType[userSelection]}`;


        results.push({
          betId: "nextBetId",
          allSelections: [userSelection],
          totalBetAmt: Number(betAmount),
          uid: results.length + 1,
          bet_date: "", //getDate("" + new Date()),
          bet_time: "", //getTimeTwo(new Date()),
          game_label: gameLabel,
          totalBets: 1,
          lottery_id: "lotteryId",
          unitStaked: 1,
          multiplier: 1,
          gameId: Number(gn_id),
          userSelections: `${gameLabel} ${userSelection}`,
        });
      }
    }
  }

  return results;
};

function processRoadBetSelectionsss2(
  roadBetSelections,
) {
  const results = [];
  
  for (const place in roadBetSelections) {
    const selectedGamePlaces = roadBetSelections[place];
    for (const gType in selectedGamePlaces) {
      const selectedGroupType = selectedGamePlaces[gType]
      for (const gn_id in selectedGroupType) {
        const userSelections = selectedGroupType[gn_id];

        for (const userSelection in userSelections) {
          const betAmount = userSelections[userSelection];
          const gameLabel = `${place} ${gType}`;

          results.push({
            betId: "nextBetId",
            allSelections: [userSelection],
            totalBetAmt: Number(betAmount),
            uid: results.length + 1,
            bet_date: "", //getDate("" + new Date()),
            bet_time: "", //getTimeTwo(new Date()),
            game_label: gameLabel,
            totalBets: 1,
            lottery_id: "lotteryId",
            unitStaked: 1,
            multiplier: 1,
            gameId: Number(gn_id),
            userSelections: `${gameLabel} ${userSelection}`,
          });
        }
      }
    }
  }

  return results;
}
function processRoadBetSelections2(
  roadBetSelections,
) {
  const results = [];
  let uid = 1;
  for (const [place, selectedGamePlaces] of Object.entries(roadBetSelections)) {
    for (const [gType, selectedGroupType] of Object.entries(selectedGamePlaces)) {
      for (const [gn_id, userSelections] of Object.entries(selectedGroupType)) {
        for (const [userSelection, betAmount] of Object.entries(userSelections)) {
          const gameLabel = `${place} ${gType}`;

          results.push({
            betId: "nextBetId",
            allSelections: [userSelection],
            totalBetAmt: Number(betAmount),
            uid: uid++,
            bet_date: "", //getDate("" + new Date()),
            bet_time: "", //getTimeTwo(new Date()),
            game_label: gameLabel,
            totalBets: 1,
            lottery_id: "lotteryId",
            unitStaked: 1,
            multiplier: 1,
            gameId: Number(gn_id),
            userSelections: `${gameLabel} ${userSelection}`,
          });
        }
      }
    }
  }

  return results;
}

console.log(processRoadBetSelections(vv));
console.log(processRoadBetSelections2(obj));
