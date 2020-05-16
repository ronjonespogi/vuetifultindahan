
<template>

    <v-row class="mt-4">
        
        <v-col class="mx-auto">
            <v-card class="mx-auto" max-width="600" :elevation="10">
                <v-img class="white--text align-end" height="200px" src="/womanlogin.jpg">
                 <v-card-title>Enter your credentials</v-card-title>
                </v-img>
                <v-container>
                    <v-col >
                        <v-form ref="form" v-model="valid" lazy-validation>               
                            <v-row class="mt-4 ml-4 mr-4">
                                <v-text-field v-model="user.username" :rules="usernameRules" label="Username" ></v-text-field>                            
                            </v-row>
                            <v-row class="mt-4 ml-4 mr-4">
                                <v-text-field v-model="user.password" :append-icon="showpass ? 'mdi-eye' : 'mdi-eye-off'"
                                    :type="showpass ? 'text' : 'password'" name="input-10-1" label="Password"
                                    hint="Enter you password" counter  @click:append="showpass = !showpass"
                                ></v-text-field>
                            </v-row>
                            <v-row class="mt-4">
                                <v-col class="text-right">
                                <v-btn :disabled="!valid" color="success" class="mr-4" @click="login">
                                    Login
                                </v-btn>

                                </v-col>
                            </v-row>
                        </v-form>
                    </v-col>
                </v-container> 
            </v-card>
        </v-col>
        
    </v-row>
  
</template>

<script>
  export default {
    data: () => ({
        user: {
            username: '',
            pasword: '',
        },
        valid: true,
        showpass: false,
        usernameRules: [ v => !!v || 'Username is required'],
        paswordRules: [ v => !!v || 'Enter your password' ],
        
        
    }),
    methods: {
        validate () {
            this.$refs.form.validate()
        },
        login() {
            this.$store.dispatch('currentUser/loginUser', this.user);
        }
    },
  }
</script>
    
