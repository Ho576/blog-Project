import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('freedb_blog_project','freedb_Hossam','M!sYm#8T5VpnPx7',{
    host: 'sql.freedb.tech',
    port:3306,
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
