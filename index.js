import axios from 'axios';

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
let token = document.head.querySelector('meta[name="csrf-token"]');
if (token) {
    axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
}
axios.defaults.baseURL = portal.API_URL + '/' + portal.ALIAS + '/' + portal.ACTIVITY_SLUG + '/' + portal.MODULE_INSTANCE_SLUG;
axios.defaults.params = {
    group_id: (portal.group === null ? null : portal.group.id),
    role_id: (portal.role === null ? null : portal.role.id)
};
export default axios;