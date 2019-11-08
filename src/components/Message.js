import React from 'react';

function Message ({message}) {

    return(
        <div className='message'>
            <div className="message-username">{message.user_id}</div>
            <div className="message-text">{message.text}</div>
        </div>
    );

};

export default Message;