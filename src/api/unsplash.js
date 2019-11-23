import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 9d254370034649ca2b86fc602c456a1f1479d425e03710996dc9e00579fd57bc',
    }
});