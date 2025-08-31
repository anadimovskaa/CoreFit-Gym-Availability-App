<script setup>
import trainer1 from "../assets/coach11.png";
import trainer2 from "../assets/coach22.png";
import trainer3 from "../assets/coach33.png";
import gym from "../assets/gym.png";
</script>

<template>
  <div class="bg-light py-5">
    <div class="container">
      <!-- Title -->
      <div class="text-center mb-5">
        <h1 class="fw-bold">About Us</h1>
        <p class="lead text-muted">
          Strong Body. Strong Mind. Strong Community.
        </p>
      </div>

      <!-- Our Story -->
      <div class="row align-items-center mb-5">
        <!-- Image -->
        <div class="col-md-6 text-center mb-4 mb-md-0">
          <img
            :src="gym"
            alt="Our Gym"
            class="img-fluid rounded shadow-lg border border-3 border-light"
            style="max-width: 450px"
          />
        </div>
        <!-- Text -->
        <div class="col-md-6">
          <h3 class="fw-bold mb-3 text-uppercase text-secondary">Our Story</h3>
          <p class="fs-5 lh-lg">
            Founded in <strong>2010</strong>,
            <span class="text-warning">CoreFit Gym</span> started as a small
            community space for fitness lovers in <strong>Skopje</strong>. What
            began with just a few weights and a dream has now grown into one of
            the city’s most vibrant gyms.
          </p>
          <p class="fs-5 lh-lg">
            Our mission has always been simple:
            <em
              >to help people transform their lives through strength,
              discipline, and community support</em
            >.
          </p>
          <router-link
            to="/trainers"
            class="btn btn-outline-secondary btn-lg mt-3"
            >Who will guide you</router-link
          >
        </div>
      </div>

      <!-- Who We Are -->
      <div class="mb-5 text-center">
        <h3 class="fw-bold mb-4">Who We Are</h3>
        <p class="fs-5">
          We are more than just a gym — we are a community built on strength,
          passion, and progress. Our mission is to help people of all fitness
          levels achieve their goals through expert guidance, modern equipment,
          and a supportive environment. Whether you’re here to lift heavier,
          move faster, or simply feel better in your everyday life, we’re here
          to guide you every step of the way. At our core, we believe fitness is
          not just about the body, but about building confidence, resilience,
          and a healthier lifestyle.
        </p>
      </div>

      <!-- Trainers -->
      <div class="mb-5">
        <h3 class="fw-bold text-center mb-4">Meet Our Coaches</h3>
        <div class="row text-center g-4">
          <div class="col-md-4">
            <div class="card shadow-sm h-100">
              <img :src="trainer1" class="card-img-top" alt="Coach Alex" />
              <div class="card-body">
                <h5 class="card-title">Coach Alex</h5>
                <p class="card-text text-muted">
                  Strength training expert with 10+ years of experience.
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card shadow-sm h-100">
              <img :src="trainer2" class="card-img-top" alt="Coach Maria" />
              <div class="card-body">
                <h5 class="card-title">Coach Maria</h5>
                <p class="card-text text-muted">
                  Certified yoga and pilates instructor.
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card shadow-sm h-100">
              <img :src="trainer3" class="card-img-top" alt="Coach Marko" />
              <div class="card-body">
                <h5 class="card-title">Coach Marko</h5>
                <p class="card-text text-muted">Cardio and HIIT specialist.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Motto -->
      <div class="text-center py-4 bg-white rounded shadow-sm">
        <h4 class="fw-bold">
          💪 Train Hard. Stay Humble. Become Unstoppable. 🚀
        </h4>
      </div>
    </div>
  </div>
</template>
