<template>
  <div 
    class="scroll-progress"
    :class="{ 'scroll-progress--visible': isVisible }"
  >
    <div class="scroll-progress__bar">
      <div 
        class="scroll-progress__fill"
        :style="{ width: `${scrollProgress}%` }"
      ></div>
    </div>
    
    <!-- Scroll to top button -->
    <Transition name="fade-scale">
      <button
        v-if="showScrollToTop"
        @click="scrollToTop"
        class="scroll-progress__button"
        :class="{ 'scroll-progress__button--visible': showScrollToTop }"
        aria-label="Scroll to top"
      >
        <svg 
          class="scroll-progress__icon" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="2" 
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useSmoothScroll } from '~/composables/useScrollAnimations'

const scrollProgress = ref(0)
const isVisible = ref(false)
const showScrollToTop = ref(false)
const { scrollToTop: smoothScrollToTop } = useSmoothScroll()

let ticking = false

const updateScrollProgress = () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollTop / scrollHeight) * 100
      
      scrollProgress.value = Math.min(100, Math.max(0, progress))
      isVisible.value = scrollTop > 100
      showScrollToTop.value = scrollTop > 500
      
      ticking = false
    })
    ticking = true
  }
}

const scrollToTop = () => {
  smoothScrollToTop()
}

onMounted(() => {
  window.addEventListener('scroll', updateScrollProgress, { passive: true })
  updateScrollProgress()
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateScrollProgress)
})
</script>

<style scoped>
.scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: 4px;
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  transition: opacity 0.3s ease;
  opacity: 0;
  pointer-events: none;
}

.scroll-progress--visible {
  opacity: 1;
}

.scroll-progress__bar {
  position: relative;
  width: 100%;
  height: 100%;
  background: transparent;
}

.scroll-progress__fill {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: linear-gradient(
    90deg,
    #3b82f6 0%,
    #8b5cf6 50%,
    #06b6d4 100%
  );
  transition: width 0.1s ease;
  box-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
}

.scroll-progress__button {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 56px;
  height: 56px;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  box-shadow: 
    0 4px 20px rgba(0, 0, 0, 0.15),
    0 2px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(20px);
  z-index: 1000;
}

.dark .scroll-progress__button {
  background: rgba(0, 0, 0, 0.8);
  color: white;
}

.scroll-progress__button:hover {
  transform: translateY(-2px) scale(1.05);
  box-shadow: 
    0 8px 30px rgba(0, 0, 0, 0.2),
    0 4px 12px rgba(0, 0, 0, 0.15);
}

.scroll-progress__button:active {
  transform: translateY(0) scale(0.95);
}

.scroll-progress__icon {
  width: 24px;
  height: 24px;
  color: #3b82f6;
  transition: color 0.3s ease;
}

.dark .scroll-progress__icon {
  color: #60a5fa;
}

.scroll-progress__button:hover .scroll-progress__icon {
  color: #1d4ed8;
}

.dark .scroll-progress__button:hover .scroll-progress__icon {
  color: #93c5fd;
}

/* Transitions */
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-scale-enter-from {
  opacity: 0;
  transform: scale(0.8) translateY(20px);
}

.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.8) translateY(20px);
}

/* Responsive design */
@media (max-width: 768px) {
  .scroll-progress__button {
    bottom: 1rem;
    right: 1rem;
    width: 48px;
    height: 48px;
  }
  
  .scroll-progress__icon {
    width: 20px;
    height: 20px;
  }
}

/* Accessibility */
@media (prefers-reduced-motion: reduce) {
  .scroll-progress__button {
    transition: none;
  }
  
  .scroll-progress__fill {
    transition: none;
  }
  
  .fade-scale-enter-active,
  .fade-scale-leave-active {
    transition: none;
  }
}
</style>
