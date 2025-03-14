import {Router } from "express";

const authRouter= Router();

authRouter.post('/sign-in',(req,res)=>{ res.send({title:"Welcome you are signed in"})});

authRouter.post('/sign-up',(req,res)=>{ res.send({title:"Create your  account"})});

authRouter.post('/sign-out',(req,res)=>{ res.send({title:"You are logged out"})});

export default authRouter;