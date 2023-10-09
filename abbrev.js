function abbrev(str) {
  const abbreviation = str.slice(0, 3);
  return abbreviation + " " + str.length;
}

const userInput = "I am your father";
const result = abbrev(userInput);
console.log(result);