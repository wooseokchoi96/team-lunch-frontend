import React from 'react';
import Message from './Message';
import {connect} from 'react-redux';

function MessageList (props) {

     if (!props.activeConversation) {
            return (
                <div className="Message-List">
                    <div className="join-room">
                        &larr; Select a Room!
                    </div>
                </div>
            )
        }

    return(
        <div className='Message-List'>
            <ul>
                {props.activeConversation ?
                    props.activeConversation.messages.map(message => {
                    return (<Message key={message.id} message={message}/>)
                })
                : null}
            </ul>
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