<template>
  <section class="mt-14 mb-12 flex justify-center font-display">
    <div class=" lg:w-[85%]">
      <figure class="text-center text-xl-end mt-4 mt-xl-0">
        <button 
        class="font-bold  text-[15px] px-4" 
        @click="category = 'Self-Help'"
        :class="category ==='Self-Help' ? 'text-[#f9333b]':'text-secondary' "
        >
          Self-Help
        </button>
        <button 
        class="font-bold  text-[15px] px-4"  
        @click="category = `Children's Books` "
        :class="category ===`Children's Books` ? 'text-[#f9333b]':'text-secondary' "
        >Children's Books</button>
        <button class="font-bold  text-[15px] px-4" 
        @click="category = 'Fiction' "
        :class="category ==='Fiction' ? 'text-[#f9333b]':'text-secondary' "
        >Fiction</button>
      </figure>
      <figure class="w-[95%] text-end">
        <router-link
        to="/shop?collection=&search="
          class=" mt-[4%] rounded-full bg-white text-secondary border border-secondary px-2 py-1 cursor-pointer text-[1rem] hover:bg-secondary hover:text-white"
        >
          View All <i class="bi bi-arrow-right"></i>
        </router-link>
      </figure>
      <div
        class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5"
      >
        <article v-for="book in filteredBooks" :key="book.id" class="mt-6">
          <BookCard :book="book" :style="'ml-[1%] mt-[1%]'" />
        </article>
      </div>
    </div>
  </section>
</template>
<script setup>
await new Promise((res)=>setTimeout(res,3000));
import { ref,computed,watch } from "vue";
import BookCard from "../../components/book/BookCard.vue";
import {useStore} from 'vuex';
const store=useStore();
const category=ref('Self-Help');
const books = computed(() => store.getters['getBooks']);
const sortedBooks = computed(() => books.value.slice().sort((a, b) => b.id - a.id));
const filteredBooks = computed(() => {
  return sortedBooks.value.filter((book) => book.category === category.value).slice(0, 8);
});
watch(category, () => {
  filteredBooks.value = sortedBooks.value.filter((book) => book.category === category.value).slice(0, 8);
});
</script>
