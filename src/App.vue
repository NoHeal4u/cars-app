<template>
  <div id="app">
    
    <Navbar/>
    <router-view></router-view>

  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import AppCars from './components/AppCars.vue'

export default {
  name: 'app',
  components: {
    Navbar,
    AppCars,

  }
}
</script>

<style>

</style>
