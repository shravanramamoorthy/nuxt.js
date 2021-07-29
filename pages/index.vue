<template>
  <div>
    <h1>Welcome to my Blog Post!</h1>
    <PostList :posts = "loadedContent" />
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList.vue'

export default {
  components: {
    PostList
  },
  computed: {
    loadedContent() {
      return this.$store.getters.loadedPosts
    }
  },
}
</script> 

<style scoped>
h1 {
  padding: 1rem;
  text-align: center;
  background-color: orange;
}

</style>