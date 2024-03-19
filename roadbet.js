const drawNumbers5d = [
  //   [2, 1, 2, 4, 6],
  //   [4, 1, 9, 4, 5],
  //   [1, 4, 5, 9, 4],
  //   [0, 7, 1, 0, 0],
  //   [1, 4, 7, 0, 7],
  //   [5, 7, 5, 0, 5],
  //   [7, 1, 9, 5, 4],
  //   [8, 1, 4, 5, 8],
  //   [9, 3, 9, 7, 7],
  //   [5, 3, 5, 7, 9],
  //   [8, 0, 4, 7, 2],
  //   [0, 2, 4, 7, 8],
  //   [0, 9, 9, 6, 0],
  //   [0, 6, 9, 1, 3],
  //   [3, 5, 3, 1, 3],
  //   [5, 3, 4, 1, 5],
  //   [3, 1, 3, 4, 5],
  //   [3, 5, 1, 5, 8],
  //   [1, 3, 5, 8, 6],
  //   [9, 1, 4, 9, 1],
  //   [4, 6, 9, 8, 2],
  //   [7, 4, 7, 2, 4],
  //   [7, 8, 6, 8, 4],
  //   [9, 3, 3, 4, 6],
  //   [8, 9, 1, 2, 5],
  //   [5, 3, 1, 2, 3],
  //   [5, 5, 4, 6, 1],
  //   [3, 1, 3, 4, 5],
  //   [6, 6, 2, 4, 8],
  //   [5, 2, 4, 5, 6],
  //   [8, 8, 4, 4, 7],
  //   [5, 4, 5, 7, 8],
  //   [5, 5, 2, 9, 5],
  //   [2, 5, 9, 9, 2],
  //   [1, 8, 6, 1, 2],
  //   [6, 8, 9, 1, 0],
  //   [1, 7, 9, 0, 1],
  //   [7, 9, 7, 0, 9],
  //   [9, 2, 0, 2, 7],
  //   [9, 4, 2, 8, 7],
  //   [0, 0, 2, 4, 7],
  //   [8, 1, 4, 2, 5],
  //   [8, 1, 4, 2, 5],
  //   [8, 1, 4, 2, 5],
  //   [8, 1, 4, 2, 5],
  //   [8, 1, 4, 2, 5],
  //   [8, 1, 4, 2, 5],
  //   [8, 1, 2, 4, 5],
  //   [8, 5, 6, 7, 7],
  //   [7, 5, 6, 7, 6],
  //   [8, 6, 5, 1, 1],
  //   [5, 6, 8, 3, 3],
  //   [7, 3, 4, 3, 4],
  //   [7, 6, 3, 6, 3],
  //   [3, 3, 6, 0, 4],
  //   [6, 6, 9, 0, 4],
  //   [6, 9, 9, 3, 9],
  //   [4, 6, 3, 4, 6],
  //   [9, 3, 2, 5, 0],
  //   [6, 0, 2, 3, 5],
  //   [6, 3, 5, 1, 9],
  //   [4, 1, 3, 4, 5],
  //   [9, 0, 3, 9, 7],
  //   [7, 0, 3, 7, 9],
  //   [5, 1, 6, 8, 1],
  //   [1, 5, 6, 8, 6],
  //   [2, 1, 6, 5, 1],
  //   [2, 5, 6, 5, 0],
  //   [5, 6, 9, 0, 5],
  //   [5, 6, 9, 0, 5],
  //   [5, 6, 9, 0, 5],
  //   [5, 6, 9, 0, 5],
  //   [5, 6, 9, 0, 5],
  //   [5, 6, 9, 0, 5],
  //   [5, 6, 9, 0, 5],
  //   [5, 6, 9, 0, 5],
  //   [5, 6, 9, 7, 5],
  //   [5, 6, 9, 0, 5],
  //   [5, 6, 9, 0, 5],
  //   [5, 6, 9, 0, 5],
  //   [5, 6, 9, 0, 5],
  //   [5, 6, 9, 0, 5],
  //   [5, 6, 9, 0, 5],
  //   [5, 6, 9, 0, 5],
  //   [5, 6, 9, 9, 5],
  //   [5, 6, 9, 0, 5],
  //   [5, 6, 9, 0, 5],
  //   [5, 6, 9, 0, 5],
  //   [5, 6, 9, 0, 5],
  //   [5, 6, 9, 0, 5],
  [5, 6, 9, 0, 5],
  [1, 6, 9, 0, 3],
  [5, 6, 9, 9, 5],
  [5, 1, 3, 0, 5],
  [5, 6, 9, 0, 5],
  [5, 6, 9, 0, 5],
  [5, 6, 9, 0, 5],
  [5, 6, 9, 0, 0],
  [5, 2, 9, 0, 5],
  [5, 6, 9, 0, 5],
  [3, 6, 9, 7, 5],
].reverse();

