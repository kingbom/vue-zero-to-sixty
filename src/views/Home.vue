<template>
    <h3>Home</h3>
</template>

<script>
import PostService from '../PostService';
const postService = new PostService();
export default {
    name : "Home",
    data() {
        return {
          posts: []
        }
    },
    created() {
        postService
            .getPosts()
            .then(res => this.posts = res.data)
            .catch(err => console.error(err));
    }
}
</script>
