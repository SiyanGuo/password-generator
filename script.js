// Assignment code here
pseudo code

var lowerCase = ['a'];
var upperCase = ['A'];
var number= ['1','2','3','4','5','6','7','8','9','0'];
//31 length
var specialCha = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

var pwd = [];

function generatePassword() {

var length = parseInt(window.prompt('How long is the password? (mininal 8 characters and maximum 128 characters)'));

if (length! || length>128 || length<8){
  alert('Please input a valid number between 8 - 128');
  generatePassword();
} else {
  var isLower = window.confirm('Does it contain lower case?');
  var isUpper = window.confirm('Does it contain upper case?');
  var isNumber = window.confirm('Does it contain numbers?');
  var isSpecialCha = window.confirm('Does it contain special characters?');
}

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
