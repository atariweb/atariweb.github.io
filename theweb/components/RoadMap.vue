<template>
  <section class="roadmap-container relative min-h-screen bg-gradient-to-br from-slate-900/80 via-blue-900/80 to-indigo-900/80 backdrop-blur-xl py-20 mt-10">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
    </div>

    <div class="container mx-auto px-2 relative z-10">
      <!-- Main Title -->
      <div class="text-center mb-16">
        <h1 class="text-3xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
          Road Map
        </h1>
  
        <div class="flex gap-4 justify-center">
          <button 
            @click="roadmapStore.fetchRoadmapItems()"
            :disabled="roadmapStore.loading"
            class="bg-blue-500/20 hover:bg-blue-500/30 backdrop-blur-xl border border-blue-400/30 text-blue-300 px-4 lg:px-6 py-2 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg text-sm lg:text-base"
          >
            <i v-if="roadmapStore.loading" class="mdi mdi-loading mr-2 animate-spin text-lg"></i>
            <i v-else class="mdi mdi-refresh mr-2 text-lg"></i>
            {{ roadmapStore.loading ? 'Loading...' : 'Refresh API' }}
          </button>
          <button 
            @click="roadmapStore.items = roadmapStore.getFakeData() as any"
            class="bg-green-500/20 hover:bg-green-500/30 backdrop-blur-xl border border-green-400/30 text-green-300 px-4 lg:px-6 py-2 rounded-lg transition-all duration-300 shadow-lg text-sm lg:text-base"
          >
            <i class="mdi mdi-format-list-bulleted mr-2 text-lg"></i>
            Show Demo Data
          </button>
        </div>
      </div>

      <!-- Roadmap Content -->
      <div class="relative max-w-7xl mx-auto">
        <!-- Center Line -->
        <div class="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform -translate-x-1/2 rounded-full"></div>
        
        <!-- Center Title -->
        <div class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
          <div class="bg-gradient-to-r from-blue-600/80 to-purple-600/80 backdrop-blur-xl rounded-full p-8 shadow-2xl border border-white/20">
            <h2 class="text-2xl lg:text-4xl font-bold text-white writing-mode-vertical text-center">
              ROAD MAP
            </h2>
          </div>
        </div>

        <!-- Loading State -->
        <div v-if="roadmapStore.loading" class="flex justify-center items-center py-20">
          <div class="modern-clean-spinner">
            <div class="spinner-ring"></div>
            <div class="spinner-ring"></div>
            <div class="spinner-ring"></div>
          </div>
        </div>

        <!-- Error State -->
        <div v-else-if="roadmapStore.error" class="flex justify-center items-center py-20">
          <div class="text-center">
            <div class="text-red-400 text-xl mb-4">⚠️ Error loading roadmap data</div>
            <p class="text-gray-300 mb-4">{{ roadmapStore.error }}</p>
            <button 
              @click="roadmapStore.fetchRoadmapItems()"
              class="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors"
            >
              Retry
            </button>
          </div>
        </div>

        <!-- Empty State -->
        <div v-else-if="roadmapStore.items.length === 0" class="flex justify-center items-center py-20">
          <div class="text-center">
            <div class="text-gray-400 text-xl mb-4">📋 No roadmap items available</div>
            <p class="text-gray-300">Check back later for updates!</p>
          </div>
        </div>

        <!-- Roadmap Items -->
        <div v-else class="grid grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-8 relative">
          <!-- Left Column - Completed & In Progress -->
          <div class="pr-8 lg:pr-16 mb-12 lg:mb-0">
            <!-- Completed Items -->
            <div 
              v-for="(item, index) in completedItems" 
              :key="item._id"
              class="roadmap-item-left mb-8"
              :style="{ animationDelay: `${index * 0.2 + 0.1}s` }"
            >
              <div class="flex items-start space-x-4 lg:space-x-6">
                <div class="flex-shrink-0">
                  <div class="w-12 h-12 lg:w-16 lg:h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                    <i class="mdi mdi-check text-2xl lg:text-3xl text-white"></i>
                  </div>
                </div>
                <div class="flex-1">
                  <div class="bg-white/20 backdrop-blur-xl rounded-2xl p-6 border border-white/30 shadow-lg">
                    <div class="flex items-center justify-between mb-4">
                      <span class="bg-green-500 text-white px-2 lg:px-3 py-1 rounded-full text-xs lg:text-sm font-medium">Done</span>
                      <span class="text-gray-300 text-xs lg:text-sm">{{ item.publish }}</span>
                    </div>
                    <h3 class="text-lg lg:text-xl font-bold text-white mb-3">{{ item.title }}</h3>
                    <p class="text-sm lg:text-base text-gray-300 mb-4 leading-relaxed">{{ item.des }}</p>
                    <div class="flex items-center space-x-2 text-blue-400">
                      <button 
                        @click="playVoice(item.voice, item._id)"
                        :disabled="playingAudio === item._id"
                        class="flex items-center space-x-2 hover:text-blue-300 transition-colors disabled:opacity-50"
                      >
                        <i v-if="playingAudio === item._id" class="mdi mdi-volume-high text-lg animate-pulse"></i>
                        <i v-else class="mdi mdi-volume-high text-lg"></i>
                        <span class="text-xs lg:text-sm">{{ playingAudio === item._id ? 'Playing...' : 'Listen' }}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- In Progress Items -->
            <div 
              v-for="(item, index) in inProgressItems" 
              :key="item._id"
              class="roadmap-item-left mb-8"
              :style="{ animationDelay: `${(completedItems.length + index) * 0.2 + 0.1}s` }"
            >
              <div class="flex items-start space-x-4 lg:space-x-6">
                <div class="flex-shrink-0">
                  <div class="w-12 h-12 lg:w-16 lg:h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                    <i class="mdi mdi-clock text-2xl lg:text-3xl text-white"></i>
                  </div>
                </div>
                <div class="flex-1">
                  <div class="bg-white/20 backdrop-blur-xl rounded-2xl p-6 border border-white/30 shadow-lg">
                    <div class="flex items-center justify-between mb-4">
                      <div class="flex items-center space-x-2">
                        <i class="mdi mdi-clock text-lg text-blue-400"></i>
                        <span class="text-blue-400 font-mono text-xs lg:text-sm">{{ getRandomCountdown() }}</span>
                      </div>
                      <span class="text-gray-300 text-xs lg:text-sm">{{ item.publish }}</span>
                    </div>
                    <h3 class="text-lg lg:text-xl font-bold text-white mb-3">{{ item.title }}</h3>
                    <p class="text-sm lg:text-base text-gray-300 mb-4 leading-relaxed">{{ item.des }}</p>
                    <div class="flex items-center space-x-2 text-blue-400">
                      <button 
                        @click="playVoice(item.voice, item._id)"
                        :disabled="playingAudio === item._id"
                        class="flex items-center space-x-2 hover:text-blue-300 transition-colors disabled:opacity-50"
                      >
                        <i v-if="playingAudio === item._id" class="mdi mdi-volume-high text-lg animate-pulse"></i>
                        <i v-else class="mdi mdi-volume-high text-lg"></i>
                        <span class="text-xs lg:text-sm">{{ playingAudio === item._id ? 'Playing...' : 'Listen' }}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column - Planned Items -->
          <div class="pl-8 lg:pl-16">
            <div 
              v-for="(item, index) in plannedItems" 
              :key="item._id"
              class="roadmap-item-right mb-8"
              :style="{ animationDelay: `${index * 0.2 + 0.2}s` }"
            >
              <div class="flex items-start space-x-4 lg:space-x-6">
                <div class="flex-1">
                  <div class="bg-white/20 backdrop-blur-xl rounded-2xl p-6 border border-white/30 shadow-lg">
                    <div class="flex items-center justify-between mb-4">
                      <span class="bg-gray-500 text-white px-2 lg:px-3 py-1 rounded-full text-xs lg:text-sm font-medium">Coming Soon</span>
                      <span class="text-gray-300 text-xs lg:text-sm">{{ item.publish }}</span>
                    </div>
                    <h3 class="text-lg lg:text-xl font-bold text-white mb-3">{{ item.title }}</h3>
                    <div class="flex items-center space-x-2 mb-4">
                      <i class="mdi mdi-clock text-lg text-gray-400"></i>
                      <span class="text-gray-400 font-mono text-xs lg:text-sm">{{ getRandomCountdown() }}</span>
                    </div>
                    <div class="flex items-center space-x-2 text-blue-400">
                      <button 
                        @click="playVoice(item.voice, item._id)"
                        :disabled="playingAudio === item._id"
                        class="flex items-center space-x-2 hover:text-blue-300 transition-colors disabled:opacity-50"
                      >
                        <i v-if="playingAudio === item._id" class="mdi mdi-volume-high text-lg animate-pulse"></i>
                        <i v-else class="mdi mdi-volume-high text-lg"></i>
                        <span class="text-xs lg:text-sm">{{ playingAudio === item._id ? 'Playing...' : 'Listen (soon)' }}</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="flex-shrink-0">
                  <div class="w-12 h-12 lg:w-16 lg:h-16 bg-gray-500 rounded-full flex items-center justify-center shadow-lg">
                    <i class="mdi mdi-refresh text-2xl lg:text-3xl text-white"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, computed, ref } from 'vue'
