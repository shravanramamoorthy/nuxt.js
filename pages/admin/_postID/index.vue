<template>
    <div>
        <post-form :post = "loadedPost"/>
    </div>
</template>

<script>
import PostForm from '@/components/Admin/PostForm.vue'

export default {
    components: {
        PostForm
    },
    data () {
        return {
            loadedPost: {
                author: 'Shravan',
                title: 'Gibbersh',
                content: ' lorem ipsum dipsum dupsum gupsum ',
            }
        }

    }
}
</script>