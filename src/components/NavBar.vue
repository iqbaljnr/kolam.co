<script setup>
import { onMounted, onUnmounted, ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isScrolled = ref(false)
const isMenuOpen = ref(false)

const isDarkPage = computed(() => {
  return ['/menu'].includes(route.path)
})

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  if (isMenuOpen.value) {
    document.body.style.overflow = 'hidden' // Prevent scrolling when menu is open
  } else {
    document.body.style.overflow = ''
  }
}

const closeMenu = () => {
  isMenuOpen.value = false
  document.body.style.overflow = ''
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.body.style.overflow = ''
})
</script>

<template>
  <nav class="navbar" :class="{ 'scrolled': isScrolled, 'dark-mode': isDarkPage }">
    <div class="container navbar-content">
      <div class="logo">
        <router-link to="/" @click="closeMenu">KOLAM.CO</router-link>
      </div>

      <!-- Desktop Links -->
      <ul class="nav-links desktop-only">
        <li><a href="/#about">story</a></li>
        <li><router-link to="/menu">menu</router-link></li>
        <li><a href="/#gallery">gallery</a></li>
        <li><a href="/#location">location</a></li>
        <li><a href="/#contact">contact</a></li>
      </ul>

      <!-- Mobile Toggle -->
      <button class="menu-toggle" @click="toggleMenu" aria-label="Toggle Menu">
        <span class="hamburger-line" :class="{ 'open': isMenuOpen }"></span>
        <span class="hamburger-line" :class="{ 'open': isMenuOpen }"></span>
      </button>

      <!-- Mobile Menu Overlay -->
      <div class="mobile-menu" :class="{ 'open': isMenuOpen }">
        <ul class="mobile-nav-links">
           <li><a href="/#about" @click="closeMenu">story</a></li>
           <li><router-link to="/menu" @click="closeMenu">menu</router-link></li>
           <li><a href="/#gallery" @click="closeMenu">gallery</a></li>
           <li><a href="/#location" @click="closeMenu">location</a></li>
           <li><a href="/#contact" @click="closeMenu">contact</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 2rem 0;
  transition: all 0.4s ease;
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  color: #fcfcfc; 
}

.navbar.scrolled {
  padding: 1rem 0;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: var(--color-text-main);
  box-shadow: 0 4px 30px rgba(0,0,0,0.03);
  border-bottom: 1px solid rgba(0,0,0,0.05);
}

.navbar.dark-mode:not(.scrolled) {
  color: #232323;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

/* Ensure hamburger contrast in dark mode */
.navbar.dark-mode .hamburger-line {
  background-color: #232323;
}
.navbar.scrolled .hamburger-line {
    background-color: var(--color-text-main);
}

.navbar.dark-mode .nav-links a::after {
  background-color: #232323;
}

.navbar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
    z-index: 1002; /* Above mobile menu */
    position: relative;
}

.logo a {
  font-family: var(--font-main);
  font-size: 1.25rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.nav-links {
  display: flex;
  gap: 3rem;
  list-style: none;
}

.nav-links a {
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 500;
  opacity: 0.8;
  position: relative;
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0%;
  height: 1px;
  background-color: currentColor;
  transition: width 0.3s ease;
}

.nav-links a:hover {
  opacity: 1;
}

.nav-links a:hover::after {
  width: 100%;
}

/* Mobile Menu Styles */
.menu-toggle {
    display: none;
    flex-direction: column;
    gap: 6px;
    background: none;
    border: none;
    cursor: pointer;
    z-index: 1002;
    padding: 0;
}

.hamburger-line {
    width: 24px;
    height: 2px;
    background-color: #fcfcfc; /* Default light */
    transition: all 0.3s ease;
    display: block;
}

.hamburger-line.open:nth-child(1) {
    transform: rotate(45deg) translate(5px, 6px);
}
.hamburger-line.open:nth-child(2) {
    transform: rotate(-45deg) translate(5px, -6px);
}

/* Mobile Overlay */
.mobile-menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(28, 28, 30, 0.6);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    z-index: 1001;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease;
}

.mobile-menu.open {
    opacity: 1;
    pointer-events: all;
}

.mobile-nav-links {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    text-align: center;
    padding: 0;
}

.mobile-nav-links a {
    font-size: 2rem;
    font-family: var(--font-heading);
    color: #ffffff;
    text-shadow: 0 2px 10px rgba(0,0,0,0.1);
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.05em;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.4s ease;
    display: block;
}

/* Stagger animation for links */
.mobile-menu.open .mobile-nav-links a {
    opacity: 1;
    transform: translateY(0);
}
.mobile-menu.open .mobile-nav-links li:nth-child(1) a { transition-delay: 0.1s; }
.mobile-menu.open .mobile-nav-links li:nth-child(2) a { transition-delay: 0.15s; }
.mobile-menu.open .mobile-nav-links li:nth-child(3) a { transition-delay: 0.2s; }
.mobile-menu.open .mobile-nav-links li:nth-child(4) a { transition-delay: 0.25s; }
.mobile-menu.open .mobile-nav-links li:nth-child(5) a { transition-delay: 0.3s; }


@media (max-width: 768px) {
  .desktop-only {
      display: none;
  }
  
  .menu-toggle {
      display: flex;
  }

  .navbar {
    padding: 1.5rem 0;
  }
}
</style>
