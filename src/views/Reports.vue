<template>
<v-container>
    <navbar />
    <v-layout>
        <v-flex class="mb-15">
            <v-card class="report">

                <div class="d-flex flex-wrap justify-center">
                    <div class="mr-lg-5 mr-md-5">
                        <h1>Select Date</h1>
                        <v-date-picker v-model="picker"></v-date-picker>
                    </div>

                    <div>
                        <h1>Select Time</h1>
                        <v-time-picker v-model="timeStep" format="24hr"></v-time-picker>
                    </div>
                </div>
                <div class="d-flex flex-wrap justify-end">
                    <v-btn color="success" class="mr-4" @click="clear">
                        Clear
                    </v-btn>

                </div>
            </v-card>
        </v-flex>
    </v-layout>

    <v-layout>
        <v-flex>
            <v-card class="mx-auto mb-16" tile>
                <v-list dense>
                    <h1>REPORT LIST</h1>
                    <v-list-item-group color="primary">
                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item>ID</v-list-item>
                            </v-list-item-content>
                            <v-list-item-content>
                                <v-list-item>NAME</v-list-item>
                            </v-list-item-content>
                            <v-list-item-content>
                                <v-list-item>DATE</v-list-item>
                            </v-list-item-content>
                            <v-list-item-content>
                                <v-list-item>TIME</v-list-item>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item v-for="(item, i) in filterData" :key="i">
                            <v-list-item-content>
                                <v-list-item v-text="item.id"></v-list-item>
                            </v-list-item-content>
                            <v-list-item-content>
                                <v-list-item v-text="item.operatorName"></v-list-item>
                            </v-list-item-content>
                            <v-list-item-content>
                                <v-list-item v-text="item.date"></v-list-item>
                            </v-list-item-content>
                            <v-list-item-content>
                                <v-list-item v-text="item.time"></v-list-item>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list-item-group>
                    <h2 class="my-5" v-if="filterData.length === 0"> No data to show</h2>
                </v-list>
            </v-card>
        </v-flex>
    </v-layout>
</v-container>
</template>

<script>
import navbar from '../components/navbar.vue'
export default {
  components: { navbar },
    data() {
        return {
            picker: '',
            timeStep: '',
        }
    },

    computed: {

        filterData() {
            const that = this
            if (!this.picker && !this.timeStep) {
                return this.$store.state.reports
            }
            return this.$store.state.reports.filter(item => item.date === that.picker || item.time === that.timeStep)
        },
    },

    methods: {
        clear() {
            this.picker = "";
            this.timeStep = "";
        }
    }
}
</script>

<style>
.report {
    text-align: left;
    padding: 10px;
    transition: all 0.5s;
}
</style>
