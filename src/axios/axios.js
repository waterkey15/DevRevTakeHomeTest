import axios from 'axios'

const instance = axios.create({
    // baseURL: 'http://localhost:5001/apple-clone-21f05/us-central1/api'
    baseURL: 'https://mocki.io/'
});


export default instance;