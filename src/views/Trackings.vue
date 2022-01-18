<template>
<v-container>
    <v-layout>
        <v-flex class="mb-15">
            <v-card class="car">
                <h1>ADD CAR</h1>
                <v-form ref="form" v-model="valid" lazy-validation>
                    <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name" required></v-text-field>

                    <v-select v-model="type" :items="types" :rules="[v => !!v || 'Item is required']" label="Type" required></v-select>

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

            <v-form  v-model="valid" lazy-validation class="px-5">
                <v-text-field v-model="editName" :counter="10" :rules="nameRules" label="Name" required></v-text-field>

                <v-select v-model="editType" :items="types" :rules="[v => !!v || 'Item is required']" label="Type" required></v-select>

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
                                <v-list-item>NAME</v-list-item>
                            </v-list-item-content>
                            <v-list-item-content>
                                <v-list-item>TYPE</v-list-item>
                            </v-list-item-content>
                            <v-list-item-content>
                                <v-list-item>ACTION</v-list-item>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item v-for="(item, i) in cars" :key="i">
                            <v-list-item-content>
                                <v-list-item v-text="item.id"></v-list-item>
                            </v-list-item-content>
                            <v-list-item-content>
                                <v-list-item v-text="item.name"></v-list-item>
                            </v-list-item-content>
                            <v-list-item-content>
                                <v-list-item v-text="item.type"></v-list-item>
                            </v-list-item-content>
                            <v-list-item-content>
                                <v-list-item class="text-primary">
                                    <div class="d-flex justify-start">
                                        <img alt="Vue logo" src="../assets/edit.png" width="18" height="18" class="mr-2" @click="onClickEdit(i)">
                                        <img alt="Vue logo" src="../assets/remove.png" width="18" height="18" @click="deleteUser(i)">
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
import {
    mapState,
} from 'vuex';

export default {
    data() {
        return {
            id: 0,
            dialog: false,
            valid: true,
            name: '',
            type: null,
            editName: '',
            editType: null,
            nameRules: [
                v => !!v || 'Name is required',
                v => (v && v.length <= 10) || 'Name must be less than 10 characters',
            ],
            types: [
                'Hatchback',
                'Sedan',
                'Station wagon',
                'Sports car',
                'Convertible',
                'Coupe',
            ],
        }
    },

    computed: mapState({
        cars: state => state.cars,
    }),

    methods: {
        addUsers() {
            this.$refs.form.validate()
            this.$store.commit('addUsers', {
                name: this.name,
                type: this.type
            })
            this.$refs.form.reset()
            this.name = '';
            this.type = ''
        },
        deleteUsers(id) {
            this.$store.commit('deleteUsers', {
                id
            })
        },
        onClickEdit(id) {
            this.id = id;
            this.dialog = true;
            this.editName = this.cars[id].name
            this.editType = this.cars[id].type
        },
        updateUsers() {
            this.$store.commit('updateUsers', {
                id: this.id,
                name: this.editName,
                type: this.editType
            })
            this.dialog = false
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
</style>
