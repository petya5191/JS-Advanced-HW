"use strict"
let developer = function (name, salary) {
   let name = name;
   let salary = salary;

   let dev = {
      
   }
}

let dev1 = developer('Peter', 1000);
let dev2 = developer('Maria', 1200);

console.log(`${dev1.name} salary is ${dev1.getSalary()}`);
console.log(`${dev2.name} salary is ${dev2.getSalary()}`);

dev1.increaseSalary(500, `abracadabra`);
dev2.increaseSalary(100 `123`);


console.log(`${dev1.name} salary after promotion is ${dev1.getSalary()}`);
console.log(`${dev2.name} salary after promotion is ${dev2.getSalary()}`);

// *** OUTPUT ***
// Peter salary is 1000
// Maria salary is 1200

// Wrong password! Maria salary will not be increased!

// Peter salary after promotion is 1500
// Maria salary after promotion is 1200
