import axios from 'axios'

const BASE_URL = 'http://api-vanhack-event-sp.azurewebsites.net/api'
const STORES_URL = `${BASE_URL}/v1/Store`

export const FETCH_STORES = 'FETCH_STORES';

export function fetchStoresAction() {

    const request = axios.get(STORES_URL)

    return {
        type: FETCH_STORES,
        payload: request
    }
}