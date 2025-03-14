import express from "express";
import { exportExpenseController } from "../controllers/expenseController.js";
import { exportauthMiddleware } from "../middleware/authMiddleware.js";

const {addExpense,getExpenses}=exportExpenseController;
const {authMiddleware}=exportauthMiddleware;
const router=express.Router();

router.post("/",authMiddleware,addExpense);
router.get("/",authMiddleware,getExpenses);

const exportExpenseRoutes={routes};
export {exportExpenseRoutes};