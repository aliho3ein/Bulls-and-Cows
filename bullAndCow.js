const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/** Count of Number */
const rollsNumber = 4;

/** Create Random Number */
let numb = "";
while (numb.length < rollsNumber) {
  let newNumber = Math.floor(Math.random(0, 9) * 10).toString();
  !numb.includes(newNumber) && (numb += newNumber);
}

/** Variables */
let userGuess = "";
let massage = "";
let finalMassage = "Guess the Numbers :";
let numOfTry = 0;

function getNumbers() {
  numOfTry++;
  console.clear();
  rl.question(
    `   ${userGuess} ${userGuess && "=>"} ${massage}

${finalMassage}`,
    (numbers) => {
      if (numbers.length == rollsNumber) {
        massage = "";

        let bull = 0; /** There is Exact Number */
        let cow = 0; /** There is Exact Number in Exact Place */

        /** Count the Bull and the Cows */
        for (let n = 0; n < rollsNumber; n++) {
          for (let m = 0; m < rollsNumber; m++) {
            numbers[m] == numb[n] && (m == n ? cow++ : bull++);
          }
        }

        massage = `Hint: ${bull} bull and ${cow} cows`;

        /** Check if the numbers are Unique */
        for (let i = 0; i < rollsNumber; i++) {
          for (let j = 0; j < rollsNumber; j++) {
            i != j &&
              numbers[i] == numbers[j] &&
              (massage = "Error : Pls Enter Unique Numbers");
          }
        }

        /** Check if input is Number */
        isNaN(numbers) && (massage = "Error : Pls Enter just Numbers");

        /** End */
        if (cow == 4) {
          console.log(
            "\x1b[32m%s\x1b[0m",
            `
          --------- 𝕎  𝕀 ℕ ℕ 𝔼 ℝ ----------- 

                 The Number was ${numbers}
        
                  You tried ${numOfTry} times
          `
          );
          rl.close();
          return;
        }
      } else {
        /** Check if input length is 4 */
        massage = `Error : Pls Enter ${rollsNumber} Numbers`;
      }

      userGuess = numbers;

      getNumbers();
    }
  );
}

getNumbers();
