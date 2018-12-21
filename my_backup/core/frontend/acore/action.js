import axios from 'axios';

export const ROOT_URL = (process.env.NODE_ENV === 'production') ? '/s/analytics' : 'https://localhost:8081/s/analytics';

export const ASYNC_START = 'ASYNC_START';
export const ASYNC_END = 'ASYNC_END';

export function postRequest(url, data)
{
    // x-www-form-urlencoded is needed here in order to bypass "OPTIONS" request
    return axios.post(`${ROOT_URL}${url}`, {}, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } });
}
