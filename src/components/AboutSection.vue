<script setup>
const galleryItems = [
    { 
        id: 1, 
        src: new URL('@/assets/images/kolam-hero-interior.jpg', import.meta.url).href, 
        alt: 'Main Interior', 
        class: 'span-2-2',
        description: 'A sanctuary of calm. Our main hall is designed for deep focus and quiet conversations.'
    },
    { 
        id: 2, 
        src: new URL('@/assets/images/kolam-indoor.jpg', import.meta.url).href, 
        alt: 'Indoor Vibe', 
        class: 'tall',
        description: 'Sunlight and shadows. The interplay of natural light creates an ever-changing atmosphere.'
    },
    { 
        id: 3, 
        src: new URL('@/assets/images/kolam-shelf-detail.jpg', import.meta.url).href, 
        alt: 'Shelf Details', 
        class: '',
        description: 'Curated details. Every object tells a story of craftsmanship.'
    },
    { 
        id: 4, 
        src: new URL('@/assets/images/kolam-barista-action.jpg', import.meta.url).href, 
        alt: 'Barista Craft', 
        class: '',
        description: 'Precision in every pour. Our baristas craft each cup with dedication.'
    },
    { 
        id: 5, 
        src: new URL('@/assets/images/kolam-exterior-sign.jpg', import.meta.url).href, 
        alt: 'Exterior Sign', 
        class: '',
        description: 'Minimalist beacon. A sign of good coffee and good vibes.'
    },
    { 
        id: 6, 
        src: new URL('@/assets/images/kolam-latte-tablet.jpg', import.meta.url).href, 
        alt: 'Work & Coffee', 
        class: '',
        description: 'Workspace ready. High-speed wifi and power outlets for your productivity.'
    },
    { 
        id: 7, 
        src: new URL('@/assets/images/kolam-bar.jpg', import.meta.url).href, 
        alt: 'The Bar', 
        class: 'wide',
        description: 'The Stage. An open bar tailored for transparency and connection.'
    },
]
</script>

<template>
  <section id="about" class="section about-section">
    <div class="container">
      <div class="story-content">
        <div class="header-block scroll-item">
          <span class="eyebrow">OUR STORY</span>
          <h2 class="title">Di Balik<br>Kolam.co</h2>
        </div>

        <div class="text-grid scroll-item delay-100">
            <div class="story-point">
              <h3>Konsep Brand</h3>
              <p>
                Kolam hadir sebagai oase. Mengusung "Minimalisme Modern", 
                kami menciptakan ruang yang tenang untuk jeda sejenak 
                dari hiruk pikuk dunia luar.
              </p>
            </div>
            
            <div class="story-point">
              <h3>Filosofi Kopi</h3>
              <p>
                Bagi kami, kopi adalah ritual presisi. Setiap biji dikurasi, 
                setiap gram diukur, dan setiap cangkir disajikan dengan 
                hati untuk rasa yang jujur.
              </p>
            </div>

            <div class="story-point">
              <h3>Kenapa Kami Beda</h3>
              <p>
                 Lebih dari sekadar kedai kopi. Kami memadukan estetika visual, 
                 kurasi musik, dan rasa untuk pengalaman multisensori yang utuh.
              </p>
            </div>
        </div>
        
        <div class="cta-wrapper">
             <router-link to="/menu" class="btn-text">Lihat Menu</router-link>
        </div>
      </div>

      <!-- Gallery Grid Integration -->
      <div class="gallery-block" id="gallery">
          <div class="header-block">
            <span class="eyebrow">VISUAL JOURNAL</span>
          </div>
          <div class="gallery-grid">
            <div 
                v-for="item in galleryItems" 
                :key="item.id" 
                class="gallery-item"
                :class="item.class"
            >
                <div class="image-wrapper">
                    <img :src="item.src" :item.alt="item.alt" loading="lazy">
                    <div class="overlay">
                        <div class="text-content">
                            <span class="caption-title">{{ item.alt }}</span>
                            <p v-if="item.description" class="caption-desc">{{ item.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  background-color: var(--color-bg-body);
  padding-top: var(--spacing-xl);
  padding-bottom: var(--spacing-xl);
}

.story-content {
    margin-bottom: 8rem;
}

.header-block {
  margin-bottom: 4rem;
  max-width: 800px;
}

.eyebrow {
  display: block;
  font-size: 0.85rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--color-brand-primary);
  margin-bottom: 1.5rem;
  font-weight: 600;
}

.title {
  font-size: 4.5rem;
  font-weight: 400;
  line-height: 1;
  color: var(--color-text-main);
}

.text-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 4rem;
  margin-bottom: 4rem;
}

.story-point h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: var(--color-text-main);
  letter-spacing: -0.01em;
}

.story-point p {
  font-size: 1rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
  font-weight: 300;
}

.cta-wrapper {
    text-align: center;
}

.btn-text {
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  border-bottom: 1px solid var(--color-text-main);
  padding-bottom: 4px;
  color: var(--color-text-main);
  transition: opacity 0.3s;
}

.btn-text:hover {
  opacity: 0.6;
}

/* Gallery Grid Styles */
.gallery-block {
    padding-top: 4rem;
    border-top: 1px solid rgba(0,0,0,0.05);
}

.gallery-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 300px;
    gap: 1.5rem;
    grid-auto-flow: dense;
}

.gallery-item {
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    background-color: #f0f0f0;
}

.image-wrapper {
    width: 100%;
    height: 100%;
    position: relative;
}

.gallery-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.7s cubic-bezier(0.2, 0.8, 0.2, 1);
    display: block;
}

/* Spans */
.gallery-item.span-2-2 {
    grid-column: span 2;
    grid-row: span 2;
}

.gallery-item.wide {
    grid-column: span 2;
}

.gallery-item.tall {
    grid-row: span 2;
}

/* Hover Effects */
.overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 60%);
    opacity: 0;
    transition: opacity 0.4s ease;
    display: flex;
    align-items: flex-end;
    padding: 2rem;
}

.text-content {
    transform: translateY(20px);
    transition: transform 0.4s ease;
    color: white;
    text-align: left;
}

.caption-title {
    display: block;
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 0.05em;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
}

.caption-desc {
    font-size: 0.9rem;
    font-weight: 300;
    line-height: 1.5;
    opacity: 0.9;
}

.gallery-item:hover img {
    transform: scale(1.03);
}

.gallery-item:hover .overlay {
    opacity: 1;
}

.gallery-item:hover .text-content {
    transform: translateY(0);
}

@media (max-width: 900px) {
  .title {
    font-size: 3.5rem;
  }
  
  .text-grid {
      grid-template-columns: 1fr;
      gap: 3rem;
  }

  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 250px;
    gap: 1rem;
  }
}

@media (max-width: 600px) {
    .gallery-grid {
        display: flex;
        flex-direction: column;
    }
    
    .gallery-item {
        height: 300px;
    }
}
</style>
