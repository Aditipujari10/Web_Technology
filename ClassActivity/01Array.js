//Array
let myArr = [0,1,2,3,4,5];
console.log(`My array values : ${myArr}`);
console.log(typeof(myArr));

const myArr2 = new Array(0,1,2,3);
console.log(myArr2[1]);  

//Array Methods
myArr.push(6);//add values in array
console.log(`My array values : ${myArr}`);

myArr.pop();//remove last value from array
console.log(`My array values : ${myArr}`);

myArr.unshift(9);//it shifts all elements and added at first position
console.log(`My array values : ${myArr}`);

myArr.shift();//
console.log(`My array values : ${myArr}`);

console.log(myArr.includes(5));//check the element
console.log(myArr.indexOf(5));//return the index of element

//slice and splite