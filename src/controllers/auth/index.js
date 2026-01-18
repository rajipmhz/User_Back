const { createUser, getAllUsers, getUserById, updateUser, deleteUser } = require("../../services/user");
const httpError = require("../../utils/httpError");


const signupController=async(req,res,next)=>{
    const {firstname,lastname,email,password,phonenumber,address,type}=req.body;
    if(!email||!phonenumber){
        return next(httpError("email,phoneno. are required",400))
    }
    const user=await createUser({firstname,lastname,email,password,phonenumber,address,type})
    res.status(200).json({
        success:true,
        message:'User signed up',
        data:user
    })
}

const getUsersController=async(req,res)=>{
    const users=await getAllUsers();
    const filteredUsers=users.map(user=>({
        id:user.id,
        firstname:user.firstname,
        lastname:user.lastname,
        email:user.email,
        address:user.address,
        phonenumber:user.phonenumber,
        type:user.type
    }))
    res.status(200).json({succes:true,data:filteredUsers});
}

const getUserByIdController=async(req,res)=>{
    const user=await getUserById(req.params.id);
    res.status(200).json({success:true,data:user});
}

const updateUserController=async(req,res,next)=>{
    try{
        const userId=req.params.id;
        const data=req.body;

        const user=await updateUser(userId,data);
        
        if(!user){
            return next(httpError("User not found",404));
        }
        res.status(200).json({
            succes:true,
            message:"User update successfully",
        })
    }catch(error){
        next(error);
    }
}

const deleteUserController=async (req,res,next)=>{
    try{
        const userId=req.params.id;

        const user=await deleteUser(userId);

        if(!user){
            return next(httpError("User not found",404));
        }
        res.status(200).json({sucess:true,message:"User deleted successfully",})
    } catch(error){
        next(error);
    }
}
module.exports={
    signupController,
    getUsersController,
    getUserByIdController,
    updateUserController,
    deleteUserController
}