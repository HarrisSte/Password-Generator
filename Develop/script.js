//Setting up the arrays
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","X","Y","Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];

var confirmLength = "";
var confirmLowerCase;
var confirmUpperCase;
var confirmNumber;
var confirmSpecialChar;

//Window prompts to confirm user choices
function generatePassword() {
  var confirmLength = window.prompt("How long would you like your password to be? You may choose between 1-128 characters.");
}  
  
  var confirmLowerCase = window.prompt("Would you like to have lower case characters? Click OK for 'yes' CANCEL for 'no'.");
  var confirmUpperCase = window.prompt("Would you like to have upper case characters? Click OK for 'yes' CANCEL for 'no'.");
  var confirmSpecialChar = window.prompt("Would you like to have special characters? Click OK for 'yes' CANCEL for 'no'.");

//Password generation
var = password = [];

if (confirmLowerCase) {
  password = password.concat(lowerCase);
}

if (confirmUpperCase) {
  password = password.concat(upperCase);
}

if (confirmNumber) {
  password = password.concat(number);
}

if (confirmSpecialChar) {
  password = password.concat(specialChar);
}

console.log(password)

var randomPassword = ""

for (var i = 0; i < confirmLength; i++) {
  randomPassword = randomPassword + password[Math.floor(Math.random() * password.length)];

}










// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

//}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
