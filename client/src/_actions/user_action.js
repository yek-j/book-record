import axios from 'axios';
import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER,
    BOOK_RECORD
} from './types';

export function loginUser(dataToSubmit){

    const request = axios.post('/api/users/login', dataToSubmit)
    .then(response => 
        response.data);
    // reducer로 넘기기
    return {
        type: LOGIN_USER,
        payload: request
    }
}

export function registerUser(dataToSubmit){
    const request = axios.post('/api/users/register', dataToSubmit)
    .then(response => 
        response.data);
    // reducer로 넘기기
    return {
        type: REGISTER_USER,
        payload: request
    }
}

export function auth(){
        const request = axios.get('/api/users/auth')
        .then(response => 
            response.data);
        // reducer로 넘기기
        return {
            type: AUTH_USER,
            payload: request
        }
    }


 export function bookRecord(dataToSubmit){
     const request = axios.post('/api/book/record', dataToSubmit)
        .then(response => 
            response.data);
        // reducer로 넘기기
        return {
            type: BOOK_RECORD,
            payload: request
        }
    }
