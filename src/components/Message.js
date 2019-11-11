import React, {Component} from 'react';
import {connect} from 'react-redux';

class Message extends Component {

    state = {
        hover: false
    };

    toggleHover = () => {this.setState({...this.state, hover: !this.state.hover})}

    render(){
        const messageType = this.props.message.user_id === this.props.currentUser.id ? 'myMessage' : 'message' ;
        const str = this.props.message.created_at;
        const timestamp = '(' + str.slice(0, 10) + ') ' + str.slice(11, 19)
        return(
            <div onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} className={messageType}>
                <div className={messageType + "-username"}>{this.props.message.user_name}</div>
                <div className={messageType + "-text"}>{this.props.message.text}</div>
                {this.state.hover ? <div className='timestamp'>{timestamp}</div> : null}
            </div>
        );
    };

};

function msp (state) {
    return {
        currentUser: state.auth.currentUser
    };
};

export default connect(msp)(Message);