import React from 'react';
import {connect} from 'react-redux';
import { setActiveConversation } from '../actions/MessengerActions';

function RoomList (props) {

    return(
        <div className='Room-List'>
            <ul>
                <h3>Your Rooms: </h3>
                {props.conversations.map(conversation => {
                    let active;
                    (props.activeConversation ? 
                        active = conversation.id === props.activeConversation.id ? 'active' : ''
                    : active = '');
                    return  <li className={"room " + active} onClick={() => props.setActiveConversation(conversation)} key={conversation.id}>
                                # {conversation.title}
                            </li>
                })}
            </ul>
        </div>

    );

};

function msp (state) {
    return {
        conversations: state.messenger.conversations,
        activeConversation: state.messenger.activeConversation
    }
} 

export default connect(msp,{
    setActiveConversation
})(RoomList);