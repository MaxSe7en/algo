// function returnRows(){

// }
const numOfRows = [2, 4];

const rowIds = [
  "firstRow",
  "secondRow",
  "thirdRow",
  "fourthRow",
  "fifthRow",
  "sixthRow",
  "seventhRow",
  "eighthRow",
  "ninthRow",
  "tenthRow",
];

const selection = {
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
};

function getSelection(selectedNumber, rowName, maxSelections) {
  // console.log("getSelection before", selection[row].length)
  // remove the last selection if it exceeds the limit
  if (selection[rowName].length >= maxSelections) {
    selection[rowName].pop();
  }



  
  console.log(selection[rowName], selection[rowName].includes(selectedNumber), selectedNumber)

//   selection[rowName].includes(selectedNumber) ? selection[rowName].filter(userSelect =>{
//     console.log("selection",userSelect != selectedNumber, userSelect)
//     return userSelect != selectedNumber
//     }) : selection[rowName].push(selectedNumber);

  //remove particular selection if it exists
  // if(selection[rowName].includes(selectedNumber)) {
  //   selection[rowName].filter(userSelect => userSelect !== selectedNumber)
  // }else{
  //   // add selection if it does not exist
  //   console.log("user",selectedNumber)
  //   selection[rowName].push(selectedNumber)
  // }
  
  if(selection[rowName].includes(selectedNumber)) {
    selection[rowName] = selection[rowName].filter(n => n !== selectedNumber); 
  } else {
    selection[rowName].push(selectedNumber);
  }

  const _sele = localStorage.setItem("selection", JSON.stringify(selection));

  console.log("getSelection after", JSON.stringify(selection));

  return selection;
}

// console.log(getSelection("04", "firstRow", 2))

[1, 2, 3, 5, 4, 6, 2, 1].forEach((num, index) => {
  console.log(num);
  getSelection("" + num, "secondRow", 3);
});

// console.log(getSelection("05", "secondRow", 2))

const sele = localStorage.getItem("selection", selection);
console.log("getSelection", selection["firstRow"].length);

console.log(selection);
console.log(JSON.parse(sele));

// for (let i = numOfRows[0]-1; i <= numOfRows[1]-1; i++) {
//   const rowName = rowIds[i];

//   console.log(rowName);
// }
