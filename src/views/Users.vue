<template>
  <div class="hello">
    <Navbar v-bind:currentRoute="currentRoute"/>

    <ul>
      <li v-for="item in users" v-bind:class="{ highlight: item.id === currentUser.id  }">
        <p>{{item.name}}</p>
        <p>{{item.username}}</p>
        <p>{{item.email}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'Users',
  data () {
    return {
      currentRoute: this.$route.name,
      users: [],
      currentUser: {}
    }
  },
  components: {
    Navbar
  },
  mounted () {
    console.log(this.$route.name)
    console.log(this.$store.state.userIsLoggedIn)
    axios.get(`api/users`)
      .then(response => {
        this.users = response.data
        axios.get('/api/current_user')
          .then(current => {
            this.currentUser = current.data
            console.log(this.currentUser)
          })
      })
    // let newWord = "Rawr!!!"
    // this.myText = newWord
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

p {
  margin: 3px;
}

li {
  margin: 50px;
}

.highlight {
  color: teal;
  border: 2px solid teal;
  padding: 20px;
  font-weight: bold;
}
</style>
