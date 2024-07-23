const palindromes = function (frase) {

   // Split characters from frase and test with regex if it has a letter. If true, filter returns that character
   onlyLetters = frase.toLowerCase().split('').filter(char => /[a-zA-Z0-9]/.test(char));

   // check if it is a palindrome
   let isPalindrome = onlyLetters.join('') === onlyLetters.reverse().join('') ? true : false;

   return isPalindrome

};

// Do not edit below this line
module.exports = palindromes;
