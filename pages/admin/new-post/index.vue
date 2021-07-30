<template>
    <div>
        <post-form @submit ="onSubmitted"/>
    </div>
</template>

<script>
import axios from 'axios'
import PostForm from '@/components/Admin/PostForm.vue'

export default {
    components: {
        PostForm
    },
    layout: 'admin',
    methods: {
        onSubmitted(postData) {
            axios.post('https://nuxt-blog-7c432-default-rtdb.firebaseio.com/posts.json', {...postData, updatedDate: new Date()})
                .then(result => console.log(result))
                .catch(e => console.log(e))
        }
    }
}
</script>