<script setup>
import { ref } from 'vue'

// Load the logo correctly with Vite
import logo from '../assets/logo.png'
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid px-5 py-2">
      <!-- Brand -->
      <router-link class="navbar-brand" to="/">
        <img :src="logo" alt="Logo" height="85" width="85">
      </router-link>

      <!-- Toggler for mobile -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Links -->
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 fs-5">
          <li class="nav-item pe-4">
            <router-link class="nav-link" to="/" exact>Home</router-link>
          </li>
          <li class="nav-item pe-4">
            <router-link class="nav-link" to="/about">About Us</router-link>
          </li>
          <li class="nav-item pe-4">
            <router-link class="nav-link" to="/trainers">Coaches</router-link>
          </li>
           <li class="nav-item pe-4">
            <router-link class="nav-link" to="/makeAnAppointment">Make an appointment</router-link>
          </li>
           <li class="nav-item pe-4">
            <router-link class="nav-link" to="/contact">Contact</router-link>
          </li>
        </ul>


        
      </div>
      
    </div>
  </nav>
</template>
