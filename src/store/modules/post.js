export default {
  actions: {
    async fetchPosts(ctx, limit = 5) {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
      )
      const resPosts = await response.json()
      ctx.commit('updatePosts', resPosts)
    },
  },

  mutations: {
    updatePosts(state, payload) {
      state.posts = payload
    },

    createPost(state, payload) {
      state.posts.unshift(payload)
    },
  },

  state: {
    posts: [],
  },

  getters: {
    allPosts(state) {
      return state.posts
    },

    postsCount(state) {
      return state.posts.length
    },
  },
}
