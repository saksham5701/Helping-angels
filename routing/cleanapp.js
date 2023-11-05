const express=require('express');
const app=express();
const adminRoute=require('./routes/admin.js');
const managerRoute=require('./routes/manager.js');
app.use('/',(req,res,next)=>{
    console.log("Start");
    next();
})
app.use('/admin',adminRoute);
app.use('/manager',managerRoute);

app.listen(3000);