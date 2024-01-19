<template>
          <div
        class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5 font-display"
      >
        <article v-for="book in filteredBooks" :key="book.id" class="mt-6">
          <BookCard :book="book" :style="'ml-[1%] mt-[1%]'" />
        </article>
      </div>
</template>
<script setup>
import BookCard from "../../components/book/BookCard.vue";
import { defineProps } from "vue";
import {computed} from 'vue';
import {useStore} from 'vuex';
const store=useStore();
const props=defineProps({
    category:String
});
props.category='Fiction'

const books=computed(()=>store.getters['getBooks']);
const sortedBooks = computed(() => books.value.slice().sort((a, b) => b.id - a.id));

const filteredBooks = computed(() => {
  return sortedBooks.value.filter((book) => book.category === props.category).slice(0, 8);
});
</script>