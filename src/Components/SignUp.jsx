import React,{  useState } from 'react'
import { GoogleAuthProvider, FacebookAuthProvider, GithubAuthProvider,  signInWithPopup, signOut } from "firebase/auth";
import auth from './Firebase-config';


const SignUp = () => {

  // States
  const [user, setUser] = useState("");
  const [fbuser, setFbuser] = useState("");
  const [gituser, setGituser] = useState("");

  // Providers
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const githubProvider = new GithubAuthProvider();

  // Workers
  const googlebtn = ()=> {
      signInWithPopup(auth,  googleProvider)
      .then(result => {
        const googleuserInfo = result.user;
        console.log(googleuserInfo);
        setUser(googleuserInfo);
      }) 
      .catch(err => console.error(err))
  };

  const facebookbtn = ()=> {
    signInWithPopup(auth, facebookProvider)
    .then(result => {
      const fbUserInfo = result.user;
      setFbuser(fbUserInfo);
    })
    .catch(err => console.error(err))

  };

  const githubbtn = ()=> {
    signInWithPopup(auth, githubProvider)
    .then(result => {
      const gitUserInfo = result.user;
      setGituser(gitUserInfo);
    })
    .catch(err => console.error(err))

  };

  // Sign-out button
  const authSignOut = ()=> {
    signOut(auth)
    .then(result => {
      setUser("");
      setFbuser("");
      setGituser("");
    })
    .catch(err => console.error(err))

  };
  return(
      <>
      <div>
        <div>
        <button onClick={googlebtn}>Google sign-in</button>
        </div>
        <div>
             { user && <div>
                <h1>{user.displayName}</h1>
                <p>{user.email}</p>
             </div>

             }
        </div>
      </div>

      <div>
        <div>
        <button onClick={facebookbtn}>Facebook sign-in</button>
        </div>
        <div>
          { fbuser && <div>
            <h1>{fbuser.displayName}</h1>
            <p>{fbuser.email}</p>
          </div>
          }
        </div>
        
      </div>

      <div>
        <div>
        <button onClick={githubbtn}>GitHub sign-in</button>
        </div>
        <div>
          { gituser && <div>
               <h1>{gituser.displayName}</h1>
               <p>{gituser.email}</p>
          </div>
          }
        </div>
        
      </div>


      <div>
        <button onClick={authSignOut}>Sign out</button>
      </div>
      </>
  )
};

export default SignUp