import express from "express";
import { exportUserController } from "../controllers/userController.js";

const {registerUser,loginUser}=exportUserController;

const router=express.Router();

router.post("/",registerUser);
router.post("/",loginUser);

const exportUserRoutes={router};
export  {exportUserRoutes};