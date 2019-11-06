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

function setActiveConversation (convo) {
    return {type: 'SET ACTIVE CONVO', payload: convo};
};

export {
    getAllConvos,
    setActiveConversation
};