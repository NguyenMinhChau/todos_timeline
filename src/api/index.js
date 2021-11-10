import axios from 'axios';
let API_URL = 'https://fakestoreapi.com';
export default function callApi(endpoint,method = 'GET', body) {
    return axios({
        method,
        url: `${API_URL}/${endpoint}`,
        data: body
    }).catch(err => {
        console.log(err);
    });
}