<template>
<v-container>
    <navbar />
    <v-layout>
        <v-flex class="mb-15">
            <v-card class="cities">
                <h1>ADD CSV FILE</h1>

                <vue-csv-import v-model="csv" :map-fields="['city']">

                    <!-- <template slot="hasHeaders" slot-scope="{headers, toggle}">
                        <label>
                            <input type="checkbox" id="hasHeaders" :value="headers" class="my-5" @change="toggle">
                            Headers?
                        </label>
                    </template> -->

                    <template slot="error">
                        File type is invalid
                    </template>

                    <template slot="thead">
                        <tr class="my-4">
                            <th>My Fields</th>
                            <th>Column</th>
                        </tr>
                    </template>

                    <template slot="next" slot-scope="{load}">
                        <v-btn color="warning" class="my-4" @click.prevent="load">
                            load
                        </v-btn>
                    </template>

                </vue-csv-import>
            </v-card>

            <v-card v-if="csv.length !==0">
                <div class="text-left">
                    <pre>
                        <code >
                            {{csv}}
                        </code>
                    </pre>
                </div>
            </v-card>

            <v-card v-if="csv.length !==0" class="cities my-5">
                <h1>ADD CITIES</h1>
                <v-form ref="form" v-model="valid" lazy-validation>
                    <v-select v-model="name" :items="getCity" :rules="[v => !!v || 'Item is required']" label="City"></v-select>
                    <v-select v-model="car" :items="getCars" item-text="name" item-value="id" label="Car" :rules="[v => !!v || 'Item is required']" persistent-hint return-object single-line required></v-select>
                    <v-select v-model="operator" :items="getOperator" item-text="name" item-value="id" label="Operator" :rules="[v => !!v || 'Item is required']" persistent-hint return-object single-line required></v-select>

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

            <v-form ref="form2" v-model="valid2" lazy-validation class="px-5">
                <v-text-field v-model="editName" :counter="10" :rules="nameRules" label="City" required></v-text-field>
                <v-select v-model="editCar" :items="getCars" item-text="name" item-value="id" label="Car" :rules="[v => !!v || 'Item is required']" persistent-hint return-object single-line></v-select>
                <v-select v-model="editOperator" :items="getOperator" item-text="name" item-value="id" label="Operator" :rules="[v => !!v || 'Item is required']" persistent-hint return-object single-line required></v-select>

                <v-btn block color="success" class="mr-4" @click="updateCities">
                    Submit
                </v-btn>
            </v-form>
        </v-card>
    </v-dialog>

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
                                <v-list-item>CAR</v-list-item>
                            </v-list-item-content>
                            <v-list-item-content>
                                <v-list-item>OPERATOR</v-list-item>
                            </v-list-item-content>
                            <v-list-item-content>
                                <v-list-item>ACTION</v-list-item>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item v-for="(item, i) in getCities" :key="i">
                            <v-list-item-content>
                                <v-list-item v-text="item.id"></v-list-item>
                            </v-list-item-content>
                            <v-list-item-content>
                                <v-list-item v-text="item.name"></v-list-item>
                            </v-list-item-content>
                            <v-list-item-content>
                                <v-list-item v-text="item.carName"></v-list-item>
                            </v-list-item-content>
                            <v-list-item-content>
                                <v-list-item v-text="item.operatorName"></v-list-item>
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
    VueCsvImport
} from 'vue-csv-import';
import Navbar from '../components/navbar.vue';

export default {
    components: {
        VueCsvImport,
        Navbar
    },
    data() {
        return {
            csv: [],
            id: 0,
            dialog: false,
            valid: true,
            valid2: true,
            name: '',
            car: '',
            operator: '',
            editName: '',
            editCar: '',
            editOperator: '',
            nameRules: [
                v => !!v || 'Name is required',
                v => (v && v.length <= 10) || 'Name must be less than 10 characters',
            ],
        }
    },

    computed: {
        getCities() {
            return this.$store.state.cities
        },
        getCity() {
            let cities = []
            this.csv.map(item => {
                cities.push(item.city)
            })

            return cities
        },
        getCars() {
            return this.$store.state.cars
        },
        getOperator() {
            return this.$store.state.users.filter(item => item.type === 'operator')
        },
    },

    methods: {
        addCities() {
            if (this.$refs.form.validate()) {
                this.$store.commit('addCities', {
                    name: this.name,
                    car: this.car,
                    operator: this.operator
                })
                this.$refs.form.reset()
                this.name = '';
                this.car = '';
                this.operator = '';
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
            this.editName = this.getCities[id].name;
            this.editCar = this.getCities[id];
            this.editOperator = this.getCities[id];
        },
        updateCities() {
            if (this.$refs.form2.validate()) {
                this.$store.commit('updateCities', {
                    id: this.id,
                    name: this.editName,
                    car: this.editCar,
                    operator: this.editOperator
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

.form-control {
    border: 1px solid #999;
}

code {
    background-color: #eee;
    border: 1px solid #999;
    display: block;
    padding: 20px;
    font-family: monospace;
}
</style>
