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


//1.string to Number
let n = "10";
let s = Number(n);
console.log(typeof(n));
console.log(typeof(s));


//2.Number to String
let n1 = 200;
let s1 = String(n1);
console.log(typeof(n1));
console.log(typeof(s1));

//3.boolean
let n2 = 0;
let b1 = Boolean(n2);
console.log(b1);
console.log(typeof(b1));

//4.boolean to number
let bool = true;
let numb = Number(bool);
console.log(numb);
console.log(typeof(bool));

//5.string to boolean
let st = "Aditi";
let bo = Boolean(st);
console.log(bo);
console.log(typeof(bo));

//6.boolean to string
let boole = false;
let stri = String(boole);
console.log(stri);
console.log(typeof(stri));