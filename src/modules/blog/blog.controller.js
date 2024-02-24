import blogModel from "../../../DB/model/blog.model.js";
import userModel from "../../../DB/model/user.model.js";

export const getBlogs = async(req,res)=>{
    try{
        const Blogs = await blogModel.findAll(
            {
                include:{
                   model: userModel,
                   attributes:['id','name']
                },
                attributes:{
                    exclude:['UserId','updatedAt']
                }

            }
        );
        return res.json({message:"success",Blogs});
    }
    catch(error)
    {
        return res.json({message:"error",error});
    }
}

export const AddBlog = async(req,res)=>{
    try{
        const {title,body,UserId} = req.body;
        const blog = await blogModel.create({title,body,UserId});
        return res.json({message:"success",blog});
    }
    catch(error){
        if (error.parent?.errno==1452)
        {
            return res.json({message:"User not found"});
        }
        if (error.parent?.errno==1062)
        {
            return res.json({message:"title already exists"});
        }
        return res.json({message:"error",error});
    }
}
