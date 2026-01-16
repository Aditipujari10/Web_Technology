//constant variable

const a = 10;
//a =20;
console.log(a);


//let and var 
let x = 10;
var y = 20;
{
    let x = 100;
    var y = 200;
    console.log(x,y);
}
console.log(x,y);

//activity
//display student information 
//check number is even or odd
//check student pass or fail
//print number 1-20
//


//Acitivity number 1 : display student information 
let student_name = "abc";
let student_id = 1;
let email = "abc@gmail.com";
let CGPA = 9.00;
console.log("Student Information --> ");
document.writeln("Student Information --><br> ");
console.log("Student Name : " + student_name );
document.writeln("<br>Student Name : " + student_name )
console.log("Student ID : " + student_id);
document.writeln("<br>Student ID : " + student_id)
console.log("Student Email : " + email);
document.writeln("<br>Student Email : " + email)
console.log("Student CGPA : " + CGPA);
document.writeln("<br>Student CGPA : " + CGPA)
console.log();

//Activity Number 2 : check number is even or odd
let num = 2;
if(num%2==0){
    console.log(num + " is a even number");
    document.writeln("<br>" + num + " is a even number")
}
else{
    console.log(num + " is a odd number");
    document.writeln("<br>" +num + " is a odd number")
}


//Activity Number 3 : check student pass or fail
let marks = 90;
if(marks > 40){
    console.log("Student is pass");
    document.writeln("<br> Student is pass");
}
else{
    console.log("Student is fail");
    document.writeln("<br> Student is fail");
}
console.log();

//Activity Number 4 : print number 1-20
console.log("Number from 1-20 --> ");
document.writeln("<br> Number from 1-20 --> ");
for(i=1;i<=20;i++){
    console.log(i);
    document.writeln(i);
}
console.log();

//Activity Number 5
let m =10;
n = m;
m =200;
console.log("N  : " + n);
document.writeln("<br> N : " + n);
console.log("M : " + m);
document.writeln("<br> M : " + m);


