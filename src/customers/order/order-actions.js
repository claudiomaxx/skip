import axios from 'axios'

export const ORDER = 'ORDER';
export const ORDER_LIST = 'ORDER_LIST';

const BASE_URL = 'http://api-vanhack-event-sp.azurewebsites.net/api'
const ORDER_URL = `${BASE_URL}/v1/Order`

export function orderAction(order) {
    
    const request = axios.post(ORDER_URL, order)

    return {
        type: ORDER,
        payload: request
    }

}

export function orderListAction(customerId) {

    const request = axios.post(ORDER_URL)

    return {
        type: ORDER_LIST,
        payload: request
    }
}
