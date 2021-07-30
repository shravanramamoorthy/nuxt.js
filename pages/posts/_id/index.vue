<template>
    <div>
        <h1>Welcome to Blog Post with ID {{$route.params.id}}</h1>
        <p>Title : {{loadedStuff.title}} </p>
        <p>Content: {{loadedStuff.content}}  </p>
        <p>Written by {{loadedStuff.author}} </p>
        <p>Last Edit was at {{loadedStuff.updatedDate}} </p>
    </div>
</template>

<script>

import axios from 'axios'
export default {
    asyncData (context) {
        return axios.get('https://nuxt-blog-7c432-default-rtdb.firebaseio.com/posts/' + context.params.id + '.json')
            .then(res => {
                return {
                    loadedStuff: res.data
                }
            })
            .catch(e => context.error(e))
    }
}
</script>