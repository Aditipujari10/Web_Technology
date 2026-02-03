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



//memory
//two types of memory stack and heap
//stack used for primitive datatypes  ///copy of value
//heap used for non-primitive datatypes ///copy reference
let myNewYoutubeChannel = "AUP";
let newYoutubeChannel = myNewYoutubeChannel;
newYoutubeChannel = "hgtrftrc";
console.log(myNewYoutubeChannel);
console.log(newYoutubeChannel);

//primitive datatypes are used for stack memory when we assign one variable to another copy is made so changing one is not effect another.

let user1 = {
    fName : "Aditi",
    age : 20,
    ID : 3
};

let user2 = user1;
user2.ID = 45;
console.log(user1);
console.log(user2);
//non primitive datatypes object are stored in heap mememory when we assign one object to another variable reference is copy not the value if we change one both will see the changes.
