<template>
  <Transition
    :name="transitionName"
    mode="out-in"
    @before-enter="onBeforeEnter"
    @enter="onEnter"
    @after-enter="onAfterEnter"
    @before-leave="onBeforeLeave"
    @leave="onLeave"
    @after-leave="onAfterLeave"
  >
    <slot />
  </Transition>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface Props {
  name?: 'fade' | 'slide' | 'scale' | 'blur' | 'flip'
  duration?: number
  delay?: number
}

const props = withDefaults(defineProps<Props>(), {
  name: 'fade',
  duration: 600,
  delay: 0
})

const transitionName = computed(() => `page-${props.name}`)

const onBeforeEnter = (el: Element) => {
  const element = el as HTMLElement
  element.style.transitionDuration = `${props.duration}ms`
  element.style.transitionDelay = `${props.delay}ms`
}

const onEnter = (el: Element) => {
  const element = el as HTMLElement
  // Trigger reflow to ensure initial state is applied
  element.offsetHeight
}

const onAfterEnter = (el: Element) => {
  const element = el as HTMLElement
  element.style.transitionDuration = ''
  element.style.transitionDelay = ''
}

const onBeforeLeave = (el: Element) => {
  const element = el as HTMLElement
  element.style.transitionDuration = `${props.duration}ms`
  element.style.transitionDelay = `${props.delay}ms`
}

const onLeave = (el: Element) => {
  const element = el as HTMLElement
  // Trigger reflow to ensure initial state is applied
  element.offsetHeight
}

const onAfterLeave = (el: Element) => {
  const element = el as HTMLElement
  element.style.transitionDuration = ''
  element.style.transitionDelay = ''
}
</script>

<style scoped>
/* Fade transition */
.page-fade-enter-active,
.page-fade-leave-active {
  transition: opacity var(--animation-duration, 0.6s) cubic-bezier(0.4, 0, 0.2, 1);
}

.page-fade-enter-from,
.page-fade-leave-to {
  opacity: 0;
}

/* Slide transition */
.page-slide-enter-active,
.page-slide-leave-active {
  transition: all var(--animation-duration, 0.6s) cubic-bezier(0.4, 0, 0.2, 1);
}

.page-slide-enter-from {
  opacity: 0;
  transform: translateX(100px);
}

.page-slide-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}

/* Scale transition */
.page-scale-enter-active,
.page-scale-leave-active {
  transition: all var(--animation-duration, 0.6s) cubic-bezier(0.4, 0, 0.2, 1);
}

.page-scale-enter-from,
.page-scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

/* Blur transition */
.page-blur-enter-active,
.page-blur-leave-active {
  transition: all var(--animation-duration, 0.6s) cubic-bezier(0.4, 0, 0.2, 1);
}

.page-blur-enter-from,
.page-blur-leave-to {
  opacity: 0;
  filter: blur(10px);
  transform: translateY(20px);
}

/* Flip transition */
.page-flip-enter-active,
.page-flip-leave-active {
  transition: all var(--animation-duration, 0.6s) cubic-bezier(0.4, 0, 0.2, 1);
}

.page-flip-enter-from {
  opacity: 0;
  transform: rotateY(90deg);
}

.page-flip-leave-to {
  opacity: 0;
  transform: rotateY(-90deg);
}

/* Respect reduced motion preferences */
@media (prefers-reduced-motion: reduce) {
  .page-fade-enter-active,
  .page-fade-leave-active,
  .page-slide-enter-active,
  .page-slide-leave-active,
  .page-scale-enter-active,
  .page-scale-leave-active,
  .page-blur-enter-active,
  .page-blur-leave-active,
  .page-flip-enter-active,
  .page-flip-leave-active {
    transition: none;
  }
  
  .page-fade-enter-from,
  .page-fade-leave-to,
  .page-slide-enter-from,
  .page-slide-leave-to,
  .page-scale-enter-from,
  .page-scale-leave-to,
  .page-blur-enter-from,
  .page-blur-leave-to,
  .page-flip-enter-from,
  .page-flip-leave-to {
    opacity: 1;
    transform: none;
    filter: none;
  }
}
</style>
