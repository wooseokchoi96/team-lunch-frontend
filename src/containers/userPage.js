import React, {Component} from 'react';
import MessageList from '../components/MessageList';
import NewRoomForm from '../components/NewRoomForm';
import RoomList from '../components/RoomList';
import SendMessageForm from '../components/SendMessageForm';
import {connect} from 'react-redux';
import {logOut} from '../actions/AuthActions';
import {getAllConvos, addConvo, addMessage, setActiveConversation} from '../actions/MessengerActions';
import { ActionCableConsumer } from 'react-actioncable-provider';

class userPage extends Component {

    componentDidMount(){
        this.props.getAllConvos();
    }


    handleReceivedConversation = response => {
        const { conversation } = response;
        this.props.addConvo(conversation);
    };

    handleReceivedMessage = response => {
        console.log('sending message')
        console.log(this.props.conversations)
        const { message } = response;
        console.log(message)
        const conversations = [...this.props.conversations];
        const conversation = conversations.find(
            conversation => conversation.id === message.conversation_id
        );
        conversation.messages = [...conversation.messages, message];
        this.props.addMessage([...this.props.conversations]);
        this.props.setActiveConversation(conversation);
    };

    render(){
        return(
            <div className='User-Page'>
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
                <RoomList />
                <MessageList />
                <NewRoomForm />
                <SendMessageForm />
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
    addMessage,
    setActiveConversation
})(userPage);