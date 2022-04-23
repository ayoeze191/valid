import { LOGIN_SUCCESS, LOGIN_FAIL } from "./ActionTypes"


export const userLoggedIn = (access, user) => (dispatch) => {
    localStorage.setItem('access', access);
    localStorage.setItem( 'user', user);
    dispatch({
        type: LOGIN_SUCCESS,
    })
}



export const LoadUser = () => (dispatch) => {
    if(localStorage.getItem('access')){
        dispatch({
            type: LOGIN_SUCCESS
        })
    }
    }
   

export const Login_fail = () => (dispatch) => {
    dispatch({
        type: LOGIN_FAIL
    })
}