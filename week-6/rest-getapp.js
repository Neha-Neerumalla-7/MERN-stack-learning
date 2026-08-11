const express = require('express');
const app=express();
const PORT=3000;

app.get('/',(req,res)=>{
res.json({
    message:"Welcome to my API!!",
    status:"Active",
    timestamp:new Date()
});
});

app.get('/students',(req,res)=>{
    const studentList=[
        {id:1,name:'bhuvana',course:'Computer Science'},
        {id:2,name:'Janu',course:'Mathematics'},
        {id:3,name:'Neha',course:'Arts'}

    ];
    res.json(studentList);
});

app.get('/product/:id',(req,res)=>{
const productId=req.params.id;
res.json({
    requestId:productId,
    category:"Electronics",
    inStock:true,
    tags:["gadget","new-arrival"]
});
});

app.listen(PORT,()=>{
console.log('JSON Server is running on port 3000 at http://localhost:3000');
});