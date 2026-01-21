//symbol is used for unique id
const anotherid = Symbol("123");
console.log(anotherid);
console.log(typeof(anotherid));

const id = 123;
console.log(id === anotherid);

//q.javascript is static or dyanamic

//array
const arr = ["ABC","XYZ","MNP"];
const arr2 = [1,2,3,4,5];
console.log(arr);
console.log(arr2);

//object
const obj = {
    fName : "JS",
    age : 24

}
console.log(obj);
console.log(obj.fName);
//activity
//functions declaration,defination,

//function
const hello = function(){
    console.log("Hello")
}
hello();


// 1) Function Declaration (Creating Function Name)

// 📌 Meaning:
// When we write function keyword with function name → it is called function declaration.
function greet() {
}


// 2) Function Definition (Writing Code inside function)

// 📌 Meaning:
// The code written inside { } is the function definition (logic/work of function).
function greet() {
  console.log("Hello Aditi!");
}

// 3) Function Calling (Using the function)

// 📌 Meaning:
// To run the function code, we call it using ().
greet();
