import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../Actions/userAction'

function Header() {
 
  const dispatch = useDispatch()
  const userInfo=useSelector((state)=>state.user)
  const {userData}=userInfo
 
  const logoutt=()=>{
    dispatch(logout());
  
  }

  return (
    <div >
      <nav className="navbar navbar-dark bg-dark justify-content-between">
      <a className="navbar-brand" href="#">Authenticate</a>
 {userData?(<div><Link to="#signout" onClick={()=>logoutt()}><h3>Logout</h3></Link></div>):(<div><Link to="/login" ><h3>Login</h3></Link></div>)}
</nav>
    </div>
  )
}

export default Header