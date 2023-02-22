# Bulls and Cows

<img src='https://raw.githubusercontent.com/FBW-WD-22-D07/pb-workshop/817383b05f13fe0d490dab97d8969e28f8c0d544/bulls_and_cows/assets/cow.svg?token=AZXT46WTMWQAVHFBIH5B4VLD6YICK' alt='Cow'><img src='https://raw.githubusercontent.com/FBW-WD-22-D07/pb-workshop/817383b05f13fe0d490dab97d8969e28f8c0d544/bulls_and_cows/assets/bull.svg?token=AZXT46S6MIAPYXRLU77ICE3D6YIB6' alt='Bull'>

Our game will be player vs computer. The computer will come up with a secret number and the player will be trying to guess it.

The secret number must consist of 4 digits and each digit must be unique.

For example:

- 1112 would not be an acceptable secret number
- 1234 on the other hand is an acceptable value for the secret number, since each digit is unique

After each guess, the player will get a hint to help them guess better next time around.

The hint tells the player how many bulls and how many cows there were. What are bulls and cows?

- If there are any matching digits and they are in their right positions, they are counted as "bulls".
- If in different positions, they are counted as "cows".

Make sure to validate the input to a certain extent. For example:

- it must exist (the user can simply hit enter, but we should not accept this as a valid guess)
- it must be 4 digits
- each of the 4 digits must be unique
