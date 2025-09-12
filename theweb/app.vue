<template>
  <div>
    <!-- Modern Blur Loading Overlay -->
    <Transition name="simple-fade">
      <div 
        v-if="isLoading" 
        class="fixed inset-0 z-[9999] flex items-center justify-center modern-blur-overlay"
      >
        <!-- Modern Blur Background -->
        <div class="absolute inset-0 modern-blur-bg"></div>
        
        <!-- Clean Loading Spinner -->
        <div class="relative z-10 modern-clean-spinner">
          <div class="spinner-ring"></div>
          <div class="spinner-ring"></div>
          <div class="spinner-ring"></div>
        </div>
      </div>
    </Transition>

    <NuxtLayout>
      <PageTransition name="fade">
        <NuxtPage />
      </PageTransition>
    </NuxtLayout>
  </div>
</template>

<script setup>
import { computed, onMounted, onBeforeMount } from 'vue'
// useI18n is auto-imported by Nuxt i18n module
import { useGlobalLoading } from '~/composables/useGlobalLoading'
import { useTheme } from '~/composables/useTheme'
import PageTransition from '~/components/PageTransition.vue'

const { locale, locales } = useI18n()
const { isLoading, loadingType, loadingMessage, setPageLoading } = useGlobalLoading()
const { theme } = useTheme()

const currentLocale = computed(() => locale.value)
const currentDir = computed(() => {
  const list = locales.value || []
  const match = list.find((l) => {
    if (l && typeof l === 'object' && 'code' in l) return l.code === locale.value
    return l === locale.value
  })
  const dir = match && typeof match === 'object' && 'dir' in match ? match.dir : null
  return dir || (locale.value === 'fa' ? 'rtl' : 'ltr')
})

const getDefaultLoadingMessage = () => {
  switch (loadingType.value) {
    case 'page':
      return 'در حال بارگذاری صفحه...'
    case 'language':
      return 'در حال تغییر زبان...'
    case 'theme':
      return 'در حال تغییر تم...'
    default:
      return 'در حال بارگذاری...'
  }
}

// Handle page loading on mount
onBeforeMount(async () => {
  // Simulate initialization time
  await new Promise(resolve => setTimeout(resolve, 1200))
})

onMounted(async () => {
  // Wait for all components to be ready
  await nextTick()
  
  // Additional delay to ensure everything is loaded
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  // Finish initial loading
  const { removeOperation } = useGlobalLoading()
  removeOperation('initial-loading')
})

useHead({
  htmlAttrs: {
    lang: currentLocale,
    dir: currentDir,
  },
  link: [
    {
      rel: 'stylesheet',
      href: 'https://cdn.jsdelivr.net/npm/@mdi/font@7.0.96/css/materialdesignicons.min.css'
    }
  ]
})
</script>

