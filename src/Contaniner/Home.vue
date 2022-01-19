<template>
  <div class="home">
    <navbar/>
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>
import navbar from '../components/navbar.vue'

export default {
  components: { navbar },
  name: 'Home',

}
</script>
