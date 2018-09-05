<template>
  <div>
    <Navbar v-bind:currentRoute="currentRoute" v-bind:loginState="this.$store.state.userIsLoggedIn"/>

    <v-alert
      v-model="alert"
      dismissible
      type="error"
      color="red"
    >
      Please enter a correct username and password.
    </v-alert>
    <v-container class="container">
    <v-form v-model="valid">
      <v-text-field
        v-model="usernameInput"
        :rules="usernameRules"
        label="Username"
        required
        outline
        class="textField"
      ></v-text-field>
      <v-text-field
        v-model="passwordInput"
        :rules="passwordRules"
        label="Password"
        required
        outline
        class="textField"
      ></v-text-field>
      <v-btn
        :disabled="!valid"
        @click="login"
        block
        large
        class="button"
      >
        submit
      </v-btn>
      <p>Don't have an account? <router-link to="/signup">Signup</router-link></p>
  </v-form>
  </v-container>
  </div>
</template>

<script>
import axios from 'axios'
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'Login',
  data () {
    return {
      alert: false,
      currentRoute: this.$route.name,
      usernameInput: '',
      passwordInput: '',
      valid: false,
      tryAgain: false,
      usernameRules: [
        v => !!v || 'Username is required'
      ],
      passwordRules: [
        v => !!v || 'Password is required',
        v => v.length >= 12 || 'Password must be at least 12 characters'
      ]
    }
  },
  components: {
    Navbar
  },
  methods: {
    login () {
      axios.post('/api/login', {
        username: this.usernameInput,
        password: this.passwordInput
      })
        .then(response => {
          if (response.data) {
            this.$store.commit('loggedIn')
            this.$router.push('users')
          } else {
            this.alert = true
          }
        })
    }
  }
}
</script>

<style scoped>
.container {
  padding-bottom: 212px;
}
</style>
