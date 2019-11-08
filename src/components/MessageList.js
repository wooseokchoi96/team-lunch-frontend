import React, {Component} from 'react';
import Message from './Message';
import {connect} from 'react-redux';
import ReactDOM from 'react-dom';

class MessageList extends Component {

    componentWillUpdate() {
        const node = ReactDOM.findDOMNode(this)
        this.shouldScrollToBottom = node.scrollTop + node.clientHeight + 100 >= node.scrollHeight
    }
    
    componentDidUpdate() {
        if (this.shouldScrollToBottom) {
            const node = ReactDOM.findDOMNode(this)
            node.scrollTop = node.scrollHeight   
        }
    }

    render(){
        if (!this.props.activeConversation) {
            return (
                <div className="Message-List">
                    <div className="join-room">
                        &larr; Select a Room!
                    </div>
                </div>
            )
        }

        return(
            <div className='Message-List'>
                <ul>
                    {this.props.activeConversation ?
                        this.props.activeConversation.messages.map(message => {
                        return (<Message key={message.id} message={message}/>)
                    })
                    : null}
                </ul>
            </div>

        );
    }
};

function msp (state) {
    return {
        activeConversation: state.messenger.activeConversation,
        conversations: state.messenger.conversations
    };
};


export default connect(msp)(MessageList);