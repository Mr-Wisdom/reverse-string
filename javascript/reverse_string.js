

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
// w
// And a written explanation of your solution
