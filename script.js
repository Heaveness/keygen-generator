// Constant variable array to store the questions.
const questions = [
    "Please input the desired password length between 8 - 128 characters.",
    "Would you like it to include lowercase letters? Yes or No? (a - z)",
    "Would you like it to include uppercase letters? Yes or No? (A - Z)",
    "Would you like it to include numbers? Yes or No? (0 - 9)",
    "Would you like it to include special characters? Yes or No? (>?@#/:;<$+!=,-.^%`|~&'*_)"
]

// Constant variable array to store the letters, numbers, and symbols.
const keyLetters = [
  "",
  "abcdefghijklmnopqrstuvwxyz",
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  "0123456789",
  ">?@#/:;<$+!=,-.^%`|~&'*_"
];

// Constant variable array to store yes or no to compare with user input.
const answers = ["yes", "no", "y", "n"];

// Get references to the #generate element from html file.
var generateBtn = document.querySelector("#generate");

// A function to generate password when button is clicked.
function generatePassword() {

  // Variables within the function block to be used then the value.
  var passCharCriteria = "";

  var newPassword = "";

  // Once generate password button is pressed, prompt window on password length.
  var keyLength = window.prompt(questions[0]);

  // If statement to check if user pressed cancel which closes the function.
  if (!keyLength) {
    return;
  }
  // Else if statement to check that the password length inputted is between 8 - 128 characters.
  else if (+keyLength < 8 || +keyLength > 128 || isNaN(+keyLength)) {
    window.alert(keyLength + " is not a valid number. Please choose between 8 - 128 characters.");
    return generatePassword();
  };
  
  // For loop method to cycle questions for user to answer with yes or no starting from the 2nd question.
  for (let i = 1; i < questions.length; i++) {
    var userPick = window.prompt(questions[i]);
    // Changes the user input string to lowercase for easier comparison and prevent case-sensitive issues.
    userPick = userPick.toLowerCase();

      // If statement to check if user puts an empty value which alerts the user then closes the function.
      if (!userPick) {
        window.alert("Please enter either a Yes or No for the password to generate. (It is not case-sensitive)");
        return generatePassword();
      }
      // Else if statement to check if the user said yes which will add letters for each criteria.
      else if (userPick === answers[0] || answers[2]) {
        passCharCriteria += keyLetters[i];
      }
      // Else if statement to check if the user said no which will skip adding letters for that criteria.
      else if (userPick === answers[1] || answers[3]) {
      }
      // Else if statement to check if the user puts a number or any words other than Yes or No which alerts user to put appropriate answers.
      else if (userPick != answers || !isNaN(userPick)) {
        window.alert("Please don't use anything else other than a Yes or No. (It is not case-sensitive)");
        return generatePassword();
      }
    }
    
    // For loop method to generate the password.
    for (let i = 0; i < +keyLength; i++) {
      // If statement to prevent user from giving undefined password after password length is given, but not criteria was chosen.
      if (+keyLength && passCharCriteria === "") {
        window.alert("Please choose at least 1 criteria.");
        return generatePassword()
      }
      // Else statement to generate a randomized password based on key letters, numbers, and symbols from the earlier confirmed criteria.
      else {
      newPassword += passCharCriteria[Math.floor(Math.random() * passCharCriteria.length)];
      }
    }
    // Returns the new randomized password for it to be displayed and used.
    return newPassword;
};

// Writes the generated password to the #password input from html file.
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};

// Add event listener to generate button created from the html file.
generateBtn.addEventListener("click", writePassword);
