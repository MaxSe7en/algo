// function createOutputs(inputData) {
//     const outputArray = [];

//     for (const lotteryId in inputData) {
//         const allSelections = [];

//         const keyData = inputData[lotteryId];

//         for (const rowName in keyData) {
//             const rowItems = keyData[rowName];
//             if (rowItems.length > 0) {
//                 allSelections.push(rowItems);
//             } else {
//                 allSelections.push([]);
//             }
//         }

//         const userSelections = Object.values(keyData).map(rowName => `${rowName.length > 0 ? rowName: "-"}`).join(' | ');

//         const output = {
//             uid: 1,
//             allSelections: allSelections,
//             userSelections: userSelections,
//             multiplier: 1,
//             totalBets: 9,
//             gameId: 99,
//             totalBetAmt: 18,
//             unitStaked: 2,
//             betId: "202308280887",
//             lottery_id: +lotteryId, // Use the current key as the lottery_id
//             game_label: "Fixed place",
//             bet_time: "15:33:41",
//             bet_date: "2023-08-28"
//         };

//         outputArray.push(output);
//     }

//     return outputArray;
// }
function createOutputs(inputData) {
    const outputArray = [];

    for (const lotteryId in inputData) {
        const keyData = inputData[lotteryId];

        // Check if all arrays in keyData are empty
        const allEmpty = Object.values(keyData).every(rowItems => rowItems.length === 0);

        if (!allEmpty) {
            const allSelections = [];
            let totalBetAmt = 0;
            for (const rowName in keyData) {
                const rowItems = keyData[rowName];
                if (rowItems.length > 0) {
                    allSelections.push(rowItems);
                    totalBetAmt += rowItems.length;
                } else {
                    allSelections.push([]);
                }
            }

            const userSelections = Object.values(keyData).map(rowName => `${rowName}`).join(' | ');
            
            const output = {
                uid: 1,
                allSelections: allSelections,
                userSelections: userSelections,
                multiplier: 1,
                totalBets: 9,
                gameId: 99,
                totalBetAmt: totalBetAmt,
                unitStaked: 2,
                betId: "202308280887",
                lottery_id: lotteryId, // Use the current key as the lottery_id
                game_label: "Fixed place",
                bet_time: "15:33:41",
                bet_date: "2023-08-28"
            };

            outputArray.push(output);
        }
    }

    return outputArray;
}
const inputData = {
    "2": {
        "firstRow": [],
        "secondRow": [],
        "thirdRow": [],
        "fourthRow": [],
        "fifthRow": []
    },
    "3": {
        "firstRow": [
            8,
            9, 0
        ],
        "secondRow": [
            3,
            2
        ],
        "thirdRow": [
            5,
            4
        ],
        "fourthRow": [
            7,
            6
        ],
        "fifthRow": [
            0
        ]
    },
    "key": {
        "firstRow": [],
        "secondRow": [],
        "thirdRow": [],
        "fourthRow": [],
        "fifthRow": []
    }
}

const outputArray = createOutputs(inputData);
console.log(outputArray);
