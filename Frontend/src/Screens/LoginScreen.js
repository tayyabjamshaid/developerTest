import React, { useState,useEffect } from 'react';

import {useDispatch,useSelector} from "react-redux"
import { useNavigate } from 'react-router-dom';
import {login} from "../Actions/userAction"
import Loading from '../Components/Loading';
import MessageBox from '../Components/showErrorMessage';
export default function LoginScreen(props) {
    const navigate = useNavigate();
    const dispatch=useDispatch()
  const [loginEmail, setloginEmail] = useState('');
  const [loginPassword, setloginPassword] = useState('');
  const userInfo=useSelector((state)=>state.user)
  const {userData,error,loading}=userInfo
  
  const submitHandler = (e) => {
    e.preventDefault();
    // TODO: sign in action
    dispatch(login(loginEmail,loginPassword))
    
  
  };


  useEffect(()=>{
      if(userData){

        
          navigate("/")
      }
  },[navigate,userData])
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Sign In</h1>
        </div>
        <div>
        {loading && <Loading></Loading>}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            required
            onChange={(e) => setloginEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            required
            onChange={(e) => setloginPassword(e.target.value)}
          ></input>
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