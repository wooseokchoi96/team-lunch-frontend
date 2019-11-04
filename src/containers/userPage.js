import React from 'react';
import {connect} from 'react-redux';
import {logOut} from '../actions';

function userPage (props) {
    return(
        <div>
            {props.currentUser ? <h1>Welcome {props.currentUser.name} !!!</h1> : null}
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