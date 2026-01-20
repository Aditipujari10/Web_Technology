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