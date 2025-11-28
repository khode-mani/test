import express from 'express'
import { Request , Response , NextFunction } from "express";
import cors from 'cors'


const app = express()

app.use(cors())

//parse body json
app.use(express.json())


const AuthMiddleware = (req: Request , res: Response , next :NextFunction)=>{

    if (req.body.role && req.body.role === "admin" ) {
        
        next()

    }else{

        res.status(401).send("Unathorized")

    }
    
}





app.post("/users", AuthMiddleware , (req : Request, res : Response) => {
    console.log(req.body);
  res.send("user added");
});



app.get("/" , (req : Request, res : Response) => {
  res.send("hello TS + express");
});



app.listen(5000, () => {
  console.log("server running on 5000");
});
