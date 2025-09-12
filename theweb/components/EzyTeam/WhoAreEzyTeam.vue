<template>
  <section class="w-full flex justify-center items-center py-8 lg:py-12 px-2">
    <div class="bg-white/10 dark:bg-gray-800/10 backdrop-blur-xl rounded-3xl border border-white/20 dark:border-gray-700/20 shadow-xl relative p-6 lg:p-10 xl:p-20 flex flex-col lg:flex-row-reverse items-center justify-between gap-6 lg:gap-8 xl:gap-20 w-full max-w-lg lg:max-w-7xl mx-auto">
      <!-- Floating decorative icons with simple animations -->
      <div
        class="absolute top-0 right-0 w-12 h-12 lg:w-16 xl:w-28 xl:h-28  opacity-60 flex items-center justify-center bg-blue-100 dark:bg-blue-900 rounded-full"

      >
        <i class="mdi mdi-note-text text-lg lg:text-2xl xl:text-4xl text-blue-600 dark:text-blue-400"></i>
      </div>
      <div
        class="absolute bottom-0 right-0 w-16 h-16 lg:w-20 xl:w-28 xl:h-28 opacity-60 flex items-center justify-center bg-green-100 dark:bg-green-900 rounded-full"
      
      >
        <i class="mdi mdi-whatsapp text-xl lg:text-2xl xl:text-4xl text-green-600 dark:text-green-400"></i>
      </div>
      <div
        class="absolute top-0 left-0 w-16 h-16 lg:w-20 xl:w-28 xl:h-28 opacity-60 flex items-center justify-center bg-blue-100 dark:bg-blue-900 rounded-full"
      >
        <i class="mdi mdi-phone text-xl lg:text-2xl xl:text-4xl text-blue-600 dark:text-blue-400"></i>
      </div>
      <div
        class="absolute bottom-0 left-0 w-16 h-16 lg:w-20 xl:w-28 xl:h-28 opacity-60 flex items-center justify-center bg-purple-100 dark:bg-purple-900 rounded-full"
      >
        <i class="mdi mdi-image text-xl lg:text-2xl xl:text-4xl text-purple-600 dark:text-purple-400"></i>
      </div>

      <!-- Main content -->
      <div class="flex flex-col gap-3 relative z-10">
        <h2 class="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">{{ $t('ezyTeam.whoAre.title') }}</h2>
        <p class="text-sm lg:text-base text-gray-500 dark:text-gray-400">{{ $t('ezyTeam.whoAre.text') }}</p>
        <button
          class="self-center lg:self-start inline-block py-2.5 lg:py-3 px-4 lg:px-6 bg-blue-600/80 backdrop-blur-xl hover:bg-blue-700 text-white rounded-lg transition-all duration-300 hover:scale-105 mb-6 lg:mb-0 text-sm lg:text-base border border-blue-400/50 shadow-lg"
        >
          {{ $t('ezyTeam.whoAre.cta') }}
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  .animate-bounce {
    animation: none;
  }
}
</style>
