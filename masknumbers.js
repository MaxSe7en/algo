// const numbers = "02040212345";

// let newNum = numbers.split("").map((num, i) => {
//   if (i > 5) {
//     return numbers[i].replace(num, "x");
//   }else{
//     return num
//   }
// });
// console.log(newNum.join(""));
// console.log("xxxxx"+numbers.substring(5))
// console.log(numbers.substring(0, 5)+"xxxxx")
// console.log(numbers.replace(numbers.slice(6, 10), "xxxx"));

// let a = "123 456 789".trim();
// console.log(a.split(" ").join(""));
// let obj = {
//     "@": "school",
// }
// let map = new Map();
// map.set("a", "school");
// map.set("b", "school");

// for (let [iter, val] of map){
//     console.log(iter, val)
// }
// console.log(Object.fromEntries([["a", "b"]]))

let nums = [2, 7, 11, 15]; //target 9

function returnIndexesSum(nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];
        if (map.has(diff)) {
        return [map.get(diff), i];
        }
        map.set(nums[i], i);
    }
}

console.log(returnIndexesSum(nums, 9))
