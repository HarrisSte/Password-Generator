//Setting up the arrays
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

//Window prompts to confirm user choices; responses are logged according to requirements and returned out.
function collectNumberInput(userPrompt) {
  var response = window.prompt(userPrompt);
  if (response < 8 || response > 128 || isNaN(response)) {

    return false;
  }
  return response;
}

function collectInput(userPrompt) {
  return window.confirm(userPrompt);
}

//Collecting data according to user preference. Validates length to fall between 8-128 characters.
function collectData() {
  confirmLength = collectNumberInput('How long would you like your password to be? You may choose between 8-128 characters.');
  if (!confirmLength) {
    window.alert("You must select a number between 8 and 128.")
    return "";
  }
  confirmLowerCase = collectInput("Would you like to have lower case characters?");
  confirmNumber = collectInput("Would you like to have numbers?")
  confirmUpperCase = collectInput("Would you like to have upper case characters?");
  confirmSpecialChar = collectInput("Would you like to have special characters?");
}

//Password generation; adds perferences to PW output. User must select at least one criteria.
function generatePassword() {
  if (confirmLowerCase + confirmNumber + confirmSpecialChar + confirmUpperCase < 1) {
    window.alert("Please choose at least one character.")
    return "";
  }
  passwordChar = []
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
  var password = generatePassword(); //collects info from user.
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}

// Assignment Code
var generateBtn = document.querySelector('#generate');

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword)
