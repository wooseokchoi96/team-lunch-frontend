import React, {Component} from 'react';
import MessageList from '../components/MessageList';
import NewRoomForm from '../components/NewRoomForm';
import RoomList from '../components/RoomList';
import SendMessageForm from '../components/SendMessageForm';
import {connect} from 'react-redux';
import {logOut} from '../actions/AuthActions';

class userPage extends Component {

    render(){
        return(
            <div>
                {this.props.currentUser ? <h1>Welcome {this.props.currentUser.name} !!!</h1> : null}
                <MessageList />
                <NewRoomForm />
                <RoomList />
                <SendMessageForm />
                <button onClick={() => this.props.logOut(this.props.history)}>Log Out</button>
            </div>
        );
    }
}

function msp (state) {
    return {
        currentUser: state.auth.currentUser
    };
}

export default connect(msp,{logOut})(userPage);