// given:
// let users = ["George", "Peter", "Ada", "Maria"];

// Task 1: list users sorted by first letter, ascending

// <--- YOUR CODE HERE --->
// ---> тук го подреждам, но без Regex.
let users1 = ["George", "Peter", "Ada", "Maria"];
users1.sort();
for (var i = 0;  i < users1.length; i++) {
    console.log(`${users1[i]}`);
}

// ----> тук го подреждам, но в масив
let users2 = ["George", "Peter", "Ada", "Maria"];
users2.sort();
console.log(users2);

//<--- END MY CODE --->

// DESIRED OUTPUT:
// ~~~Task1~~~
// Ada
// George
// Maria
// Peter

// <-------------------------------->

// Task 2: list users sorted by letters count (length), ascending

// <--- YOUR CODE HERE --->

let users3 = ["George", "Peter", "Ada", "Maria"]; 
        


// DESIRED OUTPUT:
// ~~~Task2~~~
// Ada
// Peter
// Maria
// George


// HINT: check https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort