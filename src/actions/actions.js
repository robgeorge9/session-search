import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA';

export function FETCH_DATA() {
    const request = axios.get(url);

    return {
        type: FETCH_DATA,
        payload: request,
    }
} 
