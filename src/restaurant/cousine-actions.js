import axios from 'axios'

const BASE_URL = 'http://api-vanhack-event-sp.azurewebsites.net/api'
const COUSINE_URL = `${BASE_URL}/v1/Cousine`

export const FETCH_COUSINE = 'FETCH_COUSINE';

export function fetchCousinesAction() {

    const request = axios.get(COUSINE_URL)

    return {
        type: FETCH_COUSINE,
        payload: request
    }
}