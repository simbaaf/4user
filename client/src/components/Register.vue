<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 class="text-xs-center" mt-5>
        <h1>Sign Up</h1>
      </v-flex>
      <v-flex xs12 sm6 offset-sm3 mt-3>
        <form>
          <v-layout column>
            <v-flex>
              <v-text-field
                name="fisrt_name"
                label="Fisrt Name"
                id="first_name"
                type="name"
                v-model="first_name"
               ></v-text-field>
            </v-flex>
            <v-flex>
              <v-text-field
                name="last_name"
                label="Last Name "
                id="last_name"
                type="name"
                v-model="last_name"
              ></v-text-field>
            </v-flex>
            <v-flex>
              <v-text-field
                name="email"
                label="Email"
                id="email"
                type="email"
                required
                v-model="email"
                ></v-text-field>
            </v-flex>
            <v-flex>
              <v-text-field
                name="password"
                label="Password"
                id="password"
                type="password"
                required
                v-model="password"
                ></v-text-field>
            </v-flex>
            <v-flex class="text-xs-center" mt-5>
              <v-btn color="primary" type="submit">Sign Up</v-btn>
            </v-flex>
          </v-layout>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios'
import router from '../router'
export default {
  data () {
    return {
      first_name: '',
      last_name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    register () {
      axios.post('users/register', {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        password: this.password
      }).then(res => {
        router.push({ name: 'Login' })
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>
