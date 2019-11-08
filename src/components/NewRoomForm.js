import React from 'react';
import {connect} from 'react-redux';
import {writeConvo,
        clearForms,
        postConvo} from '../actions/MessengerActions';

function NewRoomForm (props) {

    const submitHandler = e => {
        e.preventDefault();
        const convo = {title: props.newConvoName};
        props.postConvo(convo);
        props.clearForms();
    };

    return(
        <div className='Room-Form'>
            <form onSubmit={e => submitHandler(e)}> 
                <input 
                    type='text'
                    placeholder='Create a Room' 
                    value={props.newConvoName} 
                    onChange={e => props.writeConvo(e.target.value)} 
                    required
                /> 
                <button id="create-room-btn" type="submit">+</button>
            </form>
        </div>

    );

};

function msp (state) {
    return {
        newConvoName: state.messenger.newConvoName
    };
};

export default connect(msp,{
    writeConvo,
    clearForms,
    postConvo
})(NewRoomForm);