<template>
  <div class="min-h-screen bg-white dark:bg-gray-900">
    <!-- Article Header -->
    <div class="max-w-7xl mx-auto px-4 py-8">
      <!-- Article Image -->
      <div class="mb-8">
        <img 
          :src="getImageUrl(blogStore?.currentBlog?.image)" 
          :alt="blogStore?.currentBlog?.title || blogStore?.currentBlog?.name" 
          class="w-full h-96 object-cover rounded-2xl shadow-lg"
          @error="handleImageError"
        />
      </div>

      <!-- Article Title -->
      <div class="mb-8">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
          {{ blogStore?.currentBlog?.title || blogStore?.currentBlog?.name || $t('blog.loading') }}
        </h1>
        
        <!-- Article Meta -->
        <div class="flex items-center gap-4 text-gray-500 dark:text-gray-400 text-sm mb-6">
          <div class="flex items-center gap-2">
            <i class="mdi mdi-clock-outline text-lg"></i>
            <span>12:45</span>
          </div>
          <div class="flex items-center gap-2">
            <i class="mdi mdi-calendar-outline text-lg"></i>
            <span>{{ blogStore?.currentBlog?.date || formatDate(blogStore?.currentBlog?.createdAt) || '1408/08/04' }}</span>
          </div>
        </div>
      </div>
  
      <!-- Main Content Layout -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Main Article Content -->
        <div class="lg:col-span-2">
          <div class="prose prose-lg max-w-none">
            <div v-html="blogStore?.currentBlog?.fullContent || blogStore?.currentBlog?.content || getDefaultContent()" class="text-gray-700 dark:text-gray-300 leading-relaxed space-y-6"></div>
            
            <!-- Author Section -->
            <div class="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div class="flex items-center gap-4">
                <img 
                  :src="blogStore?.currentBlog?.author?.avatar || 'https://picsum.photos/100/100?random=10'" 
                  :alt="blogStore?.currentBlog?.author?.name"
                  class="w-16 h-16 rounded-full object-cover"
                  @error="handleAuthorImageError"
                />
                <div class="flex-1">
                  <h4 class="font-bold text-lg text-gray-900 dark:text-white">{{ blogStore?.currentBlog?.author?.name || 'AminAbbas Doji' }}</h4>
                  <p class="text-gray-600 dark:text-gray-400">{{ blogStore?.currentBlog?.author?.role || $t('blog.author.role') }}</p>
                </div>
                <div class="flex items-center gap-3">
                  <a :href="blogStore?.currentBlog?.author?.social?.twitter || '#'" class="text-gray-400 dark:text-gray-500 hover:text-blue-500 transition-colors duration-300">
                    <i class="mdi mdi-twitter text-xl"></i>
                  </a>
                  <a :href="blogStore?.currentBlog?.author?.social?.instagram || '#'" class="text-gray-400 dark:text-gray-500 hover:text-pink-500 transition-colors duration-300">
                    <i class="mdi mdi-instagram text-xl"></i>
                  </a>
                  <a :href="blogStore?.currentBlog?.author?.social?.linkedin || '#'" class="text-gray-400 dark:text-gray-500 hover:text-blue-600 transition-colors duration-300">
                    <i class="mdi mdi-linkedin text-xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Table of Contents Sidebar -->
        <div class="lg:col-span-1">
          <div class="sticky top-8">
            <div class="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-6">{{ $t('blog.tableOfContents') }}</h3>
              <nav class="space-y-3">
                <a 
                  v-for="(item, index) in (blogStore?.currentBlog?.tableOfContents || getDefaultTableOfContents())" 
                  :key="index"
                  :href="`#section-${index + 1}`"
                  class="block text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors duration-300 py-2 border-b border-gray-100 dark:border-gray-700 last:border-b-0"
                >
                  {{ item }}
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Related Blogs Section -->
    <div class="bg-gray-50 py-16">
      <div class="max-w-7xl mx-auto px-4">
        <BlogPreview />
      </div>
    </div>
  </div>
</template>
  
<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import BlogPreview from '~/components/BlogPreview.vue'

// Route and blog data
const route = useRoute()
const blogStore = ref(null)
const isLoading = ref(true)

// i18n composables
const { locale, setLocale } = useI18n()

