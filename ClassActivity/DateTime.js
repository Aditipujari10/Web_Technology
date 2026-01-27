let myDate = new Date();
console.log(myDate);
console.log(typeof(myDate));
console.log(myDate.toISOString());
console.log(myDate.toDateString());
console.log(myDate.toTimeString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toString());
console.log(myDate.getDay());
console.log(myDate.getFullYear());
console.log(myDate.toUTCString());
console.log(myDate.getHours());
console.log(myDate.getUTCDate());
console.log(myDate.toLocaleString('default',{
    weekday:'long'
}));
let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(Date.now());
console.log(Date.now()/1000);
console.log();
//activity   to get proper time 