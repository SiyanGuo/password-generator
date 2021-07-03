// Assignment code here


// length: 26
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//length: 10
var number = '1234567890';
//length: 31
var specialCha = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

//create variables
var chaType = ''
var pwd = '';
var isLower = '';
var isUpper = '';
var isNumber = '';
var isSpecialCha = '';
var passwordLength = '';

//function to check whay character types to include
function confirmChaType() {
  isLower = window.confirm('Does it contain lower case?');
  isUpper = window.confirm('Does it contain upper case?');
  isNumber = window.confirm('Does it contain numbers?');
  isSpecialCha = window.confirm('Does it contain special characters?');
};

//function to confirm the length of the password
function confirmLength() {
  passwordLength = window.prompt('How long is the password? (minimum 8 and maximum 128 characters)');
}

//function to generate random password based on the prompts
function generatePassword() {
  //when user click on the button second time, reset the pwd to empty string;
  pwd = '';
  confirmLength();

  // if user cancel the prompt, returning the default message and they can start it again
  if (passwordLength === null) {
    passwordLength = '';
    return 'Your Secure Password';
  }

  //check if the length is greater than 7 and less than 129
  if (7 < passwordLength && passwordLength < 129) {

    confirmChaType();

    //make sure at least one character type is selected
    while (!isLower && !isUpper && !isNumber && !isSpecialCha) {
      alert('Please select at least one character type.');
      confirmChaType();
    }

    //if lower case is selected, randomly select a letter and add it to the string of pwd, add all lower case letters to the string chaType
    if (isLower) {
      var chosenLowerCase = lowerCase.charAt(Math.floor(Math.random() * 26) + 1);
      pwd += chosenLowerCase;
      chaType += lowerCase;
    }
    //if upper case is selected, randomly select a letter and add it to the string of pwd, add all upper case letters to the string chaType
    if (isUpper) {
      var chosenUpperCase = upperCase.charAt(Math.floor(Math.random() * 26) + 1);
      pwd += chosenUpperCase;
      chaType += upperCase;
    }
    //if numeric is selected, randomly select a number and add it to the string of pwd, add all numbers to the string chaType
    if (isNumber) {
      var chosenNumber = number.charAt(Math.floor(Math.random() * 10) + 1);
      pwd += chosenNumber;
      chaType += number;
    }
    //if special characters is selected, randomly select a symbol and add it to the string of pwd, add all symbols to the string chaType
    if (isSpecialCha) {
      var chosenSpecialCha = specialCha.charAt(Math.floor(Math.random() * 31) + 1);
      pwd += chosenSpecialCha;
      chaType += specialCha;
    }
    //check how many more characters need to be added to the string of pwd
    var remainingLength = passwordLength - pwd.length
    //using for loop to add more random characters to the string of pwd
    for (i = 0; i < remainingLength; i++) {
      var remainingCha = chaType.charAt(Math.floor(Math.random() * chaType.length) + 1);
      pwd += remainingCha;
    }
    //call conditonal recursive function when the input is not vallid number from 8-128
  } else {
    alert('Please input a valid number between 8 - 128.');
    generatePassword();
  }

  //return the string of pwd
  return pwd;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
