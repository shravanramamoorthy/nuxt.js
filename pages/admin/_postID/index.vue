<template>
    <div>
        <post-form @submit="onSubmitted" :post = "loadedPost"/>
    </div>
</template>

<script>
import PostForm from '@/components/Admin/PostForm.vue'
import axios from 'axios'

export default {
    components: {
        PostForm
    },
    asyncData(context) {
        return axios.get('https://nuxt-blog-7c432-default-rtdb.firebaseio.com/posts/' +  context.params.postID + '.json')
            .then(res => {
                return {
                    loadedPost: res.data
                }
            })
            .catch(e => context.error(e))
    },
    methods: {
        onSubmitted(editedPost) {
            return axios.put('https://nuxt-blog-7c432-default-rtdb.firebaseio.com/posts/' +  this.$route.params.postID + '.json', editedPost)
                .then(res => {
                    this.$router.push('/admin')
                })
        }
    }
}
</script>