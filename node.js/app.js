import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app=express()
app.use(cors())


app.use(express.static('img'))
// http://localhost:3000/mycart

app.listen(8080,()=>{console.log("server run");})

mongoose.connect('mongodb://0.0.0.0:27017/game_store')
.then(()=>{
    console.log("connect")
})
.catch((err)=>{
    console.log(err.message)
})

import cr from './routes/CategoryRout.js'
app.use('/category',cr)//כשאני רוצה להפעיל פונקציה מcr 

import gr from './routes/GameRout.js';
app.use('/game',gr)

import ct from './routes/CustRout.js';
app.use('/cust',ct)

import rout from './routes/ShopRout.js';
app.use('/shop',rout)






