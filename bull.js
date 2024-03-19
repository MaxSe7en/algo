function bullBull(drawNumbers) {
    let drawNumbersCombinations = getCombinations(drawNumbers, 3);
    let qualifiedNumbers;
  
    for (let i = 0; i < drawNumbersCombinations.length; i++) {
      let total = drawNumbersCombinations[i].reduce((a, b) => a + b, 0);
      if (total === 10) {
        // get the array index of the number that is not 10
        qualifiedNumbers = drawNumbersCombinations[i];
        break;
      } else {
        qualifiedNumbers = [];
      }
    }
  
    let indexOfQualifiedNumbers = indexesOfQualifiedNumbersFunc(
      drawNumbers,
      qualifiedNumbers
    );
    let results = drawNumbers.filter((_,i) => !indexOfQualifiedNumbers.includes(i));
    let bullN;
    let bullBul;
    let smallAndBig;
    let evenAndOdd;
    let noBull;
  
    console.log("indexOfQualifiedNumbers ", indexOfQualifiedNumbers);
    console.log("qualifiedNumbers ", qualifiedNumbers);
    console.log("results ", results);
  
    if (qualifiedNumbers.length === 0) {
      noBull = "No Bull";
    } else {
      let sumOfRemainingDigits = results.reduce((prev, curr) => prev + curr, 0);
      let lastDigit = +sumOfRemainingDigits.toString().padStart(2, "0")[1]; // get the last digit
      console.log("lastDigit ", lastDigit)
      bullN = "Bull " + lastDigit;
      bullBul = lastDigit === 0 ? "Bull Bull" : bullN;
      smallAndBig = lastDigit < 6 ? "Bull small" : "Bull big";
      evenAndOdd = lastDigit % 2 === 0 ? "Bull even" : "Bull odd";
    }
  
    let Max = drawNumbers.reduce((prev, curr) => Math.max(prev, curr));
    let maxRange = ["ten thousand", "thousand", "hundreds", "tens", "once"];
    let maxIndex = maxRange[drawNumbers.indexOf(Max)];
  
    let minrange = ["Ten thousand", "Thousand", "Hundreds", "Tens", "Once"];
    let Min = drawNumbers.reduce((prev, curr) => Math.min(prev, curr));
    let minIndex = minrange[drawNumbers.indexOf(Min)];
  // 82731
  //85475
    let dragonAndTiger = drawNumbers
      .slice(3, 5)
      .reduce((prev, curr) =>
        prev > curr ? "Dragon" : prev < curr ? "Tiger" : "And"
      );
  
    return [
      bullBul,
      smallAndBig,
      evenAndOdd,
      dragonAndTiger,
      maxIndex,
      minIndex,
      noBull,
    ];
  }
  
  // console.log(bullBull());
  
  function indexesOfQualifiedNumbersFunc(drawNumbers, values) {
    console.log("drawNumbers ", drawNumbers)
    let indexes = [];
    let removeDuplicate = [...new Set(drawNumbers)];
  
    if (values[0] === values[1] && values[1] ===values[2]) {
      for (let i = 0; i < drawNumbers.length; i++) {
        if (drawNumbers[i] === values[0] || drawNumbers[i] === values[1]) {
          indexes.push(i);
          console.log("hkahskahkshkahshhas",drawNumbers[i])
        }
      }
    } else {
      removeDuplicate.forEach((item, index) => {
        if (item === values[0] || item === values[1] || item === values[2]) {
          indexes.push(drawNumbers.lastIndexOf(item));
        }
      });
    }
    return indexes;
  }
  function getCombinations(array, r) {
    const result = [];
    // Recursive function to generate combinations
    function generateCombos(combination, index) {
      if (combination.length === r) {
        result.push(combination);
        return;
      }
  
      if (index >= array.length) {
        return;
      }
      const newCombo = [...combination];
      newCombo.push(array[index]);
  
      generateCombos(newCombo, index + 1);
      generateCombos(combination, index + 1);
    }
  
    generateCombos([], 0);
    return result;
  }
let drawNumbers = [8, 2, 7, 3, 1];
  bullBull(drawNumbers)