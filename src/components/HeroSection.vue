<script setup>
</script>

<template>
  <section class="hero-section">
    <div class="hero-bg"></div>
    <div class="container hero-container">
      <div class="hero-content fade-in">
        <h1 class="headline">
          KOLAM.CO
        </h1>
        <p class="tagline">
          Ruang Inspirasi & Kopi
        </p>
      </div>
      
      <div class="hero-footer fade-in delay-1">
        <div class="button-group">
          <router-link to="/menu" class="btn btn-primary">Lihat Menu</router-link>
          <a href="/#contact" class="btn btn-secondary">Reservasi</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  position: relative;
  height: 100vh; /* Full immersion */
  display: flex;
  align-items: flex-end; /* Bottom alignment for magazine look */
  padding-bottom: 4rem;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.4)), url('@/assets/images/kolam-hero-interior.jpg');
  background-size: cover;
  background-position: center;
  z-index: 0;
  /* Removed filters for pure HD look */
}

.hero-container {
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 8rem; /* Clear navbar */
}

/* Top Content (Headline) */
.hero-content {
  margin-top: auto;
  margin-bottom: 2rem;
}

.headline {
  font-family: var(--font-main);
  font-size: 8rem;
  line-height: 0.85;
  font-weight: 700;
  color: white;
  letter-spacing: -0.04em;
  margin-bottom: 1.5rem;
}

.meta-group {
  display: flex;
  align-items: center;
  gap: 1rem;
  color: white;
  font-size: 0.85rem;
  letter-spacing: 0.2em;
  font-weight: 400;
  opacity: 0.9;
}

/* Bottom Content (Manifesto) */
.hero-footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-top: 1px solid rgba(255,255,255,0.3);
  padding-top: 2rem;
  color: white;
}

.manifesto {
  font-size: 1.1rem;
  line-height: 1.5;
  font-weight: 300;
  opacity: 0.9;
}

.link-explore {
  display: inline-block;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  border: 1px solid white;
  padding: 1rem 2rem;
  border-radius: 999px;
  transition: all 0.3s ease;
}

.link-explore:hover {
  background: white;
  color: var(--color-text-main);
}

/* Animations */
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.delay-1 {
  animation-delay: 0.3s;
}

@keyframes fadeIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .headline {
    font-size: 4.5rem;
  }
  
  .hero-footer {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
  
  .button-group {
    flex-direction: column;
    width: 100%;
  }

  .btn {
    width: 100%;
    margin-right: 0 !important;
    margin-bottom: 1rem;
    text-align: center;
  }
  .btn:last-child {
      margin-bottom: 0;
  }
}

.tagline {
  font-size: 1.5rem;
  color: white;
  letter-spacing: 0.1em;
  font-weight: 300;
  opacity: 0.9;
  margin-top: 0.5rem;
}

.button-group {
    display: flex;
    gap: 1rem;
}

.btn {
    display: inline-block;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    padding: 1rem 2rem;
    border-radius: 999px;
    transition: all 0.3s ease;
    text-decoration: none;
}

.btn-primary {
    background: white;
    color: var(--color-text-main, #000);
    border: 1px solid white;
}

.btn-primary:hover {
    background: transparent;
    color: white;
}

.btn-secondary {
    background: transparent;
    color: white;
    border: 1px solid white;
}

.btn-secondary:hover {
    background: white;
    color: var(--color-text-main, #000);
}
</style>
