<template>
  <section class="max-w-7xl mx-auto mt-16 lg:mt-20 px-2 lg:px-0">
    <div class="text-lg lg:text-xl text-center px-4 lg:px-6">
      <h3 class="font-bold text-lg lg:text-xl">{{ t("menuDigital.title") }}</h3>
      <p class="mt-2 lg:mt-3 text-sm lg:text-base">
        {{ t("menuDigital.description") }}
      </p>
    </div>

    <div
      class="flex flex-col-reverse lg:flex-row justify-around items-center mt-8 lg:mt-10 bg-white/10 dark:bg-gray-800/10 backdrop-blur-xl rounded-3xl border border-white/20 dark:border-gray-700/20 shadow-2xl p-6 lg:p-10"
    >
      <div class="w-full lg:w-auto flex justify-center">
        <div class="w-[280px] lg:w-[405px] h-[450px] lg:h-[824px] bg-gradient-to-br from-blue-500/80 to-purple-600/80 backdrop-blur-xl rounded-2xl lg:rounded-3xl flex items-center justify-center border border-blue-400/30 shadow-lg">
          <i class="mdi mdi-cellphone text-white text-[120px] lg:text-[300px] opacity-80"></i>
        </div>
      </div>

      <div
        class="block lg:flex flex-col gap-4 w-full lg:w-auto items-center lg:items-start text-center lg:text-left"
      >
        <h3 class="text-[#0047BE] text-3xl lg:text-4xl font-bold mb-6 lg:mb-8">
          {{ t("menuDigital.menuTitle") }}
        </h3>

        <div class="flex flex-col gap-y-12 lg:gap-y-16">
          <div
            v-for="(feature, index) in features"
            :key="index"
            class="flex items-center gap-2"
            :class="
              index !== features.length - 1
                ? 'border-b border-gray-300 pb-4'
                : 'pb-4'
            "
          >
            <i :class="['mdi', feature.icon, 'text-2xl']"></i>
            <span class="text-center lg:text-left">{{ feature.text }}</span>
          </div>

          <div class="flex justify-center mb-5 lg:mb-0">
            <a
              href="#products"
              class="bg-blue-600/80 backdrop-blur-xl text-white font-bold px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 inline-flex items-center gap-2 border border-blue-400/50 shadow-lg"
            >
              <span>{{ t("menuDigital.cta") }}</span>
              <i class="mdi mdi-arrow-right-thin text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// useI18n is auto-imported by Nuxt i18n module

const { t, locale } = useI18n({ useScope: "global" });

const features = [
  { icon: "mdi-pot-steam-outline", text: t("menuDigital.features.0.text") },
  { icon: "mdi-deathly-hallows", text: t("menuDigital.features.1.text") },
  { icon: "mdi-notebook-outline", text: t("menuDigital.features.2.text") },
  { icon: "mdi-wallet-outline", text: t("menuDigital.features.3.text") },
  { icon: "mdi-barcode-scan", text: t("menuDigital.features.4.text") },
];
</script>
