//fetch is a build in javascript method use to make HTTP request 
//fetch method return promises
//ex --->
//fetch('url'); ----> syntax
//imp concept

fetch("https://jsonplaceholder.typicode.com/users/3").then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) => {
    console.log(error)
})

//activity
//1.understand above ex
//2.async await example with fetch method
//3.fetch user display names in html list
//4.fetch post show only first 5 records
//5.create a fake promise manually resolve after 3 sec and reject after 3 sec.


//q-->
//what  is promises in js
//what are states in promises
//what is fetch method in js
//what does fetch return
//why do we use response.json
//diff between then and catch
//diff async and await
//what is promise chain
