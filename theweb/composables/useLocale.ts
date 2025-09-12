export const useLocale = () => {
  const { locale, setLocale } = useI18n()
  const { setLanguageLoading } = useGlobalLoading()
  
  const changeLocale = async (newLocale: string) => {
    try {
      setLanguageLoading(true, 'در حال تغییر زبان...')
      
      // Add a delay to show the loading state
      await new Promise(resolve => setTimeout(resolve, 500))
      
      await setLocale(newLocale)
      
      // Save to localStorage for persistence
      if (process.client) {
        localStorage.setItem('i18n_redirected', newLocale)
      }
      
      // Add another delay to ensure smooth transition
      await new Promise(resolve => setTimeout(resolve, 300))
    } finally {
      setLanguageLoading(false)
    }
  }
  
  const toggleLocale = async () => {
    const newLocale = locale.value === 'en' ? 'fa' : 'en'
    await changeLocale(newLocale)
  }
  
  return {
    locale: readonly(locale),
    changeLocale,
    toggleLocale
  }
}
