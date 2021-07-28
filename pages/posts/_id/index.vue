<template>
    <div>
        <h1>Welcome to Blog Post with ID {{$route.params.id}}</h1>
        <p>Title : {{loadedStuff.title}} </p>
        <p>Content: {{loadedStuff.content}}  </p>
        <p>Author: {{loadedStuff.author}} </p>
    </div>
</template>

<script>
export default {
    asyncData (context, callback) {
    setTimeout(() => {
        callback(null, {
                loadedStuff: 
                    {id: "1", title: "My title", content: "My Content lorem ipsum dipsum dupsum luspsum", author: "Shravan"}

            })
        }, 1000);
    }
}
</script>