import React from 'react';
import {connect} from 'react-redux';
import {writeMessage, 
        clearForms,
        postMessage} from '../actions/MessengerActions';

function SendMessageForm (props) {

    const submitHandler = e => {
        e.preventDefault();
        const message = {
            text: props.newMessageText,
            conversation_id: props.activeConversation.id,
            user_id: props.currentUser.id,
            user_name: props.currentUser.name
        };
        props.postMessage(message);
        props.clearForms();
    };

    return(
        <form className='Message-Form' onSubmit={e => submitHandler(e)}> 
            <input
                disabled={props.activeConversation ? false : true}
                type='text'
                placeholder='Type your message and hit ENTER' 
                value={props.newMessageText} 
                onChange={e => props.writeMessage(e.target.value)} 
            />
        </form>
    );

};

function msp (state) {
    return {
        newMessageText: state.messenger.newMessageText,
        activeConversation: state.messenger.activeConversation,
        currentUser: state.auth.currentUser
    };
};

export default connect(msp,{
    writeMessage,
    clearForms,
    postMessage
})(SendMessageForm);