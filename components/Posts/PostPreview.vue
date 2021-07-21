<template>
    <nuxt-link :to = "'/posts/' + id" >
        <div>
            <img src="https://www.netscribes.com/wp-content/uploads/2019/06/Technology-Watch.jpg" alt="">
            <h2> {{title}} </h2>
            <p> {{content}} </p>
        </div>
    </nuxt-link>    
</template>


<script>
export default { 
    props: {
        id: {type: String, required: true},
        title: {type: String, required: true},
        content: {type: String, required: true},
        bgImg: {type: String}
    } 
}


</script>
<style scoped>
a {
    text-decoration: none !important;
}
div {
    width:22rem; height: 20rem;
    text-decoration: none;
    border: 2px solid black; border-radius: 10px;
    padding: 2px;
    text-align: center;
    color: black
}
img {
    max-width: 100%;
    border-radius: 10px;
}
</style>