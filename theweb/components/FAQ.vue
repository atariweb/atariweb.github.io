<template>
  <section class="max-w-7xl mx-auto my-16 lg:my-28 mb-16 lg:mb-32 px-2 lg:px-10 h-[800px] lg:h-[755px]">
    <div class="lg:bg-white/10 lg:dark:bg-gray-800/10 lg:backdrop-blur-xl lg:rounded-3xl lg:border lg:border-white/20 lg:dark:border-gray-700/20 lg:shadow-2xl p-4 lg:p-8">
      <h2 class="text-center font-bold text-xl lg:text-2xl mb-6 lg:mb-8">{{ $t('faqSection.title') }}</h2>
      
      <div class="space-y-4">
        <div 
          v-for="(faq, index) in faqs" 
          :key="index" 
          class="bg-white/20 dark:bg-gray-800/20 backdrop-blur-lg rounded-lg border border-white/30 dark:border-gray-700/30 shadow-lg group py-4 lg:py-5 px-4 lg:px-5 transition-all duration-300 hover:shadow-xl hover:bg-white/30 dark:hover:bg-gray-800/30"
        >
          <h3 
            class="flex justify-start items-center text-base lg:text-lg gap-2 lg:gap-3 cursor-pointer transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400" 
            @click="toggle(index)"
          >
            <i 
              class="mdi mdi-plus text-xl lg:text-2xl transition-all duration-300 ease-in-out" 
              :class="{
                'rotate-45 text-blue-600 dark:text-blue-400': isOpen(index),
                'text-gray-500 dark:text-gray-400': !isOpen(index)
              }"
            ></i>
            <span class="transition-all duration-300" :class="{ 'font-semibold': isOpen(index) }">
              {{ faq.question }}
            </span>
          </h3>

          <transition
            name="faq-expand"
            enter-active-class="transition-all duration-300 ease-out"
            leave-active-class="transition-all duration-300 ease-in"
            enter-from-class="opacity-0 max-h-0"
            enter-to-class="opacity-100 max-h-96"
            leave-from-class="opacity-100 max-h-96"
            leave-to-class="opacity-0 max-h-0"
          >
            <div v-if="isOpen(index)" class="overflow-hidden">
              <div class="mt-3 lg:mt-4 p-3 lg:p-4 bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-lg border-l-4 border-blue-500 border border-white/20 dark:border-gray-700/20">
                <p class="text-sm lg:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  {{ faq.answer }}
                </p>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
// useI18n is auto-imported by Nuxt i18n module

interface FaqItem {
  question: string
  answer: string
}

const { tm } = useI18n()

const faqs = computed<FaqItem[]>(() => {
  return (tm('faqs') as FaqItem[]) || []
})

const openIndex = ref<number | null>(null)

const toggle = (index: number) => {
  openIndex.value = openIndex.value === index ? null : index
}

const isOpen = (index: number) => {
  return openIndex.value === index
}
</script>

<style scoped>
/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  .transition-all {
    transition: none;
  }
}
</style>
