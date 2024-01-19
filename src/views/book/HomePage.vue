<template>
  <NavBar />
  <TopSection />
  <Collections />
  <DiscountBanner />
  <!-- exclusive books -->
  <div class="mt-14 text-center mb-10 max-w-[600px] mx-auto font-display">
    <h1 class="text-3xl font-bold text-secondary">Exclusive Books</h1>
    <p class="text-xs text-gray-400">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores
      modi Sit asperiores modi
    </p>
  </div>
  <Suspense>
    <ExclusiveBooks />
    <template #fallback>
      <div class="flex items-center justify-center">
        <svg
          class="w-[100px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
        >
          <radialGradient
            id="a10"
            cx=".66"
            fx=".66"
            cy=".3125"
            fy=".3125"
            gradientTransform="scale(1.5)"
          >
            <stop offset="0" stop-color="#743820"></stop>
            <stop offset=".3" stop-color="#743820" stop-opacity=".9"></stop>
            <stop offset=".6" stop-color="#743820" stop-opacity=".6"></stop>
            <stop offset=".8" stop-color="#743820" stop-opacity=".3"></stop>
            <stop offset="1" stop-color="#743820" stop-opacity="0"></stop>
          </radialGradient>
          <circle
            transform-origin="center"
            fill="none"
            stroke="url(#a10)"
            stroke-width="15"
            stroke-linecap="round"
            stroke-dasharray="200 1000"
            stroke-dashoffset="0"
            cx="100"
            cy="100"
            r="70"
          >
            <animateTransform
              type="rotate"
              attributeName="transform"
              calcMode="spline"
              dur="2"
              values="360;0"
              keyTimes="0;1"
              keySplines="0 0 1 1"
              repeatCount="indefinite"
            ></animateTransform>
          </circle>
          <circle
            transform-origin="center"
            fill="none"
            opacity=".2"
            stroke="#743820"
            stroke-width="15"
            stroke-linecap="round"
            cx="100"
            cy="100"
            r="70"
          ></circle>
        </svg>
      </div>
    </template>
  </Suspense>
  <!-- end exclusive books -->
  <BannerComponent />
  <!-- latest books -->
  <header class="text-center mb-10 max-w-[600px] mx-auto">
    <h1 class="text-3xl font-bold text-secondary">Latest Books</h1>
    <p class="text-xs text-gray-400">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores
      modi Sit asperiores modi
    </p>
  </header>
  <Suspense>
    <LatestBooks />
    <template #fallback>
      <div class="flex items-center justify-center">
        <svg
          class="w-[100px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
        >
          <radialGradient
            id="a10"
            cx=".66"
            fx=".66"
            cy=".3125"
            fy=".3125"
            gradientTransform="scale(1.5)"
          >
            <stop offset="0" stop-color="#743820"></stop>
            <stop offset=".3" stop-color="#743820" stop-opacity=".9"></stop>
            <stop offset=".6" stop-color="#743820" stop-opacity=".6"></stop>
            <stop offset=".8" stop-color="#743820" stop-opacity=".3"></stop>
            <stop offset="1" stop-color="#743820" stop-opacity="0"></stop>
          </radialGradient>
          <circle
            transform-origin="center"
            fill="none"
            stroke="url(#a10)"
            stroke-width="15"
            stroke-linecap="round"
            stroke-dasharray="200 1000"
            stroke-dashoffset="0"
            cx="100"
            cy="100"
            r="70"
          >
            <animateTransform
              type="rotate"
              attributeName="transform"
              calcMode="spline"
              dur="2"
              values="360;0"
              keyTimes="0;1"
              keySplines="0 0 1 1"
              repeatCount="indefinite"
            ></animateTransform>
          </circle>
          <circle
            transform-origin="center"
            fill="none"
            opacity=".2"
            stroke="#743820"
            stroke-width="15"
            stroke-linecap="round"
            cx="100"
            cy="100"
            r="70"
          ></circle>
        </svg>
      </div>
    </template>
  </Suspense>
  <!-- end latest books -->
  <TestimonialsComponent />
  <Footer />
</template>

<script setup>
import { defineAsyncComponent } from "vue";
import NavBar from "@/components/book/NavBar.vue";
import TopSection from "@/components/book/TopSection.vue";
import Collections from "@/components/book/Collections.vue";
import DiscountBanner from "@/components/book/DiscountBanner.vue";
import BannerComponent from "@/components/book/BannerComponent.vue";
import TestimonialsComponent from "@/components/book/TestimonialsComponent.vue";
import Footer from "@/components/book/Footer.vue";

const ExclusiveBooks = defineAsyncComponent({
  loader: () => import("@/components/book/ExclusiveBooks.vue"),
  suspensible: true,
});

const LatestBooks = defineAsyncComponent({
  loader: () => import("@/components/book/LatestBooks.vue"),
  suspensible: true,
});
</script>
