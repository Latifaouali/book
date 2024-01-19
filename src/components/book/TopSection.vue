<template>
  <Carousel :autoplay="5000" :wrap-around="true" @mouseover="showButtons" @mouseleave="hideButtons" class="carousel-container font-display bg-[#f7ddd5]">
    <Slide
      v-for="item in slides"
      :key="item.id"
      class="bg-cover bg-center min-h-[500px!important] sm:min-h-[650px]"
    >
      <article class=" w-[90%] md:flex ">
        <div
          class="flex flex-col justify-center gap-4 pt-12 sm:pt-0  sm:text-left order-2 sm:order-1  "
        >
          <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold text-secondary ">
            {{ item.title }}
          </h1>
          <p class="text-sm text-secondary ">
            {{ item.description }}
          </p>
          <div class="align-center  mt-2 order">
            <router-link
              :to="item.link"
              class=" bg-primary border border-primary hover:bg-white   hover:text-primary duration-200 text-white py-4 px-8 rounded-full "
            >
              Order Now
            </router-link>
          </div>
        </div>
        <figure class="order-1 sm:order-2 md:max-w-[400px] px-4 py-4 figure">
          <img :src="item.img" class="rounded-full" loading="lazy"/>
        </figure>
      </article>
    </Slide>
    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>

<script setup>
import { ref } from "vue";
import { Carousel,Navigation, Slide,Pagination } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
const slides = ref([
  {
    id: 1,
    img: "/book/slide1.png",
    title: " Discover the joy of reading",
    description:
      " where every page is an adventure waiting to unfold.",
      link:'/shop?collection=&search='
  },
  {
    id: 2,
    img: "/book/slide2.png",
    title: "70% off on all Self-Help books.",
    description:
      "There are many variations of passages of Lorem Ipsum  the majority have suffered alteration in some.",
    link:'/shop?collection=Self-Help&search='
  },
  {
    id: 3,
    img: "/book/slide.png",
    title: "Discover the art of strategic creativity",
    description:
      "The Business of Design your essential guide to merging imagination with entrepreneurship. Gain insights, navigate challenges, and elevate your creative enterprise to new heights.",
    link:'/productDetails/25'
  }
]);

const showButtons = () => {
  document.querySelector(".carousel-container").classList.add("show-buttons");
};

const hideButtons = () => {
  document.querySelector(".carousel-container").classList.remove("show-buttons");
};
</script>
<style >

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  background: #fff;
  border-radius: 100%;
  width: 60px;
  height: 60px;
  display: none;
  font-size: 24px; 
  line-height: 60px; 
  color: black; 
  transition: opacity 0.3s ease;
}
.carousel__prev:hover,
.carousel__next:hover {
  background: black;
  color:white;
}
.show-buttons .carousel__prev,
.show-buttons .carousel__next {
  display: block;
  opacity: 1; 
}

.carousel__icon{
  width: 100% !important;
}

@media only screen and (max-width: 600px) {
  .figure{
    margin-top:20px
  }
  .order{
    margin-top:15px;
  }
}
</style>