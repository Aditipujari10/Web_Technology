//1.practice
let num = prompt("Enter a number : ");
if(num%5==0){
    console.log("Number is multiple of 5")
}
else{
    console.log("Number is not multiple of 5");
}

//2.practice
let marks = prompt("Enter your marks : ");
if(marks >= 80 && marks <= 100){
    console.log("Grade : A")
}
else if(marks >= 70 && marks <= 89){
    console.log("Grade : B");
}
else if(marks >= 60 && marks <= 69){
    console.log("Grade : C");
}
else if(marks >= 50 && marks <= 59){
    console.log("Grade : D");
}
else {
    console.log("Grade : F");
}