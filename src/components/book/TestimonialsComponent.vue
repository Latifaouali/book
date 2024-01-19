<template>
  <section class="mt-40 mb-12 flex justify-center font-display">
    <div class="w-full">
      <header class="text-center mb-10 max-w-[600px] mx-auto">
        <h1 class="text-3xl font-bold text-secondary">What Client Says</h1>
        <p class="text-xs text-gray-400">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
          asperiores modi Sit asperiores modi
        </p>
      </header>
      <Carousel :autoplay="8000" :wrap-around="true" ref="myCarousel"
              :style="{ backgroundImage: `url('/book/testimonial.jpg')` }"
        class=" bg-cover bg-center md:h-[281px] w-[100%!important]  py-5"
      >
        <Slide v-for="item in slides" :key="item.id"
        >
          <div
            class="carousel-container"
          >
            <div
              class="flex justify-center items-center min-h-[99%!important] man-h-[100%!important]"
            >
              <article class="px-2 py-2">
                <blockquote
                  class="max-w-[700px] flex flex-col justify-center gap-4  sm:pt-1 sm:text-left order-2 sm:order-1 relative z-10 bg-white px-5 py-10 rounded-[25px]"
                >
                  <div class="flex items-center gap-4 text-center">
                    <img
                      alt="Man"
                      loading="lazy"
                      src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                      class="h-14 w-14 rounded-full object-cover"
                    />
                    <p class="mt-0.5 text-lg font-medium text-gray-900">
                      Paul Starr
                    </p>
                  </div>

                  <p class="mt-4 text-gray-700 text-left">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Culpa sit rerum incidunt, a consequuntur recusandae ab saepe
                    illo est quia obcaecati neque quibusdam eius accusamus error
                    officiis atque voluptates magnam!
                  </p>
                </blockquote>
              </article>
            </div>
          </div>
        </Slide>
      </Carousel>
      <button
        @click="myCarousel.prev()"
        class="rounded-[50%] text-[26px] w-16 h-16 bg-[#f3f4f7] text-secondary hover:bg-secondary hover:text-white md:absolute md:ml-[-5%] md:mt-[-24%] lg:mt-[-13%] lg:ml-[8%]"
      >
        <svg
          class="carousel__icon"
          viewBox="0 0 24 24"
          role="img"
          aria-label="Arrow pointing to the left"
        >
          <title>Arrow pointing to the left</title>
          <path
            d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"
          ></path>
        </svg>
      </button>
      <button
        @click="myCarousel.next()"
        class="text-[26px] rounded-[50%] bg-[#f3f4f7] text-secondary w-16 h-16 hover:bg-secondary hover:text-white md:absolute md:mt-[-18%] md:ml-[89%] lg:ml-[87%] lg:mt-[-13%]"
      >
        <svg
          class="carousel__icon"
          viewBox="0 0 24 24"
          role="img"
          aria-label="Arrow pointing to the right"
        >
          <title>Arrow pointing to the right</title>
          <path
            d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
          ></path>
        </svg>
      </button>
    </div>
  </section>
</template>
<script setup>
import { ref } from "vue";
import { Carousel, Slide } from "vue3-carousel";
const myCarousel = ref(null);
import "vue3-carousel/dist/carousel.css";
const slides = ref([
  {
    id: 1,
    img: "/book/slide1.webp",
    title: " Get Your New Collections",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some formr.",
  },
  {
    id: 2,
    img: "/book/slide2.jpg",
    title: "Knowledge is Strength.",
    description:
      "There are many variations of passages of Lorem Ipsum  the majority have suffered alteration in some.",
  },
  {
    id: 3,
    img: "/book/slide.jpg",
    title: "70% off on all Books Sale",
    description:
      "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
]);
</script>