const drawNumbersPk10 = [
  //   [5, 6, 4, 7, 6, 6, 3, 5, 7, 6],
  //   [10, 10, 10, 9, 6, 10, 4, 3, 8, 5],
  //   [1, 5, 3, 1, 1, 5, 4, 4, 10, 2],
  //   [6, 4, 1, 7, 4, 1, 6, 7, 5, 7],
  //   [6, 9, 2, 6, 5, 5, 7, 10, 9, 9],
  //   [2, 8, 2, 7, 5, 4, 8, 3, 10, 5],
  //   [4, 6, 4, 5, 6, 8, 6, 3, 3, 5],
  //   [2, 7, 10, 6, 7, 3, 9, 5, 5, 7],
  //   [8, 10, 5, 5, 8, 3, 6, 5, 1, 8],
  //   [4, 1, 2, 5, 9, 8, 7, 1, 7, 3],
  //   [10, 9, 3, 7, 8, 1, 5, 4, 8, 8],
  //   [4, 9, 2, 1, 2, 6, 9, 9, 6, 2],
  //   [2, 2, 1, 8, 5, 9, 10, 1, 3, 7],
  //   [8, 7, 2, 2, 2, 5, 5, 10, 2, 9],
  //   [1, 9, 5, 7, 1, 3, 1, 2, 2, 3],
  //   [1, 7, 6, 4, 2, 5, 3, 3, 8, 9],
  //   [5, 5, 1, 3, 1, 3, 1, 2, 7, 1],
  //   [1, 5, 7, 8, 3, 3, 6, 7, 10, 2],
  //   [4, 2, 8, 6, 10, 4, 2, 10, 8, 6],
  //   [10, 10, 6, 2, 4, 1, 6, 8, 5, 3],
  //   [1, 9, 7, 3, 4, 1, 6, 5, 7, 3],
  //   [1, 8, 8, 9, 4, 1, 9, 9, 7, 9],
  //   [7, 4, 7, 1, 1, 10, 6, 2, 5, 7],
  //   [5, 3, 1, 9, 3, 8, 2, 3, 8, 7],
  //   [10, 5, 1, 9, 7, 6, 4, 6, 1, 8],
  //   [8, 6, 1, 8, 5, 8, 5, 2, 8, 6],
  //   [4, 5, 10, 1, 7, 6, 5, 1, 10, 9],
  //   [9, 8, 3, 10, 7, 5, 9, 6, 5, 5],
  //   [10, 10, 2, 5, 9, 4, 10, 2, 1, 3],
  //   [8, 10, 7, 6, 7, 9, 8, 8, 6, 9],
  //   [3, 8, 9, 7, 1, 2, 6, 2, 7, 6],
  //   [6, 10, 4, 7, 9, 1, 7, 2, 2, 5],
  //   [4, 10, 4, 10, 1, 3, 6, 10, 1, 5],
  //   [6, 4, 7, 9, 9, 7, 8, 6, 9, 7],
  //   [6, 5, 5, 6, 6, 8, 4, 10, 6, 8],
  //   [6, 10, 4, 7, 3, 6, 3, 9, 10, 10],
  //   [5, 10, 7, 8, 9, 2, 8, 2, 3, 7],
  //   [10, 8, 4, 3, 2, 6, 6, 5, 7, 3],
  //   [2, 3, 5, 3, 7, 9, 5, 7, 7, 4],
  //   [9, 2, 2, 8, 10, 9, 8, 6, 8, 3],
  //   [2, 5, 8, 2, 2, 7, 6, 7, 3, 7],
  //   [9, 2, 2, 8, 8, 8, 7, 8, 9, 10],
  //   [5, 7, 1, 6, 8, 10, 1, 3, 6, 9],
  //   [1, 1, 9, 1, 10, 9, 4, 1, 5, 1],
  //   [2, 9, 4, 7, 6, 4, 7, 3, 3, 7],
  //   [2, 8, 2, 6, 9, 6, 9, 3, 1, 4],
  //   [6, 8, 2, 3, 6, 2, 2, 10, 1, 8],
  //   [10, 1, 1, 1, 5, 6, 6, 7, 5, 7],
  //   [5, 3, 8, 7, 4, 7, 2, 2, 4, 5],
  //   [3, 10, 10, 10, 2, 6, 1, 3, 7, 4],
  //   [8, 1, 1, 5, 8, 9, 3, 9, 3, 4],
  //   [4, 5, 10, 3, 4, 8, 4, 3, 4, 1],
  //   [8, 3, 1, 1, 1, 9, 3, 10, 9, 5],
  //   [5, 1, 7, 4, 9, 9, 3, 10, 10, 5],
  //   [10, 10, 10, 8, 10, 10, 8, 9, 5, 3],
  //   [7, 6, 4, 3, 9, 4, 4, 2, 5, 2],
  //   [8, 5, 1, 1, 6, 3, 5, 2, 7, 4],
  //   [5, 4, 2, 2, 2, 7, 10, 10, 7, 8],
  //   [9, 1, 9, 7, 6, 10, 5, 1, 3, 2],
  //   [3, 5, 5, 3, 7, 4, 5, 9, 10, 2],
  //   [3, 4, 6, 4, 10, 10, 3, 4, 5, 7],
  //   [3, 4, 3, 10, 3, 7, 5, 1, 1, 1],
  //   [7, 5, 2, 7, 8, 2, 10, 3, 1, 7],
  //   [3, 6, 1, 8, 6, 9, 3, 2, 4, 6],
  //   [2, 5, 9, 3, 10, 6, 4, 2, 6, 10],
  //   [3, 8, 10, 6, 7, 3, 3, 2, 6, 2],
  //   [3, 7, 5, 7, 4, 10, 2, 5, 3, 4],
  //   [6, 2, 4, 7, 9, 6, 8, 2, 9, 8],
  //   [7, 2, 4, 5, 10, 1, 5, 10, 4, 7],
  //   [7, 2, 5, 8, 4, 6, 3, 7, 2, 4],
  //   [10, 3, 8, 9, 3, 10, 5, 2, 8, 1],
  //   [2, 3, 1, 9, 6, 6, 3, 2, 7, 8],
  //   [4, 2, 10, 8, 3, 9, 10, 5, 9, 2],
  //   [8, 6, 10, 5, 5, 8, 8, 10, 10, 10],
  //   [7, 6, 3, 6, 10, 4, 10, 7, 8, 6],
  //   [7, 9, 3, 6, 3, 5, 2, 2, 10, 7],
  //   [10, 7, 1, 1, 5, 6, 7, 7, 6, 6],
  //   [4, 8, 5, 8, 1, 10, 5, 2, 9, 10],
  //   [2, 5, 9, 7, 4, 5, 6, 9, 9, 9],
  //   [4, 8, 5, 5, 5, 2, 8, 8, 6, 7],
  //   [3, 2, 7, 3, 9, 2, 8, 8, 2, 7],
  //   [3, 2, 3, 9, 5, 6, 2, 4, 8, 6],
  //   [7, 10, 10, 5, 10, 8, 2, 4, 7, 8],
  //   [9, 4, 5, 1, 6, 8, 4, 9, 3, 3],
  //   [6, 2, 2, 5, 7, 6, 9, 4, 6, 5],
  //   [8, 8, 3, 6, 9, 6, 5, 2, 6, 2],
  //   [6, 4, 3, 9, 6, 10, 8, 3, 2, 2],
  //   [8, 10, 5, 4, 5, 7, 2, 9, 10, 1],
  //   [6, 10, 9, 8, 3, 10, 8, 2, 1, 4],
  //   [4, 9, 6, 5, 8, 9, 1, 3, 4, 4],
  //   [3, 4, 3, 1, 6, 7, 1, 6, 8, 5],
  //   [4, 9, 4, 1, 6, 5, 7, 1, 9, 1],
  //   [2, 9, 7, 5, 8, 4, 2, 10, 9, 6],
  //   [2, 2, 5, 8, 3, 10, 4, 10, 9, 3],
  //   [1, 7, 7, 2, 7, 9, 6, 6, 8, 3],
  //   [10, 5, 8, 9, 6, 7, 9, 7, 3, 3],
  //   [6, 4, 10, 5, 5, 2, 6, 6, 2, 5],
  //   [8, 5, 7, 3, 3, 10, 5, 2, 10, 8],
  //   [7, 1, 5, 8, 9, 6, 4, 10, 3, 2],
  //   [7, 5, 2, 1, 3, 7, 6, 3, 1, 7],
  [3, 2, 9, 6, 7, 1, 5, 4, 8, 10],
  [3, 2, 9, 6, 7, 1, 5, 4, 8, 10],
  [3, 10, 4, 7, 9, 2, 8, 6, 1, 5],
  [4, 3, 5, 8, 2, 1, 6, 9, 10, 7],
  [4, 9, 3, 6, 10, 7, 1, 5, 2, 8],
  [4, 9, 3, 6, 10, 7, 1, 5, 2, 8],
  [5, 3, 7, 4, 6, 10, 1, 8, 2, 9],
  [8, 2, 4, 5, 9, 6, 7, 3, 10, 1],
].reverse();

