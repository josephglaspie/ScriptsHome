//This and global obj //////////////////////////////////////

function alert() {
    "use strict";
    console.log("Hello!!");
}
alert();


function sayHello() {
    window.alert("Hello");
}

window.sayHello();

//same as above, the window obj is implied
function sayHello() {
    "use strict";
    alert("Hello");
}

sayHello();


//Obj literals //////////////////////////////////////
//Less elegant:
var mark = {
    name: "Mark",
    tshirtColor: "navy blue"
};

var lisa = {
    name: "Lisa",
    tshirtColor: "red"
};

//More elegant:
function Friend(name, tshirtColor) {
    this.name = name;
    this.tshirtColor = tshirtColor;
    
}

var denny = new Friend("Denny", "green");
alert(denny.name);
alert(denny.tshirtColor);

//Methods //////////////////////////////////////

var myCoffee = {
    flavor: "espresso",
    temperature: "pipping hot",
    ounces: 100,
    milk: true,
    
    reheat: function(){
        "use strict";//creating the a method here
        if(myCoffee.temperature !== "pipping hot"){ //checks
            myCoffee.temperature = "pipping hot"; //sets temp
            alert("Your coffee has been reheated!");
        }
        else{alert("The coffe is already perfect, no need to reheat.")}
    }
};

myCoffee.temperature = "warm";

myCoffee.reheat(); //this last part is a method that 'reheats the coffee'

//objects //////////////////////////////////////
var coffeeFlavor = "espresso";
var coffeeTemperature = "pipping hot";
var coffeeOunces = 100;
var coffeeMilk = true;

var myCoffee = {
    flavor: "espresso",
    temperature: "pipping hot",
    ounces: 100,
    milk: true
};
alert(myCoffee.ounces);

//Java File
//Array //////////////////////////////////////
var friends = ["Mark", "Lisa", "Denny", "Peter", "Steven", "Claudette"];

function greetFriends() {
    for (var i = 0; i < friends.length; i++) {
        console.log("Oh hi " + friends[i]);
    }
}
greetFriends();
/////////////
var friends = ["Mark", "Lisa", "Denny"];
friends[3] = "Bob";
friends.push("Joseph");
friends;
//Functions //////////////////////////////////////
//random number
function randomNumber() {
    console.log(Math.random());
}
randomNumber();
//square
function calculateAreaSquare(side) {
    "use strict";
    console.log(side * side);
}
calculateAreaSquare(5);
calculateAreaSquare(878969876);
//rectangle
function calculateAreaRectangle(length, width) {
    console.log(length * width);
}
calculateAreaRectangle(2, 8);
//Say hello function
var name = "Mark";
console.log("Oh hi " + name);
var name2 = "Lisa";
console.log("Oh hi " + name2);
alert("Hi!!");
//Just use a function to simplify!
function sayHello(name) {
    console.log("Oh hi " + name)
}
sayHello("mark");
sayHello("Jennifer");
sayHello("Joseph");
sayHello() //undefined
    //WhileLoops //////////////////////////////////////
var i = 0;
do {
    console.log(i);
    i++;
} while (i <= 11);
//Fizzbuzz
for (i = 1; i < 101; i++) {
    if (i % 3 === 0) {
        console.log("Fizz " + i);
    };
    if (i % 5 === 0) {
        console.log("buzz " + i);
    };
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz " + i);
    };
};
//if div by 3 fizz
//if div by 5 print buzz
//if div by 3 and 5 print fizzbuzz
//Switch //////////////////////////////////////
var sign = prompt("What is your astological sign?");
alert("Sensing your future!")
switch (sign) {
case "Taurus":
    alert("You chose Taurus");
    break;
case "Virgo":
    alert("You chose Virgo");
    break;
case "Leo":
    alert("You really want leo??")
    break;
default:
    alert("Please chose valid sign")
    break;
}
//ForLoops //////////////////////////////////////
for (i = 0; i < 11; i++) {
    console.log(i);
}