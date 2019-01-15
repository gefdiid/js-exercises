// You are given an array of names.
//   Using.find(), we'd like to find the first name which starts with A and is longer than 7 letters.

// write your code here

function findLongnameThatStartsWithA(names) {
  return names.slice[0] === "A" && names.length >= 7;
  }
}
var names = ["Rakesh", "Alexandra", "Annam", "Mikey", "Karim", "Ahmed"];
var longNameThatStartsWithA = names.find(longNameThatStartsWithA);

console.log(longNameThatStartsWithA);

/* EXPECTED OUTPUT */
// "Alexandra"
