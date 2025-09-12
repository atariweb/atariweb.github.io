<template>
  <section class="max-w-7xl mx-auto px-2 py-16">
    <div class="lg:bg-white/10 lg:dark:bg-gray-800/10 lg:backdrop-blur-xl lg:rounded-3xl lg:border lg:border-white/20 lg:dark:border-gray-700/20 lg:shadow-2xl py-12 px-4 lg:p-12 section-fade-in">
      <!-- Title -->
      <h2 class="font-bold text-4xl text-center mb-16 text-gray-900 dark:text-white">{{ $t('ezyTeam.why.title') }}</h2>
      
      <!-- Main Content Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        
        <!-- Left Column - Two Cards Stacked -->
        <div class="flex flex-col gap-6 order-1 lg:order-1">
          <div class="bg-white/20 dark:bg-gray-800/20 backdrop-blur-lg rounded-2xl border border-white/30 dark:border-gray-700/30 shadow-lg p-8 section-slide-up section-delay-1 hover:bg-white/30 dark:hover:bg-gray-800/30 transition-all duration-300">
            <h3 class="text-2xl font-bold mb-4 text-gray-800 dark:text-white">{{ $t('ezyTeam.why.sections.0.title') }}</h3>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed">{{ $t('ezyTeam.why.sections.0.text') }}</p>
          </div>
          <div class="bg-white/20 dark:bg-gray-800/20 backdrop-blur-lg rounded-2xl border border-white/30 dark:border-gray-700/30 shadow-lg p-8 section-slide-up section-delay-2 hover:bg-white/30 dark:hover:bg-gray-800/30 transition-all duration-300">
            <h3 class="text-2xl font-bold mb-4 text-gray-800 dark:text-white">{{ $t('ezyTeam.why.sections.1.title') }}</h3>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed">{{ $t('ezyTeam.why.sections.1.text') }}</p>
          </div>
        </div>

        <!-- Center - 3D Illustration -->
        <div class="flex justify-center items-center order-2 lg:order-2">
          <div class="illustration-container section-scale-in section-delay-3">
            <img
              src="/assets/images/EzyTon/innovation.webp"
              alt="innovation"
              class="w-full h-auto max-w-md object-contain"
            />
          </div>
        </div>

        <!-- Right Column - Two Cards Stacked -->
        <div class="flex flex-col gap-6 order-3 lg:order-3">
          <div class="bg-white/20 dark:bg-gray-800/20 backdrop-blur-lg rounded-2xl border border-white/30 dark:border-gray-700/30 shadow-lg p-8 section-slide-up section-delay-4 hover:bg-white/30 dark:hover:bg-gray-800/30 transition-all duration-300">
            <h3 class="text-2xl font-bold mb-4 text-gray-800 dark:text-white">{{ $t('ezyTeam.why.sections.2.title') }}</h3>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed">{{ $t('ezyTeam.why.sections.2.text') }}</p>
          </div>
          <div class="bg-white/20 dark:bg-gray-800/20 backdrop-blur-lg rounded-2xl border border-white/30 dark:border-gray-700/30 shadow-lg p-8 section-slide-up section-delay-5 hover:bg-white/30 dark:hover:bg-gray-800/30 transition-all duration-300">
            <h3 class="text-2xl font-bold mb-4 text-gray-800 dark:text-white">{{ $t('ezyTeam.why.sections.3.title') }}</h3>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed">{{ $t('ezyTeam.why.sections.3.text') }}</p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
/* Feature Cards for Why Ezy Team Section */
.feature-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(8px);
  border-radius: 1rem;
  border: 1px solid rgba(229, 231, 235, 0.3);
  box-shadow: 
    0 10px 15px -3px rgba(0, 0, 0, 0.1), 
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.dark .feature-card {
  background: rgba(31, 41, 55, 0.95);
  border: 1px solid rgba(55, 65, 81, 0.3);
  box-shadow: 
    0 10px 15px -3px rgba(0, 0, 0, 0.2), 
    0 4px 6px -2px rgba(0, 0, 0, 0.1);
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 
    0 20px 25px -5px rgba(0, 0, 0, 0.1), 
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.dark .feature-card:hover {
  box-shadow: 
    0 20px 25px -5px rgba(0, 0, 0, 0.3), 
    0 10px 10px -5px rgba(0, 0, 0, 0.1);
}

/* Illustration Container - Transparent Background */
.illustration-container {
  padding: 2rem;
  background: transparent;
  border: none;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.illustration-container:hover {
  transform: translateY(-2px) scale(1.02);
}

/* Remove any background from the image itself */
.illustration-container img {
  background: transparent;
  mix-blend-mode: normal;
}
</style>
