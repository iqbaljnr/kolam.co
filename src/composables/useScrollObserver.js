import { onMounted, onUnmounted } from 'vue'

export function useScrollObserver(selector = '.scroll-item', options = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }) {
  let observer = null

  onMounted(() => {
    const elements = document.querySelectorAll(selector)
    
    if (elements.length === 0) return

    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view')
          // Optional: Stop observing once visible to run detection only once
          observer.unobserve(entry.target)
        }
      })
    }, options)

    elements.forEach((el) => observer.observe(el))
  })

  onUnmounted(() => {
    if (observer) observer.disconnect()
  })
}
