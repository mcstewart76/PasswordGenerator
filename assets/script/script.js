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
 var low = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var up = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var char = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\" , "]", "^", "_", "`", "{", "|", "}", "~"]
  var array2 = [];
// Write password to the #password input
function writePassword() {
   
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
function generatePassword() {
  NumberOfCharacters = prompt("Enter a number between 8 and 128");
  if (NumberOfCharacters <=128 && NumberOfCharacters >= 8){
  console.log("Is between 8 and 128"+ NumberOfCharacters)

  }else{
    alert("Please enter a value between 8 and 128.")
    return "Please enter a value between 8 and 128."
  } 
  let caseLower = confirm("Do you want lowercase letters");
  console.log("CaseLower " + caseLower);
  let caseUpper = confirm("Do you want uppercase letters");
  console.log("CaseUP " + caseUpper);
  let caseNum = confirm("Do you want numbers?");
  console.log("CaseNum " + caseNum);
  let caseSpecial = confirm("Do you want special characters");
  console.log("CaseSpec " + caseSpecial);
  // function amountOfCharacters(charactersnum){
  //     var charactersnum = prompt("How many characters do you want your password");
  
  if (caseLower) {
    console.log("Inside if CaseLower ");
    // const array2 = low.concat(char).join("");
  array2 = array2.concat(low);
    
  }
  console.log(array2)
    if (caseUpper) {
      console.log("Inside if CaseUp ");
    array2 = array2.concat(up).join("");
    
    }
    console.log(array2)
      if (caseNum){
        console.log("Inside if CaseNum ");
        array2 = array2.concat(num).join("");
        
      }
      console.log(array2)
        if (caseSpecial) {
          console.log("Inside if CaseSpec ");
          array2 = array2.concat(char).join("");
          
        }  
        console.log(array2)
     return array2  

    

} 
// return array1.join("");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);