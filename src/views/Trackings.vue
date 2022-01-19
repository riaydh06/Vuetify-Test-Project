<template>
  <v-container style="height: 80vh">
    <navbar />
    <LMap :zoom="zoom" :center="center">
      <LTileLayer :url="url"></LTileLayer>
      <LMarker v-for="(item, i) in cars" :key="i+'c'" :lat-lng="item.position"></LMarker>
      <LMarker v-for="(item, i) in users" :key="i+'0'" :lat-lng="item.position"></LMarker>
    </LMap>
  </v-container>
</template>
      
<script>
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
import { mapState } from 'vuex';
import Navbar from '../components/navbar.vue';

export default {
  name: "Map",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    Navbar
  },
  data() {
    return {
      url: "https://{s}.tile.osm.org/{z}/{x}/{y}.png",
      zoom: 6,
      center: [46.5322, 2.9482],
      bounds: null
    };
  },
  computed: mapState({
        cars: state => state.cars,
        users: state => state.users,
    }),
};
</script>
