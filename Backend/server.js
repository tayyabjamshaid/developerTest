import express from "express"
const app=express();
import mongoose from "mongoose"
import cors from "cors"
import parseRoutes from "./Routes/allRoutes.js"
app.use(express.json())
app.use(express.urlencoded({extended:true}))
const port =process.env.PORT||3001;
app.use("/",parseRoutes)

mongoose.connect("mongodb://localhost:27017/assign",{useUnifiedTopology:true,useNewUrlParser:true}).then(()=>{console.log("Connected")}).catch(err=>console.log(err))
app.use(cors())

app.listen(3001,()=>console.log("Server Running"))