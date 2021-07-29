<template>
    <nuxt-link :to = "postLink" >
        <div>
            <div :style="{ backgroundImage: 'url(' + bgImg + ')'}"></div>
            <h2> {{title}} </h2>
            <p> {{preview}} </p>
        </div>
    </nuxt-link>    
</template>


<script>
export default { 
    props: {
        isAdmin: {type: Boolean, required: true},
        id: {type: String, required: true},
        title: {type: String, required: true},
        content: {type: String, required: true},
        preview: {type: String, required: true},
        bgImg: {type: String, required: true}
    },
    computed: {
        postLink: function () {
            return this.isAdmin ? '/admin/' + this.id : '/posts/' + this.id;
        } 
    }
}


</script>
<style scoped>
a {
    text-decoration: none !important;
}
div {
    width:22rem; height: 14rem;
    text-decoration: none;
    background-size: cover;
    /* border: 2px solid black; border-radius: 10px; */
    padding: 2px;
    text-align: center;
    color: black
}
img {
    max-width: 100%;
    border-radius: 10px;
}
</style>