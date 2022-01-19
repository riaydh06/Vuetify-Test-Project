<template>
<div style="height: 80vh">
    <LMap :zoom="zoom" :center="center">
        <LTileLayer :url="url"></LTileLayer>
        <LMarker :lat-lng="userPosition"></LMarker>
    </LMap>
</div>
</template>

<script>
import {
    LMap,
    LTileLayer,
    LMarker
} from "vue2-leaflet";

export default {
    name: "Map",
    components: {
        LMap,
        LTileLayer,
        LMarker
    },
    data() {
        return {
            url: "https://{s}.tile.osm.org/{z}/{x}/{y}.png",
            zoom: 6,
            center: [23.867, 90.387],
            bounds: null,
            userPosition: [0,0]
        };
    },
    methods: {
        getCurrentPosition() {
            navigator.geolocation.getCurrentPosition(
                position => {
                    this.userPosition= [position.coords.latitude,position.coords.longitude ]
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
