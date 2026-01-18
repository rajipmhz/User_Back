const sequelize=require('../config/database')

const {DataTypes}=require("sequelize");


const User=sequelize.define(
    'User',{
        id:{
            type:DataTypes.UUID,
            defaultValue:DataTypes.UUIDV4,
            primaryKey:true,
        },
        firstname:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        lastname:{
            type:DataTypes.STRING,
            allowNull:false
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true,
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false,
        } ,
        phonenumber:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true,
            validate:{
                is:/^[1-9]\d{9}$/
            }
        },
        address:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        type:{
            type:DataTypes.ENUM('customer','vendor'),
            defaultValue:'customer',
            allowNull:false,
        }    
    },{
        tableName:'users',
        timestamps:true,
    }
)   

module.exports=User;