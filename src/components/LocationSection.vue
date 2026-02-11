<script setup>
</script>

<template>
  <section class="section location-section" id="location">
    <div class="container">
      <div class="location-grid">
        <!-- Map Column -->
        <div class="map-wrapper">
          <iframe 
            src="https://www.google.com/maps?q=-7.623825,111.529638&z=18&output=embed" 
            width="100%" 
            height="100%" 
            style="border:0;" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>

        <!-- Details Column -->
        <div class="details-content scroll-item delay-200">
          <span class="eyebrow">VISIT US</span>
          <h2 class="title">Location &<br>House Rules.</h2>
          
          <div class="info-group">
            <h3>Opening Hours</h3>
            <p><strong>Daily</strong><br>09:00 - 24:00</p>
          </div>

          <div class="info-group">
            <h3>Facilities</h3>
            <ul class="facilities-list">
              <li>
                <span class="icon">
                  <!-- Parking Icon -->
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M9 17v-8h3a2 2 0 0 1 0 4h-3"/></svg>
                </span>
                <span>Spacious Parking Area</span>
              </li>
              <li>
                <span class="icon">
                  <!-- WiFi Icon -->
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>
                </span>
                <span>High-Speed Connection</span>
              </li>
              <li>
                <span class="icon">
                  <!-- AC / Snowflake Icon -->
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 12h19"/><path d="M12 2.5v19"/><path d="m7.8 7.8 8.4 8.4"/><path d="m16.2 7.8-8.4 8.4"/></svg>
                </span>
                <span>Comfortable Indoor</span>
              </li>
              <li>
                <span class="icon">
                  <!-- Garden / Leaf Icon -->
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
                </span>
                <span>Outdoor Garden</span>
              </li>
            </ul>
          </div>

          <div class="info-group">
             <a href="https://maps.app.goo.gl/RUFPGCsEw5aCqgaQ8" target="_blank" class="btn btn-primary">Get Directions</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.location-section {
  background-color: var(--color-bg-body);
}

.location-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.map-wrapper {
  height: 500px;
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
}

.details-content {
  padding-left: 2rem;
}

.eyebrow {
  display: block;
  font-size: 0.85rem;
  letter-spacing: 0.25em;
  font-weight: 600;
  color: var(--color-brand-primary);
  margin-bottom: 1rem;
}

.title {
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 3rem;
  color: var(--color-text-main);
}

.info-group {
  margin-bottom: 2.5rem;
}

.info-group h3 {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.facilities-list {
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.facilities-list li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--color-text-secondary);
}

.icon {
  width: 24px;
  height: 24px;
  background-color: var(--color-bg-accent);
  color: var(--color-brand-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-weight: 700;
}

@media (max-width: 900px) {
  .location-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .map-wrapper {
    height: 300px;
    order: 2; /* Map below text on mobile? or keep above? formatting typically map first or last. Let's keep typical flow. */
    order: -1; 
  }

  .details-content {
    padding-left: 0;
  }
}
</style>
