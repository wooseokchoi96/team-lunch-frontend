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


export {
    changeName,
    changeUsername,
    changePassword,
    changeConfirmPassword,
    showPassword,
    showConfirmPassword
};