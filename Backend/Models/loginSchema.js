import mongoose from "mongoose"
const userSchema=new mongoose.Schema({
    
    loginEmail:{
        type:String,required:true,unique:true
    },
    loginPassword:{
        type:String,required:true
    },
   
},{
    timestamps:true
})
const userModel= mongoose.model("Users",userSchema)
export default userModel;