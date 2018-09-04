<template>
  <div class="hello">
    <h1>Users</h1>
    <p>{{this.myText}}</p>
  </div>
</template>

<script>
import axios from 'axios'

// const API_URL = 'http://localhost:4000'

export default {
  name: 'Users',
  data () {
    return {
      myText: 'Heya!'
    }
  },
  mounted () {
    axios.get(`/users`)
      .then(response => {
        this.myText = response.data
      })
    // let newWord = "Rawr!!!"
    // this.myText = newWord
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
    color: red;
    font-size: 50px;
}
</style>
