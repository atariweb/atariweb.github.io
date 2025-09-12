import { ref, onMounted, onUnmounted } from 'vue'

export interface PerformanceMetrics {
  fps: number
  memoryUsage: number
  isLowPerformance: boolean
  isReducedMotion: boolean
}

export function usePerformance() {
  const metrics = ref<PerformanceMetrics>({
    fps: 60,
    memoryUsage: 0,
    isLowPerformance: false,
    isReducedMotion: false
  })

  let frameCount = 0
  let lastTime = performance.now()
  let animationId: number | null = null

  const checkReducedMotion = () => {
    metrics.value.isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }

  const measureFPS = () => {
    const currentTime = performance.now()
    frameCount++
    
    if (currentTime - lastTime >= 1000) {
      metrics.value.fps = Math.round((frameCount * 1000) / (currentTime - lastTime))
      frameCount = 0
      lastTime = currentTime
      
      // Mark as low performance if FPS is consistently below 30
      metrics.value.isLowPerformance = metrics.value.fps < 30
    }
    
    animationId = requestAnimationFrame(measureFPS)
  }

  const measureMemory = () => {
    if ('memory' in performance) {
      const memory = (performance as any).memory
      metrics.value.memoryUsage = Math.round(memory.usedJSHeapSize / 1024 / 1024) // MB
    }
  }

  const optimizeForLowPerformance = () => {
    if (metrics.value.isLowPerformance || metrics.value.isReducedMotion) {
      // Disable heavy animations
      document.documentElement.style.setProperty('--animation-duration', '0.01ms')
      document.documentElement.style.setProperty('--transition-duration', '0.01ms')
      
      // Reduce parallax effects
      const parallaxElements = document.querySelectorAll('[data-parallax]')
      parallaxElements.forEach(el => {
        (el as HTMLElement).style.transform = 'none'
      })
    } else {
      // Restore normal animations
      document.documentElement.style.removeProperty('--animation-duration')
      document.documentElement.style.removeProperty('--transition-duration')
    }
  }

  const debounce = (func: Function, wait: number) => {
    let timeout: NodeJS.Timeout
    return function executedFunction(...args: any[]) {
      const later = () => {
        clearTimeout(timeout)
        func(...args)
      }
      clearTimeout(timeout)
      timeout = setTimeout(later, wait)
    }
  }

  const debouncedOptimize = debounce(optimizeForLowPerformance, 500)

  onMounted(() => {
    checkReducedMotion()
    measureFPS()
    
    // Measure memory every 5 seconds
    const memoryInterval = setInterval(measureMemory, 5000)
    
    // Listen for reduced motion changes
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handleChange = () => {
      checkReducedMotion()
      debouncedOptimize()
    }
    
    mediaQuery.addEventListener('change', handleChange)
    
    // Optimize based on current performance
    debouncedOptimize()
    
    onUnmounted(() => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
      clearInterval(memoryInterval)
      mediaQuery.removeEventListener('change', handleChange)
    })
  })

  return {
    metrics: readonly(metrics),
    optimizeForLowPerformance: debouncedOptimize
  }
}

// Lazy loading performance optimization
export function useLazyLoading() {
  const loadedComponents = ref<Set<string>>(new Set())
  const loadingQueue = ref<string[]>([])
  const maxConcurrentLoads = 3
  const currentlyLoading = ref(0)

  const loadComponent = async (componentId: string, loadFunction: () => Promise<any>) => {
    if (loadedComponents.value.has(componentId)) {
      return Promise.resolve()
    }

    return new Promise((resolve, reject) => {
      const processQueue = async () => {
        if (currentlyLoading.value >= maxConcurrentLoads) {
          loadingQueue.value.push(componentId)
          return
        }

        currentlyLoading.value++
        
        try {
          await loadFunction()
          loadedComponents.value.add(componentId)
          resolve(undefined)
        } catch (error) {
          reject(error)
        } finally {
          currentlyLoading.value--
          
          // Process next in queue
          if (loadingQueue.value.length > 0) {
            const nextId = loadingQueue.value.shift()
            if (nextId) {
              processQueue()
            }
          }
        }
      }

      processQueue()
    })
  }

  const preloadComponent = (componentId: string, loadFunction: () => Promise<any>) => {
    // Preload during idle time
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        loadComponent(componentId, loadFunction)
      })
    } else {
      setTimeout(() => {
        loadComponent(componentId, loadFunction)
      }, 100)
    }
  }

  return {
    loadedComponents: readonly(loadedComponents),
    loadComponent,
    preloadComponent
  }
}

// Image lazy loading optimization
export function useImageLazyLoading() {
  const imageObserver = ref<IntersectionObserver | null>(null)
  const loadedImages = ref<Set<string>>(new Set())

  const createImageObserver = () => {
    imageObserver.value = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement
            const src = img.dataset.src
            
            if (src && !loadedImages.value.has(src)) {
              img.src = src
              img.classList.remove('lazy-image')
              img.classList.add('loaded-image')
              loadedImages.value.add(src)
              imageObserver.value?.unobserve(img)
            }
          }
        })
      },
      {
        rootMargin: '50px'
      }
    )
  }

  const observeImage = (img: HTMLImageElement) => {
    if (!imageObserver.value) {
      createImageObserver()
    }
    
    if (imageObserver.value) {
      imageObserver.value.observe(img)
    }
  }

  const unobserveImage = (img: HTMLImageElement) => {
    if (imageObserver.value) {
      imageObserver.value.unobserve(img)
    }
  }

  onUnmounted(() => {
    if (imageObserver.value) {
      imageObserver.value.disconnect()
    }
  })

  return {
    observeImage,
    unobserveImage,
    loadedImages: readonly(loadedImages)
  }
}
