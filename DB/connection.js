import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('blog_project','root','',{
    host: 'localhost',
    dialect : 'mysql'
});

export const connectDB = async()=>{
    try{
        return await sequelize.sync({alter: false});
    }
    catch(error){
        console.log("error to connect to database");
    }
}
