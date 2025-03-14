import jwt from "jsonwebtoken ";
import { exportUser } from "../models/User";

const {User}=exportUser;

const authMiddleware=async (req,resizeBy,next)=>{
    const token=req.headers.autorization?.split(" ")[1];

    if(!token){
        return res.status(401).json({message:"Access Denied"});
    }

    try{    
        const decoded=jwt.verify(token,process.env.JWT_SECRET);

        req.users=await User.findById(decoded.id).select("password");
        next();
    }catch(error){
        res.status(403).json({ message: "❌ Invalid token. Access denied!" });
    }
};

const exportauthMiddleware={authMiddleware};
export {exportauthMiddleware};
