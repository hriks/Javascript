//Person Constructor
function Person(name,age) {
    this.name = name;
    this.age = age;
}
//Array of People
var family = new Array();
family[0] = new Person("alice",40);
family[1] = new Person("bob",42);
family[2] = new Person("michelle",8);
family[3] = new Person("timmy",6);
//Loop Through New Array
for(i=0;i<4;i++) {
    console.log(family[i].name)
}
