import React from 'react';

import './Message.css';

const Message = ({ data }) => {
  return (
    <div className="message">
      <img src={data.userImage} alt={data.user} />
      <div className="message__info">
        <h4>
          {data.user}
          {'  '}
          <span className="message__timestamp">
            {new Date(data.timestamp?.toDate()).toUTCString()}
          </span>
        </h4>
        <p>{data.message}</p>
      </div>
    </div>
  );
};

export default Message;
