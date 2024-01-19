<template>
  <div class="w-[215px] text-left  font-display">
    <router-link :to="`/productDetails/${book.id}`"
      class="bi bi-eye rounded-full bg-white py-0 px-[6px] text-primary text-[21px] hover:bg-primary hover:text-white absolute"
      :class="style"
    ></router-link>
    <figure class="w-full h-[300px]">
  <img
    :src="book.img"
    alt=""
    loading="lazy"
    class="min-h-[250px] max-h-[251px]  rounded-md"
  />
</figure>
  <article>
    <div class="h-[50px]">
    <h3 class="font-bold">{{ book.title }}</h3>
    </div>
    <p class="text-sm text-gray-600 mt-2">MAD{{ book.price }}</p>
    <div class="flex items-center gap-1 mt-2">
      <i class="text-yellow-400 bi bi-star-fill"></i>
      <i class="text-yellow-400 bi bi-star-fill"></i>
      <i class="text-yellow-400 bi bi-star-fill"></i>
      <i class="text-yellow-400 bi bi-star-fill"></i>
      <i class="text-yellow-400 bi bi-star-fill"></i>
      <span class="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">{{ book.rating }}</span>
    </div>
    <figure>
      <button
        class="text-center w-[80%] bg-primary border hover:border-primary rounded-md duration-300 text-white py-1 px-4 mt-4 hover:bg-white hover:text-primary"
        @click="addToCart(book)"
      >
        Add To Cart
      </button>
    <button
      class="bi bi-heart w-8 h-8 ml-1 rounded-[50%] text-[#ea2b0f]  hover:bg-[#ea2b0f] hover:text-white"
      @click="addToWishlist(book)"
    ></button>
    </figure>
  </article>
</div>
</template>
<script setup>
import { defineProps } from "vue";
import {useStore} from 'vuex';
import {ref} from 'vue';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
const props = defineProps({
  book: Object,
  style:String
});
const quantity=ref(1);
const store=useStore();
const addToCart = (book)=>{
  const Q=quantity.value;
  store.dispatch('addToCart',{book,Q});
  notify('product is added to your cart')
}
const addToWishlist=(book)=>{
  store.dispatch('addToWishlist',book);
  notify('product is added to your wishlist')

}

const notify=(message)=>{
  toast(message, {autoClose: 3000,position: toast.POSITION.TOP_CENTER,toastStyle:{color:'#743820'}});
}
</script>
