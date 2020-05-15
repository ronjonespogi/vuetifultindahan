<template>
  <v-app>
    <v-app-bar app color="primary" dark >
      <div class="d-flex align-center">
        <v-img alt="Logo" class="shrink mr-2 ml-3" contain src="/logo.png" transition="scale-transition" width="40"/>
        <v-toolbar-title>tindahan.win</v-toolbar-title>
      </div>

      <v-btn class="ma-2" text to="/landing">Home</v-btn>
      <v-btn class="ma-2" text to="/about">About</v-btn>
      <v-btn class="ma-2" text to="/contact">Contact</v-btn>

      <v-spacer></v-spacer>

      <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="item in items"
        :key="item"
      >
        <v-card flat>
          <v-card-text v-text="text"></v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>



    </v-app-bar>

    <v-content>      
      <router-view/>
    </v-content>
    
  </v-app>
</template>

<script>


export default {
  name: 'App',

  components: {
    
  },

  data: () => ({
    tab: null,
      items: [
        'web', 'shopping', 'videos', 'images', 'news',
      ],
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscingtrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      
    }),
};
</script>
