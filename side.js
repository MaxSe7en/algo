// function generateObjects(ob) {
//     const keys = Object.keys(ob);
//     const result = keys.map((key, index) => {
//       const selections = ob[key];
//       return selections.map((selection, selectionIndex) => ({
//         "game_name": "",
//         "uid": index + 1,
//         "allSelections": [[selection]],
//         "userSelections": selection,
//         "multiplier": 1,
//         "totalBets": 100000,
//         "gameId": 1,
//         "totalBetAmt": 200000,
//         "unitStaked": 2,
//         "betId": "202402141081",
//         "lottery_id": 1,
//         "game_label": "All 5 Straight (joint)",
//         "bet_time": `13:59:${28 + selectionIndex * 5}`,
//         "bet_date": "2024-02-13"
//       }));
//     }).flat();

//     return result;
//   }

//   const ob = {
//     "firstRow": [
//       "Red Balls",
//       "Blue Balls"
//     ],
//     "secondRow": [
//         "Red Balls",
//         "Blue Balls"
//       ],
//     "thirdRow": [],
//     "fourthRow": [],
//     "fifthRow": [
//         "Red Balls",
//         "Blue Balls",
//         "Green Balls"
//       ],
//     "sixthRow": [],
//     "seventhRow": [],
//     "eighthRow": [],
//     "ninthRow": [],
//     "tenthRow": []
//   };
//   [380, 382, 384, 385, 388, 389, 392, ]
//   const result = generateObjects(ob);
//   console.log(result);

//   const a =[{
//     "game_name": "",
//     "uid": 1,
//     "allSelections": [],
//     "userSelections": "",
//     "multiplier": 1,
//     "totalBets": 0,
//     "gameId": 438,
//     "totalBetAmt": 0,
//     "unitStaked": 2,
//     "betId": "202403050050",
//     "lottery_id": 25,
//     "game_label": "Color Balls",
//     "bet_time": "16:47:50",
//     "bet_date": "2024-03-04",
//     "selfRebate": "false"
// }]

// console.log(typeof a)
// console.log(Array.isArray({
//     "game_name": "",
//     "uid": 1,
//     "allSelections": [],
//     "userSelections": "",
//     "multiplier": 1,
//     "totalBets": 0,
//     "gameId": 438,
//     "totalBetAmt": 0,
//     "unitStaked": 2,
//     "betId": "202403050050",
//     "lottery_id": 25,
//     "game_label": "Color Balls",
//     "bet_time": "16:47:50",
//     "bet_date": "2024-03-04",
//     "selfRebate": "false"
// }))

const colors = {
  red: "#e8345c",
  blue: "#6b9fec",
  green: "#30ae5d",
};

const { red, blue, green } = colors;

