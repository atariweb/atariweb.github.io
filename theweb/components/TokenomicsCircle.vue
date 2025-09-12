<template>
  <section class="w-full py-8 px-2 lg:px-0">
    <div class="max-w-7xl mx-auto flex flex-col items-center bg-white/10 dark:bg-gray-800/10 backdrop-blur-xl rounded-3xl border border-white/20 dark:border-gray-700/20 shadow-2xl p-8">
      <h2 class="text-xl font-semibold mb-8">{{ t('tokenomics.title') }}</h2>

      <div class="block md:flex md:justify-center items-center gap-32">
        <!-- دایره اصلی -->
        <div class="relative w-72 h-72 mx-auto md:mx-0">
          <Doughnut :data="chartData" :options="chartOptions" />
          <svg class="absolute inset-0 w-full h-full rotate-[-90deg]">
            <circle
              r="110"
              cx="145"
              cy="145"
              class="text-gray-200 dark:text-gray-700"
              stroke="currentColor"
              stroke-width="12"
              fill="transparent"
            />
            <circle
              v-for="(percent, i) in animatedPercents"
              :key="i"
              :stroke="getColor(i)"
              stroke-width="12"
              fill="transparent"
              r="110"
              cx="145"
              cy="145"
              stroke-linecap="round"
              :stroke-dasharray="calculateDashArray(getPercent(i))"
              :stroke-dashoffset="calculateOffset(i)"
              style="transition: stroke-dasharray 0.4s ease, stroke-dashoffset 0.4s ease"
            />
          </svg>

          <div class="absolute inset-0 flex items-center justify-center">
            <img src="@/assets/images/logo.webp" alt="logo" class="w-32 h-32 object-contain" />
          </div>
        </div>

                 <!-- دایره‌های کوچک و نوشته‌ها -->
         <div
           class="flex flex-col md:grid md:grid-cols-2 md:gap-x-16 md:gap-y-10 
                  text-center md:text-left justify-items-center md:justify-items-start"
         >
           <div
             v-for="(percent, i) in targetPercents"
             :key="i"
             class="flex flex-row items-start justify-center md:justify-start relative"
           >
             <div class="relative w-20 h-20 flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 100 100" class="absolute inset-0 w-full h-full">
                <defs>
                  <linearGradient :id="'grad' + i" x1="0" y1="1" x2="0" y2="0">
                    <stop offset="0%" :stop-color="getColor(i)" stop-opacity="0.35" />
                    <stop offset="100%" :stop-color="getColor(i)" stop-opacity="0.95" />
                  </linearGradient>
                </defs>
                <polygon
                  points="50,0 93,25 93,75 50,100 7,75 7,25"
                  :fill="'url(#grad' + i + ')'"
                />
                <polygon
                  points="50,0 93,25 93,75 50,100 7,75 7,25"
                  class="text-gray-300 dark:text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                />
              </svg>
              <span class="font-bold text-sm">{{ getPercent(i) }}%</span>
            </div>

                         <!-- نوشته‌ها -->
             <div class="flex flex-col flex-1">
               <span class="text-xl mb-2" :style="{ color: getColor(i) }">
                 {{ labels[i] || '' }}
               </span>
               <span class="text-gray-500 dark:text-gray-400 text-l mb-2">
                 {{ getValue(i).toLocaleString() }}
               </span>
               <span class="text-gray-600 dark:text-gray-300 text-l mb-2">
                 {{ getNormalized(i) }}%
               </span>
             </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// @ts-nocheck
import { ref, onMounted, computed, watchEffect } from "vue"
// useI18n is auto-imported by Nuxt i18n module
import { Doughnut } from "vue-chartjs"
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from "chart.js"

ChartJS.register(Title, Tooltip, Legend, ArcElement)

// دیتا
const targetPercents = [78, 65, 50, 90]
const values = [22500000, 23500000, 24500000, 25500000]
const colors = ["#36A2EB", "#4BC0C0", "#4CAF50", "#FF6384"]

// i18n
const { t, tm } = useI18n({ useScope: 'global' })
const labels = computed(() => (tm("tokenomics.labels") as string[]))

const animatedPercents = ref([0, 0, 0, 0])

// Normalize percents
const normalizedTargets = computed(() => {
  const total = targetPercents.reduce((sum, p) => sum + p, 0)
  if (!total) return targetPercents
  return targetPercents.map((p) => (p / total) * 100)
})

const chartData = ref({
  labels: labels.value,
  datasets: [
    {
      data: [0, 0, 0, 0],
      backgroundColor: colors,
      borderWidth: 12,
      borderRadius: 40,
    },
  ],
})

watchEffect(() => {
  chartData.value.labels = labels.value
})

const chartOptions = {
  cutout: "80%",
  plugins: { legend: { display: false }, tooltip: { enabled: false } },
  animation: false,
}

// Accessors
function getPercent(index: number): number {
  const v = animatedPercents.value[index] ?? 0
  return Math.round(v)
}

function getValue(index: number): number {
  return values[index] ?? 0
}

function getColor(index: number): string {
  return colors[index] ?? "#000000"
}

function getNormalized(index: number): number {
  const v = normalizedTargets.value[index]
  return Math.round(v ?? 0)
}

onMounted(() => {
  animatePercents()
})

function animatePercents() {
  const duration = 2000
  const steps = 60
  const interval = duration / steps
  let currentStep = 0

  const timer = setInterval(() => {
    currentStep++
    animatedPercents.value = normalizedTargets.value.map((target) =>
      Math.min(Math.round((target * currentStep) / steps), target)
    )
    chartData.value.datasets[0].data = [...animatedPercents.value]

    if (currentStep >= steps) {
      clearInterval(timer)
      // Snap to rounded values at the end
      const rounded = normalizedTargets.value.map((t) => Math.round(t))
      animatedPercents.value = rounded
      chartData.value.datasets[0].data = [...rounded]
    }
  }, interval)
}

function calculateOffset(index: number, radius = 110) {
  const circumference = 2 * Math.PI * radius
  let offset = circumference
  for (let i = 0; i < index; i++) {
    offset -= (circumference * animatedPercents.value[i]) / 100
  }
  return offset
}

function calculateDashArray(percent: number, radius = 110) {
  const circumference = 2 * Math.PI * radius
  const filled = (circumference * percent) / 100
  return `${filled} ${circumference - filled}`
}
</script>
