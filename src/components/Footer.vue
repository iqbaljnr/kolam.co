<script setup>
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-top">
        <h2 class="footer-logo">kolam.co</h2>
        <div class="socials">
          <a href="https://www.instagram.com/kolam.co/" target="_blank" class="instagram-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            <span>kolam.co</span>
          </a>
        </div>
      </div>
      
      <div class="footer-links">
        <div class="col">
          <h4>find us</h4>
          <p>Madiun, Indonesia</p>
          <p>coffee | eatery | working space</p>
        </div>
        <div class="col">
          <h4>reservations</h4>
          <p>+62 877-0477-1921</p>
          <p>hello@kolam.co</p>
        </div>
        <div class="col">
          <h4>hours</h4>
          <p>Open Daily</p>
          <p>09.00 - 24.00</p>
        </div>
      </div>
      
      <div class="footer-bottom">
         <p>© 2026 kolam co. all rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--color-text-main);
  color: #fcfcfc;
  padding: 5rem 0 2rem;
}

.footer-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 4rem;
  border-bottom: 1px solid rgba(255,255,255,0.2);
  padding-bottom: 2rem;
}

.footer-logo {
  font-size: 3rem;
  color: #fcfcfc;
  margin: 0;
}

.socials {
  display: flex;
  gap: 1.5rem;
}

.instagram-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-family: var(--font-main);
  font-weight: 500;
  font-size: 1rem;
  color: #fcfcfc;
  transition: opacity 0.3s;
}

.instagram-link:hover {
  opacity: 0.8;
}

.footer-links {
  display: flex;
  gap: 4rem;
  flex-wrap: wrap;
  margin-bottom: 4rem;
}

.col h4 {
  font-family: var(--font-heading);
  color: var(--color-brand-accent);
  margin-bottom: 1rem;
}

.col p {
  font-weight: 500;
  opacity: 0.8;
}

.footer-bottom {
  font-size: 0.8rem;
  opacity: 0.5;
  text-transform: uppercase;
}
</style>
