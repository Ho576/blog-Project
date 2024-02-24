import { DataTypes } from "sequelize";
import { sequelize } from "../connection.js";

const blogModel = sequelize.define('blog',{
    title :{
        type:DataTypes.STRING(100),
        allowNull:false,
        unique:true,
    },
    body :{
        type:DataTypes.TEXT,
        allowNull:false,
    },
}
,{
    timestamps:true,
}
);

export default blogModel;
