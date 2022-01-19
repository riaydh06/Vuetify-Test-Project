<template>
<v-container>
    <v-layout>
        <v-flex class="mb-15">
            <v-card class="cities">
                <h1>ADD CITIES</h1>
                <v-form ref="form" v-model="valid" lazy-validation>
                    <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name" required></v-text-field>

                    <v-select v-model="country" :items="countries" :rules="[v => !!v || 'Item is required']" label="Country" required></v-select>

                    <vue-csv-import v-model="csv" :map-fields="['Car', 'Operator']">
                        <template slot="error">
                            File type is invalid
                        </template>

                        <template slot="thead">
                            <tr>
                                <th>My Fields</th>
                                <th>Column</th>
                            </tr>
                        </template>

                        <template slot="next" slot-scope="{load}">
                            <!-- <button @click.prevent="load">load!</button> -->
                            <v-btn color="warning" class="mr-4" @click.prevent="load">
                                load
                            </v-btn>
                        </template>

                    </vue-csv-import>

                    <v-btn block color="success" class="mr-4" @click="addCities">
                        Submit
                    </v-btn>
                </v-form>
            </v-card>
        </v-flex>
    </v-layout>

    <v-dialog v-model="dialog" min-width="300">
        <v-card class="px-5 py-4">
            <v-card-title class="text-h5 grey lighten-2">
                Update Cities
            </v-card-title>

            <v-form ref="form2"  v-model="valid2" lazy-validation class="px-5">
                <v-text-field v-model="editName" :counter="10" :rules="nameRules" label="Name" required></v-text-field>

                <v-select v-model="editCountry" :items="countries" :rules="[v => !!v || 'Item is required']" label="Country" required></v-select>

                <v-btn block color="success" class="mr-4" @click="updateCities">
                    Submit
                </v-btn>
            </v-form>
        </v-card>
    </v-dialog>

    {{csv}}

    <v-layout>
        <v-flex>
            <v-card class="mx-auto mb-16" tile>
                <v-list dense>
                    <h1>CITY LIST</h1>
                    <v-list-item-group color="primary">
                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item>ID</v-list-item>
                            </v-list-item-content>
                            <v-list-item-content>
                                <v-list-item>NAME</v-list-item>
                            </v-list-item-content>
                            <v-list-item-content>
                                <v-list-item>COUNTRY</v-list-item>
                            </v-list-item-content>
                            <v-list-item-content>
                                <v-list-item>ACTION</v-list-item>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item v-for="(item, i) in cities" :key="i">
                            <v-list-item-content>
                                <v-list-item v-text="item.id"></v-list-item>
                            </v-list-item-content>
                            <v-list-item-content>
                                <v-list-item v-text="item.name"></v-list-item>
                            </v-list-item-content>
                            <v-list-item-content>
                                <v-list-item v-text="item.country"></v-list-item>
                            </v-list-item-content>
                            <v-list-item-content>
                                <v-list-item class="text-primary">
                                    <div class="d-flex justify-start">
                                        <img alt="Vue logo" src="../assets/edit.png" width="18" height="18" class="mr-2" @click="onClickEdit(i)">
                                        <img alt="Vue logo" src="../assets/remove.png" width="18" height="18" @click="deleteCities(i)">
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

import {
    VueCsvImport
} from 'vue-csv-import';

export default {
    components: {
        VueCsvImport
    },
    data() {
        return {
            csv: [],
            id: 0,
            dialog: false,
            valid: true,
            valid2: true,
            name: '',
            country: null,
            editName: '',
            editCountry: null,
            nameRules: [
                v => !!v || 'Name is required',
                v => (v && v.length <= 10) || 'Name must be less than 10 characters',
            ],
            countries: [
                'Bangladesh',
                'India',
                'Pakistan',
                'USA',
                'UAE',
                'Iran',
            ],
        }
    },

    computed: mapState({
        cities: state => state.cities,
    }),

    methods: {
        addCities() {
            if (this.$refs.form.validate()) {
                this.$store.commit('addCities', {
                    name: this.name,
                    country: this.country
                })
                this.$refs.form.reset()
                this.name = '';
                this.country = '';
            }
        },
        deleteCities(id) {
            this.$store.commit('deleteCities', {
                id
            })
        },
        onClickEdit(id) {
            this.id = id;
            this.dialog = true;
            this.editName = this.cities[id].name;
            this.editCountry = this.cities[id].country;
        },
        updateCities() {
            if (this.$refs.form2.validate()) {
                this.$store.commit('updateCities', {
                    id: this.id,
                    name: this.editName,
                    country: this.editCountry
                })
                this.dialog = false
            }
        }
    }
}
</script>

<style>
.cities {
    text-align: left;
    padding: 10px;
    transition: all 0.5s;
}
</style>
