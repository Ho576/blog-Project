import userModel from "../../../DB/model/user.model.js";

export const getAuth = (req,res)=>{
    return res.json({message:"Auth"});
}
export const register = async(req,res)=>{
try{
    const {email,password,name} = req.body;
    const user = await userModel.create({email,password,name});
    return res.json({message:"success",user});
}
catch(error){
    if(error.original?.errno == 1062)
    {
        return res.json({message:"email already in use"});
    }
    return res.json({message:"error",error:error.stack});
}
    
}

export const login = async(req,res)=>{
    try{
        const {email,password} = req.body;
        const checkUser = await userModel.findOne({
            attributes:["id","name"],
            where: {
                email,
                password}
        });
        if(!checkUser)
        {
            return res.json({message:"email or password is wrong"});
        }
        return res.json({message:"success",user:checkUser});
    }
    catch(error){
        return res.json({message:"error",error:error.stack});
    }
        
    }