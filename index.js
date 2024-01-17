const express = require('express')  // Import express
const app = express();

// Api with array 
const users =[
    {
        name:"Wasan",
        email:"wasanawwwad2020@gmail.com",
        password:"123",
        age:21

    },
    {
        name:"Ansam",
        email:"ansamawwwad1996@gmail.com",
        password:"1234",
        age:27

    }
]

// Get All Users
app.get('/GetAllUsers',(req,res)=>{
    return res.json({message:'success',users:users});
});

// Add User
app.post('/AddUser',express.json(),(req,res)=>{
    const {name,email,password,age}=req.body;  // Data is delivered from the front to the body
    users.push({name,email,password,age});
    return res.json({message:'user added'})
  });

app.listen(3000,()=>{
    console.log(`server is running ..... 3000`)
});