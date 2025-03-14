import express from "express";
import dotenv from "dotenv";
import { exportDB } from "./config/db";
dotenv.config();
const app=express();

app.listen(5000,()=>console.log("Server is listening on port 5000")
);    