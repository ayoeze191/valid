import axios from "axios";
import { LOGIN_SUCCESS, LOGIN_FAIL, GET_ALL_NODES } from "./ActionTypes"


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

const FilterOwnNodes = () => {
    
}



export const getAllnodes = () => (dispatch) => {
    axios.get('https://valid-9f976-default-rtdb.firebaseio.com//nodes.json')
    .then((res) => {
        console.log(res)

        // dispatch({
        //     type: GET_ALL_NODES,
        // })
    })
    .catch((err) => {
        console.log(err)
    })


    dispatch({
        type: GET_ALL_NODES
    })
}