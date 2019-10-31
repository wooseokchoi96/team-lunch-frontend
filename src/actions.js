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
}

function createUser (userObj, props) {
    return function (dispatch) {
        fetch('http://localhost:3001/api/v1/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(userObj)
        })
        .then(resp => resp.json())
        .then(user => {
            if (user.errors) {
                alert(user.errors);
            } else {
                dispatch(setCurrentUser(user));
                props.history.push(`/users/${userObj.username}`);
            } 
        })
    }
}

function logInUser (userObj, props) {
    return function (dispatch) {
        fetch('http://localhost:3001/api/v1/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(userObj)
        })
        .then(resp => resp.json())
        .then(user => {
            if (user.errors) {
                alert(user.errors);
            } else {
                dispatch(setCurrentUser(user));
                props.history.push(`/users/${userObj.username}`);
            } 
        })
    }
}


export {
    changeName,
    changeUsername,
    changePassword,
    changeConfirmPassword,
    showPassword,
    showConfirmPassword,
    createUser,
    logInUser
};