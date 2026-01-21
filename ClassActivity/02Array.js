const superHeroes = ["bheem","doremon","nobita","shinchan"];
const car = ["Audi","BMW","Thar"];
superHeroes.push(car);
console.log(superHeroes);
console.log(superHeroes[3]);
console.log(superHeroes[4]);
console.log(superHeroes[4][1]);

//array concat
const arr1 = [1,2,3,4,5];

console.log(superHeroes.concat(arr1));//concatination

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
console.log(anotherArray);
const anotherArray1 = anotherArray.flat(Infinity);
console.log(anotherArray1);

const anotherArray2 = anotherArray1.flat(Infinity);
console.log(anotherArray2);
//flat - how should be nested array flatten specify default value is 1 .flattens all levels no matter how deep
//flat does not change original array it returns new array working with nested data

//data scripting using this method
console.log(Array.isArray("Aditi"));  // check given value is array or not
console.log(Array.isArray(arr1)); 

console.log(Array.from("Aditi"));//convertes to an object like string ,set,map into an array
console.log(Array.from({name:"Aditi"}));
console.log(Object.keys({name : "Aditi"}));
console.log(Object.values({name : "Aditi"}));
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));//create new array from given value no matter how many
//diff Array.of and Array.from
//converts values
//converts e
