var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

function list() {
    var contactsLength = contacts.length;
    for (var i = 0; i < contactsLength; i++) {
        printPerson(contacts[i]);
    }
}
function search(lastName){
    var contactsLength = contacts.length;
    for(i=0;i<contactsLength;i++){
        if(this.lastName=contacts[i].lastName){
            printPerson(contacts[i]);
        }
    }
}
function add(firstName,lastName,phoneNumber,email){
contacts[contacts.length] = {
    firstName: firstName,
    lastName: lastName,
    phoneNumber: phoneNumber,
    email: email
  };
}
add("John","Gaidimas",2222222222,"john@gaidimas.com");

search("Jones");
