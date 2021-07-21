<template>
    <div>
        <AppButton @click = "$router.push('/admin/new-post')">Create New Post</AppButton>
        <hr>
        <h1>List of Existing Posts</h1>
        <post-list isAdmin = "true" />
    </div>

</template>


<script>
import PostList from '@/components/Posts/PostList.vue'
import AppButton from '@/components/UI-Components/AppButton'
export default {
  components: {
    PostList,
    AppButton
  }

}
</script>

<style scoped>
div {
    margin-top: 1rem;
    text-align: center;
}
hr {
    width: 50%;
    margin: 1rem auto;
}
</style>