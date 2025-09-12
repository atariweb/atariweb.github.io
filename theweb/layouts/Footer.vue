<template>
  <footer :dir="currentDir" class="text-white transition-all duration-500 ease-in-out bg-[#0F2540] dark:bg-[#0F2540] rounded-t-3xl">
    <!-- Main Footer Content -->
    <div class="container mx-auto px-4 lg:px-6 py-4 lg:py-5">
      <div :class="[
        'grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 text-center',
        currentLocale === 'fa' ? 'lg:text-right' : 'lg:text-left'
      ]">
          <!-- Logo and Tagline -->
          <div class="space-y-3">
            <div class="flex items-center justify-center lg:justify-start space-x-2">
              <div>
                <img src="~/assets/images/logo.webp" alt="logo" class="w-auto h-6 lg:h-8"></img>
              </div>
              <span class="text-xl lg:text-2xl font-bold text-[#3b82f6]">{{ $t('app.name') }}</span>
            </div>
            <p class="text-xs lg:text-sm text-[#6B88AB] dark:text-gray-400">
              {{ $t('footer.tagline') }}
            </p>
          </div>
        <!-- Middle Section - Navigation Links -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 text-center">
            <!-- Top Row -->
            <div class="space-y-2 lg:space-y-3">
              <a href="#" class="block text-sm lg:text-base text-gray-300 dark:text-gray-400 hover:text-white">{{ $t('app.nav.about') }}</a>
              <a href="#" class="block text-sm lg:text-base text-gray-300 dark:text-gray-400 hover:text-white">{{ $t('app.nav.whyEzyTeam') }}</a>
              <a href="#" class="block text-sm lg:text-base text-gray-300 dark:text-gray-400 hover:text-white">{{ $t('app.nav.products') }}</a>
              <a href="#" class="block text-sm lg:text-base text-gray-300 dark:text-gray-400 hover:text-white">{{ $t('app.nav.roadMap') }}</a>
              <a href="#" class="block text-sm lg:text-base text-gray-300 dark:text-gray-400 hover:text-white">{{ $t('app.nav.comment') }}</a>
            </div>
            <!-- Bottom Row -->
            <div class="space-y-2 lg:space-y-3">
              <a href="#" class="block text-sm lg:text-base text-gray-300 dark:text-gray-400 hover:text-white">{{ $t('app.nav.ezyTon') }}</a>
              <a href="#" class="block text-sm lg:text-base text-gray-300 dark:text-gray-400 hover:text-white">{{ $t('app.nav.tokenomics') }}</a>
              <a href="#" class="block text-sm lg:text-base text-gray-300 dark:text-gray-400 hover:text-white">{{ $t('app.nav.plans') }}</a>
              <a href="#" class="block text-sm lg:text-base text-gray-300 dark:text-gray-400 hover:text-white">{{ $t('app.nav.blog') }}</a>
            </div>
          </div>
          <!-- Sign Up Form -->
          <div class="space-y-3">
            <h3 class="text-gray-300 dark:text-gray-400 text-xs lg:text-sm font-medium">{{ $t('footer.signUpTitle') }}</h3>
            <div :class="[
  'flex',
  currentLocale === 'fa' ? 'flex-row-reverse' : 'flex-row',
  currentLocale === 'fa' ? 'justify-center lg:justify-start' : 'justify-center lg:justify-end'
]">
              <input 
                type="email" 
                :placeholder="$t('footer.emailPlaceholder')" 
                class="flex-1 px-3 lg:px-4 py-2 lg:py-3 bg-gray-700 dark:bg-gray-800 text-white placeholder-gray-400 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 text-sm lg:text-base"
              >
              <button class="px-3 lg:px-4 py-2 lg:py-3 bg-blue-500 hover:bg-blue-600 rounded-r-lg transition-all duration-300">
                <i class="mdi mdi-navigation transform rotate-90 inline-block text-sm lg:text-base"></i>
              </button>
            </div>
          </div>
      </div>
    </div>

    <!-- Bottom Bar - Copyright -->
    <div class="border-t border-gray-700 dark:border-gray-600 bg-[#0F2540] dark:bg-[#1a1a1a] transition-all duration-500 ease-in-out">
      <div class="container mx-auto px-4 lg:px-6 py-3 lg:py-4 flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
                  <!-- Social Media Icons -->
                  <div class="flex space-x-3 lg:space-x-4 justify-center lg:justify-start">
            <a href="#" class="w-8 h-8 lg:w-10 lg:h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
              <i class="mdi mdi-whatsapp text-lg lg:text-2xl"></i>
            </a>
            <a href="#" class="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
              <i class="mdi mdi-instagram text-lg lg:text-2xl"></i>
            </a>
            <a href="#" class="w-8 h-8 lg:w-10 lg:h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
              <i class="mdi mdi-telegram text-lg lg:text-2xl"></i>
            </a>
            <a href="#" class="w-8 h-8 lg:w-10 lg:h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
              <i class="mdi mdi-linkedin text-lg lg:text-2xl"></i>
            </a>
          </div>
        <p class="text-gray-300 dark:text-gray-400 text-xs lg:text-sm text-center">
          {{ $t('footer.copyright') }}
        </p>
        <!-- Language and Theme Toggles -->
        <div class="flex items-center space-x-3 lg:space-x-4 justify-center lg:justify-start">
            <!-- Language Toggle Button -->
            <button 
              @click="toggleLanguage" 
              class="text-gray-300 dark:text-gray-400 hover:text-white font-medium text-sm lg:text-base"
            >
              {{ currentLocale === 'en' ? 'EN' : 'FA' }}
            </button>
            <div class="w-px h-4 lg:h-6 bg-gray-600 dark:bg-gray-500"></div>
            <!-- Theme Toggle Button -->
            <button 
              @click="toggleTheme" 
              class="text-gray-300 dark:text-gray-400 hover:text-white"
              :title="theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
            >
              <!-- Sun Icon for Dark Mode -->
              <i v-if="theme === 'dark'" class="mdi mdi-weather-sunny text-lg lg:text-xl"></i>
              <!-- Moon Icon for Light Mode -->
              <i v-else class="mdi mdi-weather-night text-lg lg:text-xl"></i>
            </button>
          </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted, watch, computed } from 'vue'
// useI18n is auto-imported by Nuxt i18n module

const { locale, locales } = useI18n()
const { toggleLocale } = useLocale()
const { theme, toggleTheme } = useTheme()

// Reactive state
const currentLocale = ref('en')

// RTL direction support
const currentDir = computed(() => {
  const list = locales.value || []
  const match = list.find(l => (l && typeof l === 'object' && 'code' in l) ? l.code === locale.value : l === locale.value)
  const dir = match && typeof match === 'object' && 'dir' in match ? match.dir : null
  return dir || (locale.value === 'fa' ? 'rtl' : 'ltr')
})

// Language management - simple toggle between EN and FA
const toggleLanguage = async () => {
  await toggleLocale()
}

// Initialize locale from i18n
onMounted(() => {
  // Initialize locale - sync with i18n locale
  currentLocale.value = locale.value
})

// Watch for locale changes
watch(() => locale.value, (newLocale) => {
  currentLocale.value = newLocale
})
</script>

<style scoped>
/* Footer background is consistently #0F2540 from the template */

/* Custom hover effects */
.hover\:bg-green-600:hover {
  background-color: #059669;
}

.hover\:bg-blue-500:hover {
  background-color: #3b82f6;
}

.hover\:bg-blue-700:hover {
  background-color: #1d4ed8;
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .grid-cols-3 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  
  .grid-cols-2 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
}
</style>
