function subDigits(input) {
  let result = parseInt(input);
  let calculationString = input;

  for (let i = 0; i < input.length; i++) {
      const num = parseInt(input[i]);
      result -= num;
      if (num < 0) {
          calculationString += ` - (${Math.abs(num)})`;
      } else {
          calculationString += ` - ${num}`;
      }
  }

  calculationString += ` = ${result}`;
  return calculationString;
}

const userInput = "4000000";
const result = subDigits(userInput);
console.log(result);
