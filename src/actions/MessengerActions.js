import {API_ROOT} from '../config';

function getAllConvos () {
    return function (dispatch) {
        fetch(`${API_ROOT}/conversations`)
        .then(resp => resp.json())
        .then(convos => {
            dispatch({type: 'GET ALL CONVOS', payload: convos})
        })
    };
};

function postConvo (convo) {
    return function () {
        fetch(`${API_ROOT}/conversations`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(convo)
        });
    };
};

function postMessage (message) {
    return function () {
        fetch(`${API_ROOT}/messages`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(message)
        });
    };
};

function setActiveConversation (convo) {
    return {type: 'SET ACTIVE CONVO', payload: convo};
};

function addConvo (convo) {
    return {type: 'ADD CONVO', payload: convo};
};

function addMessage (conversations) {
    return {type: 'ADD MESSAGE', payload: conversations};
};

function writeConvo (convoName) {
    return {type: 'WRITE CONVO', payload: convoName}
};

function writeMessage (message) {
    return {type: 'WRITE MESSAGE', payload: message}
};

function clearForms () {
    return {type: 'CLEAR FORMS'}
}

export {
    getAllConvos,
    postConvo,
    postMessage,
    setActiveConversation,
    addConvo,
    addMessage,
    writeConvo,
    writeMessage,
    clearForms
};