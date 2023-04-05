//Setting up the arrays
//I want to tidy these up, if possible. 

// var length = 128;
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','x','y','z'];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','X','Y','Z'];
var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialChar = ['!', '%', '&', ',', '*', '+', '-', '.', '/', '<', '>', '?','~'];

var passwordChar=[];
var confirmLength;
var confirmLowerCase;
var confirmUpperCase;
var confirmNumber;
var confirmSpecialChar; 

//Window prompts to confirm user choices
//not recognizing for some reason -- figure out
function collectData() {
  confirmLength = collectInput('How long would you like your password to be? You may choose between 8-128 characters.');
  confirmLowerCase = collectInput("Would you like to have lower case characters? Type YES or NO.");
  confirmNumber = collectInput("Would you like to have numbers? Click OK for 'yes' CANCEL for 'no'.")
  confirmUpperCase = collectInput("Would you like to have upper case characters? Click OK for 'yes' CANCEL for 'no'.");
  confirmSpecialChar = collectInput("Would you like to have special characters? Click OK for 'yes' CANCEL for 'no'.");
}

function collectInput(userPrompt) {
  var response = window.prompt(userPrompt);
   return response;

}

//Password generation
function generatePassword() {
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

  console.log(passwordChar);

  var randomPassword = '';
   for (var i = 0; i < confirmLength; i++) {
  randomPassword = randomPassword + passwordChar[Math.floor(Math.random() * passwordChar.length)];
 }
 return randomPassword;
}

// Write password to the #password input
function writePassword() {
  collectData();
  var password = generatePassword(); //collects info from user
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}

// Assignment Code
var generateBtn = document.querySelector('#generate');

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword)
