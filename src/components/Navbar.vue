<template>
  <div id="nav">
    <h1 v-if="currentRoute === 'login'">Login</h1>
    <h1 v-if="currentRoute === 'signup'">Signup</h1>
    <h1 v-if="currentRoute === 'users'">Users</h1>
    <button id="logoutBtn" @click="logout" v-if="loginState">
      <h1>Logout</h1>
    </button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Navbar',
  props: {
    currentRoute: String,
    loginState: Boolean
  },
  methods: {
    logout () {
      axios.get('/api/logout')
        .then(response => {
          this.$store.commit('loggedOut')
          this.$router.push('login')
        })
    }
  }
}
</script>

<style scoped>
  #nav {
  width: 100%;
  background-color: lightgray;
  margin-bottom: 60px;
  padding: 20px 0px;
  position: relative;
}

#logoutBtn, h1 {
  display: inline;
}

#logoutBtn {
  position: absolute;
  left: 85%;
}
</style>
