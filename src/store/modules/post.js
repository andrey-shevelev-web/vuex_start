export default {
  actions: {
    async fetchPosts({ commit }, limit = 5) {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
      )
      const resPosts = await response.json()
      commit('updatePosts', resPosts)
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
    validPosts(state) {
      return state.posts.filter(item => {
        return item.title && item.body
      })
    },

    allPosts(state) {
      return state.posts
    },

    postsCount(state, getters) {
      return getters.validPosts.length
    },
  },
}
