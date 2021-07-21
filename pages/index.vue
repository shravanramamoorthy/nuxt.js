<template>
  <div>
    <h1>Welcome to my Blog Post!</h1>
    <section>
      <post-preview :id = "'1'" :title = "'Title One'" :content="'gibersarasn'" />
      <post-preview :id = "'2'" :title = "'Title Two'" :content="'oooooooo'"/>
      <post-preview :id = "'3'" :title = "'Title Three'" :content="'kkkkkkkk'"/>
      <post-preview :id = "'4'" :title = "'Title Four'" :content="'roooooooo'"/>
      <post-preview :id = "'5'" :title = "'Title Five'" :content="'hehehehehheh'"/>
      <post-preview :id = "'6'" :title = "'Title Six'" :content="'kakakakak'"/>

    </section>
  </div>
</template>

<script>
import postPrev from '../components/Posts/PostPreview.vue'
export default {
  components: {
    'post-preview': postPrev
  }

}
</script>

<style scoped>
h1 {
  padding: 1rem;
  text-align: center;
  background-color: orange;
}
section {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  grid-gap: 5px
}
</style>