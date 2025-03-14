import express from "express";
import { exportUserController } from "../controllers/userController";

const {registerUser,loginUser}=exportUserController;

const router=express.Router();

router.post("/",registerUser);
router.post("/",loginUser);

const exportUserRouter={router};
export  {exportUserRoutes};