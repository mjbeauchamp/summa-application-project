<template>
  <div>
    <Navbar v-bind:currentRoute="currentRoute"/>

    <v-container class='container'>
    <v-form v-model="valid">
    <v-text-field
      v-model="nameInput"
      v-on:change='nameChange'
      :rules="nameRules"
      label="Name"
      required
      outline
      class="textField"
    ></v-text-field>
    <v-text-field
      v-model="usernameInput"
      :rules="nameRules"
      label="Username"
      required
      outline
      class="textField"
    ></v-text-field>
    <v-text-field
      v-model="emailInput"
      :rules="emailRules"
      label="E-mail"
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



<v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="500">
      <v-btn
        :disabled="!valid"
        slot="activator"
        class="button"
        block
        large
        color="primary"
        dark
      >
        submit
      </v-btn>
      <v-card>
        <v-card-title class="headline">Please Confirm Your Information</v-card-title>
        <v-card-text>
          <p>Name: {{nameInput}}</p>
          <p>Username: {{usernameInput}}</p>
          <p>Email: {{emailInput}}</p>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" flat @click.native="dialog = false">Edit</v-btn>
          <v-btn color="green darken-1" flat @click.native="dialog = false" @click="submit">Confirm</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>


    <v-btn
      class="button"
      block
      large
      :disabled="!valid"
      @click="submit"
    >
      submit
    </v-btn>
    <p>Already have an account? <router-link to="/login">Login</router-link></p>
  </v-form>
  </v-container>


  </div>
</template>

<script>
import axios from 'axios'
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'Signup',
  data () {
    return {
      currentRoute: this.$route.name,
      dialog: false,
      nameInput: '',
      usernameInput: '',
      emailInput: '',
      passwordInput: '',
      valid: false,
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
  components: {
    Navbar
  },
  methods: {
    nameChange () {
      console.log(this.nameInput)
    },
    submit () {
      //if (this.$refs.form.validate()) {
        // Native form submission is not yet supported
        axios.post('/api/users', {
          name: this.nameInput,
          username: this.usernameInput,
          email: this.emailInput,
          password: this.passwordInput
        })
          .then(response => {
            this.nameInput = ''
            this.usernameInput = ''
            this.emailInput = ''
            this.passwordInput = ''
            console.log('State values:', this.nameInput, this.usernameInput, this.emailInput, this.passwordInput)
            this.$router.push('users')
          })
      //}
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.textField {
  width: 500px;
}

.container {
  padding: 60px 0px 40px 0px;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  width: 60%;
  background-color: lightgray;
}

.button {
  margin-bottom: 20px;
}

</style>
