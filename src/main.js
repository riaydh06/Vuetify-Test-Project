import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import './registerServiceWorker'
import store from './store'
import router from './router'

// Vue.config.productionTip = false

import { Icon } from "leaflet";
// Import the whole Leaflet CSS
import "leaflet/dist/leaflet.css";

Vue.config.productionTip = false;

// Resolve an issue where the markers would not appear
delete Icon.Default.prototype._getIconUrl;

Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});


new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
