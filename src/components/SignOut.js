import React from 'react'
import { auth } from '../firebase.js'
import Button from '@material-ui/core/Button';

function SignOut() {
    return (
        <div >
            <Button onClick={() => auth.signOut()}>Sign Out</Button>
        </div>
    )
}

export default SignOut