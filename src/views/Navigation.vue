<template>
<v-container style="height: 80vh">
    <navbar />
    <LMap :zoom="zoom" :center="center">
        <LTileLayer :url="url"></LTileLayer>
        <LMarker :lat-lng="userPosition"></LMarker>
    </LMap>
</v-container>
</template>

<script>
import {
    LMap,
    LTileLayer,
    LMarker
} from "vue2-leaflet";
import Navbar from '../components/navbar.vue';

export default {
    name: "Map",
    components: {
        LMap,
        LTileLayer,
        LMarker,
        Navbar,

    },
    data() {
        return {
            url: "https://{s}.tile.osm.org/{z}/{x}/{y}.png",
            zoom: 6,
            center: [23.867, 90.387],
            bounds: null,
            userPosition: [0, 0]
        };
    },
    methods: {
        getCurrentPosition() {
            navigator.geolocation.getCurrentPosition(
                position => {
                    this.userPosition = [position.coords.latitude, position.coords.longitude]
                    console.log(position.coords.latitude);
                    console.log(position.coords.longitude);
                },
                error => {
                    console.log(error.message);
                },
            )
        }
    },
    mounted() {
        this.getCurrentPosition()
    },
}
</script>
