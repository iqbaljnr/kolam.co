<script setup>
</script>

<template>
  <section id="contact" class="section contact-section">
    <div class="container contact-container">
      <div class="header-block">
        <span class="eyebrow">RESERVATION</span>
        <h2 class="title">Visit Us.</h2>
      </div>
      
      <p class="desc">Silakan hubungi kami untuk reservasi atau pertanyaan lebih lanjut.</p>
      
      <div class="contact-bento">
        <!-- Phone / WhatsApp -->
        <a href="https://wa.me/6281234567890" target="_blank" class="bento-card whatsapp">
            <div class="icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </div>
            <div class="content">
                <h3>WhatsApp</h3>
                <p>+62 881 0365 19010</p>
            </div>
        </a>

        <!-- Email -->
        <a href="mailto:hello@kolam.co" class="bento-card email">
            <div class="icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </div>
            <div class="content">
                <h3>Email</h3>
                <p>hello@kolam.co</p>
            </div>
        </a>

        <!-- Location -->
        <!-- Location -->
        <a href="https://maps.app.goo.gl/4PZ7R326iDNRDnc76" target="_blank" class="bento-card address">
            <div class="icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <div class="content">
                <h3>Visit Us</h3>
                <p>Jl. Diponegoro No. 40<br>Madiun, Jawa Timur</p>
            </div>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  background-color: var(--color-bg-surface);
  text-align: center;
  padding-bottom: var(--spacing-xl);
}

.header-block {
  margin-bottom: 3rem;
}

.eyebrow {
  display: block;
  font-size: 0.75rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--color-brand-primary);
  margin-bottom: 1rem;
  font-weight: 600;
}

.title {
  font-size: 3.5rem;
  font-weight: 400;
  color: var(--color-text-main);
}

.desc {
    font-size: 1.1rem;
    color: var(--color-text-secondary);
    margin-bottom: 4rem;
    font-weight: 300;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
}

.contact-bento {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    max-width: 1000px;
    margin: 0 auto;
}

.bento-card {
    background: #fff;
    padding: 2.5rem 2rem;
    border-radius: var(--radius-md, 12px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    text-decoration: none;
    border: 1px solid rgba(0,0,0,0.05);
}

.bento-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
}

.icon-wrapper {
    width: 64px;
    height: 64px;
    background-color: var(--color-bg-accent, #f5f5f5);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-brand-primary);
}

.content h3 {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: var(--color-text-main);
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

.content p {
    font-size: 1rem;
    color: var(--color-text-secondary);
    font-weight: 300;
    line-height: 1.5;
}

/* Specific Card Tweaks if needed */
.address {
    grid-column: span 1;
}

@media (max-width: 900px) {
    .contact-bento {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
}
</style>
