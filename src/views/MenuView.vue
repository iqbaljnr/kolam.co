<script setup>
import { ref } from 'vue'

const categories = [
  {
    id: 'signature',
    title: 'Signatures',
    items: [
      { name: 'Es Kopi Kolam', desc: 'Palm sugar, fresh milk, espresso.', price: '25k' },
      { name: 'Kolam Cloud', desc: 'Cold brew, macchiato foam, sea salt.', price: '32k' },
      { name: 'Berry Cold Brew', desc: 'Cold brew, strawberry infuse, lime.', price: '35k' }
    ]
  },
  {
    id: 'maincourse',
    title: 'Main Course',
    items: [
      { name: 'Chicken Curry Katsu', desc: 'Crispy chicken, aromatic curry.', price: '30k' },
      { name: 'Bakmie Curry Ground Beef', desc: 'Savoury noodles, ground beef curry.', price: '27k' },
      { name: 'Fried Rice Curry Ground Beef', desc: 'Spiced fried rice, beef curry.', price: '28k' },
      { name: 'Beef Curry Katsu', desc: 'Tender beef katsu, rich curry.', price: '30k' },
      { name: 'Rice Chicken Mentai', desc: 'Torched mentai sauce, chicken.', price: '28k' },
      { name: 'Rice Tuna Mentai', desc: 'Creamy mentai, tuna flakes.', price: '30k' },
      { name: 'Chicken Nashville', desc: 'Spicy Nashville-style chicken.', price: '25k' }
    ]
  },
  {
    id: 'espresso',
    title: 'Espresso Bar',
    items: [
      { name: 'Espresso / Americano', desc: 'House blend.', price: '15k / 18k' },
      { name: 'Latte / Cappuccino', desc: 'Steamed milk, microfoam.', price: '22k' },
      { name: 'Con Heilo Susu', desc: 'Chilled espresso, milk, palm sugar.', price: '25k' },
      { name: 'Affogato', desc: 'Espresso over vanilla ice cream.', price: '28k' },
      { name: 'Mochachino', desc: 'Espresso, West Java cocoa, milk.', price: '28k' }
    ]
  },
  {
    id: 'milk-based',
    title: 'Milk Based',
    items: [
      { name: 'Monkey Boost', desc: 'Banana essence, espresso.', price: '28k' },
      { name: 'Kolam Creamy', desc: 'Signature creamy house blend.', price: '25k' },
      { name: 'Avocado Cream', desc: 'Fresh avocado, espresso.', price: '32k' },
      { name: 'Aromatic', desc: 'Spiced blend, silky milk.', price: '28k' },
      { name: 'RUM', desc: 'Rum syrup (halal), milk.', price: '28k' },
      { name: 'Caramel Latte', desc: 'Buttery caramel, espresso.', price: '30k' },
      { name: 'Vanilla / Pandan', desc: 'Aromatic lattee variants.', price: '30k' }
    ]
  },
  {
    id: 'food',
    title: 'Kitchen & Snacks',
    items: [
      { name: 'Classic Croffle', desc: 'Maple syrup, butter.', price: '25k' },
      { name: 'Truffle Fries', desc: 'Parmesan, truffle oil.', price: '35k' },
      { name: 'Kolam Fried Rice', desc: 'Kampung style, sunny side up.', price: '45k' },
      { name: 'Chicken Nanban', desc: 'Crispy chicken, tartar sauce.', price: '48k' }
    ]
  }
]

import { useScrollObserver } from '../composables/useScrollObserver'
useScrollObserver()
</script>

<template>
  <div class="menu-page">
    <div class="container">
      <header class="menu-header">
        <h1 class="page-title scroll-item">The Menu</h1>
        <p class="page-subtitle scroll-item delay-100">Curated flavors for every mood.</p>
      </header>

      <div class="compact-grid">
        <div 
          v-for="category in categories" 
          :key="category.id" 
          class="menu-section"
        >
          <h2 class="section-title scroll-item">{{ category.title }}</h2>
          
          <div class="menu-list scroll-item delay-100">
            <div v-for="(item, index) in category.items" :key="index" class="menu-item">
              <div class="item-main">
                  <span class="item-name">{{ item.name }}</span>
                  <span class="item-dots"></span>
                  <span class="item-price">{{ item.price }}</span>
              </div>
              <p v-if="item.desc" class="item-desc">{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.menu-page {
  padding-top: 8rem;
  padding-bottom: 6rem;
  background-color: var(--color-bg-body);
  min-height: 100vh;
}

.menu-header {
  text-align: center;
  margin-bottom: 5rem;
  /* Removed border-bottom for true minimalism */
}

.page-title {
  font-size: 5rem;
  color: var(--color-brand-primary); /* Same color logic as subtitle implies consistency */
  font-weight: 700;
  letter-spacing: -0.03em;
  margin-bottom: 1rem;
  line-height: 0.9;
}

.page-subtitle {
  font-size: 1.1rem;
  color: var(--color-text-main); /* MATCHING TITLE COLOR as requested */
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-weight: 400;
  opacity: 0.8;
}

/* Compact Grid */
.compact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  column-gap: 5rem;
  row-gap: 4rem;
  align-items: start;
}

.menu-section {
  break-inside: avoid;
}

.section-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: var(--color-brand-primary);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  border-bottom: 1px solid rgba(0,0,0,0.1);
  padding-bottom: 0.5rem;
  display: inline-block;
}

.menu-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.menu-item {
  display: flex;
  flex-direction: column;
}

.item-main {
    display: flex;
    align-items: baseline;
    width: 100%;
}

.item-name {
  font-weight: 500;
  font-size: 1rem;
  color: var(--color-text-main);
  white-space: nowrap;
}

.item-dots {
    flex-grow: 1;
    border-bottom: 1px dotted #ccc;
    margin: 0 0.5rem;
    position: relative;
    top: -4px;
    opacity: 0.5;
}

.item-price {
  font-weight: 500;
  color: var(--color-text-main);
  font-size: 1rem;
}

.item-desc {
  font-size: 0.85rem;
  color: var(--color-text-secondary);
  margin-top: 0.2rem;
  line-height: 1.4;
  font-weight: 300;
}

@media (max-width: 768px) {
  .compact-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .page-title {
    font-size: 3.5rem;
  }
  
  .menu-header {
      margin-bottom: 3rem;
  }
}
</style>
