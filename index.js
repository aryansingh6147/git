const express=require("express");
const app=express();
app.get("/",function(req,res)
{
    res.send("hello vinayak");
});
app.listen(8080);