const drawNumbersHappy8 = [
  [
    "06",
    "08",
    "15",
    "17",
    "19",
    "23",
    "33",
    "36",
    "41",
    "44",
    "50",
    "55",
    "56",
    "59",
    "60",
    "61",
    "64",
    "68",
    "69",
    "72",
  ],
  [
    "06",
    "08",
    "15",
    "17",
    "19",
    "23",
    "33",
    "36",
    "41",
    "44",
    "50",
    "55",
    "56",
    "59",
    "60",
    "61",
    "64",
    "68",
    "69",
    "72",
  ],
  [
    "01",
    "03",
    "14",
    "22",
    "28",
    "29",
    "31",
    "32",
    "36",
    "37",
    "41",
    "43",
    "45",
    "49",
    "56",
    "59",
    "60",
    "62",
    "72",
    "80",
  ],
  [
    "01",
    "03",
    "14",
    "22",
    "28",
    "29",
    "31",
    "32",
    "36",
    "37",
    "41",
    "43",
    "45",
    "49",
    "56",
    "59",
    "60",
    "62",
    "72",
    "80",
  ],
  ["01", "03", "14", "22", "28", "29", "31", "32", "1000"],
  ["810"],
  ["811"],
  ["812"],
  [
    "01",
    "07",
    "12",
    "13",
    "16",
    "17",
    "21",
    "28",
    "31",
    "34",
    "40",
    "41",
    "50",
    "53",
    "58",
    "59",
    "64",
    "70",
    "71",
    "76",
  ],
  [
    "07",
    "17",
    "21",
    "22",
    "24",
    "29",
    "30",
    "35",
    "36",
    "38",
    "44",
    "47",
    "51",
    "53",
    "56",
    "57",
    "60",
    "64",
    "69",
    "78",
  ],
  [
    "04",
    "05",
    "09",
    "15",
    "20",
    "21",
    "24",
    "27",
    "30",
    "33",
    "38",
    "39",
    "41",
    "54",
    "56",
    "66",
    "69",
    "72",
    "73",
    "80",
  ],
  [
    "02",
    "06",
    "07",
    "12",
    "16",
    "20",
    "25",
    "27",
    "31",
    "35",
    "37",
    "44",
    "45",
    "48",
    "49",
    "53",
    "54",
    "57",
    "76",
    79,
  ],
];

