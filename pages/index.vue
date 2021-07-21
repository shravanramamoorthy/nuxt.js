<template>
  <div>
    <h1>Welcome to my Blog Post!</h1>
    <PostList />
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList.vue'
export default {
  components: {
    PostList
  }

}
</script> 

<style scoped>
h1 {
  padding: 1rem;
  text-align: center;
  background-color: orange;
}

</style>