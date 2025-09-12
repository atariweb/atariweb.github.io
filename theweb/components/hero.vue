<template>
  <section class="w-full min-h-[600px] lg:h-[780px] flex items-center justify-center overflow-hidden relative">
    <!-- Glass Background -->
    <div class="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-blue-900/80 to-indigo-900/80 backdrop-blur-xl"></div>
    <div class="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
    
    <!-- Main Content -->
    <div class="relative z-10 flex flex-col items-center text-center px-4 lg:px-8 max-w-7xl mx-auto">
      
      <!-- Central Shape with Content -->
      <div class="relative">
        <!-- Background Shape Image -->
        <div class="mx-auto w-full h-full">
          <img 
            src="/assets/images/hero/Background Shape.webp" 
            alt="Hero Center" 
            class="hidden lg:block w-full h-full object-contain"
          />
          <img 
            src="/assets/images/hero/Background Shape (1).webp" 
            alt="background" 
            class="block lg:hidden w-full object-contain mt-20 z-10"
          />

          <!-- Main Content Inside Shape -->
          <div class="absolute inset-0 flex flex-col items-center justify-center text-white p-4 lg:p-8 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/30 shadow-2xl">
            <h1 class="text-3xl lg:text-6xl font-bold mb-3 leading-tight text-center -mt-4">
              <span>{{ $t('hero.titlePrefix') }}</span><br>
              <span class="text-blue-400 border-r-2 border-blue-400 animate-pulse"> {{ typedText }}</span>
            </h1>
            <p class="text-lg lg:text-xl text-blue-100 max-w-xs lg:max-w-lg leading-relaxed text-center mt-3">
              {{ $t('hero.description') }}
            </p>
            <!-- CTA Buttons -->
            <div class="flex flex-col lg:flex-row gap-3 lg:gap-6 justify-center items-center mb-6 lg:mb-10 mt-6 lg:mt-10">
              <button
                class="w-full lg:w-auto px-4 lg:px-8 py-2.5 lg:py-4 text-sm lg:text-lg font-semibold bg-white/20 hover:bg-white/30 transition-all duration-300 hover:scale-105 backdrop-blur-xl border border-white/40 text-white rounded-lg flex items-center justify-center shadow-lg"
              >
                <i class="mdi mdi-lightning-bolt mr-2 text-xl"></i>
                {{ $t('hero.roadMap') }}
              </button>
              
              <button
                class="w-full lg:w-auto px-4 lg:px-8 py-2.5 lg:py-4 text-sm lg:text-lg font-semibold bg-blue-600/80 hover:bg-blue-600 transition-all duration-300 hover:scale-105 backdrop-blur-xl border border-blue-400/60 text-white rounded-lg flex items-center justify-center shadow-lg"
              >
                <i class="mdi mdi-help-circle mr-2 text-xl"></i>
                {{ $t('hero.buy') }}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Simplified Floating Elements -->
      <div class="absolute inset-0 pointer-events-none z-5">
        <div class="absolute top-1/4 left-4 lg:left-10 w-3 h-3 lg:w-4 lg:h-4 bg-yellow-400/60 rounded-full animate-bounce"></div>
        <div class="absolute top-1/3 right-4 lg:right-16 w-2 h-2 lg:w-3 lg:h-3 bg-blue-400/60 rounded-full animate-bounce" style="animation-delay: 0.5s"></div>
        <div class="absolute bottom-1/4 left-4 lg:left-20 w-4 h-4 lg:w-5 lg:h-5 bg-purple-400/60 rounded-full animate-bounce" style="animation-delay: 1s"></div>
        <div class="absolute bottom-1/3 right-4 lg:right-8 w-3 h-3 lg:w-4 lg:h-4 bg-green-400/60 rounded-full animate-bounce" style="animation-delay: 1.5s"></div>
      </div>
    </div>
  </section>
</template>
  

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
// useI18n is auto-imported by Nuxt i18n module

const { tm, locale } = useI18n()

const suffixes = ref((tm('hero.typedSuffixes') as string[]) || [])
const typedText = ref<string>('')

let timeoutId: number | undefined
let wordIndex = 0
let charIndex = 0
let isDeleting = false

const TYPE_SPEED = 60
const DELETE_SPEED = 45
const PAUSE_MS = 700

function scheduleNext(delay: number): void {
  if (typeof window !== 'undefined') {
    if (timeoutId !== undefined) window.clearTimeout(timeoutId)
    timeoutId = window.setTimeout(tick, delay)
  }
}

function tick(): void {
  const list = suffixes.value
  const current = list[wordIndex] || ''
  if (!isDeleting) {
    typedText.value = current.substring(0, charIndex + 1)
    charIndex++
    if (charIndex === current.length) {
      isDeleting = true
      scheduleNext(PAUSE_MS)
      return
    }
    scheduleNext(TYPE_SPEED)
  } else {
    typedText.value = current.substring(0, Math.max(charIndex - 1, 0))
    charIndex = Math.max(charIndex - 1, 0)
    if (charIndex === 0) {
      isDeleting = false
      wordIndex = (wordIndex + 1) % Math.max(list.length, 1)
      scheduleNext(TYPE_SPEED)
      return
    }
    scheduleNext(DELETE_SPEED)
  }
}

// Watch for locale changes and update suffixes
watch(locale, () => {
  suffixes.value = (tm('hero.typedSuffixes') as string[]) || []
  // Reset typing animation when locale changes
  wordIndex = 0
  charIndex = 0
  isDeleting = false
  typedText.value = ''
  if (typeof window !== 'undefined' && timeoutId !== undefined) window.clearTimeout(timeoutId)
  scheduleNext(TYPE_SPEED)
})

// Watch for suffixes changes to start animation when they're first loaded
watch(suffixes, (newSuffixes) => {
  if (typeof window !== 'undefined' && newSuffixes && newSuffixes.length > 0 && !typedText.value) {
    // Only start if we don't have any text yet (initial load)
    scheduleNext(TYPE_SPEED)
  }
}, { immediate: true })

onMounted(() => {
  // Only run on client side
  if (typeof window !== 'undefined') {
    // Ensure suffixes are loaded before starting animation
    if (suffixes.value && suffixes.value.length > 0) {
      scheduleNext(TYPE_SPEED)
    } else {
      // If suffixes aren't loaded yet, wait a bit and try again
      setTimeout(() => {
        if (suffixes.value && suffixes.value.length > 0) {
          scheduleNext(TYPE_SPEED)
        }
      }, 100)
    }
  }
})

onBeforeUnmount(() => {
  if (typeof window !== 'undefined' && timeoutId !== undefined) window.clearTimeout(timeoutId)
})

// 3D Background particle system for hero
function getHeroParticleStyle(index) {
  const size = Math.random() * 4 + 2
  const x = Math.random() * 100
  const y = Math.random() * 100
  const delay = Math.random() * 20
  const duration = Math.random() * 20 + 10
  
  return {
    width: `${size}px`,
    height: `${size}px`,
    left: `${x}%`,
    top: `${y}%`,
    animationDelay: `${delay}s`,
    animationDuration: `${duration}s`
  }
}
</script>

<style scoped>
/* Simple typing animation for the text */
.typing {
  white-space: nowrap;
  overflow: hidden;
}

/* Text shadow for better readability */
h1 {
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

p {
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  .animate-bounce,
  .animate-pulse {
    animation: none;
  }
}
</style>