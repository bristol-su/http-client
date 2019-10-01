var axios = require('axios');

var axiosInstance = axios.create({
    baseURL: 'https://domain.com/foo/bar',
    /* other custom settings */
});

module.exports = axiosInstance;