import { useRoadmapStore } from '../stores/roadmap'

// Initialize the roadmap store
const roadmapStore = useRoadmapStore()

// Voice functionality state
const playingAudio = ref<string | null>(null)
const currentAudio = ref<HTMLAudioElement | null>(null)

// Fetch roadmap data when component mounts
onMounted(async () => {
  // Load fake data immediately for demonstration
  roadmapStore.items = roadmapStore.getFakeData() as any
  // Also try to fetch from API in background
  await roadmapStore.fetchRoadmapItems()
})

// Computed properties for different roadmap sections
const completedItems = computed(() => roadmapStore.getCompletedItems)
const inProgressItems = computed(() => roadmapStore.getInProgressItems)
const plannedItems = computed(() => roadmapStore.getPlannedItems)

// Voice functionality
const playVoice = async (voiceUrl: string, itemId: string) => {
  try {
    // Stop current audio if playing
    if (currentAudio.value) {
      currentAudio.value.pause()
      currentAudio.value = null
    }

    // If clicking the same item, just stop
    if (playingAudio.value === itemId) {
      playingAudio.value = null
      return
    }

    // Set loading state
    playingAudio.value = itemId

    // Create new audio element
    const audio = new Audio(voiceUrl)
    currentAudio.value = audio

    // Handle audio events
    audio.onloadstart = () => {
      console.log('Loading audio...')
    }

    audio.oncanplay = () => {
      console.log('Audio ready to play')
    }

    audio.onplay = () => {
      console.log('Audio started playing')
    }

    audio.onended = () => {
      playingAudio.value = null
      currentAudio.value = null
    }

    audio.onerror = (error) => {
      console.error('Audio error:', error)
      playingAudio.value = null
      currentAudio.value = null
      // You could show a toast notification here
    }

    // Play the audio
    await audio.play()
  } catch (error) {
    console.error('Error playing voice:', error)
    playingAudio.value = null
    currentAudio.value = null
  }
}

