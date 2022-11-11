const express=require('express');

const app=express();

const path=require('path');


const {todoRoute}=require(path.join(__dirname,'routers','Todo.routes'));


const {dbConnection}=require(path.join(__dirname,'connection','db.connection'));

const PORT=process.env.PORT||3000;


app.use(express.json());

app.use('/tasks',todoRoute);


app.listen(PORT,()=>{
    console.log(`listening at port ${PORT}`);
})