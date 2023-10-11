function pyramid(n) {
  if (n <= 0) {
    console.log("Please provide a positive, non-zero number.");
    return;
  }

  if (n % 2 === 0) {
    console.log("Please provide an odd number.");
    return;
  }

  var output="";
  for (var i = 1; i <= n; i++) {
      output += "# ";
      console.log(output);
  }
}  

pyramid(-5);