const drawNumbersMark6 = [
  ["10", "20", "16", "13", "32", "25", "06"],
  ["30", "01", "38", "06", "19", "31", "49"],
  ["16", "31", "26", "11", "08", "35", "46"],
  ["24", "26", "32", "45", "23", "01", "37"],
  ["34", "20", "04", "24", "09", "38", "26"],
  ["36", "23", "42", "11", "08", "31", "06"],
  ["43", "27", "04", "20", "17", "21", "03"],
  ["37", "06", "33", "35", "43", "44", "36"],
  ["08", "10", "42", "04", "12", "02", "30"],
  ["09", 36, 26, "06", 17, 30, "49"],
  ["26", "28", "22", "48", "33", "45", "03"],
  ["21", "08", "06", "43", "16", "20", "45"],
];

const drawNumbersFast3 = [
  [1, 2, 3],
  [2, 2, 2],
  [4, 5, 6],
  [4, 4, 4],
]
// ====================================================================================

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

let answer = [ox, rabbit, dragon, horse, monkey, pig].flat();
// console.log(answer, "answer");
const results = {
  1: {
    "Big/Small": [],
    "Odd/Even": [],
    "P/C": [],
    "Dragon/Tiger": [],
  },
  2: {
    "Big/Small": [],
    "Odd/Even": [],
    "Dragon/Tiger": [],
  },
  3: {
    "Big/Small": [],
  },
};

