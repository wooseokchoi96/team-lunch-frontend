import React from 'react';
import {connect} from 'react-redux';
import {
    changeUsername,
    changePassword,
    showPassword,
    logInUser
    } from '../actions';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';

function login (props) {

    const classes = makeStyles(theme => ({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        margin: {
            margin: theme.spacing(1),
        },
        withoutLabel: {
            marginTop: theme.spacing(3),
        },
        textField: {
            width: 200,
        },
    }));

    const buttonStyle = makeStyles(theme => ({
        button: {
            margin: theme.spacing(1),
        },
        input: {
            display: 'none',
        },
    }));

    const handleMouseDownPassword = event => {
        event.preventDefault();
    };

    const submitHandler = (e) => {
        e.preventDefault();
        props.logInUser({
            username: props.username,
            password: props.password
        },props.history); 
    };

    return(
        <div>
            <h1> Log In Page</h1>

            <form onSubmit={e => submitHandler(e)}>
            <FormControl className={clsx(classes.margin, classes.textField)}>
                <InputLabel htmlFor="standard-start-username">Username</InputLabel>
                <Input
                    id="standard-start-username"
                    value={props.username}
                    onChange={(e) => props.changeUsername(e.target.value)}
                />
            </FormControl>
            <br />
            <FormControl className={clsx(classes.margin, classes.textField)}>
                <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                <Input
                    id="standard-adornment-password"
                    type={props.showPass ? 'text' : 'password'}
                    value={props.password}
                    onChange={(e) => props.changePassword(e.target.value)}
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => props.showPassword()}
                        onMouseDown={handleMouseDownPassword}
                        >
                        {props.showPass ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                    }
                />
            </FormControl>
            <br /> <br />
            <Button type='submit' variant="outlined" color="primary" className={buttonStyle.button}>
                Log In
            </Button>
            </form>
        </div>
    );

}

function msp (state) {
    return {
        username: state.auth.username,
        password: state.auth.password,
        showPass: state.auth.showPass
    };
}


export default connect(msp,{
    changeUsername,
    changePassword,
    showPassword,
    logInUser
})(login);