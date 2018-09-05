<template>
  <div id="nav">
    <h1 v-if="currentRoute === 'login'">Login</h1>
    <h1 v-if="currentRoute === 'signup'">Signup</h1>
    <h1 v-if="currentRoute === 'users'">Users</h1>
    <button id="logoutBtn" @click="logout" v-if="currentRoute === 'users'">
      <h1>Logout</h1>
    </button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Navbar',
  props: {
    currentRoute: String
  },
  methods: {
    logout () {
    // if (this.$refs.form.validate()) {
      // Native form submission is not yet supported
      axios.get('/api/logout')
        .then(response => {
          this.$store.commit('loggedOut')
          this.$router.push('login')
        })
    // }
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
