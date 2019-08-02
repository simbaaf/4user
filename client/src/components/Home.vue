<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 class="text-xs-center" mt-5>
        <h1>Welcome to 4User App</h1>
      </v-flex>
      <v-flex xs12 sm6 offset-sm3 mt-3>
        <blockquote class="blockquote text-xs-center">
          It's a basic Single Page application <br>
          contain the best technologies which allow you register and login anytime and everywhere :)
        </blockquote>
      </v-flex>
      <v-flex xs12 sm6 offset-sm3 class="text-xs-center" mt-5>
        <v-btn color="success" to="/Register">Sign Up</v-btn>
        <v-btn to="/Login">Sign In</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
 
}
</script>
