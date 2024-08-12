// function generateRandomPassword(length) {
//   const characters =
//     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?";
//   let password = "";

//   for (let i = 0; i < length; i++) {
//     const randomIndex = Math.floor(Math.random() * characters.length);
//     password += characters[randomIndex];
//   }

//   return password;
// }

// // Generate a random password of length 12 and log it to the console
// const randomPassword = generateRandomPassword(12);
// console.log("Generated Password:", randomPassword);
var generator = require("generate-password");

var password = generator.generate({
  length: 10,
  numbers: true,
});

// 'uEyMTw32v9'
console.log(password);
