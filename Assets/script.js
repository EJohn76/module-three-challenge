// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  const passwordLength = prompt("Please enter a password length greater than 8 and less than 128:");
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Invalid password length");
  } else {

    var password = generatePassword(passwordLength);
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  }
}

// Generates Random Characters for Password
function generatePassword(passwordLength) {
  const isLowercase = confirm("Does your password contain lowercase letters?");
  const isUppercase = confirm("Does your password contain uppercase letters?");
  const isNumber = confirm("Does your password contain numbers?");
  const isSpecial = confirm("Does your password contain special characters?");

  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numChars = "0123456789";
  var specialChars = "!@#$%^&*()";
  var password = "";

  for (var i = 0; i <= passwordLength; i++) {
    if (isLowercase && password.length < passwordLength) {
      var randomNumber = Math.floor(Math.random() * lowercaseChars.length);
      password += lowercaseChars.substring(randomNumber, randomNumber + 1);
    }
    if (isUppercase && password.length < passwordLength) {
      var randomNumber = Math.floor(Math.random() * uppercaseChars.length);
      password += uppercaseChars.substring(randomNumber, randomNumber + 1);
    }
    if (isNumber && password.length < passwordLength) {
      var randomNumber = Math.floor(Math.random() * numChars.length);
      password += numChars.substring(randomNumber, randomNumber + 1);
    }
    if (isSpecial && password.length < passwordLength) {
      var randomNumber = Math.floor(Math.random() * specialChars.length);
      password += specialChars.substring(randomNumber, randomNumber + 1);
    }
  }

  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//
