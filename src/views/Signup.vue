<template>
  <v-form v-model="valid">
    <v-text-field
      v-model="nameInput"
      v-on:change='nameChange'
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>
    <v-text-field
      v-model="usernameInput"
      :rules="nameRules"
      label="Username"
      required
    ></v-text-field>
    <v-text-field
      v-model="emailInput"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>
    <v-text-field
      v-model="passwordInput"
      :rules="passwordRules"
      label="Password"
      required
    ></v-text-field>
    <v-btn
      :disabled="!valid"
      @click="submit"
    >
      create account
    </v-btn>
    <p>Already have an account? <router-link to="/login">Login</router-link></p>
  </v-form>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Signup',
  data () {
    return {
      nameInput: '',
      usernameInput: '',
      emailInput: '',
      passwordInput: '',
      valid: true,
      nameRules: [
        v => !!v || 'Name is required'
        // v => v.length <= 10 || 'Name must be less than 10 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      passwordRules: [
        v => !!v || 'Password is required',
        v => v.length >= 12 || 'Password must be at least 12 characters'
      ]
    }
  },
  methods: {
    nameChange () {
      console.log(this.nameInput)
    },
    submit () {
      if (this.$refs.form.validate()) {
        // Native form submission is not yet supported
        axios.post('/signup', {
          name: this.nameInput,
          username: this.usernameInput,
          email: this.emailInput,
          password: this.passwordInput
        })
          .then(response => {
            this.$refs.form.reset()
          })
      }
    }
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
