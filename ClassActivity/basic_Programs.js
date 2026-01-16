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
