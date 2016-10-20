var setAge = function (newAge) {
  this.age = newAge;
};
// now we make bob
var bob = new Object();
bob.age = 30;
bob.setAge = setAge;

// make susan here, and first give her an age of 25
var susan = new Object();
susan.age = 25;
susan.setAge = setAge;

// here, update Susan's age to 35 using the method
susan.setAge(35)
