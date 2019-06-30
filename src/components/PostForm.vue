<template>
  <form v-if="!loading" class="form" @submit.prevent="onSubmit">
    <div class="input-field">
      <label for="title" class="title">Title</label>
      <input type="text" class="validate" name="title" v-model="title">
      <span class="helper-text" data-error="Title must not be empty"/>
    </div>
    <div class="input-field">
      <label for="body" class="title">Title</label>
      <input type="text" class="validate" name="body" v-model="body">
      <span class="helper-text" data-error="Body must not be empty"/>
    </div>
     <button type="submit" class="waves-effect waves-light btn">Add</button>
  </form>
</template>

<script>

import PostService from '../PostService';
const postService = new PostService();

export default {
   name : "PostForm",
   data() {
       return {
           loading : false,
           title : "",
           body : ""
       };
   },methods: {
       onSubmit(){
          this.loading = true;
          const post = {
              title : this.title,
              body : this.body
          };

          postService
            .saveOrUpdate(post)
            .then(res => console.log(res.data))
            .catch(err => console.error(err))
       }
   }
};
</script>

<style>
</style>

