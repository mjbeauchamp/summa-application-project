<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/signup">Signup</router-link> |
      <router-link to="/users">Users</router-link> |
      <button @click="logout">Logout</button>
    </div>
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    
  methods: {
    logout () {
      //if (this.$refs.form.validate()) {
        // Native form submission is not yet supported
        axios.get('/api/logout')
          .then(response => {
            this.$router.push('login')
          })
      //}
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
