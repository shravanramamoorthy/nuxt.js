<template>
  <div>
    <h1>Here is the list of all posts!</h1>
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