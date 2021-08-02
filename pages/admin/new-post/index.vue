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
            this.$store.dispatch('addPost', postData).then(() => this.$router.push('/admin'))
        }
    }
}
</script>