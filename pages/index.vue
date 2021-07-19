<template>
    <div>
      <h1>Welcome to my page.</h1>
      <input type="text" placeholder="ID bolo" v-model = "userID"> 
      <button v-on:click = "buttonClicked()">Log my ID</button>
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
    }
  }

}
</script>
