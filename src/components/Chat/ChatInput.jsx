import React, { useState } from 'react';
import firebase from 'firebase';

import { Button } from '@material-ui/core';

import { db } from '../../config/firebase';
import { useStateValue } from '../../contextApi/StateProvider';
import './ChatInput.css';

const ChatInput = ({ channelName, channelId }) => {
  const [input, setInput] = useState('');
  const [{ user }] = useStateValue();

  const sendMessage = (e) => {
    e.preventDefault();

    if (channelId) {
      db.collection('rooms').doc(channelId).collection('messages').add({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        user: user.displayName,
        userImage: user.photoURL,
      });

      setInput('');
    }
  };

  return (
    <div className="chatInput">
      <form>
        <input
          value={input}
          onChange={(data) => setInput(data.target.value)}
          placeholder={`Message #${channelName}`}
        />
        <Button type="submit" onClick={sendMessage}>
          Send
        </Button>
      </form>
    </div>
  );
};

export default ChatInput;
