import express from "express";
import dotenv from "dotenv";
import { exportDB } from "./config/db.js";
import { exportUserRoutes } from "./routes/userRoutes.js";
import { exportExpenseRoutes } from "./routes/expenseRoutes.js";

dotenv.config();
const app=express();
app.use(express.json());

app.use("/api/users",exportUserRoutes.router);
app.use("/api/expenses",exportExpenseRoutes.router);

exportDB.connectDB();

app.listen(5000,()=>console.log("Server is listening on port 5000")
);    