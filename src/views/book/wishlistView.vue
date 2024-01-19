<template>
    <NavBar />
    <section class="mt-14 mb-12 flex justify-center">
      <div class="container md:w-[85%]">
        <header class="text-center max-w-[600px] mx-auto">
          <h1 class="text-3xl font-bold text-primary mt-5">
            My Wishlist (<span class="text-[#f9333b]">{{ wishlist.length }} items </span>)
          </h1>
        </header>
        <div class="mt-20">
          <div class="flex flex-wrap lg:flex-nowrap lg:gap-8">
            <div class="w-full lg:w-3/4">
              <div class="flex flex-col">
                <div
                  class="bg-[#0103ba1f] flex items-center gap-1 px-3 py-3 text-xs font-semibold border-b md:gap-2 lg:gap-4 primary-gray-text border-primary-color"
                >
                  <div class="w-9/12 sm:w-5/12"><span>Product</span></div>
                  <div class="items-center justify-center hidden w-2/12 sm:flex">
                    <span>Price</span>
                  </div>
                  <div class="hidden w-1/12 sm:block"><div></div></div>
                </div>
  
                <div v-for="(item, index) in wishlist" :key="index">
                  <div
                    class="flex items-center justify-between gap-1 py-3 border-b md:gap-2 lg:gap-4 border-primary-color sm:py-4 lg:py-5"
                  >
                    <div class="relative w-2/12 sm:w-1/12">
                      <a href="/wishlist"><img :src="item.img" loading="lazy" /></a>
                      <div
                        class="absolute top-0 left-0 block p-1 text-white bg-red-400 rounded-full cursor-pointer sm:hidden icon-position bg-primary-hover"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 1024 1024"
                          aria-label="remove icon"
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-3 h-3"
                        >
                          <path
                            fill="currentColor"
                            d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div
                      class="flex flex-col justify-center w-7/12 h-full gap-1 sm:w-4/12 lg:px-3"
                    >
                      <a href="/products/warrior-blend-organic" class=""
                        ><span class="text-sm">{{ item.title }}</span></a
                      >
                      <a href="/products/warrior-blend-organic" class=""></a>
                      <!---->
                    </div>
                    <div
                      class=" justify-center hidden w-2/12 sm:flex"
                    >
                      <span class="text-sm font-medium text-primary text-right">{{
                        item.price
                      }}MAD</span>
                    </div>
                    <div
                      class="items-center justify-center hidden w-2/12 sm:flex"
                    >
                    <button 
                    @click="addToCart(item,index)"
                    class="text-xs font-medium flex items-center justify-center px-5 mt-5 text-white rounded-md cursor-pointer h-11 bg-primary hover:opacity-90 w-max">
                    add To cart
                  </button>
                    </div>
                    <div class="items-center justify-end hidden w-1/12 sm:flex">
                    <div
                      class="p-1 rounded-full cursor-pointer bg-primary-hover hover:text-white hover:bg-[#f9333b]"
                      @click="removeFromWishlist(index)"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 1024 1024"
                        aria-label="remove icon"
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-4 h-4"
                      >
                        <path
                          fill="currentColor"
                          d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
  
              <div class="flex items-center justify-center lg:justify-end">
                <div
                  class="flex items-center justify-center px-5 mt-5 text-white rounded-md cursor-pointer h-11 bg-primary hover:opacity-90 w-max"
                >
                  <button class="text-xs font-medium" @click="removeAllFromWishlist">
                    Remove All
                  </button>
                </div>
              </div>
            </div>
        </div>
      </div>
      </div>
    </section>
    <Footer />
  </template>
  
  <script setup>
  import NavBar from "@/components/book/NavBar.vue";
  import Footer from "@/components/book/Footer.vue";
  import { computed ,ref} from "vue";
  import { useStore } from "vuex";
  import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
  const store = useStore();
  const wishlist = computed(() => store.getters["getWishlist"]);
  const quantity=ref(1);
  const notify=(message)=>{
  toast(message, {autoClose: 3000,position: toast.POSITION.TOP_CENTER,toastStyle:{color:'#743820'}});
}
  const removeFromWishlist = (index) => {
    store.dispatch("removeFromWishlist", index);
    notify('product is deleted from your wishlist')
  };
  const removeAllFromWishlist = () => {
    store.dispatch("removeAllFromWishlist");
    notify('your wishlist is empty now !')
  };
  const addToCart = (book,index)=>{
  const Q=quantity.value;
  store.dispatch('addToCart',{book,Q});
  store.dispatch('removeFromWishlist',index);
  notify('product is added to your cart')
}
  </script>
  
  
