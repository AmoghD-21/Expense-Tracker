import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config();

const connectDB=async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI,{
            // useNewUrlParser:true,
            // useUnifiedTopology:true,
        });
        console.log("Mongodb connected successfully");
        
    }catch(error){
        console.log("Mongo connection failed",error);
        process.exit(1);
    }
};

const exportDB={connectDB};
export {exportDB};