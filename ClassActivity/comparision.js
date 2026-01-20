console.log(2>1);
console.log(3<2);
console.log(1>=6);
console.log(7<=9);
console.log(2==6);
console.log(2!=0);


console.log("2" > 1);
console.log("02" > 1);


console.log(null > 0);
console.log(null == 0);
console.log(null <= 0);

console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined <= 0);

// null in comparisons → becomes 0
// undefined in comparisons → becomes NaN

// In comparisons (> < <= >=), null becomes 0, so null > 0 is false but null <= 0 is true.
// In == equality, null is only equal to undefined, not to 0, so null == 0 is false.
// In comparisons, undefined becomes NaN, and any comparison with NaN is always false, so all (undefined > 0, undefined == 0, undefined <= 0) are false

console.log("2" === 2);
console.log("2" == 2);

//activity
//check null and undefined

//diff null and undefined
let a ;
console.log(a);
// undefined = Here variable a is created but no value is assigned, so it becomes undefined.


let b = null;
console.log(b)
// null = we manually set empty value