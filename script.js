// Assignment code here
const questions = [
    "Please input the desired password length between 8 - 128 characters.",
    "Would you like it to include lowercase letters? Yes or No? [a - z]",
    "Would you like it to include uppercase letters? Yes or No? (A - Z)",
    "Would you like it to include numbers? Yes or No? (0 - 9)",
    "Would you like it to include special characters? Yes or No? (>?@#/:;<$+!=,-.^%`|~&'*_)"
]

const keyLetters = [
  "",
  "abcdefghijklmnopqrstuvwxyz",
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  "0123456789",
  ">?@#/:;<$+!=,-.^%`|~&'*_"
];

const answers = ["yes", "no"];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  var passCharCriteria = "";

  var keyLength = window.prompt(questions[0]);

  var newPassword = "";

  if (!keyLength) {
    return;
  }
  else if (+keyLength < 8 || +keyLength > 128 || isNaN(+keyLength)) {
    window.alert(keyLength + " is not a valid number. Please choose between 8 - 128 characters.");
    return generatePassword();
  };
  
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
