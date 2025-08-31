<script setup>
import mainImage from '../assets/main.jpg'
</script>

<template>
  <div class="home-page d-flex align-items-center justify-content-center" :style="{ backgroundImage: `url(${mainImage})` }">
    <div class="text-center text-white p-5 bg-dark bg-opacity-50 rounded">
      <h1 class="mb-3">Join the Journey to a Healthier You</h1>
      <p class="mb-4">Take the first step toward becoming your best self. Our gym offers expert guidance, modern equipment, and a supportive community.</p>
      <router-link class="btn btn-light me-2" to="/makeAnAppointment">Make an appointment</router-link>
      <router-link class="btn btn-outline-light" to="/about">About Us</router-link>
    </div>
  </div>
</template>

<style scoped>
.home-page {
  height: 900px;
  width: 100%;
  background-size: cover;
  background-position: center;
}
.home-page h1 {
  font-size: 3rem;
}
.home-page p {
  font-size: 1.2rem;
}
</style>
