<template>
  <div>
    <Navbar v-bind:currentRoute="currentRoute"/>
    
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
      currentRoute: this.$route.name,
      usernameInput: '',
      passwordInput: '',
      valid: false,
      usernameRules: [
        v => !!v || 'Username is required'
        // v => v.length <= 10 || 'Name must be less than 10 characters'
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
      // if (this.$refs.form.validate()) {
      // Native form submission is not yet supported
      axios.post('/api/login', {
        username: this.usernameInput,
        password: this.passwordInput
      })
        .then(response => {
          this.$store.commit('loggedIn')
          // this.usernameInput = ''
          // this.passwordInput = ''
          // console.log(response)
          this.$router.push('users')
        })
      // }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.container {
  padding-bottom: 212px;
}
</style>