const ballsWithColors = [
  {
    number: "01",
    color: red,
    animal: "rabbit",
  },
  {
    number: "02",
    color: red,
    animal: "tiger",
  },
  {
    number: "03",
    color: blue,
    animal: "ox",
  },
  {
    number: "04",
    color: blue,
    animal: "rat",
  },
  {
    number: "05",
    color: green,
    animal: "pig",
  },
  {
    number: "06",
    color: green,
    animal: "dog",
  },
  {
    number: "07",
    color: red,
    animal: "rooster",
  },
  {
    number: "08",
    color: red,
    animal: "monkey",
  },
  {
    number: "09",
    color: blue,
    animal: "goat",
  },
  {
    number: "10",
    color: blue,
    animal: "horse",
  },
  {
    number: "11",
    color: green,
    animal: "snake",
  },
  {
    number: "12",
    color: red,
    animal: "dragon",
  },
  {
    number: "13",
    color: red,
    animal: "rabbit",
  },
  {
    number: "14",
    color: blue,
    animal: "tiger",
  },
  {
    number: "15",
    color: blue,
    animal: "ox",
  },
  {
    number: "16",
    color: green,
    animal: "rat",
  },
  {
    number: "17",
    color: green,
    animal: "pig",
  },
  {
    number: "18",
    color: red,
    animal: "dog",
  },
  {
    number: "19",
    color: red,
    animal: "rooster",
  },
  {
    number: "20",
    color: blue,
    animal: "monkey",
  },
  {
    number: "21",
    color: green,
    animal: "goat",
  },
  {
    number: "22",
    color: green,
    animal: "horse",
  },
  {
    number: "23",
    color: red,
    animal: "snake",
  },
  {
    number: "24",
    color: red,
    animal: "dragon",
  },
  {
    number: "25",
    color: blue,
    animal: "rabbit",
  },
  {
    number: "26",
    color: blue,
    animal: "tiger",
  },
  {
    number: "27",
    color: green,
    animal: "ox",
  },
  {
    number: "28",
    color: green,
    animal: "rat",
  },
  {
    number: "29",
    color: red,
    animal: "pig",
  },
  {
    number: "30",
    color: red,
    animal: "dog",
  },
  {
    number: "31",
    color: blue,
    animal: "rooster",
  },
  {
    number: "32",
    color: green,
    animal: "monkey",
  },
  {
    number: "33",
    color: green,
    animal: "goat",
  },
  {
    number: "34",
    color: red,
    animal: "horse",
  },
  {
    number: "35",
    color: red,
    animal: "snake",
  },
  {
    number: "36",
    color: blue,
    animal: "dragon",
  },
  {
    number: "37",
    color: blue,
    animal: "rabbit",
  },
  {
    number: "38",
    color: green,
    animal: "tiger",
  },
  {
    number: "39",
    color: green,
    animal: "ox",
  },
  {
    number: "40",
    color: red,
    animal: "rat",
  },
  {
    number: "41",
    color: blue,
    animal: "pig",
  },
  {
    number: "42",
    color: blue,
    animal: "dog",
  },
  {
    number: "43",
    color: green,
    animal: "rooster",
  },
  {
    number: "44",
    color: green,
    animal: "monkey",
  },
  {
    number: "45",
    color: red,
    animal: "goat",
  },
  {
    number: "46",
    color: red,
    animal: "horse",
  },
  {
    number: "47",
    color: blue,
    animal: "snake",
  },
  {
    number: "48",
    color: blue,
    animal: "dragon",
  },
  {
    number: "49",
    color: green,
    animal: "rabbit",
  },
];
const {
  ox,
  rabbit,
  dragon,
  horse,
  monkey,
  pig,
  rat,
  tiger,
  snake,
  goat,
  rooster,
  dog,
} = splitNumbersForMark6(ballsWithColors.map((ball) => ball.number));

// console.log(
//   "xxxx",
//   ballsWithColors.map((ball) => ball.number)
// );
function generateArray(startingPoint, length = 4) {
  const result = [];
  for (let i = 0; i < length; i++) {
    const number = startingPoint + i * 12;
    const formattedNumber = number < 10 ? `0${number}` : `${number}`;
    result.push(formattedNumber);
  }
  return result;
}

