// Class(ES6) 
// Class is a template for creating objects

class Person {
    constructor(fname, lname, birthday) {
        this.firstname = fname;
        this.lastname = lname;
        this.dob = birthday;
    }

    calculateAge() {
        let birthday = new Date(this.dob);
        let diff = Date.now() - birthday.getTime();
        let ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    fullname() {
        console.log(this.firstname, this.lastname);
    }

}

let person1 = new Person("Fazle", "Rahat", "11-13-1988"); 
let person2 = new Person("Moinul", "Islam", "02-11-1991");
let person3 = new Person("Rony", "Chy", "01-17-1996");

console.log(person1.calculateAge());
console.log(person2.calculateAge());
console.log(person3.calculateAge());


console.log(person1.fullname());
console.log(person2.fullname());
console.log(person3.fullname()); 


// Sub Class
// Inheritance

class Person { //Base Class
    constructor(fname, lname) {
        this.firstname = fname;
        this.lastname = lname;
    }

    greeting() {
        return `Hello ${this.firstname} ${this.lastname}!`;
    }
}

class Customer extends Person { //Sub Class
    constructor(fname, lname, phone, memberShip) {
        super(fname, lname);

        this.phone = phone;
        this.memberShip = memberShip;
    }

    fullname() {
        console.log(this.firstname, this.lastname);
    }
}

// Static Function

class Person {
    constructor(fname, lname) {
        this.firstname = fname;
        this.lastname = lname;
    }

    greeting() {
        console.log(`Hello ${this.firstname} ${this.lastname}!`);
    }

    static test() {
        console.log("I am staic!");
    }
}
person1 = new Person("Simanta", "Paul");

console.log(person1.greeting());
console.log(Person.test()); 

person1 = new Person("Fazle", "Rahat");
console.log(person1);
console.log(person1.greeting());
console.log(person1.fullname());

let customer1 = new Customer("Rony", "Chy", "017777778888", "1234");
console.log(customer1);
console.log(customer1.greeting());
console.log(customer1.fullname()); 