<template>
<v-container>
    <v-layout>
        <v-flex class="mb-15">
            <v-card class="car">
                <h1>ADD USER</h1>
                <v-form ref="form" v-model="valid" lazy-validation>
                    <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name" required></v-text-field>

                    <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

                    <v-btn block color="success" class="mr-4" @click="addUser">
                        Submit
                    </v-btn>
                </v-form>
            </v-card>
        </v-flex>
    </v-layout>

    <v-dialog v-model="dialog" min-width="300">
        <v-card class="px-5 py-4">
            <v-card-title class="text-h5 grey lighten-2">
                Update User
            </v-card-title>

            <v-form ref="form2"  v-model="valid2" lazy-validation class="px-5">
                <v-text-field v-model="editName" :counter="10" :rules="nameRules" label="Name" required></v-text-field>

                <v-text-field v-model="editEmail" :rules="emailRules" label="E-mail" required></v-text-field>

                <v-btn block color="success" class="mr-4" @click="updateUser">
                    Submit
                </v-btn>
            </v-form>

        </v-card>
    </v-dialog>

    <v-layout>
        <v-flex>
            <v-card class="mx-auto mb-16" tile>
                <v-list dense>
                    <h1>USER LIST</h1>
                    <v-list-item-group color="primary">
                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item>ID</v-list-item>
                            </v-list-item-content>
                            <v-list-item-content>
                                <v-list-item>TYPE</v-list-item>
                            </v-list-item-content>
                            <v-list-item-content>
                                <v-list-item>NAME</v-list-item>
                            </v-list-item-content>

                            <v-list-item-content>
                                <v-list-item>EMAIL</v-list-item>
                            </v-list-item-content>
                            <v-list-item-content>
                                <v-list-item>ACTION</v-list-item>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item v-for="(item, i) in getUser" :key="i">
                            <v-list-item-content>
                                <v-list-item v-text="item.id"></v-list-item>
                            </v-list-item-content>
                            <v-list-item-content>
                                <v-list-item v-text="item.type"></v-list-item>
                            </v-list-item-content>
                            <v-list-item-content>
                                <v-list-item v-text="item.name"></v-list-item>
                            </v-list-item-content>
                            <v-list-item-content>
                                <v-list-item v-text="item.email"></v-list-item>
                            </v-list-item-content>
                            <v-list-item-content>
                                <v-list-item class="text-primary">
                                    <div v-if="item.type === 'operator'" class="d-flex justify-start">
                                        <img alt="Vue logo" src="../assets/edit.png" width="18" height="18" class="mr-2" @click="onClickEdit(item)">
                                        <img alt="Vue logo" src="../assets/remove.png" width="18" height="18" @click="deleteUser(item.id)">
                                    </div>
                                </v-list-item>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-card>
        </v-flex>
    </v-layout>
</v-container>
</template>

<script>
export default {
    data() {
        return {
            id: 0,
            dialog: false,
            valid: true,
            valid2: true,
            name: '',
            email: '',
            editName: '',
            editEmail: '',
            nameRules: [
                v => !!v || 'Name is required',
                v => (v && v.length <= 10) || 'Name must be less than 10 characters',
            ],
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
        }
    },

    computed: {
        getUser() {
            return this.$store.state.users
        },
    },

    methods: {
        addUser() {
            if(this.$refs.form.validate()){
            this.$store.commit('addUser', {
                name: this.name,
                email: this.email
            })
            this.$refs.form.reset()
            this.name = '';
            this.email = ''
            }
        },
        deleteUser(id) {
            this.$store.commit('deleteUser', {
                id
            })
        },
        onClickEdit(data) {
            if(data.type === 'operator'){
                this.id = data.id;
                this.dialog = true;
                this.editName = this.getUser.filter(item => item.id === data.id) ?.[0].name;
                this.editEmail = this.getUser.filter(item => item.id === data.id) ?.[0].email;
            }
            
        },
        updateUser() {
            if(this.$refs.form2.validate()){
            this.$store.commit('updateUser', {
                id: this.id,
                name: this.editName,
                email: this.editEmail
            })
            this.dialog = false
            }
        }
    }
}
</script>

<style>
.car {
    text-align: left;
    padding: 10px;
    transition: all 0.5s;
}

li {
    display: flex;
    flex-wrap: wrap;
}

li>span {
    flex: 1;
    max-width: 250px;
}
</style>
