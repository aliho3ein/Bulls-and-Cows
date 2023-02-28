const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/** nummerlänge */
const rollsNumber = 4;

/** Zufallszahl erstellen*/
let numb = "";
while (numb.length < rollsNumber) {
  let newNumber = Math.floor(Math.random(0, 9) * 10).toString();
  !numb.includes(newNumber) && (numb += newNumber);
}

/** Variablen */
let userGuess = "";
let massage = "";
let finalMassage = "Guess the Numbers :";
let numOfTry = 0;

function getNumbers() {
  numOfTry++;
  console.clear();
  rl.question(
    `${userGuess && userGuess + " =>"} ${massage}

 ${finalMassage} `,
    (numbers) => {
      if (numbers.length == rollsNumber) {
        massage = "";

        let bull = 0; /** Es gibt eine genaue Nummer*/
        let cow = 0; /** Es gibt die genaue Zahl an der genauen Stelle */
        let err = "";

        for (let n = 0; n < rollsNumber; n++) {
          for (let m = 0; m < rollsNumber; m++) {
            /** Zähle die Bull und die Cows */
            numbers[m] == numb[n] && (m == n ? cow++ : bull++);

            /** Check ob die ziffern Unique sind*/
            n != m &&
              numbers[n] == numbers[m] &&
              (err = "Error : Please enter unique digits");
          }
          /** Check ob input Nummer ist*/
          isNaN(numbers[n]) && (err = "Error : Please only enter the number");
        }

        /** Print die massage */
        massage =
          err ||
          `Hint: ${bull} ${bull <= 1 ? "Bull" : "Bulls"} and ${cow} ${
            cow <= 1 ? "Cow" : "Cows"
          } `;

        /** Ende */
        if (cow == 4) {
          console.log(
            "\x1b[32m%s\x1b[0m",
            `
          --------- 𝕎  𝕀 ℕ ℕ 𝔼 ℝ ----------- 

                 The Number was ${numbers}
        
                  You tried ${numOfTry} times
          `
          );
          return rl.close();
        }
      } else {
        /** Überprüf ob die Eingabelänge 4 ist */
        massage = `Error : Please Enter only ${rollsNumber} Digits`;
      }

      userGuess = numbers;

      getNumbers();
    }
  );
}

getNumbers();
