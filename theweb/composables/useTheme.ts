export const useTheme = () => {
  const { setThemeLoading } = useGlobalLoading()
  
  const theme = useState<'light' | 'dark'>('theme', () => 'light')
  
  const toggleTheme = async () => {
    try {
      setThemeLoading(true, 'در حال تغییر تم...')
      
      // Add a delay to show the loading state
      await new Promise(resolve => setTimeout(resolve, 500))
      
      const newTheme = theme.value === 'light' ? 'dark' : 'light'
      theme.value = newTheme
      
      // Save to localStorage for persistence
      if (process.client) {
        localStorage.setItem('theme', newTheme)
        document.documentElement.classList.toggle('dark', newTheme === 'dark')
      }
      
      // Add another delay to ensure smooth transition
      await new Promise(resolve => setTimeout(resolve, 300))
    } finally {
      setThemeLoading(false)
    }
  }
  
  const setTheme = async (newTheme: 'light' | 'dark') => {
    if (theme.value === newTheme) return
    
    try {
      setThemeLoading(true, 'در حال تغییر تم...')
      
      // Add a delay to show the loading state
      await new Promise(resolve => setTimeout(resolve, 500))
      
      theme.value = newTheme
      
      // Save to localStorage for persistence
      if (process.client) {
        localStorage.setItem('theme', newTheme)
        document.documentElement.classList.toggle('dark', newTheme === 'dark')
      }
      
      // Add another delay to ensure smooth transition
      await new Promise(resolve => setTimeout(resolve, 300))
    } finally {
      setThemeLoading(false)
    }
  }
  
  // Initialize theme from localStorage on client side
  if (process.client) {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
    if (savedTheme) {
      theme.value = savedTheme
      document.documentElement.classList.toggle('dark', savedTheme === 'dark')
    }
  }
  
  return {
    theme: readonly(theme),
    toggleTheme,
    setTheme
  }
}
