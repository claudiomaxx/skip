import axios from 'axios'

export const LOGIN = 'LOGIN';
export const SIGNUP = 'SIGNUP';

const BASE_URL = 'http://api-vanhack-event-sp.azurewebsites.net/api'
const CUSTOMER_URL = `${BASE_URL}/v1/Customer`


export function signupAction(customer, callback) {

    const request = axios.post(`${CUSTOMER_URL}`, customer).then(response => callback && callback(response));

    return {
        type: SIGNUP,
        payload: request
    }

}

export function loginAction(email, password) {

    const request = axios.post(`${CUSTOMER_URL}/auth?email=${email}&password=${password}`, {})

    return {
        type: LOGIN,
        payload: request
    }

}