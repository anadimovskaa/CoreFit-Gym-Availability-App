<template>
  <div id="app">
    <Navbar />  <!-- Always visible -->
    <router-view /> <!-- Page content changes here -->
    <!-- <Footer />  Always visible -->
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
// import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    // Footer
  }
}
</script>
