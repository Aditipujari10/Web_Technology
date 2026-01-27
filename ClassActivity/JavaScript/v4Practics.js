let arr = [85,97,44,37,76,60];
let sum =0;
for(let i =0;i<arr.length;i++){
    sum = sum + arr[i];
}
let avg = sum/arr.length;
console.log(`Average : ${avg}`);


let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
console.log(companies.shift());
console.log(companies);
console.log(companies.splice(2,1,"ola"));
console.log(companies.push("Amazon"));
console.log(companies);