<template>
  <section class="relative flex items-center justify-center px-2 py-4">
    <div class="lg:bg-white/10 lg:dark:bg-gray-800/10 lg:backdrop-blur-xl lg:rounded-3xl lg:border lg:border-white/20 lg:dark:border-gray-700/20 lg:shadow-2xl max-w-4xl w-full p-2 lg:p-8 section-fade-in">
      <h2 class="text-2xl font-semibold text-center mb-12 text-gray-800 dark:text-white">
        {{ $t('app.nav.comment') }}
      </h2>
      
      <!-- Loading State -->
      <div v-if="loading" class="flex justify-center items-center py-20">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 dark:border-blue-400"></div>
      </div>
      
      <!-- Comments Swiper -->
      <div v-else-if="comments.length > 0" class="relative flex justify-center">
        <Swiper
          :modules="modules"
          :slides-per-view="1"
          :space-between="0"
          :loop="true"
          :autoplay="{
            delay: 4000,
            disableOnInteraction: false,
          }"
          :pagination="{ clickable: true }"
          class="max-w-4xl w-full py-5 [&_.swiper-pagination]:-bottom-10 [&_.swiper-pagination-bullet]:bg-gray-300 dark:[&_.swiper-pagination-bullet]:bg-gray-600 [&_.swiper-pagination-bullet]:opacity-100 [&_.swiper-pagination-bullet]:w-3 [&_.swiper-pagination-bullet]:h-3 [&_.swiper-pagination-bullet]:transition-all [&_.swiper-pagination-bullet]:duration-300 [&_.swiper-pagination-bullet-active]:bg-blue-500 dark:[&_.swiper-pagination-bullet-active]:bg-blue-400 [&_.swiper-pagination-bullet-active]:scale-125 [&_.swiper-slide]:transition-all [&_.swiper-slide]:duration-300 [&_.swiper-wrapper]:items-center [&_.swiper-pagination-bullet:focus]:outline-2 [&_.swiper-pagination-bullet:focus]:outline-blue-500 [&_.swiper-pagination-bullet:focus]:outline-offset-2"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
        >
          <SwiperSlide
            v-for="comment in comments"
            :key="comment._id"
            class="flex justify-center"
          >
            <!-- Main Comment Card -->
            <div class="bg-white/20 dark:bg-gray-800/20 backdrop-blur-lg rounded-3xl shadow-xl dark:shadow-2xl p-8 max-w-2xl w-full border border-white/30 dark:border-gray-700/30">
              <!-- Profile Section -->
              <div class="flex items-center space-x-4 mb-6">
                <img
                  :src="comment.avatar"
                  :alt="comment.name"
                  class="w-16 h-16 rounded-full object-cover border border-gray-200 dark:border-gray-600"
                  @error="handleImageError"
                />
                <div>
                  <h3 class="font-bold text-lg text-gray-800 dark:text-white">
                    {{ comment.name }}
                  </h3>
                  <p class="text-sm text-gray-500 dark:text-gray-400">
                    {{ comment.customerJob }}
                  </p>
                </div>
              </div>
              
              <!-- Quote Section -->
              <div class="relative">
                <div class="text-6xl text-gray-300 dark:text-gray-600 absolute -top-2 -left-2 font-serif">"</div>
                <blockquote class="text-gray-700 dark:text-gray-300 leading-relaxed text-base pl-6 pt-4">
                  {{ comment.message }}
                </blockquote>
                <div class="text-6xl text-gray-300 dark:text-gray-600 absolute -bottom-8 -right-2 font-serif transform rotate-180">"</div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      
      <!-- No Comments State -->
      <div v-else class="text-center py-20">
        <p class="text-gray-500 dark:text-gray-400 text-lg">{{ $t('comments.noComments') }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Autoplay } from "swiper/modules";
import { useCommentsStore } from "~/stores/comments";
import { useTheme } from "~/composables/useTheme";

// Swiper modules
const modules = [Pagination, Autoplay];

// Current slide index
const currentSlide = ref(0);

// Swiper instance
let swiperInstance = null;

// Use comments store
const commentsStore = useCommentsStore();

// Use theme composable
const { theme } = useTheme();

// Computed properties
const comments = computed(() => commentsStore.comments);
const loading = computed(() => commentsStore.loading);

// Get other comments (excluding current one)
const getOtherComments = (currentId) => {
  return comments.value
    .filter((comment) => comment._id !== currentId)
    .slice(0, 4);
};

// Fetch comments on mount
onMounted(() => {
  commentsStore.fetchComments();
});

// Swiper event handlers
const onSwiper = (swiper) => {
  swiperInstance = swiper;
};

const onSlideChange = (swiper) => {
  currentSlide.value = swiper.realIndex;
};

// Handle image loading errors
const handleImageError = (event) => {
  const img = event.target;
  // Fallback to a generated avatar using the user's name
  const name = img.alt || 'User';
  img.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=6366f1&color=fff&size=200`;
};
</script>

