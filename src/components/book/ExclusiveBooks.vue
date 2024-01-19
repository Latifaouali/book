<template>
  <section class="mt-14 mb-12 flex justify-center font-display">
    <div class="container md:w-[85%]">
      <figure class="w-[95%] text-end">
      <router-link  
      to="/shop?collection=&search="
      class="rounded-full bg-white text-secondary border border-secondary px-2 py-1 cursor-pointer text-[1rem] hover:bg-secondary hover:text-white">View All <i class="bi bi-arrow-right"></i></router-link>
    </figure>
      <Carousel v-bind="settings" :breakpoints="breakpoints" ref="myCarousel" class="mt-5">
        <Slide v-for="book in exclusive" :key="book.id">
          <BookCard :book="book" :style="'ml-[3%] mt-[3%]'"/>
        </Slide>
      </Carousel>
        <button @click="myCarousel.prev()" 
        class=" rounded-[50%] text-[26px] w-16 h-16 bg-[#f3f4f7] text-secondary hover:bg-secondary hover:text-white md:absolute md:ml-[-9%] md:mt-[-24%] lg:mt-[-15%]  lg:ml-[-5%] ">
        <svg class="carousel__icon" viewBox="0 0 24 24" role="img" aria-label="Arrow pointing to the left"><title>Arrow pointing to the left</title>
          <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"></path>
        </svg>
        </button>
        <button @click="myCarousel.next()" class=" text-[26px] rounded-[50%] bg-[#f3f4f7] text-secondary   w-16 h-16 hover:bg-secondary hover:text-white md:absolute md:mt-[-24%] md:ml-[80%]  lg:ml-[83%] lg:mt-[-15%]">
          <svg class="carousel__icon" viewBox="0 0 24 24" role="img" aria-label="Arrow pointing to the right"><title>Arrow pointing to the right</title>
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z">
            </path></svg>
        </button>

    </div>
  </section>
</template>
<script setup>
await new Promise((res)=>setTimeout(res,3000));
import BookCard from "../../components/book/BookCard.vue";
import { Carousel, Slide } from "vue3-carousel";
import { ref,computed } from "vue";
import {useStore} from 'vuex';
const store=useStore();
const books=computed(()=>store.getters['getBooks']);
const sortedBooks = computed(() => books.value.slice().sort((a, b) => b.id - a.id));
const exclusive =sortedBooks.value.slice(0,10);
const myCarousel = ref(null);

const settings = ref({
  itemsToShow: 1,
  snapAlign: "center",
});

const breakpoints = ref({
  700: {
    itemsToShow: 3.5,
    snapAlign: "center",
  },
  1024: {
    itemsToShow: 5,
    snapAlign: "start",
  },
});
</script>

