import React from 'react';
import { FormControl,
         InputLabel,
         Input,
         Button} from '@material-ui/core';
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
            user_id: props.currentUser.id
        };
        props.postMessage(message);
        props.clearForms();
    };

    return(
        <div>
            <h1>Send Message Form Goes Here</h1>
            <form onSubmit={e => submitHandler(e)}> 
                <FormControl>
                    <InputLabel htmlFor="new-message">Send New Message</InputLabel>
                    <Input id="new-message" aria-describedby="my-helper-text" placeholder='Enter Message' value={props.newMessageText} onChange={e => props.writeMessage(e.target.value)} />
                    <Button type='submit' variant="outlined" color="primary" size='small'>
                        Send
                    </Button>
                </FormControl>
            </form>
        </div>

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