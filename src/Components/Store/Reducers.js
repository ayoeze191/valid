import { GET_ALL_NODES, LOGIN_FAIL, LOGIN_SUCCESS } from "./ActionTypes";

const initial_State = {
    token: localStorage.getItem('access'),
    isauthenticated: false,
    user: localStorage.getItem('user')
}


export const AuthReducers = (state = initial_State, action) => {
    switch (action.type){
        case LOGIN_SUCCESS:
            return{
                ...state,
                isauthenticated: true,
            }
        case LOGIN_FAIL:
            localStorage.removeItem('user');
            localStorage.removeItem('access')
            return{
                ...state,
                isauthenticated: false,
            }
        default:
            return state
    }
}


const initial_Node_State = {

}


export const NodeReducer = (state = initial_Node_State, action) => {
    switch (action.type){
        case GET_ALL_NODES:
            return{
                ...state,
                nodes: action.payload
            }
    }
}


