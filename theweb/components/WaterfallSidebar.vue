<template>
  <!-- Waterfall Sidebar Overlay -->
  <div v-if="isOpen" class="fixed inset-0 z-40 lg:hidden" @click="closeSidebar">
    <!-- Blurred Backdrop -->
    <div
      class="absolute inset-0 bg-black/60 backdrop-blur-xl transition-all duration-500 ease-out"
    ></div>

    <!-- Waterfall Sidebar -->
    <div
      class="absolute top-16 lg:top-20 left-1/2 transform -translate-x-1/2 w-[94%] lg:w-[92%] h-full overflow-hidden transition-all duration-500 ease-out"
      :class="[
        isOpen
          ? 'translate-y-0 opacity-100'
          : 'translate-y-full opacity-0',
      ]"
      @click.stop
    >
      <!-- Sidebar Content -->
      <div
        class="relative w-full h-full bg-[#1A2B3C] rounded-t-3xl shadow-2xl border border-white/10 overflow-hidden"
      >
        <!-- Header -->
        <div class="relative z-10 flex items-center justify-between p-4 lg:p-6">
          <!-- Logo and Brand Name -->
          <div class="flex items-center gap-2 lg:gap-3">
            <div class="flex items-center justify-center">
              <img
                src="/assets/images/logo.webp"
                alt="EzyTon Logo"
                class="h-6 lg:h-7 w-auto object-contain transition-all duration-300 hover:scale-110"
              />
            </div>
            <h2 class="text-lg lg:text-xl font-bold text-white uppercase tracking-wide">
              {{ $t("app.name") }}
            </h2>
          </div>

          <!-- Close Button -->
          <button
            @click="closeSidebar"
            class="p-2 text-white hover:text-gray-300 transition-all duration-300 hover:scale-110"
          >
            <i class="mdi mdi-close text-xl lg:text-2xl"></i>
          </button>
        </div>

        <!-- Controls Section -->
        <div class="relative z-10 px-4 lg:px-6 pb-3 lg:pb-4">
          <div class="flex items-center gap-3 lg:gap-4">
            <!-- Language Selector -->
            <button
              @click="toggleLocale"
              class="flex items-center gap-2 text-white hover:text-gray-300 transition-all duration-300 transform hover:scale-105"
            >
              <i class="mdi mdi-chevron-down text-base lg:text-lg"></i>
              <span class="font-medium text-sm lg:text-base">{{
                currentLocale === "fa" ? "FA" : "EN"
              }}</span>
            </button>
          </div>
        </div>

        <!-- Navigation Items with Waterfall Animation -->
        <nav 
          class="relative z-10 px-4 lg:px-6 flex-1 overflow-y-auto"
          :class="[
            isOpen ? 'animate-slider-section' : '',
          ]"
          :style="{
            animationDelay: isOpen ? '0.6s' : '0s',
            animationFillMode: 'both'
          }"
        >
          <div class="space-y-1">
            <a
              v-for="(item, index) in navItems"
              :key="item.key"
              href="#"
              @click.prevent="handleItemClick(item.target)"
              class="flex items-center gap-2 lg:gap-3 py-2 lg:py-3 text-white hover:text-gray-300 transition-colors duration-200 font-medium text-sm lg:text-base"
               :style="{
                 animationDelay: isOpen ? `${0.7 + (index * 0.08)}s` : '0s',
                 animation: isOpen
                   ? 'waterfallSlideIn 0.6s ease-out forwards'
                   : 'none',
                 opacity: isOpen ? 1 : 0,
                 transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
               }"
            >
              <i :class="['mdi', getItemIcon(item.key), 'text-base lg:text-lg']"></i>
              {{ $t(item.label) }}
            </a>
          </div>
        </nav>

        <!-- Watermark Logo at Bottom -->
        <div class="absolute left-0 w-full mt-5 opacity-10">
            <div class="flex items-center justify-center">
              <img
                src="/assets/images/logo.webp"
                alt="EzyTon Logo"
                class="w-full h-full"
              />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
// useI18n is auto-imported by Nuxt i18n module

// Props
const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
  navItems: {
    type: Array,
    default: () => [],
  },
  isDark: {
    type: Boolean,
    default: false,
  },
  isClient: {
    type: Boolean,
    default: false,
  },
});

// Emits
const emit = defineEmits([
  "close",
  "item-click",
  "toggle-locale",
  "toggle-theme",
]);

// I18n
const { t, locale } = useI18n();
const currentLocale = computed(() => locale.value);

// Methods
const closeSidebar = () => {
  emit("close");
};

const handleItemClick = (target) => {
  emit("item-click", target);
  closeSidebar();
};

const toggleLocale = () => {
  emit("toggle-locale");
};

const toggleTheme = () => {
  emit("toggle-theme");
};

// Function to get MDI icon class for each navigation item
const getItemIcon = (key) => {
  const icons = {
    about: "mdi-information-outline",
    whyEzyTeam: "mdi-account-group-outline",
    ezyTon: "mdi-star-outline",
    tokenomics: "mdi-chart-line",
    products: "mdi-package-variant",
    roadMap: "mdi-map-outline",
    plans: "mdi-clipboard-text-outline",
    blog: "mdi-newspaper-outline",
    comment: "mdi-comment-outline",
  };
  return icons[key] || "mdi-star-outline";
};
</script>

<style scoped>
/* Custom scrollbar for navigation */
nav::-webkit-scrollbar {
  width: 4px;
}

nav::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
}

nav::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 2px;
}

nav::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.5);
}

/* Enhanced backdrop blur for better effect */
.backdrop-blur-xl {
  backdrop-filter: blur(24px) saturate(180%);
}

/* Mobile responsiveness */
@media (max-width: 480px) {
  .max-w-md {
    max-width: 100%;
  }

  .w-\[95\%\] {
    width: 98%;
  }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  .transition-all {
    transition: none;
  }
}
</style>