// Helper functions
const getRandomCountdown = () => {
  const countdowns = [
    '2h : 35m : 52s',
    '2w : 5d : 52m',
    '1d : 12h : 30m',
    '3w : 2d : 15h',
    '5d : 8h : 45m'
  ]
  return countdowns[Math.floor(Math.random() * countdowns.length)]
}

// Cleanup on unmount
onUnmounted(() => {
  if (currentAudio.value) {
    currentAudio.value.pause()
    currentAudio.value = null
  }
})
</script>

<style scoped>
.roadmap-container {
  background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #312e81 100%);
}

.writing-mode-vertical {
  writing-mode: vertical-rl;
  text-orientation: mixed;
}

.roadmap-item-left {
  animation: slideInLeft 0.8s ease-out forwards;
  opacity: 0;
  transform: translateX(-50px);
  transition: all 0.3s ease;
}

.roadmap-item-right {
  animation: slideInRight 0.8s ease-out forwards;
  opacity: 0;
  transform: translateX(50px);
  transition: all 0.3s ease;
}


@keyframes slideInLeft {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .roadmap-container .grid {
    grid-template-columns: 1fr;
  }
  
  .roadmap-container .absolute.left-1\/2 {
    display: none;
  }
  
  .roadmap-item-left,
  .roadmap-item-right {
    margin: 0 auto;
    max-width: 500px;
  }
}
</style>
