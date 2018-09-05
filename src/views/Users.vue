<template>
  <div class="hello">
    <h1>Users</h1>
    <ul>
      <li v-for="item in users">
        <p>{{item.name}} </p>
        <p>{{item.username}} </p>
        <p>{{item.email}} </p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

// const API_URL = 'http://localhost:4000'

export default {
  name: 'Users',
  data () {
    return {
      users: [],
      warning: this.$store.state.warning
    }
  },
  mounted () {
    console.log(this.warning)
    axios.get(`api/users`)
      .then(response => {
        this.users = response.data
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

ul {
  list-style-type: none;
}

p {
  margin: 3px;
}

li {
  margin: 50px;
}
</style>
