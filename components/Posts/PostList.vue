<template>
  <div>
    <section>
      <post-preview v-for = "post in posts" 
        :key = "String(post.id)" 
        :is-admin = "isAdmin" 
        :id = "post.id" 
        :title = "post.title" 
        :content= "post.content" />
    </section>
  </div>
</template>

<script>
import postPrev from '@/components/Posts/PostPreview.vue'
export default {
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    },
    posts: {
      type: Array,
      required: true 
    }, 
  },
  components: {
    'post-preview': postPrev
  }

}
</script>

<style scoped>
h1 {
  padding: 1rem;
  text-align: center;
  background-color: orange;
}
section {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  grid-gap: 5px
}
</style>