function getFormBigSmall(number, range) {
  const num = parseInt(number, 10);
  return num >= range[0] && num <= range[1] ? "B" : "S";
}

function getFormBigSmallTie(number, range) {
  const num = parseInt(number, 10);
  if (number == range[1]) return "T";
  return num > range[0] ? "B" : num < range[0] ? "S" : "T";
}

function getFormOddEvenTie(number, range) {
  const num = parseInt(number, 10);
  if (number == range[1]) return "T";
  return num % 2 === 0 ? "E" : num % 2 !== 0 ? "O" : "T";
}

//rule for b/s sum
// B/S Sum of Extra head&tail: Sum of 1st and 2nd Extra No. draw ≥ 7 as "Sum B"; ≤ 6 as "Sum S";
// Extra No. 49 as Tie, refund. E.g. Extra No. 07, Bet「Sum B」
function getFormBigSmallSum(number, range) {
  const num = parseInt(number, 10);
  if (number == range[1]) return "T";
  return num >= range[0] ? "B" : "S";
}

//rule for o/e sum
// O/E Sum of extra head&tail: Sum of 1st and 2nd Extra No. last digit draw as 1, 3, 5, 7, 9 as "Sum O"; 0, 2,4, 6, 8 as "Sum E." Extra No. 49 as Tie, refund.
function getFormOddEvenSum(number, range) {
  const num = parseInt(number, 10);
  if (number == range[1]) return "T";
  return num % 2 !== 0 ? "O" : "E";
}

//rule for sky/ground

function getFormSkyGround(number, range) {
  let drawNumbers = [ox, rabbit, dragon, horse, monkey, pig].flat();
  console.log(drawNumbers, number, "answerdsfsfdsf");

  if (range[0] == number) {
    return "T";
  }

  let results = drawNumbers.includes(" 09") ? "S" : "G";
  console.log("results", results, "results");
  return results;
}

//rule for frist/last
// Extra No.: First, Last Zodiac: Rat, Ox, Tiger, Rabbit, Dragon, Snake Zodiac Extra No. as "First Zodiac";
// Horse, Goat, Monkey, Cock, Dog, Pig as "Last Zodiac"; Extra No. 49 as Tie, refund.
function getFormFirstLast(number, range) {
  let drawNumbers = [ox, rabbit, rat, tiger, dragon, snake].flat();
  console.log(drawNumbers, number, "answerdsfsfdsf");

  if (range[0] == number) {
    return "T";
  }

  let results = drawNumbers.includes(" 09") ? "F" : "L";
  console.log("results", results, "results");
  return results;
}

function getFormPoultryBeast(number, range) {
  let drawNumbers = [ox, horse, goat, rooster, dog, pig].flat();
  console.log(drawNumbers, number, "answerdsfsfdsf");

  if (range[0] == number) {
    return "T";
  }

  let results = drawNumbers.includes(" 09") ? "P" : "B";
  console.log("results", results, "results");
  return results;
}

//rule for Tail bs
// B/S Extra tail: Extra No. ≥ 5 as "Big tail"; ≤ 4 as "Small tail"; Extra No. 49 as Tie, refund.
function getFormTailBS(number, range) {
  let extraBallTail = number[1];
  if (range[0] == number) {
    return "T";
  }
  //return B or S
  let results = extraBallTail >= 5 ? "B" : "S";

  return results;
}

