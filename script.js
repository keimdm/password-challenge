// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  //use while loop to allow user to try again in case of invalid input without starting the whole process over
  var length;
  var validLength = false;
  while (validLength = false) {
    //get length input
    var length = prompt("Please enter desired length of password.", "");
    //validate length input - stop process if number out of range, or if input is a non-numeric string
    if (length === "" || Number(length) < 8 || Number(length) > 128 || typeof Number(length) !== "number") {
      window.alert("Password length must be between 8 and 128.");
      return;
    }
    else {
      validLength = true;
    }
  }

  //use while loop to allow user to try again in case of invalid input without starting the whole process over
  var lowerChar;
  var upperChar;
  var numChar;
  var specChar;
  var validCharSelected = false;
  while (validCharSelected = false) {
     //confirm lowercase letters
    var lowerChar = confirm("Please confirm whether or not lowercase letters should be used.");
    //confirm uppercase letters
    var upperChar = confirm("Please confirm whether or not uppercase letters should be used.");
    //confirm numbers
    var numChar = confirm("Please confirm whether or not numbers should be used.");
    //confirm special characters
    var specChar = confirm("Please confirm whether or not special characters should be used.");
    //validate boolean inputs - at least one has to be true
    if (!lowerChar && !upperChar && !numChar && !specChar) {
      window.alert("Please confirm at least one type of character to use in the password.");
    }
    else {
      validCharSelected = true;
    }
  }

  //set up initial output variable
  var passwordOutput = "";
  //set up reference list of characters from which random elements can be drawn to build the password
  let refLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let refUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  let refNumber = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  let refSpecChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", ".", ",", "/", "?", "[", "]", "<", ">"];
  
  //create array of valid character lists
  var validChars = [];
  if (lowerChar) {
    validChars.append(refLowerCase);
  }
  if (upperChar) {
    validChars.append(refUpperCase);
  }
  if (numChar) {
    validChars.append(refNumber);
  }
  if (specChar) {
    validChars.append(refSpecChar);
  }

  //select a random character and appends it to the password output until password is at desired length
  for (i = 0; i < Number(length); i++) {
    var randomCharSet = Math.floor(Math.random() * validChars.length);
    var randomCharacter = Math.floor(Math.random() * validChars[randomCharSet].length);
    passwordOutput = passwordOutput + validChars[randomCharSet][randomCharacter];
  }

  return passwordOutput;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
