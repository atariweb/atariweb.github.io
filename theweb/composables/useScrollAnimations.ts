import { ref, onMounted, onUnmounted, type Ref } from 'vue'

export interface ScrollAnimationOptions {
  threshold?: number
  rootMargin?: string
  animationType?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scaleIn' | 'blurIn'
  delay?: number
  duration?: number
  once?: boolean
}

export function useScrollAnimations() {
  const observer = ref<IntersectionObserver | null>(null)
  const observedElements = ref<Set<Element>>(new Set())

  const defaultOptions: ScrollAnimationOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
    animationType: 'fadeIn',
    delay: 0,
    duration: 800,
    once: true
  }

  const createObserver = (options: ScrollAnimationOptions = {}) => {
    const config = { ...defaultOptions, ...options }
    
    return new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement
            animateElement(element, config)
            
            if (config.once) {
              observer.value?.unobserve(element)
              observedElements.value.delete(element)
            }
          }
        })
      },
      {
        threshold: config.threshold,
        rootMargin: config.rootMargin
      }
    )
  }

  const animateElement = (element: HTMLElement, options: ScrollAnimationOptions) => {
    // Remove any existing animation classes
    element.classList.remove(
      'animate-fade-in', 'animate-slide-up', 'animate-slide-left', 
      'animate-slide-right', 'animate-scale-in', 'animate-blur-in'
    )

    // Set initial state based on animation type
    switch (options.animationType) {
      case 'fadeIn':
        element.style.opacity = '0'
        break
      case 'slideUp':
        element.style.opacity = '0'
        element.style.transform = 'translateY(50px)'
        break
      case 'slideLeft':
        element.style.opacity = '0'
        element.style.transform = 'translateX(50px)'
        break
      case 'slideRight':
        element.style.opacity = '0'
        element.style.transform = 'translateX(-50px)'
        break
      case 'scaleIn':
        element.style.opacity = '0'
        element.style.transform = 'scale(0.9)'
        break
      case 'blurIn':
        element.style.opacity = '0'
        element.style.filter = 'blur(10px)'
        break
    }

    // Set transition properties
    element.style.transition = `all ${options.duration}ms cubic-bezier(0.4, 0, 0.2, 1)`
    element.style.transitionDelay = `${options.delay}ms`

    // Trigger animation after a small delay
    setTimeout(() => {
      element.style.opacity = '1'
      element.style.transform = 'translateY(0) translateX(0) scale(1)'
      element.style.filter = 'blur(0px)'
      element.classList.add(`animate-${options.animationType}`)
    }, 50)
  }

  const observeElement = (
    element: HTMLElement | Ref<HTMLElement | null>,
    options: ScrollAnimationOptions = {}
  ) => {
    const el = 'value' in element ? element.value : element
    if (!el) return

    if (!observer.value) {
      observer.value = createObserver(options)
    }

    observer.value.observe(el)
    observedElements.value.add(el)
  }

  const unobserveElement = (element: HTMLElement | Ref<HTMLElement | null>) => {
    const el = 'value' in element ? element.value : element
    if (!el || !observer.value) return

    observer.value.unobserve(el)
    observedElements.value.delete(el)
  }

  const observeMultiple = (
    elements: (HTMLElement | Ref<HTMLElement | null>)[],
    options: ScrollAnimationOptions = {}
  ) => {
    elements.forEach((element, index) => {
      const elementOptions = {
        ...options,
        delay: options.delay ? options.delay + (index * 100) : index * 100
      }
      observeElement(element, elementOptions)
    })
  }

  const destroyObserver = () => {
    if (observer.value) {
      observer.value.disconnect()
      observer.value = null
      observedElements.value.clear()
    }
  }

  onUnmounted(() => {
    destroyObserver()
  })

  return {
    observeElement,
    unobserveElement,
    observeMultiple,
    destroyObserver
  }
}

// Smooth scroll utility
export function useSmoothScroll() {
  const scrollToElement = (element: HTMLElement | string, offset: number = 0) => {
    const el = typeof element === 'string' 
      ? document.querySelector(element) as HTMLElement
      : element

    if (!el) return

    const elementPosition = el.getBoundingClientRect().top + window.pageYOffset
    const offsetPosition = elementPosition - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return {
    scrollToElement,
    scrollToTop
  }
}
