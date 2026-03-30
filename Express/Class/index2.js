const express = require('express')
const app = express()
const port = 3000

// function checkRoute(req , res , next){
//     console.log(req.url);
//     next();
// }
//app.use(checkRoute);

app.use((req , res , next) => {
    console.log('Data recieved',new Date());
    next();
    
});
// app.get('/', (req, res) => {
//   res.send("Home page!")
// })
// app.get('/profile', (req, res) => {
//    res.send('Welcome To The Profile Page!')
// })

app.listen(port, () => {
   console.log(`Example app listening on port ${port}`)
})

//activity 
//why we use middleware
//what is types of middleware
//what is benifits of middleware
//where we use middleware in company lavels

