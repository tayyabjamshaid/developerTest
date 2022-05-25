import logo from './logo.svg';
import React, {Fragment} from 'react';
import { Routes,BrowserRouter as Router,Route,Link } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import {useSelector,useDispatch} from "react-redux"
import HomeScreen from "./Screens/HomeScreen"
import LoginScreen from "./Screens/LoginScreen"
import {logout} from "./Actions/userAction"
import Header from './Screens/Header';
function App() {
 
  return (
    
         
    
    <Router> 
    
      <Header/>
      <Fragment>
    
      <Routes>
      <Route exact path='/' element={<HomeScreen/>}/>
          <Route exact path='/login' element={<LoginScreen/>}/>
            
           </Routes>  </Fragment>
           </Router>
    
   
       
  
  );
}

export default App;
