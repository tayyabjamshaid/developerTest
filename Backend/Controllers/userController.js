import express from "express"
import User from "../Models/loginSchema.js"
import userInfo from "../Models/userSchema.js"
import data from "../data.js"
import expressAsyncHandler from "express-async-handler"
import { generateToken } from '../Middlewares/utils.js';
import bcrypt from "bcryptjs"
const allUserData=async(req,res)=>{
    const userdata=await User.insertMany(data.users)
res.send({userdata})
}
const loginUser=expressAsyncHandler(async (req, res) => {
  console.log(req.body.loginEmail,req.body.loginPassword)
    const user = await User.findOne({ loginEmail: req.body.loginEmail });
    
      if (user) {
        if (bcrypt.compareSync(req.body.loginPassword, user.loginPassword)) {
          console.log("iN")
          res.send({
            _id: user._id,
            
            loginEmail: user.loginEmail,
           
            token: generateToken(user),
          });
          return;
        }
      }
      res.status(401).send({ message: 'Invalid email or password' });
    })
    const saveUserInfo=expressAsyncHandler(async (req, res) => {
       const name=req.body.name;
       const email=req.body.email;
       const phoneNumber=req.body.phoneNumber;
       const images=req.body.images;
       if(!email || !name || !phoneNumber ||!images){
        res.status(400).send({ message: 'Some Data is empty' });
       }else{
        const userData=new userInfo({
            name:name,
            email:email,
            phoneNumber:phoneNumber,
            images:images
        })
        const createdUser=await userData.save();
        res.send(createdUser)
       }
         
        })
  
export default {allUserData,loginUser,saveUserInfo};