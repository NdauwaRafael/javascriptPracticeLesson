//defining an object
//Key Value pairs
//Object Functions
//Accessing values in an object
//Assigning new object properties and values

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
