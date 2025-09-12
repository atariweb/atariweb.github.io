<template>
  <!-- Hero section - always loaded immediately -->
  <LazySection 
    animation-type="fadeIn" 
    :preload="true"
    class="hero-section"
  >
    <hero />
  </LazySection>

  <!-- Team sections with staggered animations -->
  <LazySection 
    animation-type="slideUp" 
    :delay="200"
    class="team-section"
  >
    <WhoAreEzyTeam />
  </LazySection>

  <LazySection 
    animation-type="slideLeft" 
    :delay="300"
    class="team-section"
  >
    <WhyEzyTeam />
  </LazySection>

  <!-- Tokenomics with scale animation -->
  <LazySection 
    animation-type="scaleIn" 
    :delay="400"
    class="tokenomics-section"
  >
    <TokenomicsCircle />
  </LazySection>

  <!-- Features with slide up -->
  <LazySection 
    animation-type="slideUp" 
    :delay="500"
    class="features-section"
  >
    <Features />
  </LazySection>

  <!-- Banner with blur effect -->
  <LazySection 
    animation-type="blurIn" 
    :delay="600"
    class="banner-section"
  >
    <EzyTonBanner />
  </LazySection>

  <!-- Network section -->
  <LazySection 
    animation-type="slideRight" 
    :delay="700"
    class="network-section"
  >
    <EzyNetwork />
  </LazySection>

  <!-- Menu Digital -->
  <LazySection 
    animation-type="fadeIn" 
    :delay="800"
    class="menu-section"
  >
    <MenuDigital />
  </LazySection>

  <!-- Roadmap -->
  <LazySection 
    animation-type="slideUp" 
    :delay="900"
    class="roadmap-section"
  >
    <RoadMap />
  </LazySection>

  <!-- Our Team -->
  <LazySection 
    animation-type="scaleIn" 
    :delay="1000"
    class="team-section"
  >
    <OurTeam />
  </LazySection>

  <!-- Comments -->
  <LazySection 
    animation-type="slideLeft" 
    :delay="1100"
    class="comments-section"
  >
    <Comment />
  </LazySection>

  <!-- Blog Preview -->
  <LazySection 
    animation-type="blurIn" 
    :delay="1200"
    class="blog-section"
  >
    <BlogPreview />
  </LazySection>

  <!-- Partners -->
  <LazySection 
    animation-type="slideRight" 
    :delay="1300"
    class="partners-section"
  >
    <EzyPartner />
  </LazySection>

  <!-- FAQ -->
  <LazySection 
    animation-type="fadeIn" 
    :delay="1400"
    class="faq-section"
  >
    <FAQ />
  </LazySection>
</template>



<script setup>
import hero from "~/components/hero.vue";
import WhoAreEzyTeam from "~/components/EzyTeam/WhoAreEzyTeam.vue";
import WhyEzyTeam from "~/components/EzyTeam/WhyEzyTeam.vue";
import TokenomicsCircle from "~/components/TokenomicsCircle.vue";
import Features from "~/components/Features.vue";
import EzyTonBanner from "~/components/EzyTonBanner.vue";
import EzyNetwork from "~/components/EzyNetwork.vue";
import MenuDigital from "~/components/MenuDigital.vue";
import RoadMap from "~/components/RoadMap.vue";
import OurTeam from "~/components/EzyTeam/OurTeam.vue";
import Comment from "~/components/Comment.vue";
import BlogPreview from "~/components/BlogPreview.vue";
import EzyPartner from "~/components/EzyPartner.vue";
import FAQ from "~/components/FAQ.vue";
import LazySection from "~/components/LazySection.vue";

// Set page metadata for better SEO and performance
useHead({
  title: 'EzyTon - Modern Landing Page',
  meta: [
    { name: 'description', content: 'EzyTon - A modern, smooth, and performant landing page with lazy loading and beautiful animations' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ]
});

// Enable smooth scrolling behavior
useSeoMeta({
  title: 'EzyTon - Modern Landing Page',
  ogTitle: 'EzyTon - Modern Landing Page',
  description: 'EzyTon - A modern, smooth, and performant landing page with lazy loading and beautiful animations',
  ogDescription: 'EzyTon - A modern, smooth, and performant landing page with lazy loading and beautiful animations',
  ogImage: '/images/logo.webp',
  twitterCard: 'summary_large_image',
});
</script>