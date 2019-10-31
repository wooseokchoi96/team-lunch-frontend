function changeName (name) {
    return {type: 'CHANGE NAME', payload: name}
};

function changeUsername (username) {
    return {type: 'CHANGE USERNAME', payload: username}
};

function changePassword (password) {
    return {type: 'CHANGE PASSWORD', payload: password}
};

export {
    changeName,
    changeUsername,
    changePassword
};