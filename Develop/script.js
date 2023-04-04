//Setting up the arrays
//I want to tidy these up, if possible. 
// var length = 128;
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
//not recognizing for some reason -- figure out
function generatePassword() {
  var confirmLength = window.prompt("How long would you like your password to be? You may choose between 1-128 characters.");
}

// while (confirmLength <=1 || confirmLength >=129) {
//   alert("You must choose a number between 1-128")
//   var confirmLength = window.prompt("How long would you like your password to be? You may choose between 1-128 characters.");
// }  
  var confirmLowerCase = window.prompt("Would you like to have lower case characters? Click OK for 'yes' CANCEL for 'no'.");
  var confirmNumber = window.prompt("Would you like to have numbers? Click OK for 'yes' CANCEL for 'no'.")
  var confirmUpperCase = window.prompt("Would you like to have upper case characters? Click OK for 'yes' CANCEL for 'no'.");
  var confirmSpecialChar = window.prompt("Would you like to have special characters? Click OK for 'yes' CANCEL for 'no'.");

//Password generation
var passwordChar = [];

if (confirmLowerCase) {
  passwordChar = passwordChar.concat(lowerCase);
}

if (confirmUpperCase) {
  passwordChar = passwordChar.concat(upperCase);
}

if (confirmNumber) {
  passwordChar = passwordChar.concat(number);
}

if (confirmSpecialChar) {
  passwordChar = passwordChar.concat(specialChar);
}

console.log(passwordChar)

var randomPassword = ""
for (var i = 0; i < confirmLength; i++) {
  randomPassword = randomPassword + password[Math.floor(Math.random() * password.length)];
  console.log(randomPassword)
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
// }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)}
