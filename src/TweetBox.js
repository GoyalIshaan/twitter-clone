import React, { useState } from 'react'
import {Avatar, Button} from '@mui/material'
import './TweetBox.css'
import db from "../src/firebase.js";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState('');
  const [tweetImage, setTweetImage] = useState('');
  const sendTweet = (e) => {
    e.preventDefault();

    db.collection('posts').add({
      displayName:'Anonymus',
      userName:'anonymus',
      verified:true,
      text:tweetMessage,
      image:tweetImage,
      avatar:"https://i0.wp.com/nft-reality.com/wp-content/uploads/2021/10/virtual-reality-glasses-1.png",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
  }
  return (
    <div className="tweetBox">
        <form>
            <div className="tweetBox__input">
                <Avatar src="https://i0.wp.com/nft-reality.com/wp-content/uploads/2021/10/virtual-reality-glasses-1.png" />
                <input 
                onChange={(e) => setTweetMessage(e.target.value)}
                value={tweetMessage} 
                type="text" 
                placeholder="What's happening?" />
            </div>
            <input 
                onChange={(e) => setTweetImage(e.target.value)}
                value={tweetImage}  
                className='tweetBox__imageInput' 
                type="text" 
                placeholder="Optional: Enter Image Url" />
            <Button onClick={sendTweet} type="submit" className='tweetBox__tweetButton'>Tweet</Button>
        </form>
    </div>
  )
}

export default TweetBox