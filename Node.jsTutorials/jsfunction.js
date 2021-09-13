function greet() {
    console.log("Hello Good Evening");
}
greet();

function greet_again(name){
    console.log("Hello" + " " + name + "My name is javascript function");
}
greet_again("folks!!");

function prompt(input){
    console.log("Hello" + " " + "I am another function");
}
//variable name can be different
let input = prompt("Enter something: ");
//calling the function
prompt(input);

function add(number, anothernumber){
    console.log(number + anothernumber, "adding two numbers");
}

//calling the fucntion 
add(10,20);
add(20,30);
add(40,50);

console.log("____________________________________________________");

function sum(number_one, number_two){
    return number_one + number_two;
}
let number_one = parseInt(prompt("Enter number one: "));
let number_two = parseInt(prompt("Enter another number: "));

// call the function
let result = sum(number_one, number_two);
//display the output
console.log("The sum is : " + result);