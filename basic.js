import { Cat } from "./cat.js";
import { Student } from "./student.js";

let myname = 'Christian';
myname = 'Jens';
const pi = 3.1415;
// var pen = 'Red';
// var pen = 'Blue';
// console.log(pen);

function add(a, b) {
    return a+b;
}


let cat2 = new Cat('Charlie', 10, 'Brown');
console.log(cat2.miau());

// console.log("Distance travelled " + calculateDistance(80, 5));
// console.log("Rectangle is " + areaRectangle(2,5));

// console.log(printName('Samuel', 'Baran'));

// console.log('Result is: ' + add(2,5));

function person(firstname, lastname) {
    console.log(firstname + " " + lastname);
    return firstname + " " + lastname;
}
const fullname = person('Victor', 'Christensen');
console.log(fullname);





let cat = { 
    name: 'Charlie', 
    breed: 'Maine Coon', 
    color: 'Brown', 
    weight: 6.5,
    isFed: function() {
        return false;
    }
};
cat.isSick = false;

console.log(cat.name)
console.log("Is fed: " + cat.isFed())

const randomStuff = ['Peter', 7, 'Marianne', true, 'Helle', 8];

for (let item of randomStuff) {
    console.log(item + " is a " + typeof item);
}



// function subtract(a, b) {
//     return a-b;
// }
// console.log(a);

for(let i=0; i < 5; i++) {
    for(let j=0; j < 5; j++) {

    }
}

const names = ['Christian', 'Lukas', 'Martin', 'Samuel', 'Reka'];
names.forEach((name) => {
    console.log(name);
});

const index = names.indexOf('Martin');
console.log("index: " + index);

const p1 = {firstname: 'Christian', lastname: 'Kirschberg'};
const people = [
    {firstname:'Peter', lastname: 'Jensen'}, 
    {firstname: 'Helle', lastname: 'Petersen'},
    {firstname: 'Marianne', lastname: 'Hansen'},
    {firstname: 'Jens', lastname: 'Christensen'},
    {firstname: 'Christian', lastname: 'Kirschberg'},
]

function whoHasMyName(personToFind, people) {
    return people.filter((p) => p.firstname === personToFind.firstname);
}
console.log("found person" + whoHasMyName(p1, people)[0].lastname);




let obj = { };
obj.brand = 'Lyreco';
console.log(obj.brand);

let calculator = {
    name: 'Christian Kirschberg',
    calculateDistance: function (speed, time) {
        return speed*time;
    },
    printName: function (firstname, lastname) {
        return firstname + " "+ lastname;
   },
   areaRectangle: function (a, b) {
       return a*b;
   }
}
const area = calculator.areaRectangle(3,5);
console.log(area);