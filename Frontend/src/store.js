import {createStore,compose,applyMiddleware,combineReducers} from "redux"
import thunk from "redux-thunk"
import {signInReducer,personalInfoReducer} from "./Reducers/loginReducer"


 const initialState={
     user:{
         userData:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")) :null
     },
    
 }
 const reducer=combineReducers({
    
user:signInReducer,personalInfo:personalInfoReducer
 })
 const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(reducer,initialState,composeEnhancer(applyMiddleware(thunk)))
 export default store;