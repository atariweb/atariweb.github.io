<template>
  <section class="max-w-7xl mx-auto px-4 py-16">
    <div class="bg-white/10 dark:bg-gray-800/10 backdrop-blur-xl rounded-3xl border border-white/20 dark:border-gray-700/20 shadow-2xl p-2 section-fade-in">
      <!-- Title -->
      <div class="flex justify-center mb-2">
        <h2 class="ribbon-title text-2xl font-bold">
          Our Team
        </h2>
      </div>
      
      <!-- Loading State -->
      <div v-if="loading" class="text-center py-20">
        <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        <p class="mt-4 text-gray-600 dark:text-gray-400">Loading our amazing team...</p>
      </div>
      
      <!-- Team Cards Container -->
      <div v-else class="relative px-2">

        <!-- Team Cards with Swiper -->
        <div class="team-swiper w-full">
          <Swiper
            ref="swiperRef"
            :modules="modules"
            :space-between="32"
            :loop="true"
            :autoplay="{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }"
            :navigation="true"
            :pagination="false"
            :simulate-touch="true"
            :allow-touch-move="true"
            :grab-cursor="true"
            :mousewheel="{
              forceToAxis: true,
              sensitivity: 0.5,
              releaseOnEdges: true
            }"
            :speed="800"
            :effect="'slide'"
            :breakpoints="{
              0: {
                slidesPerView: 2,
                spaceBetween: 8,
              },
              320: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              375: {
                slidesPerView: 2,
                spaceBetween: 12,
              },
              414: {
                slidesPerView: 2,
                spaceBetween: 12,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 14,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 18,
              },
              896: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 32,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 32,
              },
              1536: {
                slidesPerView: 4,
                spaceBetween: 32,
              },
            }"
            class="w-full"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
          >
            <SwiperSlide
              v-for="(member, index) in baseTeamMembers"
              :key="member._id"
              class="flex justify-center"
            >
              <div
                class="relative group flex-shrink-0 w-36 h-44 sm:w-40 sm:h-52 md:w-44 md:h-56 lg:w-48 lg:h-64 xl:w-56 xl:h-82 flex flex-col items-center justify-center"
              >
                <!-- Team Member Card -->
                  <div class="modern-card relative w-full h-[90%] rounded-2xl overflow-hidden transition-all duration-500 group-hover:z-50">
                  <!-- Background Image -->
                   <div class="w-full h-full">
                    <img 
                    :src="member.avatar" 
                    :alt="member.name"
                    class="absolute inset-0 w-full h-full object-cover"
                    @error="handleImageError"
                  />
                  
                  <!-- Gradient Overlay -->
                  <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  <!-- Name and Skill Overlay -->
                  <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent backdrop-blur-sm rounded-b-2xl p-2 sm:p-3 lg:p-4">
                    <h3 class="text-white font-bold text-sm sm:text-base md:text-base lg:text-lg mb-1">
                      {{ member.name }}
                    </h3>
                    <p class="text-white/80 text-xs sm:text-sm md:text-sm lg:text-sm">
                      {{ member.skill }}
                    </p>
                  </div>
                  
                  <!-- Hover Effect -->
                  <div class="gradient-overlay absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100"></div>
                   </div>
                  
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
// useI18n is auto-imported by Nuxt i18n module
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay, Mousewheel } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { useTeamStore } from '../../stores/team'
import type { TeamMember } from '../../stores/team'

const modules = [Navigation, Pagination, Autoplay, Mousewheel]

const { t } = useI18n()
const teamStore = useTeamStore()

const loading = computed(() => teamStore.loading)
const swiperRef = ref(null)

