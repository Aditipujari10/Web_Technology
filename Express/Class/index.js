// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.get('/home', (req, res) => {
//   res.send('Welcome To The Home Page!')
// })

// app.get('/about', (req, res) => {
//   res.send('Welcome To The About Page!')
// })

// app.get('/contact', (req, res) => {
//   res.send('Welcome To The Contact Page!')
// })

// app.get('/profile', (req, res) => {
//   res.send('Welcome To The Profile Page!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })










// const express = require('express')
// const app = express()
// const port = 3000

// const mechanicalStudents = ["Rohit", "Amit", "Suresh"]
// const cseStudents = ["Aditi", "Neha", "Pooja"]
// const aimlStudents = ["Rahul", "Sneha", "Kiran"]
// const aidsStudents = ["Priya", "Ankit", "Raj"]


// function showStudents(title, students) {
//   let list = ""

//   for (let i = 0; i < students.length; i++) {
//     list += `<li>${students[i]}</li>`
//   }

//   return `
//     <h1>${title}</h1>
//     <ul>${list}</ul>
//     <hr>
//     <a href="/">Go Home</a>
//   `
// }

// app.get('/', (req, res) => {
//   res.send(`
//     <h1>Student Departments</h1>
//     <a href="/mechanical">Mechanical</a><br>
//     <a href="/cse">CSE</a><br>
//     <a href="/aiml">AIML</a><br>
//     <a href="/aids">AIDS</a>
//   `)
// })


// app.get('/mechanical', (req, res) => {
//   res.send(showStudents("Mechanical Students", mechanicalStudents))
// })

// app.get('/cse', (req, res) => {
//   res.send(showStudents("CSE Students", cseStudents))
// })

// app.get('/aiml', (req, res) => {
//   res.send(showStudents("AIML Students", aimlStudents))
// })

// app.get('/aids', (req, res) => {
//   res.send(showStudents("AIDS Students", aidsStudents))
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })












const express = require('express') //import stataement
const app = express() //express store in app
const port = 3000 //.env file can contain port in company lavel

const students = [
  { id: 1, name: "Aditi", branch: "CSE" },
  { id: 2, name: "Neha", branch: "IT" },
  { id: 3, name: "Shravani", branch: "IT" },
  { id: 4, name: "Sneha", branch: "AIML" }
]

function navbar() {
  return `
    <a href="/">Home</a> |
    <a href="/about">About</a> |
    <a href="/students">Students</a>
    <hr>
  `
}

app.get('/', (req, res) => {
  res.send(`
    <style>
      body {
        font-family: Arial;
        text-align: center;
        background-color: #f4f4f4;
      }
      .container {
        margin-top: 50px;
      }
      a {
        margin: 10px;
        text-decoration: none;
        color: blue;
        font-weight: bold;
      }
      .card {
        background: white;
        padding: 20px;
        margin: 20px auto;
        width: 60%;
        border-radius: 10px;
        box-shadow: 0px 0px 10px gray;
      }
    </style>

    ${navbar()}

    <div class="container">
      <h1>Student Information Website</h1>
      <p>Welcome! Here you can manage and see the student information.</p>
      <div class="card">
       
        <p>Click below to explore students:</p>
        <a href="/students">View Students</a>
      </div>

  
    </div>
  `)
})


app.get('/about', (req, res) => {
  res.send(`
    <style>
      body {
        font-family: Arial;
        text-align: center;
        background-color: #f4f4f4;
      }
      .container {
        margin-top: 50px;
      }
      .card {
        background: white;
        padding: 20px;
        margin: 20px auto;
        width: 60%;
        border-radius: 10px;
        box-shadow: 0px 0px 10px gray;
      }
      a {
        margin: 10px;
        text-decoration: none;
        color: blue;
        font-weight: bold;
      }
    </style>

    ${navbar()}

    <div class="container">
      <h1>About This Website</h1>

      <div class="card">
        <p>
          This Student Information Website is designed to help users easily view 
          and explore student details in a simple and organized way.
        </p>
      </div>

    </div>
  `)
})


app.get('/students', (req, res) => {

  let rows = ""

  students.forEach(s => {
    rows += `
      <tr>
        <td>${s.id}</td>
        <td>${s.name}</td>
        <td>${s.branch}</td>
        <td><a href="/profile/${s.id}">View</a></td>
      </tr>
    `
  })

  res.send(`
    <style>
      body {
        font-family: Arial;
        background-color: #f4f4f4;
        text-align: center;
      }
      .container {
        margin-top: 40px;
      }
      table {
        margin: auto;
        border-collapse: collapse;
        width: 70%;
        background: white;
        box-shadow: 0px 0px 10px gray;
      }
      th, td {
        padding: 12px;
        border: 1px solid #ddd;
      }
      th {
        background-color: #0C090A;
        color: white;
      }
      tr:hover {
        background-color: #f1f1f1;
      }
      a {
        text-decoration: none;
        color: blue;
        font-weight: bold;
      }
      .title {
        margin-bottom: 20px;
      }
    </style>

    ${navbar()}

    <div class="container">
      <h1 class="title">📋 Student List</h1>

      <table>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Branch</th>
          <th>Profile</th>
        </tr>

        ${rows}

      </table>

      
    </div>
  `)
})


app.get('/profile/:id', (req, res) => {
  const id = req.params.id
  const student = students.find(s => s.id == id)

  if (student) {
    res.send(`
      <style>
        body {
          font-family: Arial;
          background-color: #f4f4f4;
          text-align: center;
        }
        .container {
          margin-top: 50px;
        }
        .card {
          background: white;
          padding: 25px;
          margin: auto;
          width: 50%;
          border-radius: 10px;
          box-shadow: 0px 0px 10px gray;
        }
        .title {
          margin-bottom: 20px;
        }
        a {
          text-decoration: none;
          color: blue;
          font-weight: bold;
        }
        .btn {
          display: inline-block;
          margin-top: 15px;
          padding: 8px 15px;
          background-color: #000000;
          color: white;
          border-radius: 5px;
        }
      </style>

      ${navbar()}

      <div class="container">
        <div class="card">
          <h1 class="title">Student Profile</h1>

          <p><b>ID:</b> ${student.id}</p>
          <p><b>Name:</b> ${student.name}</p>
          <p><b>Branch:</b> ${student.branch}</p>

         

          <a class="btn" href="/students">Back to Students</a>
        </div>
      </div>
    `)
  } else {
    res.send(`
      <style>
        body {
          font-family: Arial;
          text-align: center;
          background-color: #f4f4f4;
        }
        .box {
          margin-top: 100px;
        }
        a {
          text-decoration: none;
          color: blue;
          font-weight: bold;
        }
      </style>

      ${navbar()}

      <div class="box">
        <h1>Student Not Found</h1>
        <p>Please check the ID and try again.</p>
        <a href="/students">Go Back</a>
      </div>
    `)
  }
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})