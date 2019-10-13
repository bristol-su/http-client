import axios from 'axios';

let params = {};
if(portal.group !== null) {
    params['group_id'] = portal.group.id;
}
if(portal.role !== null) {
    params['role_id'] = portal.role.id;
}

const axiosInstance = axios.create({
    params: params,
    baseURL: portal.API_URL + '/' + portal.ALIAS + '/' + portal.ACTIVITY_SLUG + '/' + portal.MODULE_INSTANCE_SLUG
});

axiosInstance.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
let token = document.head.querySelector('meta[name="csrf-token"]');
if (token) {
    axiosInstance.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
}


export default axiosInstance;