import React from 'react';
import {connect} from 'react-redux';

function Message ({message, currentUser}) {

    const messageType = message.user_id === currentUser.id ? 'myMessage' : 'message' ;

    return(
        <div className={messageType}>
            <div className={messageType + "-username"}>{message.user_name}</div>
            <div className={messageType + "-text"}>{message.text}</div>
        </div>
    );

};

function msp (state) {
    return {
        currentUser: state.auth.currentUser
    };
};

export default connect(msp)(Message);