const express = require('express')
const app = express()
const port = 3000



//handling request and response 
//express application handles https request and response
//request -->  request object contain information about the client request 
//ex -- URL , Headers, Query parameters , Request body
//response --> 

app.get('/',(req,res) => {
    console.log(req.query.name);
    
})

// /user?name = aditi   ------> query parameter(imp for placement)

//acitivity
//detail study about query parameter
// with 3,4 ex with real ex
//where we use in company query parameter


//Experiment 5 : res,req activity
app.get('/',(req,res) => {
    const T = new Date();
    res.json({
        mess : "Hello",
        Time : T
    })
})