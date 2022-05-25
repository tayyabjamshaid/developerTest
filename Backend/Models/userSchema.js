import mongoose from "mongoose"
const userSchema=new mongoose.Schema({
    
    name:{
        type:String,required:true,
    },
    email:{
        type:String,required:true
    },
    phoneNumber:{
        type:String
    },
    images:[
       {
        url:{type:String}  
        }
    ]
   
},{
    timestamps:true
})
const userInfoModel= mongoose.model("UsersInfo",userSchema)
export default userInfoModel;