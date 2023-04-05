//Setting up the arrays - I want to tidy these up, if possible. 

var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'Y', 'Z'];
var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialChar = ['!', '%', '&', ',', '*', '+', '-', '.', '/', '<', '>', '?', '~'];

var passwordChar = [];
var confirmLength;
var confirmLowerCase;
var confirmUpperCase;
var confirmNumber;
var confirmSpecialChar;

//Window prompts to confirm user choices
function collectNumberInput(userPrompt) {
  var response = window.prompt(userPrompt);
  if (response >= 8 && response <= 128) {
    return response;
  }
  else {
    return 0;
  }
}

function collectInput(userPrompt) {
  return window.confirm(userPrompt);
}

//add stop prompt if ppl don't choose right number if confirm length =0
function collectData() {
  confirmLength = collectNumberInput('How long would you like your password to be? You may choose between 8-128 characters.');
  confirmLowerCase = collectInput("Would you like to have lower case characters?");
  confirmNumber = collectInput("Would you like to have numbers?")
  confirmUpperCase = collectInput("Would you like to have upper case characters?");
  confirmSpecialChar = collectInput("Would you like to have special characters?");
}

//Password generation
//Make sure to add stop
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
