<template>
  <div class="hello">
    <NavBar
      :current-route="currentRoute"
      :login-state="this.$store.state.userIsLoggedIn"
    />

    <ul>
      <li
        v-for="item in users"
        :class="{ highlight: item.id === currentUser.id  }"
        :key="item.id"
      >
        <p>{{item.name}}</p>
        <p>{{item.username}}</p>
        <p>{{item.email}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import NavBar from '@/components/Navbar.vue'

export default {
  name: 'UsersPage',
  data () {
    return {
      currentRoute: this.$route.name,
      users: [],
      currentUser: {}
    }
  },
  components: {
    NavBar
  },
  mounted () {
    axios.get(`api/users`)
      .then(response => {
        this.users = response.data
        axios.get('/api/current_user')
          .then(current => {
            this.currentUser = current.data
          })
      })
  }
}
</script>

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
  margin: 30px;
}

.highlight {
  color: teal;
  border: 2px solid teal;
  padding: 20px;
  font-weight: bold;
}
</style>
