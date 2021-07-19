<template>
   <div>
      <nuxt-child />  
      <input type="text" placeholder="ID bolo" v-model = "userID"> 
      <button v-on:click = "buttonClicked()">Log my ID</button> <br><br>
   </div>
</template>

<script>
export default {
  data() {
    return {
      userID: '',
    }
  },
  methods: {
    buttonClicked: function() {
      this.$router.push('/users/' + this.userID)
    },
    productBtnClicked: function() {
      this.$router.push('/products')
    },
  },
  layout : 'users'
}
</script>