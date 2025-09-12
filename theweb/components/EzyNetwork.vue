<template>
  <section
    :class="[
      'max-w-7xl mx-auto px-2 lg:px-4 py-12',
      locale === 'fa' ? 'md:flex-row-reverse' : '',
    ]"
  >
    <div class="bg-white/10 dark:bg-gray-800/10 backdrop-blur-xl rounded-3xl border border-white/20 dark:border-gray-700/20 shadow-2xl p-8 section-fade-in">
      <div class="flex flex-col md:flex-row gap-6 items-start md:items-center">
        <!-- Content (Left in English, Right in Persian) -->
        <div
          :class="[
            'flex-1 max-w-lg text-center md:text-left',
            locale === 'fa' ? 'md:text-right' : '',
          ]"
        >
          <h2 class="text-3xl font-semibold text-gray-900 dark:text-white">
            {{ t("ezyNetwork.title") }}
            <span class="text-blue-600">{{
              t("ezyNetwork.titleHighlight")
            }}</span>
            {{ t("ezyNetwork.titleSuffix") }}
          </h2>
          <p class="text-[#809FB3] dark:text-gray-400 mt-4 mb-4">
            {{ t("ezyNetwork.description") }}
          </p>
          <button
            class="bg-blue-600/80 backdrop-blur-xl text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 border border-blue-400/50 shadow-lg"
          >
            {{ t("ezyNetwork.cta") }}
          </button>
        </div>

        <!-- Background blocks (Right in English, Left in Persian) -->
        <div
          class="relative flex flex-col items-center w-full md:w-auto mx-auto md:mx-0"
        >
          <div
            v-for="(item, index) in 3"
            :key="index"
            class="max-w-[400px] w-full h-[134px] relative flex items-center gap-4 p-10 transition"
            :style="{
              backgroundImage: `url(${frameImage})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              zIndex: 10 - index,
              marginBottom: '20px',
            }"
            :class="[
              $i18n.locale === 'fa'
                ? index === 1
                  ? 'lg:-translate-y-5 lg:-translate-x-36'
                  : index === 2
                  ? 'lg:-translate-y-10 lg:-translate-x-72'
                  : ''
                : index === 1
                ? 'lg:-translate-y-5 lg:translate-x-36'
                : index === 2
                ? 'lg:-translate-y-10 lg:translate-x-72'
                : '',
            ]"
          >
            <img
              src="/assets/images/EzyTon/phone.webp"
              alt="phoneIcon"
              class="w-12 h-12 flex-shrink-0 bg-[#C4D1E4] p-1 rounded-xl"
            />
            <div
              :class="[
                'flex flex-col',
                locale === 'fa' ? 'text-right' : 'text-left',
                'text-white',
              ]"
            >
              <p class="font-bold text-sm">
                {{ t("ezyNetwork.features.0.title") }}
              </p>
              <p class="text-xs">
                {{ t("ezyNetwork.features.0.description") }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// useI18n is auto-imported by Nuxt i18n module
import frameImage from "@/assets/images/EzyTon/Frame.webp";

const { t, locale } = useI18n({ useScope: "global" });
</script>
