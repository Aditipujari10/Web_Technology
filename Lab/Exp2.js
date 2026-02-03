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
console.log("Activity Number 5 : ");
let arr = [1,56,98,54,90];
let largest = arr[0];
for(let i = 0;i<arr.length;i++){
    if(arr[i] > largest){
        largest = arr[i]
    }
} 
console.log(`largest number is : ${largest}`);


//6.remove duplicate element in array
console.log("Activity Number 6 : ");
let arr1 = [1,2,4,5,7,5,3,2,1];
let newArr = [];
for(let i =0 ;i<arr1.length;i++){
    let isDuplicate = false;
    for(let j=0;j<newArr.length;j++){
        if(newArr[j] == arr1[i]){
            isDuplicate = true;
            break;
        }
    }
    if(!isDuplicate){
        newArr[newArr.length] = arr1[i];
    }

}
console.log("Array values : ")
for(ele of newArr){
    console.log(ele);
}

//7.find missing number in array
console.log("Activity Number 7 : ");
let arr3 = [1,2,4,5,6];
let largestVal = arr3.length + 1;

let totalSum = 0;
let sum =0;
for(let i=1;i<largestVal;i++){
    totalSum += i; 
}
for(let i=0;i<arr3.length;i++){
    sum += arr3[i];
}

console.log(`Missing value is : ${sum - totalSum}`);

//8.reverse a string
console.log("Activity Number 8 : ");
let str = "ABCD";
let revStr = "";

for(let i=str.length-1;i >= 0 ;i--){
    revStr += str.charAt(i);
}

console.log(`Reversed string is : ${revStr}`);

//9.count vowels in string
console.log("Activity Number 9 : ");
let strName = "Aditi";
let count=0;
for(let i=0;i<strName.length;i++){
    if(strName.charAt(i)=="a"||strName.charAt(i)=="e"||strName.charAt(i)=="i"||strName.charAt(i)=="o"||strName.charAt(i)=="u"||strName.charAt(i)=="A"||strName.charAt(i)=="E"||strName.charAt(i)=="I"||strName.charAt(i)=="O"||strName.charAt(i)=="U"){
        count++;
    }
}
console.log(`Vowels count present in ${strName} : ${count} `);

//10.check palindrom in string
console.log("Activity Number 10 : ");
let str1 = "ABA";
let revStr1 = "";

for(let i=str1.length-1;i >= 0 ;i--){
    revStr1 += str1.charAt(i);
}
if(str1 == revStr1){
    console.log(`${str1} is palindrom`);
}
else{
    console.log(`${str1} is not palindrom`);
}

//11.check prime number
console.log("Activity Number 11 : ");
let nu = 5;
let isPrime = true;

if(nu<=1){
    isPrime = false
}
else{
    for(let i=2;i<= nu/2 ;i++ ){
        if(nu%i==0){
            isPrime=false;
            break;
        }
    }
}
if(isPrime){
    console.log(`${nu} is a prime number`);
}
else{
    console.log(`${nu} is not a prime number`);
}
//12.factorial number
console.log("Activity Number 12 : ");
let number = 7;
let fact = 1;
while(number>0){
    fact = fact * number;
    number--;
}
console.log(`Fcatorial of ${number} is : ${fact}`);


//13.function to find even or odd
console.log("Activity Number 13 : ");
let evenOdd = function(n){
    if(n%2==0){
        console.log(`${n} is Even Number`);
    }
    else{
        console.log(`${n} is Odd Number`);
    }
}
let numb =7;
evenOdd(numb);


//14.fun to find sum of array
console.log("Activity Number 14 : ");
let arr5 = [6,8,9,6,5];
let sumOfArray=0;
for(let i=0;i<arr5.length;i++){
    sumOfArray += arr5[i];
}
console.log(`Sum of array : ${sumOfArray}`);