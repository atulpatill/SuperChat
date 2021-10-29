import React, { useState } from 'react'
import { db, auth } from '../firebase'
import firebase from 'firebase'
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';




function SendMessage() {
    const [msg, setMsg] = useState('')
  
    async function sendMessage(e){
        e.preventDefault()
        const { uid, photoURL } = auth.currentUser
        await db.collection('messages').add({
            text: msg,
            photoURL,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setMsg('')
    }

    return (
        <div>
        <form onSubmit={sendMessage}>
            <Input placeholder="Message..." type="text" value={msg} onChange={e => setMsg(e.target.value)}  />
            <Button type="submit">Send</Button>
        </form>
        </div>
    )
}

export default SendMessage
