const palindromes = function (string) {
    const alphnumeric = 'abcdefghijklmnopqrstuvwxyz0123456789'


const cleanedString = string
.toLowerCase()
.split('')
.filter((character) => alphnumeric.includes(character))
.join('');

const reversedString = cleanedString.split('').reverse().join('');

return cleanedString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;


  // Since we only consider letters and numbers, create a variable containing all valid characters
  // Convert to lowercase, split to array of individual characters, filter only valid characters, then rejoin as new string
  // Create a new reversed string for comparison
  // Return the outcome of the comparison which will either be true or false
