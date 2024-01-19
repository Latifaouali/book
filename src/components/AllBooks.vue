<template>
  <div style="">
    <div class="md:flex md:flex-wrap text-center">
    <div
      v-for="book in paginatedBooks"
      :key="book.id"
      class="col-item w-1/2 md:w-1/3 lg:w-1/4 mt-5 md:border md:border-[#f3f4f7] text-center py-4 px-4"
    >
      <BookCard :book="book" :style="'ml-[0%] mt-[0%]'" />
    </div>
    <p
      class="text-2xl text-center text-[#f9333b]"
      v-if="paginatedBooks.length === 0"
    >
      {{ message }}
    </p>
  </div>
            <div class="container">
              <vue-awesome-paginate
                :total-items="totalPages"
                v-model="currentPage"
                :items-per-page="booksPerPage"
                :max-pages-shown="5"
              />
              <div v-if="paginatedBooks.length > 0">
                <div class="flex flex-wrap">
                  <button
                    class="text-[26px] rounded-[50%] bg-[#f3f4f7] text-secondary w-12 h-12 hover:bg-secondary hover:text-white"
                    @click="changePage(currentPage - 1)"
                    :disabled="currentPage === 1"
                  >
                    <svg
                      class="icon"
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
                    class="pointer-events-none rounded-[50%] bg-[#f3f4f7] text-primary w-12 h-12 ml-10"
                  >
                    {{ currentPage }}
                  </button>
                  <button
                    @click="changePage(currentPage + 1)"
                    :disabled="currentPage === totalPages"
                    class="text-[26px] rounded-[50%] bg-[#f3f4f7] text-secondary w-12 h-12 hover:bg-secondary hover:text-white ml-10"
                  >
                    <svg
                      class="icon"
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
              </div>
            </div>
          </div>
</template>
<script setup>
await new Promise((res)=>setTimeout(res,3000));
import { defineProps ,ref,computed,onMounted,watch,onBeforeMount} from 'vue';
import BookCard from "./book/BookCard.vue";
const props=defineProps({
    selectedCollections: Array,
})
const collectionQuery = ref("");
const searchQuery = ref(""); 
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
const route = useRoute();
const router = useRouter();
const store = useStore();
const message = ref("No Product Found");
const paginatedBooks = computed(() => {
  const startIndex = (currentPage.value - 1) * booksPerPage;
  const endIndex = startIndex + booksPerPage;

  const filteredBooks = store.getters.getBooks.filter((book) => {
    const titleMatch =
      !searchQuery.value ||
      book.title.toLowerCase().includes(searchQuery.value.toLowerCase());

    const authorMatch =
      !searchQuery.value ||
      book.author.toLowerCase().includes(searchQuery.value.toLowerCase());

    const collectionMatch =
      !collectionQuery.value.length ||
      collectionQuery.value.includes(book.category);

    return (titleMatch || authorMatch) && collectionMatch;
  });

  return filteredBooks.slice(startIndex, endIndex);
});

const currentPage = computed(() => store.state.currentPage);
const changePage = (page) => {
  store.dispatch("changePage", page);
};
const booksPerPage = 12;
const totalPages = computed(() =>
  Math.ceil(store.getters.getBooks.length / booksPerPage)
);

watch(
  () => router.currentRoute.value.query,
  ({ search, collection }) => {
    searchQuery.value = search || "";
    collectionQuery.value = collection || "";
  },
  { deep: true }
);

onBeforeMount(() => {
  const { collection, search } = router.currentRoute.value.query;
  collectionQuery.value = collection;
  searchQuery.value = search;
  console.log(searchQuery.value);
});
onMounted(() => {
  const { collection, search } = route.query;

  props.selectedCollections = collection ? collection.split(",") : [];
  searchQuery.value = search || "";

  watch(
    () => router.currentRoute.value.query,
    ({ search, collection }) => {
      searchQuery.value = search || "";
      props.selectedCollections = collection ? collection.split(",") : [];
    },
    { deep: true }
  );
});
</script>
