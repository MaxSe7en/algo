// const str = "2024012522";
// // const str = "202401250202";
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item) =>
//   item < 10 ? item.toString().padStart(2, "0") : item.toString()
// );

// console.log(numbers);
// console.log(str.charAt(8).padStart(2, "-"));
// console.log(str.substring(0, str.length - 4));
// console.log(str.slice(-3));

// function slicer(str) {
//   let wheretoSlice = 0;
//   str.lenth == 12 ? (wheretoSlice = 4) : (wheretoSlice = 3);
//   if (str.length < 11) return str;
//   return (
//     str.substring(0, str.length - wheretoSlice) +
//     str.charAt(8).padStart(2, "-") +
//     str.slice(-(wheretoSlice - 1))
//   ); //+ ;
// }

// console.log(slicer(str, 3));

// const a = [["01", "02", "03"], ["03", "01", "02"], ["04", "05","06"]];
// console.log([...new Set(a.map(subArr => {
//     subArr.sort();
//     return subArr;
//   }))]);

//   const seen = new Set();
// const result = a.filter(sub => {
//   key = sub.toString();
//   if (!seen.has(key)) {
//     seen.add(key);
//     return true;
//   }
// });

// const arr = [
//     ["01", "02", ],
//     ["02", "01", ],
//     ["04", "05", ]
//   ];

//   const uniqueArr = arr.map(sub => sub.sort()).filter((subArr, index) => {
//     return arr.findIndex(a => JSON.stringify(a) === JSON.stringify(subArr)) === index;
//   });

//   console.log(uniqueArr);
// // console.log(new Set([...a.sort((a, b) => a.localeCompare(b))]));
["0102", "0201"];

function orderNumberPairs(str) {
  let pairs = new Set();

  for (let i = 0; i < str.length - 1; i += 2) {
    pairs.add(str.substring(i, i + 2));
  }
  const sortedSet = new Set([...pairs].sort());
  return Array.from(sortedSet).join("");
}

function orderNumberPairs2(arr) {
  let pairs = new Set();
  arr.forEach((str) => {
    for (let i = 0; i < str.length - 1; i += 2) {
      pairs.add(str.substring(i, i + 2));
    }
  });
  const sortedSet = new Set([...pairs].sort());
  return Array.from(sortedSet);
}

function sortUniqueStrings(arr) {
  return arr.sort((a, b) => {
    const sortedA = a.split("").sort().join("");
    const sortedB = b.split("").sort().join("");
    console.log("=========srt========> " + sortedA, sortedB);
    if (sortedA === sortedB) {
      return a > b ? 1 : -1;
    } else {
      return sortedA.localeCompare(sortedB);
    }
  });
}

// console.log("====>", orderNumberPairs(["0102", "0201", "0202", "0203", "0204", "0205"]));
console.log("====>", orderNumberPairs("0102"));

//console.log('=================> ' + JSON.stringify(sortUniqueStrings(["0102", "0201"])));

//console.log(String.fromCharCode("0102"), String.fromCharCode("0201"));
