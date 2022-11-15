let x = 15;
let y = 5;
let name = "John";
let result1 = x + y + name;
let result2 = name + x + y;
document.writeln(result1);
document.writeln(result2);

let a = 0;
document.writeln((a += 5));
document.writeln((a = a + 5));
document.writeln("hi");

// Module 2, Lesson 1

class menuItem {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  info() {
    return "This is " + this.name + ". " + "It costs " + this.price + ". ";
  }
}

class Pizza extends menuItem {
  constructor(name, price, ingredients) {
    super(name, price);
    this.ingredients = ingredients;
  }
  info() {
    let pizzaString = `This is ${this.name}. It costs ${this.price}. `;
    for (let i = 0; i < this.ingredients.length; i++) {
      pizzaString += this.ingredients[i];
      if (i == this.ingredients.length - 1) {
        pizzaString += ".";
      } else {
        pizzaString += ", ";
      }
    }
    return pizzaString;
  }
}

class PannCake extends menuItem {
  constructor(name, price, sweet) {
    super(name, price);
    this.sweet = sweet;
  }
  info() {
    return `This is ${this.name}. It costs ${this.price}. This  ${this.sweet}!`;
  }
}

class pasta extends menuItem {
  constructor(name, price, isVegtarian) {
    super(name, price);
    this.isVegtarian = isVegtarian;
  }
  info() {
    return `This is pasta ${this.name}. It costs ${this.price}. This is vegetarian? ${this.isVegtarian}`;
  }
}

var myPizza = new Pizza("Hawaiian", "255", ["Ham", "Pineapple", "Cheese"]);
console.log(myPizza.info());

var mypanncake = new PannCake("Chocolate", "120", true);
console.log(mypanncake.info());

var mypasta = new pasta("spagetti", "199", true);
console.log(mypasta.info());

//

const countdown = (value) => {
  console.log(value);
  const newValue = value - 1;

  if (newValue > 0) {
    countdown(newValue);
  }
};
countdown(10);

//

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
const tableCount = 15;
let tableSizes = Array.from(Array(tableCount).keys()).map(() =>
  getRandomInt(2, 10)
);

//declares how many people can seat at table of certain index

function randomName() {
  return Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, "")
    .substr(0, 5);
}
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

customers = [];
let sneakyAttackId = 0;
function freeTable() {
  let index = parseInt(
    prompt(
      "Provide an index to free its table. It should be greater or equal to 0, but less than " +
        tableCount +
        "."
    )
  );
  while (index < 0 || index >= tableCount) {
    index = parseInt(
      prompt(
        "Wrong index. Provide an index to free its table. It should be greater or equal to 0, but less than " +
          tableCount +
          "."
      )
    );
  }
  console.log(customers);
  for (let i = customers.length - 1; i >= 0; i--) {
    if (customers[i][1] == index) customers.splice(i, 1);
  }
  console.log(customers);
}
function sneakyAttack() {
  sneakyAttackId = setInterval(() => {
    customers.push([randomName(), getRandomInt(0, tableSizes.length)]);
    console.log("Shhhhhhhh");
    return;
  }, 30000);
  console.log();
}
function stopSneakyAttack() {
  if (sneakyAttackId != 0) {
    clearInterval(sneakyAttackId);
    console.log("Sneaky attack stopped.");
  }
}
function newCustomer() {
  const name = prompt("Hello, what is your name?");
  let size = 0;
  let askAboutTableSize = "";
  while (true) {
    if (size == 0) {
      askAboutTableSize = "Hello " + name + "! Table for how many people?";
    } else {
      askAboutTableSize =
        "Unfortunately we don't have a table for that many people. Please ask the smaller table size.";
    }
    size = parseInt(prompt(askAboutTableSize));
    if (size != 0 && Math.max(...tableSizes) >= size) {
      break;
    }
  }
  let tableNumber = 0;
  if (tableSizes.indexOf(size) >= 0) {
    tableNumber = tableSizes.indexOf(size);
  } else {
    tableNumber = tableSizes.indexOf(Math.max(...tableSizes));
  }
  alert(
    "You got a table of number: " +
      tableNumber +
      ", which by default can fit " +
      tableSizes[tableNumber] +
      " people."
  );
  customers.push([name, tableNumber]);
  console.log(customers);
}
function freeTable() {
  let index = parseInt(
    prompt(
      "Provide an index to free its table. It should be greater or equal to 0, but less than " +
        tableCount +
        "."
    )
  );
  while (index < 0 || index >= tableCount) {
    index = parseInt(
      prompt(
        "Wrong index. Provide an index to free its table. It should be greater or equal to 0, but less than " +
          tableCount +
          "."
      )
    );
  }
  console.log(customers);
  for (let i = customers.length - 1; i >= 0; i--) {
    if (customers[i][1] == index) customers.splice(i, 1);
  }
  console.log(customers);
}
