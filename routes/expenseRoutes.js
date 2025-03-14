import express from "express";
import { exportExpenseController } from "../controllers/expenseController";

const {addExpense,getExpenses}=exportExpenseController;
const router=express.Router();

router.post("/",addExpense);
router.get("/",getExpenses);

const exportExpenseRoutes={routes};
export {exportExpenseRoutes};