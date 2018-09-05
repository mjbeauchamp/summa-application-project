<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  // data () {
  //   return {
  //     currentRoute: this.$route.name
  //   }
  // },
  //  mounted () {
  //   console.log(this.currentRoute)
  // },
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
}

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
