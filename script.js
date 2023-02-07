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
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
