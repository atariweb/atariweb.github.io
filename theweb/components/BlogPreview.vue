<template>
    <section class="blog-section relative overflow-hidden">
      <!-- Gradient Background -->
      <div class="absolute inset-0"></div>
      
      <!-- Dashed Pattern Overlay -->
      <div class="relative z-10 max-w-7xl mx-auto py-16 px-4">
        <div class="lg:bg-white/10 lg:dark:bg-gray-800/10 lg:backdrop-blur-xl lg:rounded-3xl lg:border lg:border-white/20 lg:dark:border-gray-700/20 lg:shadow-2xl p-8">
        <!-- Title -->
        <h2 class="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">{{ $t('blog.title') }}</h2>
        
        
        <!-- Loading State -->
        <div v-if="loading" class="text-center py-8">
          <div class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
          <p class="mt-2 text-gray-600 dark:text-gray-400">{{ $t('blog.loading') }}</p>
        </div>
        
        <!-- Swiper Container -->
        <div v-else class="relative">
          <Swiper
            :modules="modules"
            :slides-per-view="4"
            :space-between="24"
            :loop="true"
            :navigation="true"
            :pagination="{ clickable: true }"
            :autoplay="{
              delay: 4000,
              disableOnInteraction: false,
            }"
            :effect="'slide'"
            :speed="800"
            :breakpoints="{
              320: {
                slidesPerView: 1,
                spaceBetween: 16
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 24
              }
            }"
            class="blog-swiper"
          >
            <SwiperSlide v-for="(blog, index) in blogs" :key="blog.id">
                <NuxtLink
                  :to="getLocalizedPath(`/singleBlog/${blog.id}`)" 
                  class="block"
                  @click="() => console.log('🔗 Navigating to blog:', blog.id, 'with locale:', currentLocale, 'path:', getLocalizedPath(`/singleBlog/${blog.id}`))"
                >
                <div class="blog-card group">
                  <!-- Image Container -->
                  <div class="relative overflow-hidden rounded-2xl mb-4 shadow-lg">
                    <img 
                      :src="getImageUrl(blog.image)" 
                      :alt="blog.name" 
                      class="w-full h-64 object-cover transition-all duration-500 group-hover:scale-110" 
                      @error="handleImageError"
                    />
                    
                    <!-- Overlay Content -->
                    <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
                      <h3 class="text-white font-bold text-lg mb-2 line-clamp-2">
                        {{ blog.name || $t('blog.defaultTitle') }}
                      </h3>
                      <p class="text-gray-200 text-sm line-clamp-2 mb-4">
                        {{ blog.description || $t('blog.defaultDescription') }}
                      </p>
                      
                      <!-- Metadata -->
                      <div class="flex items-center text-gray-300 text-sm">
                        <div class="flex items-center space-x-1">
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                          </svg>
                          <span>{{ formatDate(blog.createdAt) || '2025/05/02' }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </NuxtLink>
            </SwiperSlide>
          </Swiper>
        </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, onMounted, computed } from 'vue'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Navigation, Pagination, Autoplay } from 'swiper/modules'
  
  const modules = [Navigation, Pagination, Autoplay]
  
  // Get current locale from i18n
  const { locale } = useI18n()
  const currentLocale = computed(() => locale.value)
  
  // Function to generate locale-aware path
  const getLocalizedPath = (path) => {
    const currentLocaleValue = currentLocale.value
    if (currentLocaleValue === 'en') {
      return path // English is default, no prefix needed
    }
    return `/${currentLocaleValue}${path}`
  }
  
  // Use the blog store directly
  const blogStore = useBlogStore()
  const blogs = computed(() => {
    // If no blogs from API, use fallback data
    if (blogStore.blogs.length === 0) {
      return blogStore.getFakeData()
    }
    return blogStore.blogs
  })
  const loading = computed(() => blogStore.loading)
  
  // Fetch blogs when component mounts
  onMounted(async () => {
    if (process.client && blogStore.blogs.length === 0) {
      try {
        await blogStore.fetchBlogs()
      } catch (error) {
        console.error('Error fetching blogs:', error)
      }
    }
  })
  

  
  // Format date function
  const formatDate = (dateString) => {
    if (blogStore) {
      return blogStore.formatDate(dateString)
    }
    // Fallback formatting
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  // Handle image URLs from API
  const getImageUrl = (imagePath) => {
    if (!imagePath) {
      return 'https://picsum.photos/800/400?random=1'
    }
    
    // If it's already a full URL, return as is
    if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
      return imagePath
    }
    
    // If it starts with /uploads, it's from the API - construct full URL
    if (imagePath.startsWith('/uploads/')) {
      return `https://api.ezyton.com${imagePath}`
    }
    
    // For relative paths, ensure they start with /
    return imagePath.startsWith('/') ? imagePath : `/${imagePath}`
  }

  // Handle image loading errors
  const handleImageError = (event) => {
    console.warn('Image failed to load:', event.target.src)
    // Set fallback image
    event.target.src = '/images/hero/herobg.webp'
  }
  </script>
  
  <style scoped>
  .blog-section {
    min-height: 600px;
  }
  
  .blog-swiper {
    padding: 20px 0 60px;
    overflow: visible;
  }
  
  /* Custom Swiper navigation buttons */
  .blog-swiper :deep(.swiper-button-next),
  .blog-swiper :deep(.swiper-button-prev) {
    color: #ffffff;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    width: 50px;
    height: 50px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    top: 50%;
    transform: translateY(-50%);
  }
  
  .blog-swiper :deep(.swiper-button-next:hover),
  .blog-swiper :deep(.swiper-button-prev:hover) {
    background: rgba(255, 255, 255, 0.2);
    color: #ffffff;
    transform: translateY(-50%) scale(1.1);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
  }
  
  .blog-swiper :deep(.swiper-button-next:after),
  .blog-swiper :deep(.swiper-button-prev:after) {
    font-size: 20px;
    font-weight: bold;
  }
  
  .blog-swiper :deep(.swiper-button-next) {
    right: -25px;
  }
  
  .blog-swiper :deep(.swiper-button-prev) {
    left: -25px;
  }
  
  /* Custom pagination dots */
  .blog-swiper :deep(.swiper-pagination) {
    bottom: 20px;
  }
  
  .blog-swiper :deep(.swiper-pagination-bullet) {
    background: rgba(255, 255, 255, 0.4);
    opacity: 1;
    width: 12px;
    height: 12px;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    margin: 0 6px;
  }
  
  .blog-swiper :deep(.swiper-pagination-bullet-active) {
    background: #ffffff;
    transform: scale(1.3);
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
  }
  
  /* Blog card styles */
  .blog-card {
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
  }
  
  .blog-card:hover {
    transform: translateY(-12px) scale(1.02);
  }
  
  .blog-card .relative {
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .blog-card:hover .relative {
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.4);
  }
  
  /* Smooth image transitions */
  .blog-card img {
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .blog-card:hover img {
    filter: brightness(1.1) contrast(1.05);
  }
  
  /* Overlay animation */
  .blog-card .absolute {
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .blog-card:hover .absolute {
    background: linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.6) 50%, transparent 100%);
  }
  
  /* Text animations */
  .blog-card h3,
  .blog-card p {
    transition: all 0.3s ease;
  }
  
  .blog-card:hover h3 {
    transform: translateY(-2px);
  }
  
  .blog-card:hover p {
    transform: translateY(-1px);
  }
  
  /* Line clamp utilities */
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  
  .line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  
  /* Swiper slide animations */
  .blog-swiper :deep(.swiper-slide) {
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .blog-swiper :deep(.swiper-slide-active) {
    transform: scale(1.02);
  }
  
  /* Responsive adjustments */
  @media (max-width: 768px) {
    .blog-swiper {
      padding: 10px 0 50px;
    }
    
    .blog-swiper :deep(.swiper-button-next),
    .blog-swiper :deep(.swiper-button-prev) {
      display: none;
    }
    
    .blog-section {
      min-height: 500px;
    }
    
    .blog-card:hover {
      transform: translateY(-8px) scale(1.01);
    }
  }
  
  @media (max-width: 640px) {
    .blog-swiper {
      padding: 5px 0 40px;
    }
  }
  
  /* Loading animation enhancement */
  .animate-spin {
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  
  /* Gradient text effect for title */
  h2 {
    background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #1e40af 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  </style>
  