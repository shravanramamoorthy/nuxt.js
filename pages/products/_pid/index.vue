<template>
    <h1>The product ID is {{$route.params.pid}} </h1>
</template> 


<script>
export default {
    validate(data) {
        return data.params.pid == 1;
    }
}
</script>