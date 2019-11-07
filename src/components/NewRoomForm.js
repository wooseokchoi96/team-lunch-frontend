import React from 'react';
import { FormControl,
         InputLabel,
         Input,
         Button} from '@material-ui/core';
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
        <div>
            <h1>New Room Form Goes Here</h1>
            <form onSubmit={e => submitHandler(e)}> 
                <FormControl>
                    <InputLabel htmlFor="new-convo">Create New Chatroom</InputLabel>
                    <Input id="new-convo" aria-describedby="my-helper-text" placeholder='Enter Room Name' value={props.newConvoName} onChange={e => props.writeConvo(e.target.value)} />
                    <Button type='submit' variant="outlined" color="primary" size='small'>
                        Create 
                    </Button>
                </FormControl>
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