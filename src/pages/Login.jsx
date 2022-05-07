import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../redux/apiCalls'
import { Link } from 'react-router-dom'
const Login = () => {

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const dispatch = useDispatch()
const navigate= useNavigate();
const {isFetching,error}= useSelector((state)=>state.user)


const handleClick=(e)=>{
  e.preventDefault();
  login(dispatch, {email,password})
console.log(email,password)

 
}

// const admin=useSelector(state=>state.user.currentUser)
// if(admin){
//   navigate('/') &&
//   window.location.reload();
// }

  return (
    <div className="cover">
    <div className='register'>
<h1>LOG IN</h1>
<form >
<input type="email" placeholder='Your Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
<input type="password" placeholder='Your password'   value={password} onChange={(e)=>setPassword(e.target.value)}  />
<div className="agreement">
By creating an account, I consent to the processing of my personal
          data in accordance with the <b>PRIVACY POLICY</b>
</div>
<button 
onClick={handleClick} 
disabled={isFetching} >Log In</button>




</form>
</div>
</div>

  )
}

export default Login