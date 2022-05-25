import express from "express"
import userController from "../Controllers/userController.js"
const router=express.Router()
import {isAuth} from "../Middlewares/utils.js"



router.get("/insertUserData",userController.allUserData)
router.post("/loginData",userController.loginUser)
router.post("/userInfo",isAuth,userController.saveUserInfo)
export default router;