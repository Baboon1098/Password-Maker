// Assignment Code
var generateBtn = document.querySelector("#generate");

function generateRandomPassword(length) {
  var upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  var numbers = '0123456789';
  var Special = "!@#$%^&*-+=";

  var allCharacters = "";
  if (length < 8){
    alert("you must add at least 8 characters for the password to be added");
    return "";
  }

  if(length > 128){
    alert("The password can only have 128 characters");
    return "";
  }

  var Lower = confirm("Do you want to add Lower Case Letters?");
  var uper = confirm("Do you want to add Upper Case Letters?");
  var number = confirm("Do you want to add Numbers?");
  var Specials = confirm("Do you want to add Specials");

  if (Lower == true){
    allCharacters = allCharacters + lowerCaseLetters;
  }

  if (uper == true){
    allCharacters = allCharacters + upperCaseLetters;
  }

  if (number == true){
    allCharacters = allCharacters + numbers;
  }

  if (Specials == true){
    allCharacters = allCharacters + Special;
  }
  
  if(allCharacters == ""){
    alert("You need at least one set of Characters for the Password to work");
    return "";
  }

  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allCharacters.length);
    password += allCharacters.charAt(randomIndex);
  }

  return password;
}

function generatePassword() {
  var passwordLength = prompt("Enter how long you want the Password to be");
  var randomPassword = generateRandomPassword(passwordLength);
  document.getElementById('password').textContent = randomPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
