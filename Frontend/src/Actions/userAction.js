import Axios from "axios"
export const login=(loginEmail,loginPassword)=>async(dispatch)=>{
    dispatch({ type: "USER_LOGIN_REQ", payload: { loginEmail, loginPassword } });
    try{
        
    const {data}=await Axios.post("/loginData",{loginEmail,loginPassword})

   
   
        dispatch({type:"USER_LOGIN_SUCCESS",payload:data})
    localStorage.setItem("userInfo",JSON.stringify(data))
    
    
    }catch(error){
      
        dispatch({type:"USER_LOGIN_FAIL",payload:error.response && error.response.data.message ? error.response.data.message :error.response})
    }
    }
    export const userPersonal=(name,email,number,lengthImage,file)=>async(dispatch)=>{
        dispatch({ type: "USER_PERSON_REQ", payload: { name,email,number,lengthImage,file } });
        try{
            
        const {data}=await Axios.post("https://hook.us1.make.com/vbv61km18q7d3k7fps1psrg3qyr3643p",{name,email,number,lengthImage,file})
      console.log(data)
     
       
            dispatch({type:"USER_PERSON_SUCCESS",payload:data})
        localStorage.setItem("userInfo",JSON.stringify(data))
        
        
        }catch(error){
            
            dispatch({type:"USER_PERSON_FAIL",payload:error.response && error.response.data.message ? error.response.data.message :error.response})
        }
        }
    export const logout=()=>(dispatch)=>{
        
        localStorage.removeItem("userInfo")
        
        dispatch({type:"USER_LOGOUT"})
        document.location.href = '/login';
    }