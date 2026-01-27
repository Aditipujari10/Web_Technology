//create one array,fun,obj and print it
//reverese number
//check number palindrom
//fibonacchi series
//find largest element in array 
//remove duplicate element in array
//find missing number in array
//reverse a string
//count vowels in string
//check palindrom in string
//check prime number
//factorial number
//function to find even or odd
//fun to find sum of array


//1.create one array,fun,obj and print it
console.log("Activity Number 1 : ");
let Arr = [1,2,3,4,5];
console.log("Array elements : ");
for(let i =0 ;i < Arr.length ;i++){
    console.log(i);
}

let Hello = function(){
    console.log("Hello World");
}
Hello();

let student = {
    fName : "Aditi",
    lName : "Pujari",
    Branch : "AIML"
};
console.log(student);


//2.reverese number
console.log("Activity Number 2 : ")
let num = 12673;
let rev = 0;
while(num>0){
    let digit = num % 10;
    rev = rev * 10 + digit;
    num = Math.floor(num / 10);
}
console.log(rev)

//3.check number is palindrom
console.log("Activity Number 3 : ");
let num1 = 121;
let original = num1;
let rev1 =0;
while(num1>0){
    let digit1 = num1 % 10;
    rev1 = rev1 * 10 + digit1;
    num1 = Math.floor(num1 / 10);
}
if(original == rev1){
    console.log(`${original} is palindrom number`);
}
else{
    console.log(`${original} is not palindrom number`);
}

//4.fibonacchi series
console.log("Activity Number 4 : ");
let a = 1;
let b = 1;
let n = 8;
console.log(a);
console.log(b);
for(let i=0;i<8;i++){
    c = a + b;
    console.log(c);
    a = b;
    b = c;
}

//5.find largest element in array
let arr = [1,56,98,54,90];
let largest = arr[0];
for(let i = 0;i<arr.length;i++){
    if(arr[i] > lages){

    }
} 