function splitNumbersForMark6(
  // start: number,
  // end: number,
  numbers
) {
  const buttons = numbers;
  // .slice(start, end + 1);
  const small = buttons.slice(0, buttons.length / 2);
  const big = buttons.slice(buttons.length / 2, buttons.length);
  const even = buttons.filter((number) => number % 2 === 0);
  const odd = buttons.filter((number) => number % 2 !== 0);
  const all = numbers;
  const rat = generateArray(4);
  const ox = generateArray(3);
  const tiger = generateArray(2);
  const rabbit = generateArray(1, 5);
  const dragon = generateArray(12);
  const snake = generateArray(11);
  const horse = generateArray(10);
  const goat = generateArray(9);
  const monkey = generateArray(8);
  const rooster = generateArray(7);
  const dog = generateArray(6);
  const pig = generateArray(5);
  const red = ballsWithColors.filter(
    (ball) => ball.color === colors.red && ball.number
  );
  const blue = ballsWithColors.filter(
    (ball) => ball.color === colors.blue && ball.number
  );
  const green = ballsWithColors.filter(
    (ball) => ball.color === colors.green && ball.number
  );
  const redBig = red.filter((ball) => ball.number > 24);
  const smallRed = red.filter((ball) => ball.number < 25);
  const oddRed = red.filter((ball) => ball.number % 2 !== 0);
  const evenRed = red.filter((ball) => ball.number % 2 === 0);
  const blueBig = blue.filter((ball) => ball.number > 24);
  const smallBlue = blue.filter((ball) => ball.number < 25);
  const oddBlue = blue.filter((ball) => ball.number % 2 !== 0);
  const evenBlue = blue.filter((ball) => ball.number % 2 === 0);
  const greenBig = green.slice(0, -1).filter((ball) => ball.number > 24);
  const smallGreen = green.slice(0, -1).filter((ball) => ball.number < 25);
  const oddGreen = green.slice(0, -1).filter((ball) => ball.number % 2 !== 0);
  const evenGreen = green.slice(0, -1).filter((ball) => ball.number % 2 === 0);

  return {
    small,
    big,
    even,
    odd,
    all,
    buttons,
    rat,
    ox,
    tiger,
    rabbit,
    dragon,
    snake,
    horse,
    goat,
    monkey,
    rooster,
    dog,
    pig,
    red,
    blue,
    green,
    redBig,
    smallRed,
    oddRed,
    evenRed,
    blueBig,
    smallBlue,
    oddBlue,
    evenBlue,
    greenBig,
    smallGreen,
    oddGreen,
    evenGreen,
  };
}
// const draw = ["33", "03", "09", "35", "46", "04", "25"];
// const draw2 = ["05", "09", "19", "06", "30", "15", "29"];
// function getFormOddEvenZodiac(number) {
//   const zodiacNumbers = [ox, rabbit, dragon, horse, monkey, pig, rat, tiger, snake, goat, rooster, dog];
//   console.log("zodiacs", zodiacNumbers);
//   const drawNumbers = number; //.split("");
//   const uniqueZodiacs = drawNumbers.filter((zodiac) =>
//     zodiacNumbers.includes(zodiac)
//   );
//   const uniqueZodiacsCount = new Set(uniqueZodiacs).size;
//   return uniqueZodiacsCount % 2 === 0 ? "E" : "O";
// }

// console.log(getFormOddEvenZodiac(draw2));


const zodiacNumbers = [
  ["03", "15", "27", "39"],
  ["01", "13", "25", "37", "49"],
  ["12", "24", "36", "48"],
  ["10", "22", "34", "46"],
  ["08", "20", "32", "44"],
  ["05", "17", "29", "41"],
  ["04", "16", "28", "40"],
  ["02", "14", "26", "38"],
  ["11", "23", "35", "47"],
  ["09", "21", "33", "45"],
  ["07", "19", "31", "43"],
  ["06", "18", "30", "42"]
];

function getFormOddEvenZodiac(numbers) {
  let count = 0;
  const uniqueZodiacsSeen = new Set();

  for (const number of numbers) {
    let zodiacFound = false;

    for (const zodiac of zodiacNumbers) {
      if (zodiac.includes(number)) {
        if (!uniqueZodiacsSeen.has(zodiac)) {
          uniqueZodiacsSeen.add(zodiac);
          count++;
        }
        zodiacFound = true;
        break;
      }
    }

    if (!zodiacFound) {
      console.log(`Number ${number} not found in zodiac numbers.`);
    }
  }

  return count % 2 === 0 ? "E" : "O";
}


function getFormOddEvenZodiac(drawNumbers) {
  const uniqueZodiacCounts = new Set();

  drawNumbers.forEach((number) => {
    zodiacNumbers.forEach((zodiac, index) => {
      if (zodiac.includes(number)) {
        uniqueZodiacCounts.add(index);
      }
    });
  });

  const uniqueZodiacsCount = uniqueZodiacCounts.size;
  return uniqueZodiacsCount % 2 === 0 ? "E" : "O";
}

const draw6 = ["06", "36", "48", "19", "44", "09", "12"]
const draw5 = ["37", "23", "21", "26", "20", "14", "13"]
const draw = ["33", "03", "09", "35", "46", "04", "25"];
const draw2 = ["05", "09", "19", "06", "30", "15", "29"];


const draw4 = ["32", "11", "24", "20", "06", "14", "40"];
const draw3 = ["10", "13", "37", "45", "38", "41", "40"]
console.log(getFormOddEvenZodiac(draw6));