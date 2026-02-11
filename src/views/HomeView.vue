<script setup>
import HeroSection from '../components/HeroSection.vue'
import AboutSection from '../components/AboutSection.vue'
import LocationSection from '../components/LocationSection.vue'
import ContactSection from '../components/ContactSection.vue'
import Footer from '../components/Footer.vue'
import { useScrollObserver } from '../composables/useScrollObserver'

useScrollObserver('.scroll-item', { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })
</script>

<template>
  <main>
    <HeroSection />
    <AboutSection />
    <LocationSection />
    <ContactSection />
    <Footer />
  </main>
</template>
