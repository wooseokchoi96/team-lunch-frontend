import React, {Component} from 'react';
import MessageList from '../components/MessageList';
import NewRoomForm from '../components/NewRoomForm';
import RoomList from '../components/RoomList';
import SendMessageForm from '../components/SendMessageForm';
import {connect} from 'react-redux';
import {logOut} from '../actions/AuthActions';
import {getAllConvos} from '../actions/MessengerActions';
import { ActionCable } from 'react-actioncable-provider';


class userPage extends Component {

    componentDidMount(){
        this.props.getAllConvos();
    }

    handleReceivedConversation = () => {

    };

    handleReceivedMessage = () => {

    };

    render(){
        return(
            <div>
                <ActionCable
                    channel={{ channel: 'ConversationsChannel' }}
                    onReceived={this.handleReceivedConversation()}
                />
                {this.props.conversations.map(conversation => {
                    return (
                    <ActionCable
                        key={conversation.id}  
                        channel={{ channel: 'MessagesChannel', conversation: conversation.id }}
                        onReceived={this.handleReceivedMessage()}
                    />
                    );
                })}

                {this.props.currentUser ? <h1>Welcome {this.props.currentUser.name} !!!</h1> : null}
                <RoomList />
                <MessageList />
                <NewRoomForm />
                <SendMessageForm />
                <button onClick={() => this.props.logOut(this.props.history)}>Log Out</button>
                
            </div>
        );
    }
}

function msp (state) {
    return {
        currentUser: state.auth.currentUser,
        conversations: state.messenger.conversations
    };
}

export default connect(msp,{
    logOut,
    getAllConvos
})(userPage);