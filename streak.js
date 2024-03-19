console.log("klsdkjfsdhfksdhf");

const drawNumbers = [8, 0, 1, 7, 9];
// const drawNumbers = [7, 1, 8, 9, 0];
//1,2,8,7,9
function isStreaks(drawNumbers) {
    let sortedDrawNumbers = [...drawNumbers].sort();
    const constant = 1;
    let bool = false;
    console.log(sortedDrawNumbers);

    for (let i = 0; i < sortedDrawNumbers.length - 2; i++) {
        if (
            sortedDrawNumbers[i + 1] - constant === sortedDrawNumbers[i] &&
            sortedDrawNumbers[i + 1] + constant === sortedDrawNumbers[i + 2]
        ) {
            console.log("continue", i);
            bool = true;
            continue;
        } else {
            console.log("break", i);
            bool = false;
            break;
        }
    }

    if (bool) {
        let b = +(sortedDrawNumbers[4] + constant).toString().padStart(2, "0")[1];

        if (b === sortedDrawNumbers[0]) {
            bool = true;
            console.log("b", b);
        }
        // else{
        //  bool = false;
        //  // console.log("b", b)
        // }
    }

    //
    return bool;
}

// function isStreak(drawNumbers) {
//     const sortedDrawNumbers = drawNumbers.slice().sort((a, b) => a - b);
//     let currentStreak = 1;

//     for (let i = 1; i < sortedDrawNumbers.length; i++) {
//       const difference = sortedDrawNumbers[i] - sortedDrawNumbers[i - 1];

//       if (difference === 0 || difference === 1) {
//         currentStreak++;
//       } else {
//         currentStreak = 1;
//       }

//       if (currentStreak >= 3) {
//         return true;
//       }
//     }

//     return false;
//   }

// function isStreak(number) {
//     let numbers = [...number].sort((a, b) => a - b);
//     for (let i = 0; i < numbers.length - 1; i++) {
//       if (numbers[i] + 1 !== numbers[i+1]) {
//         return false;
//       }
//     }

//     return true;
//   }
function isCircularStreak(numbers) {
    let prev = null;
    numbers.sort((a, b) => a - b);

    for (let i = 0; i < numbers.length; i++) {
        let curr = numbers[i];

        if (prev === null) {
            prev = curr;
            continue;
        }

        let expected = (prev + 1) % 10;
        if (curr !== expected) {
            return false;
        }

        prev = curr;
    }

    return true;

    // numbers.sort((a, b) => a - b);
}

function containsContiguousSeq(drawNumbers) {
    drawNumbers.sort((a, b) => a - b);
    const mainSeq = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    for (let i = 0; i < drawNumbers.length - 4; i++) {
        let window = drawNumbers.slice(i, i + 5);

        if (matchesMainSeq(window, mainSeq)) {
            return true;
        }
    }

    return false;
}

function matchesMainSeq(window, mainSeq) {
    // Sort and compare
    let sortedWindow = window.slice().sort((a, b) => a - b);

    for (let i = 0; i < sortedWindow.length; i++) {
        if (sortedWindow[i] !== mainSeq[i]) {
            return false;
        }
    }

    return true;
}

//   let draw = [1, 2,4, 3, 5, 6, 7, 8, 9];
let draw = [8, 0, 1, 7, 9];

function isStreak(drawNumbers) {
    let sortedDrawNumbers = [...drawNumbers].sort();
    let bool = false;
    console.log(sortedDrawNumbers);
    const constant = 1;
    let startingIndex = 0;
    const endIndex = 1;
    for (let i = startingIndex; i < sortedDrawNumbers.length; i++) {
        // console.log(sortedDrawNumbers[i]);
        const index = (startingIndex + i) % sortedDrawNumbers.length;
        // console.log(index);
        console.log("items", sortedDrawNumbers[i])
        // console.log( +(sortedDrawNumbers[sortedDrawNumbers.length-1] + constant).toString().padStart(2, "0")[1])

        if (sortedDrawNumbers[i] + 1 === sortedDrawNumbers[i + 1]) {
            console.log("continuing with starting index");
            bool = true;
            continue;
        } else if (sortedDrawNumbers[i] + 1 !== sortedDrawNumbers[i + 1]) {
            if (sortedDrawNumbers[i] === 9 || +(sortedDrawNumbers[i] + constant).toString().padStart(2, "0")[1] === sortedDrawNumbers[0]) {
                bool = true;
                console.log("b   dddddddddddddddddddddddddddddddddddddddddddddddddd", +(sortedDrawNumbers[sortedDrawNumbers.length - 1] + constant).toString().padStart(2, "0")[1])
            } else {
                console.log("changing starting index", startingIndex);
                bool = false;
                startingIndex = i + 1;
            } // break;
            //   if (index === endIndex) {
            //     break;
            //   }
        }
        // else if(sortedDrawNumbers[i] === 9 || +(sortedDrawNumbers[i] + constant).toString().padStart(2, "0")[1] === sortedDrawNumbers[0]){
        //     bool = true;
        //     console.log("b   dddddddddddddddddddddddddddddddddddddddddddddddddd", +(sortedDrawNumbers[sortedDrawNumbers.length-1] + constant).toString().padStart(2, "0")[1])
        // }
    }
    console.log(bool);
    return bool
}
let numbers = [8, 0, 2, 7, 9];
//[0,1,7,8,9 ]

isStreak(numbers);
// const a = [1, 2, 3, 4, 5];
// const startIndex= 2;
// const endIndex = 1;

// let i = startIndex;
// let index

// for (let i = startIndex; ; i++) {
//     const index = (i + a.length) % a.length; // Wrap around array
//     console.log(a[index]);

//     if (index === endIndex) {
//       break;
//     }

//     if (i === a.length + startIndex - 1) {
//       i = -1; // Will be incremented to 0 in the next iteration
//     }
//   }

// do {
//   const index = i % a.length;
//   console.log(a[index]);
//   i++;
// } while(index !== endIndex);

// for (let i = start_index; i < a.length + start_index; i++) {
//     const index = i % a.length;  // Wraps around the array
//     console.log(index)
//     if (index === end_index) {
//         break;
//     }
//     console.log(a[index]);
// }
// for(let i = startIndex; i <= a.length + startIndex; i++){
//     const index = i % a.length; //wrap around array
//     if(index === endIndex) break;

//     console.log(a[index]);
//   }
// console.log(isStreak(draw)); //
// Test cases
//   console.log(isStreak([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])); // true
//   console.log(isStreak([0, 2, 3, 4, 9])); // false
//   console.log(isStreak([0, 1, 2, 3, 9])); // true
//   console.log(isStreak([0, 1, 3, 9])); // false

// let numbers = [8,0,1,7,9];

// console.log(matchesMainSequence([1,2,3,4,5]));

// console.log(isCircularStreak(drawNumbers));
