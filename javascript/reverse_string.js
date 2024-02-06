

function reverseString(str) {
  let reversedString = ""
  for (const char of str) {
    reversedString = char + reversedString;
  }
  return reversedString
}

console.log(reverseString("meow"))

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution
// written explanation:
// Because strings are iterable I used a forOf loop to iterate over each character in the string and updated a value that would be returned as the reversed string:
// for example when you input meow(because why wouldn't you?) reversedString first gets m + its initial value which is an empty string. reversedString then equals m before which the loops runs over the next character e and then the cycle continues until the whole string is built backwords!
