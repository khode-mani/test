import { Request, Response, Router } from "express";


const router = Router();





// CRUD

router.get("/" , (req : Request, res : Response) => {
    console.log(req.body);
  res.send("user geted");
});


router.get("/:id" , (req : Request, res : Response) => {
    console.log(req.body);
  res.send("user geted {id}" );
});


router.post("/" , (req : Request, res : Response) => {
    console.log(req.body);
  res.send("user posted /");
});


router.put("/:id" , (req : Request, res : Response) => {
    console.log(req.body);
  res.send("user puted {id}");
});


router.delete("/:id" , (req : Request, res : Response) => {
    console.log(req.body);
  res.send("user deleted {id} : " + req.params.id);
});




export default router