// Watch for route changes and preserve locale
watch(() => route.path, (newPath) => {
  console.log('🔄 Route changed to:', newPath)
  console.log('🌐 Current locale:', locale.value)
  
  // Ensure locale is preserved
  if (route.params.locale && route.params.locale !== locale.value) {
    console.log('🔧 Setting locale to:', route.params.locale)
    setLocale(String(route.params.locale))
  }
}, { immediate: true })

// Handle image URLs from API
const getImageUrl = (imagePath) => {
  if (!imagePath) {
    return '/images/hero/herobg.webp' // fallback image
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
  event.target.src = '/images/hero/herobg.webp'
}

// Handle author image errors
const handleAuthorImageError = (event) => {
  console.warn('Author image failed to load:', event.target.src)
  event.target.src = 'https://picsum.photos/100/100?random=10'
}

// Format date function
const formatDate = (dateString) => {
  if (blogStore.value) {
    return blogStore.value.formatDate(dateString)
  }
  // Fallback formatting
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// Default content fallback
const getDefaultContent = () => {
  return `
    <p>Lorem ipsum is A Dummy Text Generated By The Printing Industry. Lorem ipsum is A Dummy Text Generated By The Printing Industry. Lorem ipsum is A Dummy Text Generated By The Printing Industry.</p>
    
    <h2>Practical Tools For Design</h2>
    <p>Lorem ipsum is A Dummy Text Generated By The Printing Industry. Lorem ipsum is A Dummy Text Generated By The Printing Industry. Lorem ipsum is A Dummy Text Generated By The Printing Industry.</p>
    
    <h2>Creativity Is The Greatest Principle</h2>
    <p>Lorem ipsum is A Dummy Text Generated By The Printing Industry. Lorem ipsum is A Dummy Text Generated By The Printing Industry. Lorem ipsum is A Dummy Text Generated By The Printing Industry.</p>
    
    <h2>Designing With Easy Connect</h2>
    <p>Lorem ipsum is A Dummy Text Generated By The Printing Industry. Lorem ipsum is A Dummy Text Generated By The Printing Industry. Lorem ipsum is A Dummy Text Generated By The Printing Industry.</p>
    
    <h2>Ready-Made Templates</h2>
    <p>Lorem ipsum is A Dummy Text Generated By The Printing Industry. Lorem ipsum is A Dummy Text Generated By The Printing Industry. Lorem ipsum is A Dummy Text Generated By The Printing Industry.</p>
    
    <h2>Sample Menu And Business Card</h2>
    <p>Lorem ipsum is A Dummy Text Generated By The Printing Industry. Lorem ipsum is A Dummy Text Generated By The Printing Industry. Lorem ipsum is A Dummy Text Generated By The Printing Industry.</p>
  `
}

// Default table of contents
const getDefaultTableOfContents = () => {
  return [
    'Useful Tools For Design',
    'Creativity Is The Greatest Principle',
    'Designing With Easy Connect',
    'Ready-Made Templates',
    'Sample Menu And Business Card'
  ]
}

// Load blog data
onMounted(async () => {
  if (process.client) {
    try {
      isLoading.value = true
      const { useBlogStore } = await import('~/stores/blog')
      blogStore.value = useBlogStore()
      
      // Get the blog ID from the slug array (first element)
      const blogId = route.params.slug?.[0] || '1'
      console.log('🚀 Loading blog with ID:', blogId)
      console.log('📍 Route params:', route.params)
      console.log('📝 Slug array:', route.params.slug)
      
      // First fetch all blogs to populate the store
      console.log('📚 Fetching all blogs...')
      await blogStore.value.fetchBlogs()
      console.log('📖 Available blogs:', blogStore.value.blogs)
      
      // Then fetch the specific blog
      console.log('🎯 Fetching specific blog...')
      await blogStore.value.fetchBlogById(blogId)
      console.log('✅ Current blog loaded:', blogStore.value.currentBlog)
      
      // Force reactivity update
      if (blogStore.value.currentBlog) {
        console.log('🔄 Blog data:', {
          id: blogStore.value.currentBlog.id,
          name: blogStore.value.currentBlog.name,
          title: blogStore.value.currentBlog.title,
          image: blogStore.value.currentBlog.image
        })
      }
    } catch (error) {
      console.error('❌ Error loading blog:', error)
    } finally {
      isLoading.value = false
    }
  }
})
</script>
