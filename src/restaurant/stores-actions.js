import axios from 'axios'

const BASE_URL = 'http://api-vanhack-event-sp.azurewebsites.net/api'
const STORES_URL = `${BASE_URL}/v1/Store`
const STORES_BY_COUSINE_URL = `${BASE_URL}/v1/Cousine`

export const FETCH_STORES = 'FETCH_STORES';
export const FETCH_STORES_BY_COUSINE = 'FETCH_STORES_BY_COUSINE';

export function fetchStoresAction() {

    const request = axios.get(STORES_URL)

    return {
        type: FETCH_STORES,
        payload: request
    }
}

export function fetchStoresByCousineAction(cousineId) {

    const request = axios.get(`${STORES_BY_COUSINE_URL}/${cousineId}/stores`)

    return {
        type: FETCH_STORES_BY_COUSINE,
        payload: request
    }
}
