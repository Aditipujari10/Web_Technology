//variables

//1
var a =10;
let b =100;
console.log(a,b);
a = 20;
b = 200
console.log(a,b);

//scope 
var a =10;
let ab =20;
{
    var a =100;
    let ab = 200;
    console.log("a : ",a ,"ab : ",ab);
}
console.log("a : ",a ,"ab : ",ab);

//const
const x =1;
//x = 20; ----error
console.log(x)


// == , ===    (checking )
let m = 20;
let n = "20";
if(m == n){
    console.log("condition check");
}
if(m === n){
    console.log("condition and data type both check");
}


//1)difference between var, let and const
//  1. var ---> Old way to create variable
//             You can re-declare and re-assign
//             (not block scope)
//EX-->
var a =10;
a =20;


//  2. let ----> You cannot re-declare in same block
//              (has block scope)
//Ex -->
let z =10;
b =20;


//3. const --- > Used for fixed value (constant)
//              You cannot re-assign
//              You cannot re-declare
//Ex-->
const c =10;
//c =20; //error


//2)types of data -->

// datatypes : ---
// 	1.primitive                 2.non-primitives
// 	number			             --object
// 	undefined
// 	Boolean
// 	string
// 	null
// 	symbol
// 	begin

