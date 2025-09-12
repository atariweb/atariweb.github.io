export default defineNuxtPlugin(async () => {
  const { $i18n } = useNuxtApp()
  
  // Ensure locale is properly initialized on client side
  if (process.client) {
    // Get saved locale from localStorage or use default
    const savedLocale = localStorage.getItem('i18n_redirected') || 'en'
    
    // Set the locale if it's different from current
    if ($i18n.locale.value !== savedLocale) {
      await $i18n.setLocale(savedLocale)
    }
  }
})
