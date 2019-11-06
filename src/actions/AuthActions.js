import {API_ROOT} from '../config';

function changeName (name) {
    return {type: 'CHANGE NAME', payload: name}
};

function changeUsername (username) {
    return {type: 'CHANGE USERNAME', payload: username}
};

function changePassword (password) {
    return {type: 'CHANGE PASSWORD', payload: password}
};

function changeConfirmPassword (confirmPass) {
    return {type: 'CHANGE CONFIRM PASSWORD', payload: confirmPass}
};

function showPassword () {
    return {type: 'SHOW PASSWORD ?'}
};

function showConfirmPassword () {
    return {type: 'SHOW CONFIRM PASSWORD ?'}
};

function setCurrentUser (userObj) {
    return {type: 'SET CURRENT USER', payload: userObj};
};

function createUser (userObj, history) {
    return function (dispatch) {
        fetch(`${API_ROOT}/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(userObj)
        })
        .then(resp => resp.json())
        .then(resp => {
            if (resp.errors) {
                alert(resp.errors);
            } else {
                localStorage.token = resp.token;
                history.push(`/users/${resp.user.username}`);
                dispatch(setCurrentUser(resp.user));
            } 
        })
    };
};

function logInUser (userObj, history) {
    return function (dispatch) {
        fetch(`${API_ROOT}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(userObj)
        })
        .then(resp => resp.json())
        .then(resp => {
            if (resp.errors) {
                alert(resp.errors);
            } else {
                localStorage.token = resp.token;
                history.push(`/users/${resp.user.username}`);
                dispatch(setCurrentUser(resp.user));
            } 
        })
    };
};

function logOut (history) {
    localStorage.removeItem('token');
    history.push('/');
    return {type: 'LOGOUT'};
};

function getUserInfo (token) {
    return function (dispatch) {
        fetch(`${API_ROOT}/auto_login`, {
            headers: {
                'Authorization': token
            }
        })
        .then(resp => resp.json())
        .then(user => {
            if (user.errors) {
                alert(user.errors)
            } else {
                dispatch(setCurrentUser(user));
            }
        })
    };
};


export {
    changeName,
    changeUsername,
    changePassword,
    changeConfirmPassword,
    showPassword,
    showConfirmPassword,
    createUser,
    logInUser,
    logOut,
    getUserInfo
};