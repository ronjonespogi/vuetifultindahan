<template>
    <div>
        
        <v-row>
            <v-col cols="11" class="mx-auto">
                <v-card>
                    <v-toolbar :elevation="3" color="info" dark>
                    <v-toolbar-title>User Dashboard</v-toolbar-title>
                    </v-toolbar>
                    <v-tabs vertical>
                        <v-tab>
                            <v-icon left>mdi-account</v-icon>
                            Personal Info
                        </v-tab>
                        <v-tab>
                            <v-icon left>mdi-lock</v-icon>
                            Products
                        </v-tab>
                        <v-tab>
                            <v-icon left>mdi-access-point</v-icon>
                            Services
                        </v-tab>

                        <v-tab-item>
                            <v-card flat>
                            <v-card-text>
                                <v-form v-model="valid">
                                    <v-container>
                                    <v-row>
                                        <v-col cols="12" md="4">
                                            <v-text-field
                                                v-model="userInfo.name"
                                                label="Full name"
                                                required
                                            ></v-text-field>
                                        </v-col>

                                        <v-col cols="12" md="4">
                                            <v-text-field
                                                v-model="userInfo.business_name"
                                                label="Business Name"                                                
                                            ></v-text-field>
                                        </v-col>

                                        <v-col cols="12" md="4">
                                            <v-text-field
                                                v-model="userInfo.email"                                                
                                                label="E-mail"
                                                required
                                            ></v-text-field>
                                        </v-col>
                                    </v-row>
                                    </v-container>
                                </v-form>
                            </v-card-text>
                            </v-card>
                        </v-tab-item>
                        <v-tab-item>
                            <v-card flat>
                            <v-card-text>
                                02
                            </v-card-text>
                            </v-card>
                        </v-tab-item>
                        <v-tab-item>
                            <v-card flat>
                            <v-card-text>
                                03
                            </v-card-text>
                            </v-card>
                        </v-tab-item>
                    </v-tabs>
                </v-card>
            </v-col>
        </v-row>
    
    </div>
</template>
<script>
export default {
    name: 'UserDash',
    data() {
        return {
             valid: false,
             userInfo: {
                 name: '',
                 business_name: '',
             },
            // nameRules: [
            //     v => !!v || 'Name is required',
            //     v => v.length <= 10 || 'Name must be less than 10 characters',
            // ],
            // email: '',
            // emailRules: [
            //     v => !!v || 'E-mail is required',
            //     v => /.+@.+/.test(v) || 'E-mail must be valid',
            // ],
        }
    },
    methods: {
        loadUser(){
            this.userInfo = this.loggedUser;
        }
    },

    computed:  {
        loggedUser: {
          get() {
              
              console.log('computed');
              
              return this.$store.state.currentUser.user;
          }
      }
    },
    created() {
        console.log('created');
        
        this.loadUser();
    },

}
</script>