<template>
  <div>
    <NavBar
      :current-route="currentRoute"
      :login-state="this.$store.state.userIsLoggedIn"
    />

    <v-container class='container'>
      <v-form v-model="valid">
        <v-text-field
          v-model="nameInput"
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

        <v-layout
          row
          justify-center
        >
          <v-dialog
            v-model="dialog"
            persistent
            max-width="500"
          >
            <v-card>
              <v-card-title class="headline">Please Confirm Your Information</v-card-title>
              <v-card-text>
                <p>Name: {{nameInput}}</p>
                <p>Username: {{usernameInput}}</p>
                <p>Email: {{emailInput}}</p>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="green darken-1"
                  flat
                  @click.native="dialog = false"
                >Edit</v-btn>
                <v-btn
                  color="green darken-1"
                  flat
                  @click.native="dialog = false"
                  @click="submit"
                >Confirm</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-layout>

        <v-btn
          class="button"
          block
          large
          :disabled="!valid"
          @click="showModal"
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
import NavBar from '@/components/Navbar.vue'

export default {
  name: 'SignupPage',
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
    NavBar
  },
  methods: {
    showModal () {
      this.dialog = true
    },
    submit () {
      axios.post('/api/users', {
        name: this.nameInput,
        username: this.usernameInput,
        email: this.emailInput,
        password: this.passwordInput
      })
        .then(response => {
          this.$store.commit('loggedIn')
          this.$router.push('users')
        })
    }
  }
}
</script>
