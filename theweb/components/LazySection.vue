<template>
  <div 
    ref="sectionRef"
    class="lazy-section"
    :class="[
      `lazy-section--${animationType}`,
      { 'lazy-section--loaded': isLoaded }
    ]"
  >
    <div v-if="!isLoaded" class="lazy-section__placeholder">
      <div class="lazy-section__skeleton">
        <div class="skeleton-line skeleton-line--title"></div>
        <div class="skeleton-line skeleton-line--content"></div>
        <div class="skeleton-line skeleton-line--content"></div>
        <div class="skeleton-line skeleton-line--short"></div>
      </div>
    </div>
    
    <Transition
      :name="`lazy-${animationType}`"
      @enter="onEnter"
      @after-enter="onAfterEnter"
    >
      <div v-if="isLoaded" class="lazy-section__content">
        <slot />
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useScrollAnimations, type ScrollAnimationOptions } from '~/composables/useScrollAnimations'

interface Props {
  animationType?: ScrollAnimationOptions['animationType']
  threshold?: number
  rootMargin?: string
  delay?: number
  duration?: number
  once?: boolean
  preload?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  animationType: 'fadeIn',
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px',
  delay: 0,
  duration: 800,
  once: true,
  preload: false
})

const sectionRef = ref<HTMLElement | null>(null)
const isLoaded = ref(false)
const { observeElement, unobserveElement } = useScrollAnimations()

let observer: IntersectionObserver | null = null

const createObserver = () => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadContent()
          if (props.once) {
            observer?.unobserve(entry.target)
          }
        }
      })
    },
    {
      threshold: props.threshold,
      rootMargin: props.rootMargin
    }
  )
}

const loadContent = () => {
  if (isLoaded.value) return
  
  // Simulate loading delay for better UX
  setTimeout(() => {
    isLoaded.value = true
  }, props.delay)
}

const onEnter = (el: Element) => {
  const element = el as HTMLElement
  element.style.opacity = '0'
  element.style.transform = getInitialTransform()
  element.style.transition = `all ${props.duration}ms cubic-bezier(0.4, 0, 0.2, 1)`
  
  // Trigger animation
  requestAnimationFrame(() => {
    element.style.opacity = '1'
    element.style.transform = 'translateY(0) translateX(0) scale(1)'
  })
}

const onAfterEnter = (el: Element) => {
  const element = el as HTMLElement
  element.style.transition = ''
}

const getInitialTransform = () => {
  switch (props.animationType) {
    case 'slideUp':
      return 'translateY(50px)'
    case 'slideLeft':
      return 'translateX(50px)'
    case 'slideRight':
      return 'translateX(-50px)'
    case 'scaleIn':
      return 'scale(0.9)'
    case 'blurIn':
      return 'translateY(20px)'
    default:
      return 'translateY(30px)'
  }
}

onMounted(() => {
  if (props.preload) {
    loadContent()
  } else if (sectionRef.value) {
    createObserver()
    observer?.observe(sectionRef.value)
  }
})

onUnmounted(() => {
  if (observer && sectionRef.value) {
    observer.unobserve(sectionRef.value)
  }
})
</script>

<style scoped>
.lazy-section {
  min-height: 200px;
  position: relative;
}

.lazy-section__placeholder {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 12px;
  backdrop-filter: blur(10px);
}

.dark .lazy-section__placeholder {
  background: rgba(0, 0, 0, 0.1);
}

.lazy-section__skeleton {
  width: 100%;
  max-width: 400px;
  padding: 2rem;
}

.skeleton-line {
  height: 12px;
  background: linear-gradient(90deg, 
    rgba(0, 0, 0, 0.1) 25%, 
    rgba(0, 0, 0, 0.2) 50%, 
    rgba(0, 0, 0, 0.1) 75%
  );
  background-size: 200% 100%;
  border-radius: 6px;
  margin-bottom: 1rem;
  animation: skeleton-loading 1.5s infinite;
}

.dark .skeleton-line {
  background: linear-gradient(90deg, 
    rgba(255, 255, 255, 0.1) 25%, 
    rgba(255, 255, 255, 0.2) 50%, 
    rgba(255, 255, 255, 0.1) 75%
  );
  background-size: 200% 100%;
}

.skeleton-line--title {
  height: 20px;
  width: 60%;
  margin-bottom: 1.5rem;
}

.skeleton-line--content {
  width: 100%;
}

.skeleton-line--short {
  width: 40%;
}

@keyframes skeleton-loading {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

.lazy-section__content {
  width: 100%;
}

/* Transition animations */
.lazy-fadeIn-enter-active,
.lazy-slideUp-enter-active,
.lazy-slideLeft-enter-active,
.lazy-slideRight-enter-active,
.lazy-scaleIn-enter-active,
.lazy-blurIn-enter-active {
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.lazy-fadeIn-enter-from {
  opacity: 0;
}

.lazy-slideUp-enter-from {
  opacity: 0;
  transform: translateY(50px);
}

.lazy-slideLeft-enter-from {
  opacity: 0;
  transform: translateX(50px);
}

.lazy-slideRight-enter-from {
  opacity: 0;
  transform: translateX(-50px);
}

.lazy-scaleIn-enter-from {
  opacity: 0;
  transform: scale(0.9);
}

.lazy-blurIn-enter-from {
  opacity: 0;
  transform: translateY(20px);
  filter: blur(10px);
}
</style>
