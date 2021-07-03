// Assignment code here
// pseudo code


// length 26
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//length 10
var number = '1234567890';
//length 31
var specialCha = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

var chaType = ''
var pwd = '';


// function confirmChaType() {
//
// }
//console.log(lowerCase+number);

function generatePassword() {

  var passwordLength = parseInt(window.prompt('How long is the password? (minimum 8 and maximum 128 characters)'));

  if (!passwordLength || passwordLength > 128 || passwordLength < 8) {
    alert('Please input a valid number between 8 - 128.');
    generatePassword();
  }

    var isLower = window.confirm('Does it contain lower case?');
    var isUpper = window.confirm('Does it contain upper case?');
    var isNumber = window.confirm('Does it contain numbers?');
    var isSpecialCha = window.confirm('Does it contain special characters?');


  if (!isLower && !isUpper && !isNumber && !isSpecialCha) {
    alert('Please select at least one character type.');
    // confirmChaType();
  }

  if (isLower) {
    var chosenLowerCase = lowerCase.charAt(Math.floor(Math.random() * 26) + 1);
    pwd += chosenLowerCase;
    chaType += lowerCase;
  }

  if (isUpper) {
    var chosenUpperCase = upperCase.charAt(Math.floor(Math.random() * 26) + 1);
    pwd += chosenUpperCase;
    chaType += upperCase;
  }

  if (isNumber) {
    var chosenNumber = number.charAt(Math.floor(Math.random() * 10) + 1);
    pwd += chosenNumber;
    chaType +=number;
  }

  if (isSpecialCha) {
    var chosenSpecialCha = specialCha.charAt(Math.floor(Math.random() * 31) + 1);
    pwd += chosenSpecialCha;
    chaType += specialCha;
  }

var remainingLength = passwordLength - pwd.length

console.log(remainingLength);

for(i=0; i<remainingLength; i++){

var remainingCha = chaType.charAt(Math.floor(Math.random() * chaType.length) + 1);

  pwd+=remainingCha;

}
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
