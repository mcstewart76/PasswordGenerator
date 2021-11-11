// Assignment Code
var generateBtn = document.querySelector("#generate");

  var low = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var up = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var char = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\" , "]", "^", "_", "`", "{", "|", "}", "~"]
  var array2 = [];
  var randomPass = [];
  

// Write password to the #password input
function writePassword() {
   
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Generate Password function
function generatePassword() {
  // Prompts for number of characters wanted in password
  NumberOfCharacters = prompt("Enter a number between 8 and 128");
  if (NumberOfCharacters <=128 && NumberOfCharacters >= 8){
  //console.log("The number of characters is "+ NumberOfCharacters)
  //If amount of characters isnt selected properly then it returns 
  }else{
    alert("Please enter a numeric value between 8 and 128.")
    return "Please enter a numeric value between 8 and 128."
  } 
  //Asks user for criteria for password
  let caseLower = confirm("Do you want lowercase letters");
  console.log("CaseLower " + caseLower);
  let caseUpper = confirm("Do you want uppercase letters");
  console.log("CaseUP " + caseUpper);
  let caseNum = confirm("Do you want numbers?");
  console.log("CaseNum " + caseNum);
  let caseSpecial = confirm("Do you want special characters");
  console.log("CaseSpec " + caseSpecial);
  //Logic for answers to the questions
  if (caseLower || caseUpper || caseNum || caseSpecial){
  }
  else{
    alert("You have to select at least one password criteria")
    return "You have to select at least one password criteria"
  }
  if (caseLower) {
    //console.log("Inside if CaseLower ");
  array2 = array2.concat(low); 
  }

  // console.log(array2)

    if (caseUpper) {
      //console.log("Inside if statement CaseUp ");
    array2 = array2.concat(up);
    }

    // console.log(array2)

      if (caseNum){
        //console.log("Inside if statement CaseNum ");
        array2 = array2.concat(num);
      }

      // console.log(array2)

        if (caseSpecial) {
          //console.log("Inside if statment CaseSpec ");
          array2 = array2.concat(char); 
        }

        //console.log(array2)
       
       function checkVariables() {
          
          partPass = [];
          randomPass = [];
          for(let i=0; i < NumberOfCharacters; i++){
          partPass = array2[Math.floor(Math.random()*array2.length)]
          randomPass = randomPass.concat(partPass)
          
          }
         
       }  
       checkVariables();
        if (caseNum && (randomPass.some(item => num.includes(item)) !== true)){
         
          checkVariables();

        }
        if(caseNum && (randomPass.some(item => num.includes(item)) === true)){
          var finalPass = randomPass.join("");
        }
        
        // do{
        //   checkVariables();
        //   var finalPass = randomPass.join("");
        //   console.log(finalPass)
          
        //   }while (randomPass.some(item => num.includes(item)) !== true)
          
        //     console.log("password contains a number")
            
            
          
        
      
        
        
        // for(let i=0; i < NumberOfCharacters; i++){
        //   partPass = array2[Math.floor(Math.random()*array2.length)]
        //   randomPass = randomPass.concat(partPass)
          
        // }
      // if(caseNum){randomPass.some(caseNum)}
          //console.log(randomPass)
        //Removes , and "" using join from the array, splice is used here to renew the randomPass and array2 variables.
        var checkedPass = finalPass;
        randomPass.splice(0,randomPass.length);
        array2.splice(0,array2.length);
        console.log(checkedPass)
        return checkedPass
        
    
} 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);