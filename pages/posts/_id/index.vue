<template>
    <div>
        <h1>Welcome to Blog Post with ID {{$route.params.id}}</h1>
        <p>Title : {{loadedStuff.title}} </p>
        <p>Content: {{loadedStuff.content}}  </p>
        <p>Written by {{loadedStuff.author}} </p>
        <p>Last Edit was at {{loadedStuff.updatedDate | date}} </p>
    </div>
</template>

<script>

import axios from 'axios'
export default {
    asyncData (context) {
        return context.app.$axios.$get('/posts/' + context.params.id + '.json')
            .then(data => {
                return {
                    loadedStuff: data
                }
            })
            .catch(e => context.error(e))
    }
}
</script>