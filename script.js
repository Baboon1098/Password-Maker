// Assignment Code
var generateBtn = document.querySelector("#generate");

function generateRandomPassword(length) {
  var upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  var numbers = '0123456789';
  var allCharacters = upperCaseLetters + lowerCaseLetters + numbers;

  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allCharacters.length);
    password += allCharacters.charAt(randomIndex);
  }

  return password;
}

function generatePassword() {
  var passwordLength = 12;
  var randomPassword = generateRandomPassword(passwordLength);
  document.getElementById('password').textContent = randomPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
