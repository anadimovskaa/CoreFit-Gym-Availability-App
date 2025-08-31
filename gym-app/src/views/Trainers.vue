<script setup>
import coach1 from "../assets/coach11.png";
import coach2 from "../assets/coach22.png";
import coach3 from "../assets/coach33.png";

const trainers = [
  {
    id: 1,
    name: "Coach Alex",
    specialty: "Strength & Conditioning",
    bio: "Alex has 10+ years of experience in personal training and competitive weightlifting. He believes in pushing limits safely and effectively.",
    img: coach1,
    quote: "No pain, no gain!",
    longbio: "  Alex has a lot of experience helping people achieve their fitness goals — from beginners taking their first steps into the gym to athletes looking to maximize performance. She specializes instrength training, fat loss, and functional workouts tailored to your lifestyle. Her philosophy is simple: fitness should empower you, not overwhelm you. With her supportive approach andmotivational coaching style, Sarah ensures every session is both  challenging and enjoyable. When she’s not coaching, you’ll find he running marathons, experimenting with healthy recipes, or leading  outdoor bootcamps.",
    phone:"+123 456 789",
    email: "alex@gmail.com"
  },
  {
    id: 2,
    name: "Coach Maria",
    specialty: "Yoga & Flexibility",
    bio: "Maria is a certified yoga and pilates instructor. She focuses on improving flexibility, balance, and mindfulness in training.",
    img: coach2,
    quote: "Breathe, stretch, grow.",
    longbio: "Maria is passionate about helping people build strength, flexibility, and inner balance through yoga and Pilates. With over 5 years of teaching experience, she designs classes that improve posture, reduce stress, and increase body awareness. Her calm and encouraging approach makes every session welcoming — whether you’re a complete beginner or looking to deepen your practice. Maria believes that movement is not just about fitness, but also about finding peace and harmony in everyday life.",
    phone: "+987 654 321",
    email:"maria@gmail.com"
  },
  {
    id: 3,
    name: "Coach Jane",
    specialty: "Cardio & HIIT",
    bio: "Jane specializes in HIIT and endurance training. He loves helping people achieve peak performance and stamina.",
    img: coach3,
    quote: "Sweat is just fat crying!",
    longbio:"Jane brings unstoppable energy to every workout. With a focus on high-intensity interval training and cardio conditioning, she helps clients burn fat, build stamina, and stay motivated. Her sessions are fast-paced, dynamic, and designed to push you beyond your limits — while still keeping things fun and achievable.",
    phone: "+345 678 921",
    email:"jane@gmail.com"
  },
];
</script>

<template>
  <div class="bg-light py-5">
    <div class="container">
      <!-- Page Title -->
      <div class="text-center mb-5">
        <h1 class="fw-bold">Meet Our Coaches</h1>
        <p class="lead text-muted">
          Expert guidance, personalized training, and lots of motivation.
        </p>
      </div>

      <!-- Coaches -->
      <div
        class="row g-5 mb-5 align-items-center"
        v-for="(t, index) in trainers"
        :key="t.id"
      >
        <!-- Image Column -->
        <div class="col-md-6" :class="{ 'order-md-2': index % 2 !== 0 }">
          <img
            :src="t.img"
            :alt="t.name"
            class="img-fluid rounded shadow-lg max-width:200px"
            style="
              max-width: 100%;
              height: auto;
              display: block;
              margin: 0 auto;
            "
          />
        </div>

        <!-- Info Column -->
        <div class="col-md-6" :class="{ 'order-md-1': index % 2 !== 0 }">
          <h2 class="fw-bold">{{ t.name }}</h2>
          <h5 class="text-warning mb-3">{{ t.specialty }}</h5>
          <p class="fs-3">{{ t.bio }}</p>
          <p class="fst-italic text-secondary">"{{ t.quote }}"</p>
          <p class="fs-5">
         {{ t.longbio }}
          </p>
          <p class="fw-bold">Personal contact:</p>
          <ul>
            <li class="text-warning">Phone: {{ t.phone }}</li>
            <li class="text-warning">Email: {{ t.email }}</li>
          </ul>
        </div>
      </div>

      <!-- Motto -->
      <div class="text-center py-4 mt-5 bg-white rounded shadow-sm">
        <h4 class="fw-bold">
          💪 Train Hard. Stay Humble. Achieve Excellence. 🚀
        </h4>
      </div>
    </div>
  </div>
</template>
