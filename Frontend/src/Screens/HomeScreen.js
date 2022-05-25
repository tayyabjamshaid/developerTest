import React, { useState,useEffect } from 'react';
import M from "materialize-css"
import {useDispatch,useSelector} from "react-redux"
import {userPersonal} from "../Actions/userAction"
import { useNavigate } from 'react-router-dom';
import MessageBox from '../Components/showErrorMessage';



export default function HomeScreen(props) {
    const navigate = useNavigate();
    const dispatch=useDispatch();
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[phoneNumber,setphoneNumber]=useState("")
    const[images,setImages]=useState([])
    const[numError,setNumError]=useState("")
    const[nameError,setnameError]=useState("")
    const[file,setFiles]=useState([])
    const [val, setVal] = useState(0);
    const userInfo=useSelector((state)=>state.user)
   const {userData}=userInfo
   
   const userPrivate=useSelector((state)=>state.personalInfo)
   const {userSuccess}=userPrivate

   //img data
 let fileObj = [];
  let  fileArray = [];
  const  uploadMultipleFiles=(e)=> {
     fileObj.push(e.target.files)
      for (let i = 0; i < fileObj[0].length; i++) {
        fileArray.push(URL.createObjectURL(fileObj[0][i]))
      }
      setFiles(fileArray)
    }

 const uploadFiles=(e)=> {
      e.preventDefault()
      console.log(file)
  }

  //useEffect
  useEffect(()=>{
   if(!userData){
    navigate('/login');
   
   }
  },[props.history])

  //validations
  const submitHandler=(e)=>{
    e.preventDefault();
  if(name.length<3){
    setnameError("Name length Must be 3")
    return
  }
  if (!/(^\d{11,11}$)|(^\d{5}-\d{4}$)/.test(phoneNumber)) {
    setNumError("Number length Must be 11")
    return
  }
  
  setNumError("")
  setnameError("")
 
  let lengthImage=file.length;
  
  dispatch(userPersonal({name:name,email:email,phoneNumber:phoneNumber,maxNumberOfPics:lengthImage,pictureUrls:file}))
 
  alert(userSuccess.success)
  }
  
  return (
    <div>
  <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>User Info</h1>
        </div>
        <div>
      
        {numError && <MessageBox variant="danger">{numError}</MessageBox>}
        {nameError && <MessageBox variant="danger">{nameError}</MessageBox>}
       
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter name"
            required
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            required 
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="number"
            id="phoneNumber" 
            placeholder="Enter phoneNumber"
            required
            onChange={(e) => {
            
              setphoneNumber(e.target.value)}}
          ></input>
        </div>
       
       
        {(fileArray || []).map(url => (
                        <img src={url} alt="..." />
                    ))}
                    <div>
          <label htmlFor="imagee">Images</label>
          <input type="file" className="form-control" onChange={uploadMultipleFiles} multiple />
        </div>
        <div>
          <label />
          <button className="primary" type="submit">
            Sign In
          </button>
        </div>
      
      </form>
    </div>
  );
}