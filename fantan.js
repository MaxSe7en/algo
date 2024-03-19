/**
* Returns the indexes of the maximum number(s) in an array of numbers.
*
* @param {Array} numbers - An array of numbers.
* @returns {Array} An array containing the indexes of the maximum number(s) in the input array.
*/
let getMaxNumbersIndexes = (numbers) => {
    // Find the maximum number in the array.
    let max = Math.max.apply(null, numbers);

    // Find the indexes of the maximum number(s) in the array.
    let indexes = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] == max) {
            indexes.push(i);
        }
    }

    // Return the array of indexes of the maximum number(s).
    return indexes;
}

let gameModel1 = [
    [2, 3, 4],
    [1, 3, 4],
    [1, 2, 4],
    [1, 2, 3],
]

let gameModel2 = [
    [[2, 3], [2, 4], [3, 4]],
    [[1, 3], [1, 4], [3, 4]],
    [[1, 2], [1, 4], [2, 4]],
    [[1, 2], [1, 3], [2, 3]]
]

let gameModel3 = [
    [1],
    [2],
    [3],
    [4]
]

function winningIndexes(fan, model)
{
    let winnersIndexes = []
    model.map((mode,index)=>mode.includes(fan)?winnersIndexes.push(index):[])
    return winnersIndexes;
}
console.log(winningIndexes(3, gameModel1))


function getOutcome(fan,model)
{

   let losersIndex = fan-1;
   let losers = model[losersIndex].map((_,index)=>[losersIndex, index]);
   let modelSize = model.length;
   let outcome = {
    losersIndexes: losers,
    winnersIndexes: [],
    drawsIndexes: []
   }
   for(let i = 0; i<modelSize; i++){
       if(i!=losersIndex){
          model[i].forEach((value, index)=>{
                if(value.includes(fan)){
                     outcome.winnersIndexes.push([i,index])
                }else{
                    outcome.drawsIndexes.push([i,index])
                }
           });
        
       }
    }
   
   return outcome;
}


console.log(getOutcome(4, gameModel2))
let oddOrEven = (value) => value % 2 === 0 ? "even" : "odd";

let dragonTigerTie = (value1, value2) => value1 > value2 ? "dragon" : value1 < value2 ? "tiger" : "tie";

let bigOrSmall = (value, bigMin, bigMax) => value >= bigMin && value <= bigMax ? "big" : "small";

/**
 * Sums all elements in an array.
 *
 * @param {number[]} numbers - The array of numbers to sum.
 * @returns {number} Returns the sum of all elements in the input array.
 */
let sumArray = (numbers) => numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

function getFan(sumValue) {
    const divisor = 4;
    let remainder = sumValue % divisor;
    return remainder === 0 ? divisor : remainder;
}



/**
 * Checks if a value is within a specified range.
 *
 * @param {number} value - The value to check.
 * @param {number} min - The lower bound of the range.
 * @param {number} max - The upper bound of the range.
 * @returns {boolean} Returns `true` if the input value is within the specified range, `false` otherwise.
 */
function inRange(value, min, max) {
    return (value >= min && value <= max)  
}

/**
 * Determines if value1 is greater than value2.
 *
 * @param {number} value1 - The first value.
 * @param {number} value2 - The second value.
 * @returns {boolean} Returns `true` if value1 is greater than value2, otherwise `false`.
 */
function isDragon(value1, value2) {
    if (value1 > value2) {
        return true;
    }
    else {
        return false;
    }
}

const info = {
    "bigSmallRange":[0,45],
    "oddOrEvenValue":[], 
    "dragonTigerTieValue":[],
    "fanValue":[]

}
function getInfo(drawNumbers)
{

}