function getFormOddEven(number) {
  const num = parseInt(number, 10);
  return num % 2 === 0 ? "E" : "O";
}

function getFormMoreOddEven(drawNumbers) {
  let odd = drawNumbers.filter((num) => num % 2 !== 0).length;
  let even = drawNumbers.length - odd;
  return odd > even ? "O" : odd < even ? "E" : "T";
}

// 3.More First/Last
// Winning No. 01-40 as "First"; 41-80 as "Last." Winning No. "First" more as 「More First」; Or else 「More Last」; Equal will Tie.
function getFormMoreFirstLast(drawNumbers) {
  let first = drawNumbers.filter((num) => num <= 40).length;
  let last = drawNumbers.length - first;
  return first > last ? "F" : first < last ? "L" : "T";
}

function getFormPrimeComposite(num) {
  // Convert the input to a number
  const numericNum = parseInt(num, 10);

  if (isNaN(numericNum) || numericNum <= 1) {
    return "C"; // Invalid input or numbers less than or equal to 1 are not prime
  }

  for (let i = 2; i <= Math.sqrt(numericNum); i++) {
    if (numericNum % i === 0) {
      return "C"; // It has a divisor other than 1 and itself, so it's composite
    }
  }

  return "P"; // It doesn't have any divisors other than 1 and itself, so it's prime
}

function getFormDragonTiger(ballsToCompareArr, putAny) {
  const ballsToCompare = ballsToCompareArr.map((ball) => parseInt(ball, 10));
  if (ballsToCompare[0] > ballsToCompare[1]) {
    return "D";
  } else if (ballsToCompare[0] < ballsToCompare[1]) {
    return "T";
  } else {
    return "A";
  }
}

// 5D PK10 FAST3 3D 11x5 Mark6 Happy8
function fnSelector(drawNumbers, place, form, lotteryId) {
  const lotteryIdFn = {
    1: analyze5dDraw,
    2: analyzePK10Draw,
    5: analyzeFast3Draw,
    3: analyze3dDraw,
    6: analyze11x5Draw,
    8: analyzeMark6Draw,
    10: analyzeHappy8Draw,
  };

  if (lotteryIdFn.hasOwnProperty(lotteryId)) {
    return lotteryIdFn[lotteryId](drawNumbers, place, form);
  } else {
    return "Invalid lotteryId";
  }
}

function formsAnalyzer(form, num, putAny) {
  const formFn = {
    "Big/Small": getFormBigSmall,
    "Big/Small/Tie": getFormBigSmallTie,
    "Odd/Even/Tie": getFormOddEvenTie,
    "Odd/Even": getFormOddEven,
    "P/C": getFormPrimeComposite,
    "Dragon/Tiger": getFormDragonTiger,
    "More Odd/Even": getFormMoreOddEven,
    "More First/Last": getFormMoreFirstLast,
    "B/S Sum": getFormBigSmallSum,
    "O/E Sum": getFormOddEvenSum,
    "Sky/Ground": getFormSkyGround,
    "First/Last": getFormFirstLast,
    "Poultry/Beast": getFormPoultryBeast,
    "Tail B/S": getFormTailBS,
  };
  if (formFn.hasOwnProperty(form)) {
    return formFn[form](num, putAny);
  } else {
    return "Invalid form";
  }
}

function analyze5dDraw(drawNumbers, place, form) {
  const results = {
    "Big/Small": [],
    "Odd/Even": [],
    "P/C": [],
    "Dragon/Tiger": [],
  };

  let ball;
  // console.log(drawNumbers, "ball");
  
  for (const drawNum of drawNumbers) {
    // console.log(drawNum, "ball");
    if (place === "Sum") {
      ball = drawNum.reduce((a, b) => a + b, 0);
      results[form].push(formsAnalyzer(form, ball, [23, 45]));
    } else {
      ball = drawNum[parseInt(place) - 1];
      results[form].push(formsAnalyzer(form, ball));
    }
  }

  return results;
}

