import blogModel from "../../../DB/model/blog.model.js";
import userModel from "../../../DB/model/user.model.js";

export const getUsers = async(req,res)=>{
    try{
      const users = await userModel.findAll(); 
      return res.json({message:"succes",users}); 
    }
    catch(error)
    {
        return res.json({message:"error",error}); 
    }
    
}

export const deleteUser = async(req,res)=>{
  try{
    const {id}=req.params;
    const user = await userModel.destroy(
      {
        where:{
          id
        }

      }
    ); 

    if (!user){
      return res.json({message:"User not found"}); 
    }
    return res.json({message:"succes",user}); 
  }
  catch(error)
  {
      return res.json({message:"error",error}); 
  }
  
  
}

export const updateUserName = async(req,res)=>{
  try{
    const {id}=req.params;
    const {name}=req.body;

    const user = await userModel.update(
      {
        name
      },
      {
        where:{ id }
      }
    ); 

    if (!user[0]){
      return res.json({message:"User not found"}); 
    }
    return res.json({message:"succes",user}); 
  }
  catch(error)
  {
      return res.json({message:"error",error}); 
  }
  
  
}

export const updateUserPassword = async(req,res)=>{
  try{
    const {id}=req.params;
    const {password}=req.body;

    const user = await userModel.update(
      {
        password
      },
      {
        where:{ id }
      }
    ); 

    if (!user[0]){
      return res.json({message:"User not found"}); 
    }
    return res.json({message:"succes",user}); 
  }
  catch(error)
  {
      return res.json({message:"error",error}); 
  }
  
  
}
export const getUsersWithBlogs = async(req,res)=>{
  try{
    const users = await userModel.findAll(
      {
        include:blogModel
      }
    ); 
    return res.json({message:"succes",users}); 
  }
  catch(error)
  {
      return res.json({message:"error",error}); 
  }
  
  
}

