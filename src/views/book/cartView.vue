<template>
  <NavBar />
  <section class="mt-14 mb-12 flex justify-center">
    <div class="container md:w-[85%]">
      <header class="text-center max-w-[600px] mx-auto">
        <h1 class="text-3xl font-bold text-primary mt-5">
          My Cart (<span class="text-[#f9333b]">{{ cart.length }} items </span>)
        </h1>
      </header>
      <div class="mt-20">
        <div class="flex flex-wrap lg:flex-nowrap lg:gap-8">
          <div class="w-full lg:w-3/4">
            <div class="flex flex-col">
              <div
                class="bg-[#0103ba1f] flex items-center gap-1 px-3 py-3 text-xs font-semibold border-b md:gap-2 lg:gap-4 primary-gray-text border-primary-color"
              >
                <div class="md:w-9/12 sm:w-5/12"><span>Product</span></div>
                <div class="items-center justify-center hidden w-2/12 sm:flex">
                  <span>Price</span>
                </div>
                <div
                  class="flex md:items-center md:justify-end md:w-3/12 sm:w-2/12 sm:justify-center"
                >
                  <span>Quantity</span>
                </div>
                <div class="items-center justify-center hidden w-2/12 sm:flex">
                  <span>SubTotal</span>
                </div>
                <div class="hidden w-1/12 sm:block"><div></div></div>
              </div>

              <div v-for="(item, index) in cart" :key="index">
                <div
                  class="flex items-center justify-between gap-1 py-3 border-b md:gap-2 lg:gap-4 border-primary-color sm:py-4 lg:py-5"
                >
                  <div class="relative w-2/12 sm:w-1/12">
                    <a href="/cart"><img :src="item.book.img" loading="lazy"/></a>
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
                      ><span class="text-sm">{{ item.book.title }}</span></a
                    >
                    <a href="/products/warrior-blend-organic" class=""></a>
                    <!---->
                  </div>
                  <div
                    class="items-center justify-center hidden w-2/12 sm:flex"
                  >
                    <span class="text-sm font-medium text-primary">{{
                      item.book.price
                    }}</span>
                  </div>
                  <div
                    class="flex items-center justify-end w-3/12 sm:w-2/12 sm:justify-center"
                  >
                    <div class="flex items-center bg-white">
                      <button
                        aria-label="plus button"
                        class="flex items-center justify-center text-black bg-secondary-hover hover:text-[#f9333b] w-6 h-6 md:w-8 md:h-8 rounded-full primary-gray-bg"
                        @click="decrease(index)"
                      >
                        <svg
                          aria-label="plus icon"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-3 md:w-3.5 h-3 md:h-3.5"
                        >
                          <path
                            fill="currentColor"
                            fill-rule="evenodd"
                            d="M18 10a1 1 0 01-1 1H3a1 1 0 110-2h14a1 1 0 011 1z"
                          ></path>
                        </svg>
                      </button>
                      <div
                        class="flex items-center justify-center h-6 md:h-8 w-max px-1"
                      >
                        <label class="relative">
                          <input
                            min="1"
                            :value="item.Q"
                            type="number"
                            class="w-20 h-full text-sm text-center bg-opacity-0 outline-none py-3 px-3 border border-[#e0e0f7]"
                        /></label>
                        <!---->
                      </div>
                      <button
                        aria-label="plus button"
                        @click="increase(index)"
                        class="flex items-center justify-center text-black bg-secondary-hover hover:text-[#f9333b] w-6 h-6 md:w-8 md:h-8 rounded-full primary-gray-bg"
                      >
                        <svg
                          aria-label="minus icon"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-3 md:w-3.5 h-3 md:h-3.5"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M12 4C12.5523 4 13 4.44772 13 5V11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H13V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19V13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H11V5C11 4.44772 11.4477 4 12 4Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div
                    class="items-center justify-center hidden w-2/12 sm:flex"
                  >
                    <h2 class="text-sm font-medium">
                      {{ item.book.price * item.Q }}
                    </h2>
                  </div>
                  <div class="items-center justify-end hidden w-1/12 sm:flex">
                    <div
                      class="p-1 rounded-full cursor-pointer bg-primary-hover hover:text-white hover:bg-[#f9333b]"
                      @click="removeFromCart(index)"
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
                <button class="text-xs font-medium" @click="removeAllFromCart">
                  Remove All
                </button>
              </div>
            </div>
          </div>
          <div
            class="flex flex-col w-full p-5 mt-8 border rounded-lg lg:w-1/3 border-primary-color lg:mt-0"
          >
            <div class="border-b border-primary-color pb-3.5">
              <h2 class="text-base font-semibold uppercase dosis-font">
                CART TOTAL
              </h2>
            </div>
            <div
              class="flex items-center justify-between py-3 mb-3 border-b border-primary-color"
            >
              <h2 class="font-semibold text-xsl">Total</h2>
              <h2 class="text-xl font-semibold">{{ subTotal }} MAD</h2>
            </div>
            <div class="flex flex-col gap-5">
              <router-link to="/checkout2"
                ><div
                  class="flex items-center justify-center h-12 rounded-md cursor-pointer bg-primary hover:opacity-90 click-effect"
                >
                  <span class="text-sm font-medium text-white"
                    >Place Order</span
                  >
                </div></router-link
              >
            </div>
          </div>
        </div>
        <div class="mt-16">
          <!---->
        </div>
      </div>
    </div>
  </section>
  <Footer />
</template>

<script setup>
import NavBar from "@/components/book/NavBar.vue";
import Footer from "@/components/book/Footer.vue";
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();
const cart = computed(() => store.getters["getCart"]);
let subTotal = computed(() => {
  return cart.value.reduce((total, item) => {
    return total + item.book.price * item.Q;
  }, 0);
});

const decrease = async (index) => {
  if (cart.value[index].Q > 1) {
    const quantity = cart.value[index].Q - 1;
    await store.dispatch("updateCartItemQuantity", { index, quantity });
  } else return;
};

const increase = async (index) => {
  const quantity = cart.value[index].Q + 1;
  await store.dispatch("updateCartItemQuantity", { index, quantity });
};

const removeFromCart = (index) => {
  store.dispatch("removeFromCart", index);
  notify('product is deleted from your cart !')
};
const removeAllFromCart = () => {
  store.dispatch("removeAllFromCart");
  notify('your cart is empty now !')
};

const notify=(message)=>{
  toast(message, {autoClose: 3000,position: toast.POSITION.TOP_CENTER,toastStyle:{color:'#743820'}});
}
</script>

<style scoped>
input {
  -moz-appearance: textfield;
}
</style>
