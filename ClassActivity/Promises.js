//promises ---->
//a promises is an object that represent future result of an asychrouns operation 
//promises means i promise to give result later
//example ----> zomato application
//promises has three state 
// 1.pending/waiting
// 2.resolve/success
// 3.rejected

// pending
//     |
// resolve -> reject
   
let myPromises = new Promise((resolve,reject) => {
    let success = true;
    if(!success){
        resolve("Data Fetch Successfully");
    }
    else{
        reject("Error in data fetch");
    }
});

myPromises.then((result) => {
    console.log(result);
}).catch((Error) => {
    console.log(Error);
});
//.then ---> run when success
//.catch ----> run when error

//activity
//why promises is better than callback

//ex---> 1.
const myPromises1 = new Promise((resolve,reject) => {
    setTimeout(() => {
        console.log("async Task Complete");
        resolve();
    },2000)
});
myPromises1.then(() => {
    console.log("Promise consume");
})

//2.
const promise3 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve({
            userName : "Aditi",
            Id : 3
        },3000)
    })
})

promise3.then((user) => {
    console.log(user);
})

//3.activity ----> create 4 promises examples 
//how to write promise in function using aync 