const express = require('express');
const cors = require('cors');
const app = express();
const User = require('./models/User');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

//hash
const salt = bcrypt.genSaltSync(10);
const secret = 'sjhhasjdwqhgewhvevebjejjh';

app.use(cors({credentials:true, origin:'http:localhost:5173'}));
app.use(express.json());
app.use(cookieParser());

mongoose.connect('mongodb+srv://sankalpa:sankalpa@cluster0.uderbyk.mongodb.net/?retryWrites=true&w=majority');


app.post('/register', async (req, res) => {
   const{email,username,password} =req.body;
   const userDoc = await User.create({
    email,
    username,
    password:bcrypt.hashSync(password,salt)

   });
   res.json(userDoc);
});


app.post('/login', async(req,res)=>{
    const {username,password} = req.body;

    const userDoc = await User.findOne({username});
    const passOK = bcrypt.compareSync(password, userDoc.password);

    if(passOK){
        jwt.sign({
            username,
            id:userDoc._id 
        },
        secret,{}, (err, token) => {
            if(err) throw err;
            res.cookie('token, token').json('ok')
        }
        )
    }else{
        res.status(400).json('wrong Credentials')
    }

})

app.listen(4000);