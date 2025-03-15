import { exportExpense } from "../models/Expense.js";
const {Expense}=exportExpense;

const addExpense=async (req,res)=>{
    try{
        const {category,amount}=req.body;
        const newExpense=new Expense({user:req.user.id,category,amount});
        await newExpense.save();
        res.status(201).json(newExpense);
    }catch(error){
        res.status(500).json({message:"Error in adding expense"});
    }
};

const getExpenses=async (req,res)=>{
    try{
        const expenses=await Expense.find({user:req.user.id});
        res.json(expenses);
    }catch(error){
        res.status(500).json({message:"Error in Fetching Expense"});
    }
};

const exportExpenseController={addExpense,getExpenses};
export {exportExpenseController};