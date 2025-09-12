<template>
  <section class="max-w-7xl mx-auto px-2 lg:px-8 py-8 lg:py-12">
    <div class="lg:bg-white/10 lg:dark:bg-gray-800/10 lg:backdrop-blur-xl lg:rounded-3xl lg:border lg:border-white/20 lg:dark:border-gray-700/20 lg:shadow-2xl p-4 lg:p-8 section-fade-in">
      <div class="flex justify-center mb-6 lg:mb-8">
        <h2 class="ribbon-title text-xl lg:text-2xl font-bold ">
          {{ $t('features.title') }}
        </h2>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        <div
          v-for="(item, index) in features"
          :key="index"
          class="bg-white/20 dark:bg-gray-800/20 backdrop-blur-lg rounded-2xl border border-white/30 dark:border-gray-700/30 shadow-lg p-4 lg:p-6 gap-4 section-slide-up hover:bg-white/30 dark:hover:bg-gray-800/30 transition-all duration-300"
          :class="`section-delay-${index + 1}`"
        >
          <div class="flex flex-col lg:flex-row items-center gap-4">
            <div :class="['flex justify-center lg:justify-start', isEn ? 'lg:order-1' : 'lg:order-2']">
              <div class="w-12 h-12 lg:w-16 lg:h-16 bg-blue-100/80 dark:bg-blue-900/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-blue-200/50 dark:border-blue-700/50">
                <i :class="['mdi', item.icon, 'text-2xl lg:text-3xl text-blue-600 dark:text-blue-400']"></i>
              </div>
            </div>
            <div :class="['flex flex-col text-center', isEn ? 'lg:order-2 lg:text-left' : 'lg:order-1 lg:text-right']">
              <h3 class="text-lg lg:text-xl font-bold mb-2 ">
                {{ $t(`features.items.${index}.title`) }}
              </h3>
              <p class="text-sm lg:text-base text-gray-600 dark:text-gray-400">
                {{ $t(`features.items.${index}.description`) }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
// useI18n is auto-imported by Nuxt i18n module

const { locale } = useI18n()
const isEn = computed(() => locale.value === 'en')

const features = [
  { icon: "mdi-lightning-bolt", alt: "Feature 1" },
  { icon: "mdi-shield-check", alt: "Feature 2" },
  { icon: "mdi-rocket-launch", alt: "Feature 3" },
  { icon: "mdi-cog", alt: "Feature 4" },
]
</script>


<style scoped>
.ribbon-title {
  position: relative;
  background: #DCF2FF;
  color: #0f172a;
  padding: 10px 20px;
  border-radius: 4px;
}
.dark .ribbon-title {
  background: #0F2540;
  color: white;
}
.ribbon-title::before,
.ribbon-title::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 24px;
  background: #DCF2FF;
}
.dark .ribbon-title::before,
.dark .ribbon-title::after {
  background: #0F2540;
}
.ribbon-title::before {
  left: -12px;
  clip-path: polygon(100% 0, 0 0, 50% 100%);
}
.ribbon-title::after {
  right: -12px;
  clip-path: polygon(0 0, 100% 0, 50% 100%);
}
</style>
