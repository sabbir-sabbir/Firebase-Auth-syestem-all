import React from 'react'
import {  signInWithEmailAndPassword } from "firebase/auth";
import auth from './Firebase-config';

const LogIn = () => {
    const logInHandle = (e)=> {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            console.log(result.user)
        })
        .catch(err => console.error(err))

    }
  return (
    <>
    <form onSubmit={logInHandle}>
     <input type="email" name="email"  placeholder="Type your email..."/> <br />
     <input type="password" name="password"  placeholder="Type your password..."/> <br /> 
     <input type="submit" value="Log In/Sign in" />
   </form>
    </>
  )
}

export default LogIn