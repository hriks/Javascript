var quarter = function(number)
{
    return number/4;
}

if (quarter(prompt("Please enter any number i.e, divisible 4 succesively by 3")) % 3 === 0 ) {
  console.log("The statement is true");
} else {
  console.log("The statement is false");
}
