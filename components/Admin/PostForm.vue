<template>
    <div>
        <form @submit.prevent ="onSave">
            <AppControlInput v-model="editedPost.author"> Author Name </AppControlInput>
                    
            <AppControlInput v-model="editedPost.title"> Title </AppControlInput>
                    
            <AppControlInput v-model="editedPost.thumbnail"> Thumbnail Link </AppControlInput>

            <AppControlInput v-model="editedPost.preview"> Preview Text </AppControlInput>

            <AppControlInput
                    control-type="textarea"
                    v-model="editedPost.content">Content</AppControlInput>
                    
            <AppButton type="submit">Save</AppButton>
                    
            <AppButton
                    type="button"
                    style="margin-left: 10px"
                    btn-style="cancel"
                    @click="onCancel"> Cancel </AppButton> 
        </form>
    </div>
</template>

<script>
import AppControlInput from '@/components/UI-Components/AppControlInput'
import AppButton from '@/components/UI-Components/AppButton'

export default {
    props: {
        post: {
            type: Object,
            required: false
        }
    },
    components: {
        AppControlInput,
        AppButton
    },
    data () {
        return {
                editedPost: this.post ? {...this.post} : {
                    author: '',
                    title: '',
                    thumbnail:'',
                    preview:'',
                    content: ''
                }
        }
    },
    methods: {
        onSave: function() {
            this.$emit('submit', this.editedPost)
        },
        onCancel: function() {
            this.$router.push('/admin')
        } 
    }
}
</script>