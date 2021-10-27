import React from 'react'
import firebase from 'firebase'
import { auth } from '../firebase.js'
// import { Button } from '@material-ui/core'
import Button from '@material-ui/core/Button';

function SignIn() {
   function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider()
    auth.signInWithPopup(provider)
   }
    return (
        <div>
          <Button onClick={signInWithGoogle}>SIGN IN WITH GOOGLE</Button>  
        </div>
    )
}

export default SignIn
