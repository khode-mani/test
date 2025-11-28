import express from 'express'
import { Request , Response , NextFunction } from "express";
import cors from 'cors'
import usersController from './users/usersControllers';





const app = express()

app.use(cors())

//parse body json
app.use(express.json())






app.get('/m' ,(req:Request , res:Response)=>{
  res.send('khodaya shokret')
})





app.use("/users", usersController);












app.get("/" , (req : Request, res : Response) => {
  res.send("hello TS + express");
});



app.listen(5000, () => {
  console.log("server running on 5000");
});
