import React from 'react';
import {connect} from 'react-redux';
import {logOut} from '../actions';

function userPage (props) {

    return(
        <div>
            <h1>Welcome {props.currentUser.name} !!!</h1>
            <button onClick={() => props.logOut(props)}>Log Out</button>
        </div>
    );

}

function msp (state) {
    return {
        currentUser: state.auth.currentUser
    };
}

export default connect(msp,{logOut})(userPage);