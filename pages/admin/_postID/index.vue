<template>
    <div>
        <post-form @submit="onSubmitted" :post = "loadedPost"/>
    </div>
</template>

<script>
import PostForm from '@/components/Admin/PostForm.vue'
// import axios from 'axios'

export default {
    middleware: 'auth',
    components: {
        PostForm
    },
    asyncData(context) {
        return context.app.$axios.$get('https://nuxt-blog-7c432-default-rtdb.firebaseio.com/posts/' +  context.params.postID + '.json')
            .then(data => {
                return {
                    loadedPost: {...data, id: context.params.postID}
                }
            })
            .catch(e => context.error(e))
    },
    methods: {
        onSubmitted(editedPost) {
            this.$store.dispatch('editPost', editedPost).then(() => this.$router.push('/admin'))
        }
    }
}
</script>   