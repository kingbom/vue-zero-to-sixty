import axios from 'axios'

axios.defaults.baseURL = 'https://ndb99xkpdk.execute-api.eu-west-2.amazonaws.com/dev';

export default class PostService {

    findAll() {
        return axios.get('/posts');
    }

    findById(id) {
        return axios.get(`/posts/${id}`);
    }

    saveOrUpdate(post) {
        if (post.id) return axios.put(`/posts/${post.id}`, post);
        else return axios.post('/posts', post)
    }

    deleteById(id) {
        return axios.delete(`/posts/${id}`);
    }
}