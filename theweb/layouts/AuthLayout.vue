<template>
  <!-- Desktop Header -->
  <header :dir="currentDir" class="w-full mx-auto px-6 lg:px-10 py-3 lg:py-4 hidden lg:flex items-center justify-between bg-[#324D6E] rounded-b-3xl fixed top-0 left-1/2 transform -translate-x-1/2 z-50">
    <!-- Logo + Nav -->
    <div class="flex items-center gap-3">
      <img :src="logo" :alt="$t('app.name')" class="h-6 lg:h-8 w-auto" />
      <span class="text-[#3b82f6] font-bold text-base lg:text-lg">{{ $t('app.name') }}</span>
      <nav class="flex items-center gap-6 lg:gap-10 text-xs lg:text-sm text-white px-6 lg:px-10">
        <a v-for="item in navItems" :key="item.key" href="#" @click.prevent="goToSection(item.target)" class="hover:text-[#3b82f6] transition-colors flex items-center">
          {{ $t(item.label) }}
        </a>
      </nav>
    </div>

    <!-- Language & Theme -->
    <div class="flex items-center gap-3 lg:gap-4">
      <!-- Language Selector -->
      <div class="flex items-center gap-1 cursor-pointer" @click="toggleLocaleHandler">
        <i class="mdi mdi-chevron-down text-xs text-[#3b82f6]"></i>
        <span class="text-[#3b82f6] font-medium text-sm lg:text-base">{{ currentLocale === 'fa' ? 'FA' : 'EN' }}</span>
      </div>

      <!-- Theme Toggle -->
      <div v-if="isClient" @click="toggleTheme" class="cursor-pointer text-white">
        <i :class="isDark ? 'mdi mdi-weather-night' : 'mdi mdi-weather-sunny'" class="text-lg lg:text-xl"></i>
      </div>
    </div>
  </header>

  <!-- Mobile Header -->
  <header :dir="currentDir" class="w-full lg:hidden flex items-center justify-between bg-[#1A2B3C] rounded-full fixed px-4 lg:px-5 py-2 lg:py-3 mt-2 lg:mt-3 z-[60]">

    <!-- Mobile Menu Button & Controls -->
    <div class="flex items-center">
      <!-- Theme Toggle -->
      <div v-if="isClient" @click="toggleTheme" class="cursor-pointer text-white">
        <i :class="isDark ? 'mdi mdi-weather-night' : 'mdi mdi-weather-sunny'" class="text-lg lg:text-xl"></i>
      </div>

      <!-- Mobile Menu Button -->
      <button @click="toggleMobileMenu" class="text-white p-1">
        <i :class="isMobileMenuOpen ? 'mdi mdi-close' : 'mdi mdi-menu'" class="text-lg lg:text-xl"></i>
      </button>
         <!-- Logo -->
    </div>
    <div class="flex items-center gap-2">
      <span class="text-[#3b82f6] font-bold text-sm lg:text-base">{{ $t('app.name') }}</span>
      <img :src="logo" :alt="$t('app.name')" class="h-6 lg:h-7 w-auto object-contain" />
    </div>
  </header>

  <!-- Waterfall Sidebar -->
  <WaterfallSidebar
    :is-open="isMobileMenuOpen"
    :nav-items="navItems"
    :is-dark="isDark"
    :is-client="isClient"
    @close="toggleMobileMenu"
    @item-click="goToSection"
    @toggle-locale="toggleLocale"
    @toggle-theme="toggleTheme"
  />  
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
// useI18n is auto-imported by Nuxt i18n module
import { useRoute } from 'vue-router'
import { useLocalePath } from '#i18n'
import logo from '~/assets/images/logo.webp'
import WaterfallSidebar from '~/components/WaterfallSidebar.vue'

const navItems = [
  { key: 'about', label: 'app.nav.about', target: 'about' },
  { key: 'whyEzyTeam', label: 'app.nav.whyEzyTeam', target: 'why-ezy-team' },
  { key: 'ezyTon', label: 'app.nav.ezyTon', target: 'ezy-ton' },
  { key: 'tokenomics', label: 'app.nav.tokenomics', target: 'tokenomics' },
  { key: 'products', label: 'app.nav.products', target: 'products' },
  { key: 'roadMap', label: 'app.nav.roadMap', target: 'road-map' },
  { key: 'plans', label: 'app.nav.plans', target: 'plans' },
  { key: 'blog', label: 'app.nav.blog', target: 'blog' },
  { key: 'comment', label: 'app.nav.comment', target: 'comment' },
]

const { locale, locales } = useI18n()
const { toggleLocale } = useLocale()
const { theme, toggleTheme } = useTheme()
const currentLocale = computed(() => locale.value)
const currentDir = computed(() => {
  const list = locales.value || []
  const match = list.find(l => (l && typeof l === 'object' && 'code' in l) ? l.code === locale.value : l === locale.value)
  const dir = match && typeof match === 'object' && 'dir' in match ? match.dir : null
  return dir || (locale.value === 'fa' ? 'rtl' : 'ltr')
})

const route = useRoute()
const localePath = useLocalePath()

const isDark = computed(() => theme.value === 'dark')
const isClient = ref(false)
const isMobileMenuOpen = ref(false)

onMounted(() => {
  isClient.value = true
})

async function toggleLocaleHandler() {
  await toggleLocale()
}

function goToSection(sectionId) {
  const el = document.getElementById(sectionId)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  // Close mobile menu after navigation
  isMobileMenuOpen.value = false
}

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
</script>
