// function declaration:
function foo(x,y) {
    console.log(`x:${x}, y: ${y}`);
    console.log(`this: ${this}`);
}

// function properties:
console.log(`foo.name: ${foo.name}`);// name of the function
console.log(`foo.length: ${foo.length}`); // arguments count

// normal function call (note the 'this' value):
console.log(`Normal foo()call:`);
foo(2,3);


// function methods (note the 'this' value):
console.log(`Calling foo() with apply():`);
foo.apply({id:1},[2,3]); // arguments are passed as array

console.log(`Calling foo() with call():`);
foo.call({id:1},2,3);   // arguments are passed as comma separated list

console.log(`Binding foo:`);
let new_foo = foo.bind({id:1},20,30);   // arguments are passed as comma separated list,and they will be prepended to the new_foo() arguments, if given
new_foo(8,9);