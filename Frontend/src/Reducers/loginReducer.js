export const signInReducer=(state={},action)=>{
    switch(action.type){
        case "USER_LOGIN_REQ":return{
   loading:true
        }
        case "USER_LOGIN_SUCCESS":return{
            loading:false,userData:action.payload
        }
        case "USER_LOGIN_FAIL":return{
            loading:false,
            error:action.payload
        }
        case "USER_LOGOUT": return {}
        default:return state;
    }
}
export const personalInfoReducer=(state={},action)=>{
    switch(action.type){
        case "USER_PERSON_REQ":return{
   loading:true
        }
        case "USER_PERSON_SUCCESS":return{
            loading:false,userSuccess:action.payload
        }
        case "USER_PERSON_FAIL":return{
            loading:false,
            error:action.payload
        }
      
        default:return state;
    }
}