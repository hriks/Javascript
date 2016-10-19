var my_number = 7; //this has global scope

var timesTwo = function(number) {
    var my_number = number * 2;
    console.log("Inside the function my_number is: ");
    console.log(my_number);
}; 

timesTwo(7);

console.log("Outside the function my_number is: ")
console.log(my_number);
