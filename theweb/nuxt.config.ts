// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  // Tailwind v4 configuration

  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxtjs/i18n',
    '@pinia/nuxt',
  ],

  // Performance optimizations
  experimental: {
    payloadExtraction: false,
  },

  // Build optimizations
  build: {
    transpile: ['@headlessui/vue'],
  },

  // Runtime config for performance
  runtimeConfig: {
    public: {
      enablePerformanceMonitoring: true,
      enableLazyLoading: true,
      enableSmoothScrolling: true,
    }
  },
  
  // Router configuration
  router: {
    options: {
      strict: false
    }
  },
  
  // Fix for _path redefinition issue
  nitro: {
    experimental: {
      wasm: true
    }
  },
  pinia: {
    storesDirs: ['./stores/**'],
  },
  i18n: {
    locales: [
      { code: 'en', language: 'en', name: 'English', dir: 'ltr' },
      { code: 'fa', language: 'fa', name: 'فارسی', dir: 'rtl' },
    ],
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
    vueI18n: '~/i18n.config.ts',
    // Ensure locale is preserved during navigation
    skipSettingLocaleOnNavigate: false,
    // Fix for _path redefinition
    lazy: false,
    langDir: false,
    // Enable auto-imports
    autoImport: true,
  },
    vite: {
    plugins: [
      tailwindcss(),
    ],
  },
});
