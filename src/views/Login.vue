<template>
<v-container>
    <navbar />
    <v-layout>
        <v-flex>
            <div>
                <img alt="Vue logo" src="../assets/logo.png">
            </div>
            <v-card class="login">
                <v-form ref="form" v-model="valid" lazy-validation>
                    <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
                    <v-text-field v-model="password" label="Password" required></v-text-field>

                    <v-btn block color="success" class="mr-4" @click="login">
                        Login
                    </v-btn>
                </v-form>
            </v-card>
        </v-flex>
    </v-layout>
</v-container>
</template>

<script>
import navbar from '../components/navbar.vue';

export default {
  components: { navbar },
    data() {
        return {
            valid: true,
            email: '',
            password: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
        }
    },

    methods: {
        login() {
            if (this.$refs.form.validate()) {
               this.$store.commit('login', {
                    email: this.email,
                    password: this.password
                })
                this.$refs.form.reset();
                this.email = '';
                this.password = '';
            }
        },
    }
}
</script>

<style>
.login {
    text-align: left;
    padding: 10px;
    transition: all 0.5s;
    max-width: 500px;
    margin: auto;
}
</style>
