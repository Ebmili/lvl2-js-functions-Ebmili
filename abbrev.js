function abbrev(input) {
  const abbreviation = input.slice(0, 3);
  return abbreviation + " " + input.length;
}

const userInput = "I am your father";
const result = abbrev(userInput);
console.log(result);