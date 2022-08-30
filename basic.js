import { Cat } from "./cat.js";

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
console.log(calculator.areaRectangle(3,5));