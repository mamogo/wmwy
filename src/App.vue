<template>
  <div class="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50">
    <Navbar />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>
