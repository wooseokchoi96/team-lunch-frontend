import React from 'react';
import Message from './Message';
import {connect} from 'react-redux';

function MessageList (props) {

    return(
        <div>
            <h1>Message List :</h1>
            <ul>
                {props.activeConversation ?
                    props.activeConversation.messages.map(message => {
                    return (<li key={message.id}>{message.user_id} : {message.text}</li>);
                })
                : null}
            </ul>
            <Message />
        </div>

    );

};

function msp (state) {
    return {
        activeConversation: state.messenger.activeConversation,
        conversations: state.messenger.conversations
    };
};


export default connect(msp)(MessageList);