<template>
  <div
    class="bg-blue-600/80 backdrop-blur-xl rounded-2xl overflow-hidden flex flex-col md:flex-row items-center justify-center text-center p-6 gap-6 
           w-11/12 max-w-sm mx-auto sm:max-w-7xl md:w-full border border-blue-400/30 shadow-2xl"
  >
    <span class="text-2xl md:text-3xl font-bold text-white">
      {{ $t('banner.title') }}
    </span>

    <div class="flex flex-col md:flex-row gap-4">
      <a
        href="https://ston.fi"
        target="_blank"
        class="bg-white/20 backdrop-blur-lg text-white rounded-lg px-4 py-2 flex items-center gap-2 hover:scale-105 transition-all duration-300 border border-white/30 shadow-lg"
      >
        <i class="mdi mdi-currency-usd text-2xl"></i>
        {{ $t('banner.ston') }}
      </a>

      <a
        href="https://dedust.io"
        target="_blank"
        class="bg-white/20 backdrop-blur-lg text-white rounded-lg px-4 py-2 flex items-center gap-2 hover:scale-105 transition-all duration-300 border border-white/30 shadow-lg"
      >
        <i class="mdi mdi-swap-horizontal text-2xl"></i>
        {{ $t('banner.dedust') }}
      </a>

      <a
        href="https://swap.coffee"
        target="_blank"
        class="bg-white/20 backdrop-blur-lg text-white rounded-lg px-4 py-2 flex items-center gap-2 hover:scale-105 transition-all duration-300 border border-white/30 shadow-lg"
      >
        <i class="mdi mdi-coffee text-2xl"></i>
        {{ $t('banner.swap') }}
      </a>
    </div>
  </div>
</template>

<script setup></script>
