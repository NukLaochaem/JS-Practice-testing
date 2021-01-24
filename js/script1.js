
var price1= 10;
var price2= "3";

var result = 10 + ("3");


2 
var workingdays= "monday" + "-"+ "tuesday" +"-"+ "wednesday" +"-"+ "thursday" +"-"+ "friday" +"-"+ "saturday" +"-"+ "sunday"
console.log(workingdays);

5

var frogs= "the frogs are angry"
console.log(frogs.length);

7
var number1 = "53";
var number2 = "44.6";

var convertedNumber1= parseInt(number1);
var convertedNumber2= parseFloat(number2);

8
var pet = "donkey";
var age = 89;
var discountApplied = true;
var timeLeft

var typeOfPet = typeof pet;
console.log(typeOfPet);

var typeOfAge = typeof age;
console.log(typeOfAge);

var typeOfDiscountApplied = typeof discountApplied;
console.log(typeOfDiscountApplied);

var typeOfTimeLeft = typeof timeLeft;
console.log(typeOfTimeLeft);

9

var headingText ="Welcome js(9)";

var heading=document.querySelector("h1");
heading.innerHTML=headingText;

10
var body=document.querySelector("body");
body.style.backgroundColor= "smoke"



1
var firstNumber = 34;
var secondNumber = 89;

if (firstNumber < secondNumber) {
    console.log("the first number is smaller then the second")
}

2
var age = 11;
var minimumAge = "13";

if (age >= parseInt(minimumAge)) {
    console.log("Minimum age met");
} else {
    console.log("Minimum age not met");
}
3
var income = "11.050";
var maximumIncome = "13.075";

if (parseFloat(income) <= parseFloat(maximumIncome)) {
    console.log("meet the maxinum income");
} else {
    console.log("did not meet the req income");
}

4

var studentAge = 7;

var message;

if (studentAge >= 6 && studentAge <= 13) {
    message = "Barneskole";
} else if (studentAge >= 14 && studentAge <= 16) {
    message = "Ungdomsskole";
} else if (studentAge >= 17 && studentAge <= 19) {
    message = "Videregående skole";
} else {
    message = "wrongs age";
}

console.log(message);

5
var colour = "blue";

if (colour = "orange"){
    console.log("This colour is a bit rubbish");
}

6
var invoicePaid = true;

if (invoicePaid === false) {
    console.log("Not paid");
}

else if (invoicePaid === true){
    console.log("paid")
}


7 

var selectedNumber = 11;
var winningNumber = "15";

if (selectedNumber !== parseInt(winningNumber));
    console.log("You lose again")

8
var dayOfTheWeek = 2;

var dayName;

switch (dayOfTheWeek){
    case 1:
        dayName= "monday";
        break;
    case 2:
        dayName="tuesday";
        break;
    case 3:
        dayName="wednesday";
        break;
    case 4:
        dayName="thursday";
        break;
    case 5:
        dayName="friday";
        break;
    case 6:
        dayName="saturday";
        break;
    case 7:
        dayName="Sunday";
        break;
    default:
        dayName="wrong date";
}

console.log(dayName)


for(var i = 10; i <=20; i++) {
    if (i % 2 !== 0){
    console.log(i);
    }
}


var people = [
	{
		firstName: "Burt",
		lastName: "Smacharach",
		age: 35,
	},
	{
		firstName: "Elvis",
		lastName: "Deadly",
		age: 55,
	},
	{
		firstName: "Susan",
		lastName: "Sarongson",
		age: 42,
	},
	{
		firstName: "Big",
		lastName: "Gabe",
		age: 20,
	},
];

for (var i = 0; i < people.length; i++) {
    var age = people[i].age;
    var fullName = people[i].firstName + " " + people[i].lastName;
    
    if (age >= 20 && age <= 50){
        console.log(fullName);
    }
}