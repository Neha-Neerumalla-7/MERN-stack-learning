const express = require('express');
const app=express();
const PORT=3000;

app.get('/',(req,res)=>{
res.send('<h1>Welcome EveryOne</h1><p>This is my first Express Page</p>');
});

app.get('/about',(req,res)=>{
res.send('This server was created for learning purpose');
});

app.get('/api/status',(rerq,res)=>{
res.json({
    active:true,
    version:'1.0.0',
    message:"The server is working fine and it is responding to the requests"
});
});

app.listen(PORT,()=>{
    console.log('Server is  successfully running on port 3000 at http://localhost:3000');
    console.log('Press Ctrl+C to stop the Server');
});
