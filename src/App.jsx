import './App.css'
import React, { } from 'react';
import SignUp from './Components/SignUp';
import Passwordauth from './Components/Passwordauth';
import LogIn from './Components/LogIn';


function App() {


  
  return (
    <> 
     <SignUp/>
     <div>
      <Passwordauth/>
     </div>
     <div>
      <LogIn/>
     </div>
    </>
  )
}

export default App
