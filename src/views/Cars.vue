<template>
<v-container>
    <v-layout>
        <v-flex class="mb-15">
            <v-card class="car">
                <h1>ADD CAR</h1>
                <v-form ref="form" v-model="valid" lazy-validation>
                    <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name" required></v-text-field>

                    <v-select v-model="type" :items="items" :rules="[v => !!v || 'Item is required']" label="Type" required></v-select>

                    <v-btn block color="success" class="mr-4" @click="addCar">
                        Submit
                    </v-btn>
                </v-form>
            </v-card>
        </v-flex>
    </v-layout>

    <v-layout>
        <v-flex>
            <v-card class="mx-auto" tile>
                <v-list dense>
                    <h1>CARS LIST</h1>
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
                                        <img alt="Vue logo" src="../assets/edit.png" width="18" height="18" class="mr-2">
                                        <img alt="Vue logo" src="../assets/remove.png" width="18" height="18" @click="deleteCar(i)">
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
            valid: true,
            name: '',

            type: null,
            nameRules: [
                v => !!v || 'Name is required',
                v => (v && v.length <= 10) || 'Name must be less than 10 characters',
            ],
            items: [
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
        addCar() {
            this.$refs.form.validate()
            this.$store.commit('addCar', {
                name: this.name,
                type: this.type
            })
            this.$refs.form.reset()
            this.name='';
            this.type=''
        },
        deleteCar(id){
            this.$store.commit('deleteCar', {
                id
            })
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
