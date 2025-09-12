<template>
  <div class="flex flex-col min-h-screen relative overflow-hidden">
    <!-- Animated Background Elements -->
    <div class="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <!-- Base Background -->
      <div class="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
      
      <!-- Blurred Overlay -->
      <div class="absolute inset-0 bg-white/20 dark:bg-black/50 backdrop-blur-md"></div>
      
      <!-- Floating Diamond Shapes -->
      <div class="absolute top-16 lg:top-20 left-4 lg:left-10 w-20 h-20 lg:w-32 lg:h-32 bg-blue-200 dark:bg-blue-800 opacity-20 animate-float-slow diamond-shape"></div>
      <div class="absolute top-32 lg:top-40 right-8 lg:right-20 w-16 h-16 lg:w-24 lg:h-24 bg-indigo-200 dark:bg-indigo-800 opacity-30 animate-float-medium diamond-shape"></div>
      <div class="absolute bottom-24 lg:bottom-32 left-1/4 w-24 h-24 lg:w-40 lg:h-40 bg-purple-200 dark:bg-purple-800 opacity-25 animate-float-fast diamond-shape"></div>
      <div class="absolute bottom-16 lg:bottom-20 right-1/3 w-20 h-20 lg:w-28 lg:h-28 bg-pink-200 dark:bg-pink-800 opacity-20 animate-float-slow diamond-shape"></div>
      <div class="absolute top-1/2 left-1/2 w-16 h-16 lg:w-20 lg:h-20 bg-cyan-200 dark:bg-cyan-800 opacity-30 animate-float-medium diamond-shape transform -translate-x-1/2 -translate-y-1/2"></div>
      <div class="absolute top-1/3 right-1/4 w-24 h-24 lg:w-36 lg:h-36 bg-emerald-200 dark:bg-emerald-800 opacity-15 animate-float-slow diamond-shape"></div>
      <div class="absolute bottom-1/3 left-1/5 w-12 h-12 lg:w-16 lg:h-16 bg-rose-200 dark:bg-rose-800 opacity-25 animate-float-medium diamond-shape"></div>
      
      <!-- Geometric Shapes -->
      <div class="absolute top-24 lg:top-32 right-1/4 w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-blue-400 to-indigo-500 dark:from-blue-600 dark:to-indigo-700 opacity-20 rotate-45 animate-spin-slow"></div>
      <div class="absolute bottom-32 lg:bottom-40 left-1/3 w-8 h-8 lg:w-12 lg:h-12 bg-gradient-to-r from-purple-400 to-pink-500 dark:from-purple-600 dark:to-pink-700 opacity-25 rotate-12 animate-bounce-slow"></div>
      <div class="absolute top-1/4 left-1/6 w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-cyan-400 to-blue-500 dark:from-cyan-600 dark:to-blue-700 opacity-15 rotate-90 animate-spin-slow"></div>
      
      <!-- Animated Grid Pattern -->
      <div class="absolute inset-0 opacity-5 dark:opacity-10">
        <div class="grid-pattern"></div>
      </div>
    </div>

    <AuthLayout />

    <main class="flex-1 relative z-10">
      <slot />
    </main>

    <Footer />

    <!-- Scroll Progress Indicator -->
    <ScrollProgress />

</div>
</template>

<script setup>
import AuthLayout from "~/layouts/AuthLayout.vue";
import Footer from "~/layouts/Footer.vue";
import ScrollProgress from "~/components/ScrollProgress.vue";
</script>

<style scoped>
/* Diamond Shape for Background Elements */
.diamond-shape {
  transform: rotate(45deg);
  border-radius: 0.5rem;
}
</style>
