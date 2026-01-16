//conversion 
//1
let num = 33;
let string = String(num);
console.log(string);
console.log(typeof(string));
console.log(typeof(num));


//2
let num1 = "10";
let num2 = Number(num1);
console.log(num2);
console.log(typeof(num2)); 

//activity
//conversion


//Arithmatic operations 
console.log(2+2);
console.log(2-2);
console.log(2/2);
console.log(2*2);
console.log(2%2);

//string concatination
let str1 = "Hello";
let name = " Aditi";
console.log(str1 + name);

//note ---->
//javascript only automatically convert a string to a numbers in arithmatical operations
console.log("1" + 2);
console.log("1" + 2 +2);
console.log(1 + "2");
console.log(1+2+"2");

//activity 2
//deep study
console.log(true);
console.log(+true);
console.log(+ "");

//increament
let gameCounter = 100;
gameCounter++;
console.log(gameCounter);

let scoreCounter = 200;
++scoreCounter;
console.log(scoreCounter);

