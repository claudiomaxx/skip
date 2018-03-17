import axios from 'axios'


export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';

const BASE_URL = 'http://api-vanhack-event-sp.azurewebsites.net/api'
const PRODUCT_URL = `${BASE_URL}/v1/Product`

export function fetchProductListAction() {

    const request = axios.get(PRODUCT_URL)

    return {
        type: FETCH_PRODUCTS,
        payload: request
    }

}