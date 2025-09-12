import { ref, onMounted, onUnmounted } from 'vue'

export interface ParallaxOptions {
  speed?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  scale?: boolean
  opacity?: boolean
  blur?: boolean
}

export function useParallax(options: ParallaxOptions = {}) {
  const elementRef = ref<HTMLElement | null>(null)
  const isVisible = ref(false)
  
  const defaultOptions: Required<ParallaxOptions> = {
    speed: 0.5,
    direction: 'up',
    scale: false,
    opacity: false,
    blur: false
  }
  
  const config = { ...defaultOptions, ...options }
  
  let ticking = false
  let observer: IntersectionObserver | null = null

  const updateParallax = () => {
    if (!ticking && elementRef.value && isVisible.value) {
      requestAnimationFrame(() => {
        if (!elementRef.value) return
        
        const rect = elementRef.value.getBoundingClientRect()
        const windowHeight = window.innerHeight
        const elementHeight = rect.height
        const elementTop = rect.top
        const elementBottom = elementTop + elementHeight
        
        // Calculate parallax offset
        let offsetX = 0
        let offsetY = 0
        let scale = 1
        let opacity = 1
        let blur = 0
        
        if (elementBottom > 0 && elementTop < windowHeight) {
          const progress = (windowHeight - elementTop) / (windowHeight + elementHeight)
          const clampedProgress = Math.max(0, Math.min(1, progress))
          
          // Calculate offset based on direction
          switch (config.direction) {
            case 'up':
              offsetY = (1 - clampedProgress) * 100 * config.speed
              break
            case 'down':
              offsetY = -(1 - clampedProgress) * 100 * config.speed
              break
            case 'left':
              offsetX = (1 - clampedProgress) * 100 * config.speed
              break
            case 'right':
              offsetX = -(1 - clampedProgress) * 100 * config.speed
              break
          }
          
          // Apply additional effects
          if (config.scale) {
            scale = 0.8 + (clampedProgress * 0.2)
          }
          
          if (config.opacity) {
            opacity = 0.3 + (clampedProgress * 0.7)
          }
          
          if (config.blur) {
            blur = (1 - clampedProgress) * 10
          }
        }
        
        // Apply transforms
        elementRef.value.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0) scale(${scale})`
        elementRef.value.style.opacity = opacity.toString()
        elementRef.value.style.filter = `blur(${blur}px)`
        
        ticking = false
      })
      ticking = true
    }
  }

  const createObserver = () => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible.value = entry.isIntersecting
        })
      },
      {
        threshold: 0,
        rootMargin: '50px'
      }
    )
  }

  const startParallax = (element: HTMLElement) => {
    elementRef.value = element
    createObserver()
    
    if (observer && element) {
      observer.observe(element)
    }
    
    window.addEventListener('scroll', updateParallax, { passive: true })
    updateParallax()
  }

  const stopParallax = () => {
    if (observer && elementRef.value) {
      observer.unobserve(elementRef.value)
    }
    
    window.removeEventListener('scroll', updateParallax)
    
    if (elementRef.value) {
      elementRef.value.style.transform = ''
      elementRef.value.style.opacity = ''
      elementRef.value.style.filter = ''
    }
  }

  onUnmounted(() => {
    stopParallax()
  })

  return {
    elementRef,
    startParallax,
    stopParallax,
    isVisible
  }
}

// Multiple parallax elements manager
export function useParallaxManager() {
  const parallaxElements = ref<Map<string, ReturnType<typeof useParallax>>>(new Map())
  
  const addParallaxElement = (
    id: string, 
    element: HTMLElement, 
    options: ParallaxOptions = {}
  ) => {
    const parallax = useParallax(options)
    parallax.startParallax(element)
    parallaxElements.value.set(id, parallax)
  }
  
  const removeParallaxElement = (id: string) => {
    const parallax = parallaxElements.value.get(id)
    if (parallax) {
      parallax.stopParallax()
      parallaxElements.value.delete(id)
    }
  }
  
  const clearAllParallax = () => {
    parallaxElements.value.forEach((parallax) => {
      parallax.stopParallax()
    })
    parallaxElements.value.clear()
  }
  
  onUnmounted(() => {
    clearAllParallax()
  })
  
  return {
    addParallaxElement,
    removeParallaxElement,
    clearAllParallax
  }
}