//drawNumbers eg [[1,2,3,4,5,6,7,8,9,10],[1,2,3,4,5,6,7,8,9,10]] i.e. numbers from 1 and 10
function analyzePK10Draw(drawNumbers, place, form) {
  const results = {
    "Big/Small": [],
    "Odd/Even": [],
    "Dragon/Tiger": [],
  };

  let ball;
  for (const drawNum of drawNumbers) {
    if (place === "sumoftop2") {
      ball = drawNum[0] + drawNum[1];
      //   console.log(ball, "ball");
      results[form].push(formsAnalyzer(form, ball, [11, 19]));
    } else {
      if (parseInt(place[0]) > 5 && form == "Dragon/Tiger") return results;

      ball = drawNum[parseInt(place) - 1];
      console.log(place[0], "ball");
      if (form !== "Dragon/Tiger") {
        results[form].push(formsAnalyzer(form, ball, [6, 10]));
      } else {
        results["Dragon/Tiger"].push(
          formsAnalyzer(
            "Dragon/Tiger",
            pk10DTDrawNumberCutter(ball.toString(), drawNum)
          )
        );
      }
    }
  }

  return results;
}

function pk10DTDrawNumberCutter(place, drawNum) {
  switch (place) {
    case "1":
      return [drawNum.at(0), drawNum.at(9)];
    case "2":
      return [drawNum.at(1), drawNum.at(8)];
    case "3":
      return [drawNum.at(2), drawNum.at(7)];
    case "4":
      return [drawNum.at(3), drawNum.at(6)];
    case "5":
      return [drawNum.at(4), drawNum.at(5)];
    default:
      return [];
  }
}

//drawNumbers eg [[1,2,5],[1,2,3], [4,2,3]]//numbers between 1 and 6
function analyzeFast3Draw(drawNumbers, place, form) {
  const results = {
    "Big/Small": [],
  };
  //   B/S Sum: Sum of ≥ 11 as "Big"; ≤ 10 as "Small."
  let ball;
  for (const drawNum of drawNumbers) {
    // check if the drawNumber has 3 repeating numbers
    if (new Set(drawNum).size === 1) {
      results["Big/Small"].push("T");
    }else if (place === "sum") {
      ball = drawNum.reduce((a, b) => a + b, 0);
      results[form].push(formsAnalyzer(form, ball, [11, 18]));
    }
  }

  return results;
}
//drawNumbers eg. [[1, 2, 3], [4, 5, 6], [1,6,8]]//numbers between 0 and 9
function analyze3dDraw(drawNumbers, place, form) {
  // form: ["Big/Small", "Odd/Even", "P/C", "B/S Sum", "O/E Sum", "B/S Tail Sum", "P/C Tail Sum"],
  const results = {
    "Big/Small": [],
    "Odd/Even": [],
    "P/C": [],
    "B/S Sum": [],
    "O/E Sum": [],
    "B/S Tail Sum": [],
    "P/C Tail Sum": [],
  };
  let ball;
  for (const drawNum of drawNumbers) {
    if (place === "sum") {
      ball = drawNum.reduce((a, b) => a + b, 0);
      results[form].push(formsAnalyzer(form, ball, [14, 27]));
    } else {
      ball = drawNum[parseInt(place) - 1];
      results[form].push(formsAnalyzer(form, ball));
    }
  }

  return results;
}

function analyzeHappy8Draw(drawNumbers, place, form) {
  // form: ["Big/Small", "Odd/Even", "P/C", "B/S Sum", "O/E Sum", "B/S Tail Sum", "P/C Tail Sum"],
  const results = {
    "Big/Small/Tie": [],
    "Odd/Even": [],
    "More First/Last": [],
    "More Odd/Even": [],
  };
  let ball;
  for (const drawNum of drawNumbers) {
    if (form === "More Odd/Even" || form === "More First/Last") {
      results[form].push(formsAnalyzer(form, drawNum));
    } else {
      ball = drawNum.reduce((a, b) => +a + +b, 0);
      results[form].push(formsAnalyzer(form, ball, [810]));
    }
  }

  return results;
}

function analyze11x5Draw(drawNumbers, place, form) {}

