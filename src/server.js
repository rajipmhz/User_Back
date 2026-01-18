const express= require('express');
const sequelize = require('./config/database');
const app=express();
const cors=require('cors');
const authRoute=require('./routes/auth/index')
app.use(express.json());
app.use(cors());
app.get('/',(req,res)=>{
    res.send('hello world');
})

sequelize.authenticate()
.then(()=>console.log('DB connected'))
.catch((err)=>console.log("db error",err));
app.use('/auth',authRoute);
app.listen(3000,()=>{
    console.log('server is running on port 3000');
})