import React from 'react';
import MessageList from '../components/MessageList';
import NewRoomForm from '../components/NewRoomForm';
import RoomList from '../components/RoomList';
import SendMessageForm from '../components/SendMessageForm';
import {connect} from 'react-redux';
import {logOut} from '../actions/AuthActions';

function userPage (props) {
    return(
        <div>
            {props.currentUser ? <h1>Welcome {props.currentUser.name} !!!</h1> : null}
            <MessageList />
            <NewRoomForm />
            <RoomList />
            <SendMessageForm />
            <button onClick={() => props.logOut(props.history)}>Log Out</button>
        </div>
    );

}

function msp (state) {
    return {
        currentUser: state.auth.currentUser
    };
}

export default connect(msp,{logOut})(userPage);