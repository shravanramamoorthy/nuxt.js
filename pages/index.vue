<template>
  <div>
    <h1>Welcome to my Blog Post!</h1>
    <PostList :posts = "loadedContent" />
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList.vue'
export default {
  asyncData (context, callback) {
    setTimeout(() => {
      callback (null, {
        loadedContent: [
        {id: "1", title: "Shravan oda Title", content: "Lorem ipsum dipsum dubsum lupsum"},
        {id: "2", title: "Shravan oda Title 2", content: "Lorem ipsum dipsum dubsum lupsum 2"},
        ]
      })
    }, 2000)
  },
  // data () {
  //   return {
  //     loadedContent: [
  //       {id: "1", title: "Shravan oda Title", content: "Lorem ipsum dipsum dubsum lupsum"},
  //       {id: "2", title: "Shravan oda Title 2", content: "Lorem ipsum dipsum dubsum lupsum 2"},
  //     ]
  //   }
  // },
  components: {
    PostList
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