import React, { useState } from 'react'
import AuthContext from './AuthContext'

const AuthState = (props) => {
    const [user, setuser] = useState({
        email:"",
        login:false
    });
    console.log(user)
  return (
    <AuthContext.Provider value={{user,setuser}}>
        {props.children}
    </AuthContext.Provider>
  )
}

export default AuthState
