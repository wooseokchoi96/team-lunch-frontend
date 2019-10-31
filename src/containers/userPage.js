import React from 'react';
import {connect} from 'react-redux';

function userPage (props) {

    return(
        <div>
            <h1>Welcome {props.currentUser.name} !!!</h1>
        </div>
    );

}

function msp (state) {
    return {
        currentUser: state.auth.currentUser
    };
}

export default connect(msp)(userPage);