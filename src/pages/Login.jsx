import React, { useContext, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthContext from '../context/AuthContext';


const Login = () => {

  let authStore = useContext(AuthContext)

  let emailRef = useRef();
  let passwordRef = useRef();

  let navigate = useNavigate()

  let arr = JSON.parse(localStorage.getItem('signup')) || [] 

  const handleSubmit = (e)=>{
    e.preventDefault();
    let obj={
      email:emailRef.current.value,
      password:passwordRef.current.value
    }
    console.log(obj)

    let userExists = arr.find((ele)=>ele.email===obj.email)
 
    if(userExists){
      if(userExists.password ===obj.password){
        alert('login successfull')
        localStorage.setItem('login',JSON.stringify({email:userExists.ewmail,login:true}))
        authStore.setuser({email:userExists.email,login:true})

          navigate('/')
      }
    }
    else{
      alert('please sign up')
    }
  }
  return (
    <div className='authPage'>
    <form className='col-md-6 m-auto p-3'>
  <h3 className='text-center'>Login form</h3>

  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input ref={emailRef} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
   
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input ref={passwordRef} type="password" className="form-control" id="exampleInputPassword1" />
  </div>

  <div className='text-center'>
  <button onClick={handleSubmit} type="submit" className="btn btn-primary">Submit</button>
  </div>
  <p className='text-center mt-2'>Don't have an account? <Link to="/register">Signup</Link></p>
</form>
    </div>
  )
}

export default Login
