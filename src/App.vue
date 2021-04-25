<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <h1>Simple vuex app</h1>
    <PostForm />
    <h2>Count of posts: {{ postsCount }}</h2>
    <div class="post" v-for="post of allPosts" :key="post.id">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import PostForm from '@/components/PostForm'

export default {
  name: 'App',

  computed: mapGetters(['allPosts', 'postsCount']),

  methods: mapActions(['fetchPosts']),

  async mounted() {
    this.fetchPosts()
  },

  components: { PostForm },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
  width: 400px;
}

.post {
  border: 1px solid lightgray;
  border-radius: 0.4rem;
  margin-bottom: 1rem;
  padding: 0.8rem;
}
</style>
