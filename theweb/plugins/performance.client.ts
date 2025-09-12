export default defineNuxtPlugin(() => {
  // Initialize performance monitoring
  if (process.client) {
    // Add performance monitoring CSS variables
    const style = document.createElement('style')
    style.textContent = `
      :root {
        --animation-duration: 0.8s;
        --transition-duration: 0.3s;
        --parallax-speed: 0.5;
      }
      
      @media (prefers-reduced-motion: reduce) {
        :root {
          --animation-duration: 0.01ms;
          --transition-duration: 0.01ms;
          --parallax-speed: 0;
        }
      }
    `
    document.head.appendChild(style)

    // Monitor performance and adjust accordingly
    let frameCount = 0
    let lastTime = performance.now()
    let isLowPerformance = false

    const checkPerformance = () => {
      const currentTime = performance.now()
      frameCount++
      
      if (currentTime - lastTime >= 1000) {
        const fps = Math.round((frameCount * 1000) / (currentTime - lastTime))
        
        if (fps < 30 && !isLowPerformance) {
          isLowPerformance = true
          // Reduce animations for low performance devices
          document.documentElement.style.setProperty('--animation-duration', '0.01ms')
          document.documentElement.style.setProperty('--transition-duration', '0.01ms')
          document.documentElement.style.setProperty('--parallax-speed', '0')
        } else if (fps >= 30 && isLowPerformance) {
          isLowPerformance = false
          // Restore normal animations
          document.documentElement.style.removeProperty('--animation-duration')
          document.documentElement.style.removeProperty('--transition-duration')
          document.documentElement.style.removeProperty('--parallax-speed')
        }
        
        frameCount = 0
        lastTime = currentTime
      }
      
      requestAnimationFrame(checkPerformance)
    }

    // Start performance monitoring
    requestAnimationFrame(checkPerformance)

    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload hero images
      const heroImages = [
        '/images/hero/herobg.webp',
        '/images/logo.webp'
      ]
      
      heroImages.forEach(src => {
        const link = document.createElement('link')
        link.rel = 'preload'
        link.as = 'image'
        link.href = src
        document.head.appendChild(link)
      })
    }

    // Run preloading after page load
    if (document.readyState === 'complete') {
      preloadCriticalResources()
    } else {
      window.addEventListener('load', preloadCriticalResources)
    }

    // Optimize scroll performance
    let ticking = false
    const optimizedScrollHandler = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          // Scroll handling logic here
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', optimizedScrollHandler, { passive: true })

    // Cleanup on page unload
    window.addEventListener('beforeunload', () => {
      window.removeEventListener('scroll', optimizedScrollHandler)
      window.removeEventListener('load', preloadCriticalResources)
    })
  }
})
