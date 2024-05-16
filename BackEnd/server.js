import express from 'express'
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import userRouter from './Route/userRouter.js';
import cors from 'cors'
dotenv.config()

const app = express()

app.use(cors({
  origin:"http://localhost:3000",
  methods:['GET','POST','PUT','DELETE'],
  credentials:true
}))
app.use(cookieParser());
app.use(express.json());

mongoose
  .connect(`${process.env.MONGO}`)
  .then(() => {
    console.log('Connected to Database');
  })
  .catch((err) => {
    console.log(err);
  });

const PORT = process.env.PORT || 5000

app.use("/users",userRouter)

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})