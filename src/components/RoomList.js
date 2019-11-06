import React from 'react';
import {connect} from 'react-redux';
import { setActiveConversation } from '../actions/MessengerActions';

function RoomList (props) {

    return(
        <div>
            <h1>Room List</h1>
            <ul>
                {props.conversations.map(conversation => {
                    return <li onClick={() => props.setActiveConversation(conversation)} key={conversation.id}>{conversation.title}</li>
                })}
            </ul>
        </div>

    );

};

function msp (state) {
    return {
        conversations: state.messenger.conversations
    }
} 

export default connect(msp,{
    setActiveConversation
})(RoomList);