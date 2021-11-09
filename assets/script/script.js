 //GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  function generatePassword() {
    const low = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const up = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const char = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\" , "]", "^", "_", "`", "{", "|", "}", "~"]
    let caseLower = confirm("Do you want lowercase numbers");
    let caseUpper = confirm("Do you want uppercase numbers");
    let caseNum = confirm("Do you want numbers?");
    let caseSpecial = confirm("Do you want special characters");

    if (caseLower) {
      //const array1 = low.concat(char).join("");
      const array1 = array1.concat(low).join("");
      //ask uppercase
    }
      if (caseUpper) {
      const array1 = array1.concat(up).join("");
      }
        if (caseNum){
          const array1 = array1.concat(num).join("");
        }
          if (caseSpecial) {
            const array1 = array1.concat(char).join("");
          }
  }
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
