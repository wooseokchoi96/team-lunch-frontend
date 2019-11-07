import React, {Component} from 'react';
import MessageList from '../components/MessageList';
import NewRoomForm from '../components/NewRoomForm';
import RoomList from '../components/RoomList';
import SendMessageForm from '../components/SendMessageForm';
import {connect} from 'react-redux';
import {logOut} from '../actions/AuthActions';
import {getAllConvos, addConvo, addMessage} from '../actions/MessengerActions';
import { ActionCableConsumer } from 'react-actioncable-provider';
import {Button} from '@material-ui/core';


class userPage extends Component {

    componentDidMount(){
        this.props.getAllConvos();
    }

    handleReceivedConversation = response => {
        const { conversation } = response;
        this.props.addConvo(conversation);
    };

    handleReceivedMessage = response => {
        const { message } = response;
        const conversations = [...this.props.conversations];
        const conversation = conversations.find(
            conversation => conversation.id === message.conversation_id
        );
        conversation.messages = [...conversation.messages, message];
        this.props.addMessage(conversations);
    };

    render(){
        return(
            <div>
                <ActionCableConsumer
                    channel={{ channel: 'ConversationsChannel' }}
                    onReceived={this.handleReceivedConversation}
                />
                {this.props.conversations.map(conversation => {
                    return (
                    <ActionCableConsumer
                        key={conversation.id}  
                        channel={{ channel: 'MessagesChannel', conversation: conversation.id }}
                        onReceived={this.handleReceivedMessage}
                    />
                    );
                })}

                {this.props.currentUser ? <h1>Welcome {this.props.currentUser.name} !!!</h1> : null}
                <RoomList />
                <MessageList />
                <NewRoomForm />
                <SendMessageForm />
                <br/><br/>
                <Button onClick={() => this.props.logOut(this.props.history)} variant="outlined" color="primary">
                    Log Out
                </Button>
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
    getAllConvos,
    addConvo,
    addMessage
})(userPage);