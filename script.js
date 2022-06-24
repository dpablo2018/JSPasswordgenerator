// Assignment Code
var generateBtn = document.querySelector("#generate");




function generatePassword(){

  var characterCharacter = ["!", "@", "#", "$", "%", "^", "&", "*","(", ")", "_", "+", "-", "/",]
  var numberCharacter = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var upperCaseCharacter = [ "A" , "B" , "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowerCaseCharacter = [ "a" , "b" , "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  
  var passwordLength = prompt ("How many characters do you want between 8 and 128?");
  var passwordCharacter = parseInt(passwordLength);     
  if (passwordLength< 8){
    confirm("It has to be 8 charcters long")
    return
  }
  if (passwordLength>128){
    confirm("It has to be shorter than 128 charcters")
    return
  }

  


  var numberCh = confirm ("Do you want  a number?");

  var uppercaseCh = confirm ("Do you want an uppercase in your password?");

  var lowercaseCh= confirm ("Do you want a lowercase in your password?");

  var charactersCh = confirm (" Do you want a special character in your password?");

  



}

  // Write password to the #password input
  function writePassword() {
  var password = generatePassword(); 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
