import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';

function login () {

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

    return(
        <div>
            <h1> Log In Page</h1>

            <form>
            <FormControl className={clsx(classes.margin, classes.textField)}>
                <InputLabel htmlFor="standard-start-adornment">Username</InputLabel>
                <Input
                    id="standard-start-adornment"
                    // type={values.showPassword ? 'text' : 'password'}
                    // value={values.password}
                    // onChange={handleChange('password')}
                />
            </FormControl>
            <br />
            <FormControl className={clsx(classes.margin, classes.textField)}>
                <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                <Input
                    id="standard-adornment-password"
                    // type={values.showPassword ? 'text' : 'password'}
                    // value={values.password}
                    // onChange={handleChange('password')}
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        //   onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        >
                        {/* {values.showPassword ? <Visibility /> : <VisibilityOff />} */}
                        </IconButton>
                    </InputAdornment>
                    }
                />
            </FormControl>
            <br /> <br />
            <Button variant="outlined" color="primary" className={buttonStyle.button}>
                Log In
            </Button>
            </form>
        </div>
    );

}

export default login;