//object literals (key value pair)
let myObj = {
    name : "Aditi",
    age : 20,
    location : "Borgaon",
    email : "aditi@gmail.com",
    isLogin : true,
    lastLoginDay : ['Monday','Tuesday','wednesday','Thursday','Friday'],
    "Full Name" : "Aditi Pujari",
    };
//types of object 
//1.object literals
//2.constructor
//3.singleton
//when you create constructor it create singleton object it means it self object 
//when we create object literals it will not create singleton

console.log(myObj.email);
console.log(myObj.FullName);


//symbol example 
const mySym = Symbol("ABC");
const myObj2 = {
    [mySym] : "AUP"
};
console.log(myObj2);

myObj.email = "abc@gmail.com";
console.log(myObj.email);

//Object.freeze(myObj);
myObj.email = "xyz@gmail.com";
console.log(myObj.email);

myObj.Greeting = function(){
    console.log("Hello JS user");
}
//console.log(myObj.)
myObj.Greeting();
