<template>
<div id="nav" class="my-5">
    <div v-if="userType ==='manager'&& login ">
        <router-link to="/">Home</router-link> |
        <router-link to="/cars">Cars</router-link> |
        <router-link to="/cities">Cities</router-link> |
        <router-link to="/reports">Reports</router-link> |
        <router-link to="/users">Users</router-link> |
        <router-link to="/trackings">Trackings</router-link> |
        <span @click="logout"><b>Logout</b></span>
    </div>

    <div v-else-if="userType ==='operator' && login">
        <router-link to="/">Home</router-link> |
        <router-link to="/navigation">Navigation</router-link> |
        <span @click="logout"><b>Logout</b></span>
    </div>

     <div v-else>
        <router-link to="/">Home</router-link> |
         <router-link to="/login">Login</router-link>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            userType: '',
            login: ''
        }
    },
    methods: {
      logout(){
        localStorage.removeItem('login')
        localStorage.removeItem('userType')
        this.$router.push('/login')
      }
    },
    mounted(){
      this.userType = localStorage.getItem('userType')
      this.login = localStorage.getItem('login')
    }
}
</script>
