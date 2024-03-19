function analyzeDraw(drawNumbers, whatToAnalyze) {
    const results = {
      oddEven: [],
      bigSmall: [],
      primeComposite: [],
      dragonTiger: [],
    };
  
    let prevOddEven, prevBigSmall, prevDragonTiger;
    let consecutiveTieCount = 0;
  
    for (let draw of drawNumbers) {
      let sum = draw.reduce((a, b) => a + b, 0);
  
      let oddEven = sum % 2 === 0 ? "even" : "odd";
      let bigSmall = sum >= 23 ? "big" : "small";
  
      let lastTwo = draw.slice(-2);
      let dragonTiger;
      if (lastTwo[0] > lastTwo[1]) {
        dragonTiger = "dragon";
      } else if (lastTwo[0] < lastTwo[1]) {
        dragonTiger = "tiger";
      } else {
        dragonTiger = "T"; // Tie
      }
  
      if (oddEven === prevOddEven) {
        results.oddEven[results.oddEven.length - 1]++;
      } else {
        results.oddEven.push(1);
      }
  
      if (bigSmall === prevBigSmall) {
        results.bigSmall[results.bigSmall.length - 1]++;
      } else {
        results.bigSmall.push(1);
      }
  
      if (dragonTiger === prevDragonTiger) {
        if (dragonTiger === "T") {
          consecutiveTieCount++;
        } else {
          results.dragonTiger[results.dragonTiger.length - 1]++;
        }
      } else {
        results.dragonTiger.push(consecutiveTieCount + 1);
        consecutiveTieCount = 0;
      }
  
      prevOddEven = oddEven;
      prevBigSmall = bigSmall;
      prevDragonTiger = dragonTiger;
    }
  
    return results;
  }
  
  const drawNumbers = [
      [1, 2, 3, 4, 5],
      [1, 2, 3, 4, 6],
      [1, 2, 3, 5, 6],
      [1, 2, 4, 6, 6],
      [1, 3, 4, 5, 6],
      [2, 3, 4, 5, 6]
  ];
  
  const analysisResults = analyzeDraw(drawNumbers, 'sum');
  console.log(analysisResults);
  