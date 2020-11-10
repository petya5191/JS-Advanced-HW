// Create a Person Constructor with following fields:
// name: string
// age: numbers
// greet: function, which prints out 'Hi, I'm ${this.name} and I'm ${this.age} years old'
// Create a Developer Constructor with following fields:
// name: string
// age: numbers
// skillset: array of a developer skillsets
// Create a Manager Constructor with following fields:
// name: string
// age: numbers
// managees: array of managee developers
// The Developer and Manager objects should inherit from Person the greet method

// Person constructor
let Person = function(name, age){
    this.name = name;
    this.age = age;
  }
  // Person methods
  Person.prototype.greet = function () {
      console.log(`Hi i'm ${this.name} I'm ${this.age} years old`);
  }
  // Manager constructor
  let Manager = function(name, age, managees){
    Person.call(this, name, age)
    this.managees = managees;
  }
  // Manager objects should inherit all methods from Person:
  // your code here ...
  
  Manager.prototype = Object.create(Person.prototype)
  let Developer = function(name, age, skillset){
    Manager.call(this, name, age);
    this.skillset = skillset
  }
  // Developer objects should inherit all methods from Person:
  // your code here ...
  
  Developer.prototype = Object.create(Person.prototype)
  let maria = new Developer('Maria Popova', 23, ['Python', 'Machine Learning']);
  let pesho = new Developer('Petar Petrov', 19, ['JavaScript', 'Angular', 'React', 'Vue']);
  
  // Manager instance
  let gates = new Manager('Bill Gates', 43, [maria, pesho]);
  
  // use the objects:
  maria.greet();
  pesho.greet();
  gates.greet();