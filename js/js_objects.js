//defining an object
//Key Value pairs
//Object Functions
//Accessing values in an object
//Assigning new object properties and values
//Prototypes

let person = {
    name: 'Frank',
    age: 22,
    height: 6,
    gender: 'Male',
    getInformation: function () {
        return this.name + ' is ' + this.age + ' years old and is ' + this.height + ' feet tall.';
    }
};

document.getElementById('person').innerText = person.getInformation();

person.nationality = 'Kenyan';
person.religeon = 'Islamic';
person.marital_status = 'Married';

person.moreInformation = function () {
    return this.name + ' is a '+this.nationality + ' and is is associated with '+this.religeon + ' religion and is '+ this.marital_status;
};

console.log(person.moreInformation());


//prototypes
function someone(name,age, height) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.getInformation = function () {
        return this.name + ' is ' + this.age + ' years old and is ' + this.height + ' feet tall.';
    }
}

let someperson = new someone('Frank', 28, 6);
let someperson2 = new someone('Ian', 25, 7);
let someperson3 = new someone('Raphael', 24, 5.5);
let someperson4 = new someone('William', 35, 5.9);

document.getElementById('someone').innerText =someperson.getInformation();
document.getElementById('someone2').innerText =someperson2.getInformation();
document.getElementById('someone3').innerText =someperson3.getInformation();
document.getElementById('someone4').innerText =someperson4.getInformation();
