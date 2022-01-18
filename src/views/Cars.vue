<template>
<v-container>
    <v-layout>
        <v-flex class="car">
            <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name" required></v-text-field>

                <v-select v-model="type" :items="items" :rules="[v => !!v || 'Item is required']" label="Type" required></v-select>

                <v-btn color="success" class="mr-4" @click="validate">
                    Submit
                </v-btn>
            </v-form>
        </v-flex>
    </v-layout>
    
    <v-layout>
        <v-flex>
            <v-card class="mx-auto" tile>
                <v-list dense>
                    <v-subheader>CARS</v-subheader>
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
                                <v-list-item class="text-primary">DELETE</v-list-item>
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
        validate() {
            this.$refs.form.validate()
        },
    }
}
</script>

<style>
.car {
    text-align: left;
    padding: 5px;
    margin: auto;
    transition: all 0.5s;
    max-width: 500px;
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
