import express from "express";
import { exportController } from "../controllers/userController.js";

const {registerUser,loginUser}=exportController;

const router=express.Router();

router.post("/register",registerUser);
router.post("/login",loginUser);

const exportUserRoutes={router};
export  {exportUserRoutes};