// Assignment Code
var generateBtn = document.querySelector("#generate");



// Created arrays to make random generator for charcters, numbers, uppercase, lowercase, and an empty array 
function generatePassword(){

  var generatePassword = ""

  var characterCharacter = ["!", "@", "#", "$", "%", "^", "&", "*","(", ")", "_", "+", "-", "/",]
  var numberCharacter = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var upperCaseCharacter = [ "A" , "B" , "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowerCaseCharacter = [ "a" , "b" , "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var text = [];

  /*
  Create a prompt to make a window pop up with a message
  Create the parseInt to make the string into a number value
  Made confirm windows to pop up the criteria for the challenge
  Of course, theyre all assigned to variables.
  */

  var passwordLength = prompt ("How many characters do you want between 8 and 128?");
  var passwordCharacter = parseInt(passwordLength);     
  var numberCh = confirm ("Do you want  a number?");
  var uppercaseCh = confirm ("Do you want an uppercase in your password?");
  var lowercaseCh= confirm ("Do you want a lowercase in your password?");
  var charactersCh = confirm (" Do you want a special character in your password?");

  /*
  Made an if statement when the user enters a value smaller than 8 charcters.
  Made another if statement for the opposite, when the charcter limit is over 128.
  
  Made a loop for the random password generator. 
  */
}

  if (passwordLength< 8){
    confirm("It has to be 8 charcters long")
    return
  }
  if (passwordLength>128){
    confirm("It has to be shorter than 128 charcters")
    return
  }

  if (numberCh){
    text = text.concat(numberCharacter)
  }
  
  if (uppercaseCh){
    text = text.concat(upperCaseCharacter)
  }
 
  if (lowercaseCh){
    text = text.concat(lowerCaseCharacter)
  }

  if (charactersCh){
    text = text.concat(characterCharacter)
  }
  console.log(text)

  for (var i = 0; i < passwordLength; i++){
    let (text [Math.floor(Math.random()* text.length)]);
    
  }
  
  




  // Write password to the #password input
  function writePassword() {
  var password = generatePassword(); 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}





