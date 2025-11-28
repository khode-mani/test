import express from 'express'
import { Request , Response , NextFunction } from "express";

const app = express()



//middleware

const myMiddlewarw = (  (req : Request , res : Response , next : NextFunction) =>{
    console.log("time : " , Date.now());
    next()

} )


// اگه میخوام بین همه درخواست هامون میدل ویر اجرا شه
//اینشکلی مینویسیم
// app.use(myMiddlewarw)



//ولی اگه بخوایم فقط تو یه روت خاصی اجرا بشه داخل گت اش میزاریمش اینشکلی

app.get("/" , myMiddlewarw , (req : Request, res : Response) => {
  res.send("hello TS + express");
});

app.get("/users", (req : Request, res : Response) => {
  res.send("hello users TS + express");
});


app.listen(5000, () => {
  console.log("server running on 5000");
});




// و اینکه وقتی مثلا از سمت فرانت
// حالا next , react 
// وقتی از localhost مثل اینکه درخواست میزنی اررور میخوری
//ارور cors
// حالا باید اینو بزاری براش تا به مشکل نخوره
// میدل ویر هست و نکست و اینارو داره توش

//  npm i --save cors
//  npm i --save-dev @types/cors

import cors from 'cors'




const app = express()
app.use(cors())

// و اینجوری اررو های کورس رو رد میکنه 
// و هدر هاشونو مینویسه




//مثال یه میدل ویر اثینتیکیشن

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


// اینجا اگه ریکوئست پستی که میاد
//رولش ادمین نباشه 
//به طرف اررو میدیم
//که نتونه پست کنه چیزیو