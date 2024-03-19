let drawNumList = [
  [5, 8, 5, 6, 8], //drawNum1 ball1 = 2, ball2 = 2, ball3 = 4, ball4 = 6, ball5 = 8
  [7, 5, 5, 7, 0], //drawNum2 ball1 =1, ball2 = 3, ball3 = 5, ball4 = 7, ball5 = 9
  [7, 2, 2, 4, 5], //drawNum3 ball1 =1, ball2 = 2, ball3 = 3, ball4 = 4, ball5 = 5
  [6, 7, 8, 9, 0], //drawNum4 ball1 =6, ball2 =7, ball3 = 8, ball4 = 9, ball5 = 0
  [7, 3, 5, 7, 9], //drawNum5 ball1 =1, ball2 = 3, ball3 = 5, ball4 = 7, ball5 = 9
  [4, 7, 9, 0, 2], //drawNum5 ball1 =1, ball2 = 3, ball3 = 5, ball4 = 7, ball5 = 9
  [1, 3, 2, 2, 9], //drawNum5 ball1 =1, ball2 = 3, ball3 = 5, ball4 = 7, ball5 = 9
   [4, 7, 0, 0, 2], //drawNum5 ball1 =1, ball2 = 3, ball3 = 5, ball4 = 7, ball5 = 9
   [1, 0, 0, 3, 9], //drawNum5 ball1 =1, ball2 = 3, ball3 = 5, ball4 = 7, ball5 = 9
  // [4, 7, 9, 0, 2], //drawNum5 ball1 =1, ball2 = 3, ball3 = 5, ball4 = 7, ball5 = 9

];
// 3, 2, 0, 2, 3
let gameId = [6]; //correlates to odd/even number

function checkBSOEf(drawNumList, gameId) {
  let drawNum1 = drawNumList[0];
  let drawNum2 = drawNumList[1];
  console.log(drawNum1, drawNum2);
  let ball1 = drawNum1[1];
  let ball2 = drawNum2[1];
  // checkIfBSOE(ball1, ball2);
  console.log(ball1, ball2);
  // scan;
}
// checkBSOEf(drawNumList, gameId)
// check for consecutiveness for odd or even of draw numbers in drawNumList
let typee;
//BOSE Stands for big small odd even
function checkBSOE(drawNumList, gameId) {
  let listOfConsecutive;
  for (let i = 0; i < drawNumList[0].length; i++) {
    let drawNum1 = drawNumList[0];
    let drawNum2 = drawNumList[1];
    // console.log(drawNum1, drawNum2);
    // console.log("i================>", i)
    let ball1 = drawNum1[i];
    let ball2 = drawNum2[i];
    typee = "BS";
    let a = checkIfBSOE(ball1, ball2, typee);
    let ass = check_ball_type(ball1, typee);

    // console.log(ball1, ball2);
    // console.log("------------ball1----->", ball1, ball2);
    // console.log("------------ball2----->", ass);
    // console.log("----------------->", a);
    // return
    if (checkIfBSOE(ball1, ball2, typee)) {
      listOfConsecutive = scan(drawNumList, drawNumList.length);
    }
  }
  return listOfConsecutive;
}

function gg(nums) {
  // console.log("flag: " + flag);
  // console.log("nums: " + nums);
  let flag = check_ball_type(nums[0], typee);
  // console.log("flag: " + flag);
  let acc = 0;
  for (const element of nums) {
    console.log("element: " + element);
    console.log("elementor: " + nums);
    //console.log(check_ball_type(element, typee) === flag)
    if (element !== undefined && check_ball_type(element, typee) === flag) {
      acc++;
    }
    if (check_ball_type(element, typee) !== flag) {
      console.log("break")
      break; //return//continue//break;
    }
  }
  console.log("acc: " + acc);
  return acc;
}

function getBalls(drawNumList, ballIndex) {
  return drawNumList.map((draw) => draw[ballIndex]);
}

function scan(drawNumList, listLength) {
  // console.log("listLength================> " + listLength);
  let arr = [];
  for (let i = 0; i < listLength - 1; i++) {
    const balls = getBalls(drawNumList, i);
    // gg(balls)
    arr.push(gg(balls));
    console.log("balls++++++++++++++++++++++++++++++++>", balls);
    // console.log(gg(balls));
  }
  return arr;
}

// console.log(drawNumList.length);
// scan(drawNumList, drawNumList.length);

//checks wheether ball is big small odd or even
function check_ball_type(ball, type) {
  if (ball === undefined) return ;
  console.log("ball", ball);
  if (ball >= 5 && type === "BS") {
    return "big";
  }
  if (ball < 5 && type === "BS") {
    // console.log("small");
    return "small";
  }
  if (ball % 2 === 0 && type === "OE") {
    return "even";
  } //else {
  if (ball % 2 === 1 && type === "OE") {
    return "odd";
  } else {
    return "none";
  }
}

// console.log(check_ball_type(3));
//checks if balls are big small odd or even
function checkIfBSOE(ball1, ball2, type) {
  let consecutivePresent; //= false;
  if (ball1 % 2 !== 0 && ball2 % 2 !== 0 && type === "OE") {
    // console.log("odd");
    consecutivePresent = true; //"odd";
  } else if (ball1 % 2 === 0 && ball2 % 2 === 0 && type === "OE") {
    // console.log("even");
    consecutivePresent = true; // "even";
  } else if (ball1 < 5 && ball2 < 5 && type === "BS") {
    // console.log("small");
    consecutivePresent = true; //"small";
  } else if (ball1 > 5 && ball2 > 5 && type === "BS") {
    // console.log("big");
    consecutivePresent = true; //"big";
  } else {
    consecutivePresent = false;
  }
  return consecutivePresent;
}

