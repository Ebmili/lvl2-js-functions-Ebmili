function printVowels(inputString) {
  const vowels = 'aeiouAEIOU';
  let result = '';

  for (let i = 0; i < inputString.length; i++) {
      if (vowels.includes(inputString[i])) {
          result += inputString[i];
      }
  }
  console.log(result);
}

printVowels('Hello World'); 