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
                localStorage.user_id = user.id;
                history.push(`/users/${user.username}`);
                dispatch(setCurrentUser(user));
            } 
        })
    };
};

function logInUser (userObj, history) {
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
                localStorage.user_id = user.id;
                history.push(`/users/${user.username}`);
                dispatch(setCurrentUser(user));
            } 
        })
    };
};

function logOut (history) {
    localStorage.removeItem('user_id');
    history.push('/');
    return {type: 'LOGOUT'};
};

function getUserInfo (user_id) {
    return function (dispatch) {
        fetch('http://localhost:3001/api/v1/auto_login', {
            headers: {
                'Authorization': user_id
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