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
  
  for (let i = 1; i < questions.length; i++) {
    var userPick = window.prompt(questions[i]);
    userPick = userPick.toLowerCase();
  
      if (!userPick) {
        window.alert("Please enter either a Yes or No for the password to generate.");
        return generatePassword();
      }
      else if (userPick === answers[0]) {
        passCharCriteria += keyLetters[i];
      }
      else if (userPick === answers[1]) {
      }
      else if (userPick != answers || !isNaN(userPick)) {
        window.alert("Please don't use anything else other than a Yes or No.");
        return generatePassword();
      }
    }
    
    for (let i = 0; i < +keyLength; i++) {
      if (+keyLength && passCharCriteria === "") {
        window.alert("Please choose at least 1 criteria.");
        return generatePassword()
      }
      else {
      newPassword += passCharCriteria[Math.floor(Math.random() * passCharCriteria.length)];
      }
    }
    
    return newPassword;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