function consecutiveCount(accumulator, value, index, array) {
  if (check_ball_type(value) !== rule) {
    // accumulator++;
    // break;
  }
  return accumulator++;
  // if (value === array[index + 1]){
  //     accumulator++;
  // } else {
  //     accumulator = 0;
  // }
  // return accumulator;
}
const nums = [2, 1, 1, 5, 6, 4];

// function gg(nums) {
//   let acc = 0;
//   for (const element of nums) {
//     if (check_ball_type(element) == "small") {
//       //isBroken = true;
//       acc++;
//       // console.log("ksd", acc);
//     }
//     if (check_ball_type(element) !== "small") {
//       //isBroken = true;
//       break;
//     }
//     // console.log("l", check_ball_type(1) != "small");
//     // console.log("l", check_ball_type(1));
//   }
//   return acc;
// }
// console.log(gg(nums))
// function gg(arr) {
//   let acc = 0;
//   let isBroken = false;

//   arr.reduce((accumulator, value) => {
//     if (check_ball_type(value) !== "small") {
//       isBroken = true;
//     }
//     console.log("lllllllllllllll", value)
//     if (!isBroken) {
//       return accumulator + value;
//     }

//     console.log(check_ball_type(value) !== "small")
//     console.log('[[[[[[[[[[[[[[[[[[[[[[',value, acc)
//     return accumulator;
//   }, 0);
//   return acc;
// }
// console.log(gg([2, 1, 1, 6, 1, 4]));
// [2, 1, 1, 6, 1, 4].reduce((acc, value, index, array) => {
//   if (check_ball_type(value) !== rule){
//       // accumulator++;
//       break;
//   }
//   return acc++
// }, 0)
function checkConsecutiveness(drawNumList, gameId) {
  let consecutiveness = 0;
  let consecutivenessList = [];
  let drawNum1;
  let drawNum2;
  let odd = 1;
  let even = 1;

  for (let i = 0; i < drawNumList.length - 1; i++) {
    // console.log("------------>", drawNumList[i])
    for (let j = 0; j < drawNumList[i].length; j++) {
      // console.log("-------dddddd----->", drawNumList[i])
      drawNum1 = drawNumList[i][j];
      // drawNum2 = drawNumList[i+1][j];
      if (i < drawNumList.length - 1) {
        drawNum2 = drawNumList[i + 1][j];
      }
      console.log(drawNum1, drawNum2);
      //   //check if either drae numbers are not undefined or NaN

      //     if (drawNum1 % 2 === 1 && drawNum2 % 2 === 1) {
      //       // consecutiveness++;
      //       odd++;
      //       even =1
      //     //   console.log("odd/even", odd)
      //     } else if (drawNum1 % 2 === 0 && drawNum2 % 2 === 0) {
      //       consecutivenessList.push(consecutiveness);
      //       // consecutiveness = 0;
      //       even++;
      //       odd =1
      //     }
    }
  }

  console.log(odd, even);
  // for (let i = 0; i < drawNumList.length; i++){
  //     for (let j = 0; j < drawNumList[i].length; j++){
  //         console.log(drawNumList[i][j]);
  //         // if (drawNumList[i][j] % 2 === gameId[0]){
  //         //     consecutiveness++;
  //         // } else {
  //         //     consecutivenessList.push(consecutiveness);
  //         //     consecutiveness = 0;
  //         // }
  //     }
  // }
  return consecutivenessList;
}

// console.log(
// checkConsecutiveness(drawNumList, gameId); //);

console.log(checkBSOE(drawNumList, gameId).filter((item) => item > 1));
console.log(checkBSOE(drawNumList, gameId))//.filter((item) => item > 1));
/*
function checkConsecutiveness(drawNumList, gameId) {
  let consecutiveness = 0;
  let consecutivenessList = [];
  let drawNum1;
  let drawNum2;
  let odd=1;
  let even=1;

  for (let i = 0; i < drawNumList.length - 1; i++) {
    console.log("------------>", drawNumList[i])
    for (let j = 0; j < drawNumList[i].length; j++) {
      drawNum1 = drawNumList[i][j];
      // drawNum2 = drawNumList[i+1][j];
      if (i < drawNumList.length - 1) {
        drawNum2 = drawNumList[i + 1][j];
      }
    //   console.log(drawNum1, drawNum2);
      //check if either drae numbers are not undefined or NaN

        if (drawNum1 % 2 === 1 && drawNum2 % 2 === 1) {
          // consecutiveness++;
          odd++;
          even =1
        //   console.log("odd/even", odd)
        } else if (drawNum1 % 2 === 0 && drawNum2 % 2 === 0) {
          consecutivenessList.push(consecutiveness);
          // consecutiveness = 0;
          even++;
          odd =1
        }

    }
  }

  console.log(odd, even);
  // for (let i = 0; i < drawNumList.length; i++){
  //     for (let j = 0; j < drawNumList[i].length; j++){
  //         console.log(drawNumList[i][j]);
  //         // if (drawNumList[i][j] % 2 === gameId[0]){
  //         //     consecutiveness++;
  //         // } else {
  //         //     consecutivenessList.push(consecutiveness);
  //         //     consecutiveness = 0;
  //         // }
  //     }
  // }
  return consecutivenessList;
}
*/

// how do i use reduce to return the count on consecutive count based on a condition
