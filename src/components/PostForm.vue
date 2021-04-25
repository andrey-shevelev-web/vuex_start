<template>
  <form @submit.prevent="onSubmit">
    <input v-model="title" type="text" placeholder="Title" />
    <input v-model="body" type="text" placeholder="Body" />
    <button type="submit">Create Post</button>
    <hr />
  </form>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      title: '',
      body: '',
    }
  },

  methods: {
    ...mapMutations(['createPost']),
    onSubmit() {
      this.createPost({
        id: Date.now(),
        title: this.title,
        body: this.body,
      })

      this.title = this.body = ''
    },
  },
}
</script>

<style scoped>
input {
  display: block;
  width: 100%;
  border: 1px solid lightgray;
  border-radius: 0.15rem;
  padding: 0.6rem;
  margin-bottom: 0.6rem;
  box-sizing: border-box;
}
</style>
