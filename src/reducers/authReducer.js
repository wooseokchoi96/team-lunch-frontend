const defaultState = {
    name: '',
    username: '',
    password: '',
    confirmPass: '',
    showPass: false,
    showConfirmPass: false
};

function authReducer (state = defaultState, action) {
    switch (action.type) {
        case 'CHANGE NAME':
            return {...state, name: action.payload} ;
        case 'CHANGE USERNAME':
            return {...state, username: action.payload} ;
        case 'CHANGE PASSWORD':
            return {...state, password: action.payload} ;
        case 'CHANGE CONFIRM PASSWORD':
            return {...state, confirmPass: action.payload} ;
        case 'SHOW PASSWORD ?':
            return {...state, showPass: !state.showPass} ;
        case 'SHOW CONFIRM PASSWORD ?':
            return {...state, showConfirmPass: !state.showConfirmPass} ;
        default:
            return state;
    }
};

export default authReducer;