function analyzeMark6Draw(drawNumbers, place, form) {
  const results = {
    "Big/Small/Tie": [],
    "Odd/Even/Tie": [],
    "B/S Sum": [],
    "O/E Sum": [],
    "Sky/Ground": [],
    "First/Last": [],
    "Poultry/Beast": [],
    "Tail B/S": [],
    "Big Small(No Tie)": [],
  };

  let ball;
  for (const drawNum of drawNumbers) {
    if (place === "Extra No.") {
      if (form == "B/S Sum" || form == "O/E Sum") {
        ball = drawNum[6].split("").reduce((a, b) => +a + +b, 0);
        results[form].push(formsAnalyzer(form, ball, [7, 13]));
      } else if (form == "Sky/Ground") {
        ball = drawNum[6];
        results[form].push(formsAnalyzer(form, ball, [49]));
      } else {
        ball = drawNum[6];
        results[form].push(formsAnalyzer(form, ball, [25, 49, 7]));
      }
    } else if (place.includes("Ball")) {
      // let ballPosition= parseInt(place.split(" ")[1], 10);
      // ball = drawNum[ballPosition-1];
      // results[form].push(formsAnalyzer(form, ball, [25, 49]));

      if (form == "B/S Sum" || form == "O/E Sum") {
        ball = drawNum[parseInt(place.split(" ")[1], 10) - 1]
          .split("")
          .reduce((a, b) => +a + +b, 0);
        results[form].push(formsAnalyzer(form, ball, [7, 13]));
      } else if (form == "Sky/Ground") {
        ball = drawNum[parseInt(place.split(" ")[1], 10) - 1];
        results[form].push(formsAnalyzer(form, ball, [49]));
      } else {
        ball = drawNum[parseInt(place.split(" ")[1], 10) - 1];
        results[form].push(formsAnalyzer(form, ball, [25, 49, 7]));
      }
    }
  }

  return results;
}

// console.log(analyze5dDraw(drawNumbers5d, "sum", "Big/Small"));
// console.log(analyze5dDraw(drawNumbers5d, "sum", "Odd/Even"));
// console.log(analyze5dDraw(drawNumbers5d, "sum", "P/C"));
// console.log(analyze5dDraw(drawNumbers5d, "sum", "Big/Small"));
// console.log(analyze5dDraw(drawNumbers5d, "1st", "Big/Small"));

// console.log(analyzePK10Draw(drawNumbersPk10, "sumoftop2", "Big/Small"));
// console.log(analyzePK10Draw(drawNumbersPk10, "sumoftop2", "Odd/Even"));
// // console.log(analyzePK10Draw(drawNumbersPk10, "sumoftop2", "Dragon/Tiger"));
// console.log(analyzePK10Draw(drawNumbersPk10, "1st", "Big/Small"));
// console.log(analyzePK10Draw(drawNumbersPk10, "1st", "Odd/Even"));
// console.log(analyzePK10Draw(drawNumbersPk10, "1st", "Dragon/Tiger"));
// console.log(analyzePK10Draw(drawNumbersPk10, "6th", "Dragon/Tiger"));
// console.log(analyzePK10Draw(drawNumbersPk10, "6th", "Big/Small"));
// console.log(
//   "fiverrrrrr ",
//   analyzeHappy8Draw(drawNumbersHappy8, "Sum", "Odd/Even")
// );
// console.log(
//   "fiverrrrrr ",
//   analyzeHappy8Draw(drawNumbersHappy8, "Sum", "More First/Last")
// );
console.log(fnSelector(drawNumbers5d, "Sum", "Big/Small", 1)["Big/Small"])
// analyzeMark6Draw
// console.log(analyzeMark6Draw(drawNumbersMark6, "Extra No.", "Big/Small/Tie"));
// console.log(analyzeMark6Draw(drawNumbersMark6, "Extra No.", "Odd/Even/Tie"));
// console.log(analyzeMark6Draw(drawNumbersMark6, "Extra No.", "B/S Sum"));
// console.log(analyzeMark6Draw(drawNumbersMark6, "Extra No.", "O/E Sum"));
// console.log(analyzeMark6Draw(drawNumbersMark6, "Ball 1", "Big/Small"));
// console.log(analyzeFast3Draw(drawNumbersFast3, "Sum", "Big/Small"));

