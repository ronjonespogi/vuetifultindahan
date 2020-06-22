<template>
  <v-app>
    <v-app-bar app color="primary" dark >
      <div class="d-flex align-center">
        <v-img alt="Logo" class="shrink mr-2 ml-3" contain src="/logo.png" transition="scale-transition" width="40"/>
        <v-toolbar-title class="mr-4">tindahan</v-toolbar-title>
      </div>

      <v-btn class="ma-2" text to="/">Home</v-btn>
      <v-btn class="ma-2" text to="/about">About</v-btn>
      <!-- <v-btn class="ma-2" text to="/contact">Contact</v-btn> -->
      

      <v-spacer></v-spacer>
      <!-- <v-btn v-if="!loggedIn" class="ma-2" text to="/login">Login</v-btn> -->
<!--       
      <v-menu v-else bottom left>
        <template v-slot:activator="{ on }">
          <v-btn dark icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item to="/dashboard">{{ loggedUser.name }} </v-list-item>
          <v-list-item @click="logout">Logout </v-list-item>
        </v-list>
      </v-menu> -->
    </v-app-bar>

    <v-content>      
      <router-view/>
    </v-content>
    
  </v-app>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',

  components: {
    
  },

  data: () => ({
    
  }),
  methods: {
    logout() {
      this.$store.dispatch('currentUser/logoutUser');
    },
    loadUserProfile() {
      console.log('Loading User Profile');
      
    }
  },
  computed: {
      loggedIn: {
          get() {
              return this.$store.state.currentUser.loggedIn;
          }
      },
      loggedUser: {
          get() {
              return this.$store.state.currentUser.user;
          }
      }
  },
  created() {
    //get token if there is token
    let tok = localStorage.getItem("ronrongwapo");
    if(tok)
    {
      axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem("ronrongwapo");
      this.$store.dispatch('currentUser/getUser');
    }
    else {
      //window.location.replace('/');
      //this.logout();
    }
  }
  };
</script>
