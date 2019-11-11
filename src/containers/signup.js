import React from 'react';
import {connect} from 'react-redux';
import {
    changeName, 
    changeUsername,
    changePassword,
    changeConfirmPassword,
    showPassword,
    showConfirmPassword,
    createUser
    } from '../actions/AuthActions';

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

function signup (props) {

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
        if (props.password === props.confirmPass){
            props.createUser({
                name: props.name,
                username: props.username,
                password: props.password
            }, props.history);
        } else {
            alert('Passwords Do Not Match');
        };  
    };

    return(
        <div className='auth'>
            <form onSubmit={e => submitHandler(e)}>
            <FormControl className={clsx(classes.margin, classes.textField)}>
                <InputLabel htmlFor="standard-start-name">Name</InputLabel>
                <Input
                    id="standard-start-name"
                    value={props.name}
                    onChange={(e) => props.changeName(e.target.value)}
                />
            </FormControl>
            <br />
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
            <br />
            <FormControl className={clsx(classes.margin, classes.textField)}>
                <InputLabel htmlFor="standard-adornment-password-confirm">Confirm Password</InputLabel>
                <Input
                    id="standard-adornment-password-confirm"
                    type={props.showConfirmPass ? 'text' : 'password'}
                    value={props.confirmPass}
                    onChange={(e) => props.changeConfirmPassword(e.target.value)}
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => props.showConfirmPassword()}
                        onMouseDown={handleMouseDownPassword}
                        >
                        {props.showConfirmPass ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                    }
                />
            </FormControl>
            <br /> <br />
            <Button type='submit' variant="outlined" color="primary" className={buttonStyle.button}>
                Create User
            </Button>
            </form>
        </div>
    );

}

function msp (state) {
    return {
        name: state.auth.name,
        username: state.auth.username,
        password: state.auth.password,
        confirmPass: state.auth.confirmPass,
        showPass: state.auth.showPass,
        showConfirmPass: state.auth.showConfirmPass
    };
}


export default connect(msp,{
    changeName,
    changeUsername,
    changePassword,
    changeConfirmPassword,
    showPassword,
    showConfirmPassword,
    createUser
})(signup);