const baseTeamMembers = computed(() => {
  const members = teamStore.getFeaturedMembers(5)
  // If no members loaded, return fake data directly
  if (members.length === 0) {
    return [
      {
        _id: '1',
        name: 'Sarah Johnson',
        skill: 'UI/UX Designer',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=600&fit=crop&crop=center',
        backgroundGradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%)',
        createdAt: '2024-01-15T10:00:00Z',
        updatedAt: '2024-01-15T10:00:00Z'
      },
      {
        _id: '2',
        name: 'Michael Chen',
        skill: 'Frontend Developer',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=600&fit=crop&crop=center',
        backgroundGradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
        createdAt: '2024-01-10T10:00:00Z',
        updatedAt: '2024-01-10T10:00:00Z'
      },
      {
        _id: '3',
        name: 'Emily Rodriguez',
        skill: 'Product Manager',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=center',
        backgroundGradient: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 50%, #a8edea 100%)',
        createdAt: '2024-01-05T10:00:00Z',
        updatedAt: '2024-01-05T10:00:00Z'
      },
      {
        _id: '4',
        name: 'David Kim',
        skill: 'Backend Developer',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=600&fit=crop&crop=center',
        backgroundGradient: 'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)',
        createdAt: '2024-01-01T10:00:00Z',
        updatedAt: '2024-01-01T10:00:00Z'
      },
      {
        _id: '5',
        name: 'Lisa Thompson',
        skill: 'Marketing Director',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=600&fit=crop&crop=center',
        backgroundGradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
        createdAt: '2023-12-25T10:00:00Z',
        updatedAt: '2023-12-25T10:00:00Z'
      },
      {
        _id: '6',
        name: 'Alex Martinez',
        skill: 'DevOps Engineer',
        avatar: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400&h=600&fit=crop&crop=center',
        backgroundGradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        createdAt: '2023-12-20T10:00:00Z',
        updatedAt: '2023-12-20T10:00:00Z'
      },
      {
        _id: '7',
        name: 'Jessica Wang',
        skill: 'Data Scientist',
        avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=600&fit=crop&crop=center',
        backgroundGradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        createdAt: '2023-12-15T10:00:00Z',
        updatedAt: '2023-12-15T10:00:00Z'
      },
      {
        _id: '8',
        name: 'Ryan O\'Connor',
        skill: 'Mobile Developer',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=center',
        backgroundGradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        createdAt: '2023-12-10T10:00:00Z',
        updatedAt: '2023-12-10T10:00:00Z'
      },
      {
        _id: '9',
        name: 'Maria Garcia',
        skill: 'QA Engineer',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=600&fit=crop&crop=center',
        backgroundGradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        createdAt: '2023-12-05T10:00:00Z',
        updatedAt: '2023-12-05T10:00:00Z'
      },
      {
        _id: '10',
        name: 'James Wilson',
        skill: 'Tech Lead',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=600&fit=crop&crop=center',
        backgroundGradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        createdAt: '2023-11-30T10:00:00Z',
        updatedAt: '2023-11-30T10:00:00Z'
      }
    ]
  }
  return members
})




const getBackgroundGradient = (index: number) => {
  const gradients = [
    'linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%)',
    'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 50%, #a8edea 100%)',
    'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)',
    'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)'
  ]
  return gradients[index] || gradients[0]
}

const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement
  img.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(img.alt)}&background=random&color=fff&size=200`
}

const onSwiper = (swiper: any) => {
  console.log('Swiper initialized:', swiper)
}

const onSlideChange = (swiper: any) => {
  console.log('Slide changed to:', swiper.activeIndex)
}

const fetchTeam = async () => {
  await teamStore.fetchTeamMembers()
  console.log('Team members loaded:', teamStore.members)
  console.log('Base team members:', baseTeamMembers.value)
}

onMounted(() => {
  fetchTeam()
})
</script>

<style scoped>
.team-swiper {
  padding: 20px 0 60px;
  overflow: hidden;
  cursor: pointer;
  width: 100%;
  position: relative;
}

/* Ensure Swiper container is properly sized */
.team-swiper :deep(.swiper) {
  width: 100%;
  height: auto;
  overflow: hidden;
}

.team-swiper :deep(.swiper-wrapper) {
  align-items: center;
  width: 100%;
}

.team-swiper :deep(.swiper-slide) {
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

/* Hide navigation buttons but keep functionality */
.team-swiper :deep(.swiper-button-next),
.team-swiper :deep(.swiper-button-prev) {
  display: none;
}

/* Custom pagination dots */
.team-swiper :deep(.swiper-pagination) {
  bottom: 20px;
}

.team-swiper :deep(.swiper-pagination-bullet) {
  background: rgba(59, 130, 246, 0.4);
  opacity: 1;
  width: 12px;
  height: 12px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  margin: 0 6px;
}

.team-swiper :deep(.swiper-pagination-bullet-active) {
  background: #3b82f6;
  transform: scale(1.3);
  box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
}


/* Team card styles */
.team-card {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.team-card:hover {
  transform: scaleX(1.1) !important;
}

.modern-card {
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.modern-card:hover {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.4);
}

/* Smooth image transitions */
.modern-card img {
  transition: all 1.2s cubic-bezier(0.23, 1, 0.32, 1);
  transform: scale(1);
}

.modern-card:hover img {
  filter: brightness(1.05) contrast(1.02);
  transform: scale(1.02) !important;
}

/* Gradient overlay transition */
.gradient-overlay {
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}


/* Swiper slide animations */
.team-swiper :deep(.swiper-slide) {
  transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.team-swiper :deep(.swiper-slide-active) {
  transform: scale(1.01);
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* Ribbon title styles - matching Features component */
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



/* Enhanced card transitions */
.team-card {
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.team-card:hover {
  transform: scaleX(1.1) !important;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .team-card:hover {
    transform: scaleX(1.08) !important;
  }
}

@media (max-width: 640px) {
  .team-card:hover {
    transform: scaleX(1.05) !important;
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
</style>
