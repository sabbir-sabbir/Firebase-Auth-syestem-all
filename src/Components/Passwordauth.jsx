import React from 'react'
import {  createUserWithEmailAndPassword } from "firebase/auth";
import auth from './Firebase-config';

const Passwordauth = () => {
const formhandle = (e)=> {
    e.preventDefault();
    const emailvalue =  e.target.email.value;
    const passvalue  = e.target.password.value;
    createUserWithEmailAndPassword(auth, emailvalue, passvalue)
    .then(result => {
        console.log(result.user)

    })
    .catch(err => {
        console.error(err)
    })
   
}

  return (
   <>
   <form onSubmit={formhandle}>
     <input type="email" name="email"  placeholder="Type your email..."/> <br />
     <input type="password" name="password"  placeholder="Type your password..."/> <br /> 
     <input type="submit" value="Sign up" />
   </form> <br /> <hr />
   </>
  )
}

export default Passwordauth