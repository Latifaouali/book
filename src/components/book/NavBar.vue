<template>
  <header class="shadow-md header-bg lg:shadow-none header-text-color font-display">
    <!-- upper nav -->
    <nav class="h-8 md:flex bg-primary items-center hidden  text-white px-4">
      <section class="container">
        <article class="grid md:grid-cols-3 items-center gap-4">
          <!-- Language Dropdown -->
          <div class="flex relative">
            <div
              class="hs-dropdown relative inline-flex"
            >
              <figure
                class="hs-dropdown-toggle after:absolute hover:after:-bottom-10 after:inset-0 relative flex items-center text-base"
              >
                <img
                  alt="Image"
                  class="h-3.5 me-3"
                  src="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMpaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjAtYzA2MCA2MS4xMzQ3NzcsIDIwMTAvMDIvMTItMTc6MzI6MDAgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzUgV2luZG93cyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5NTM4RDUxQjYxM0IxMUU3ODM5NTg5Qjc3NkUwNEZFMSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5NTM4RDUxQzYxM0IxMUU3ODM5NTg5Qjc3NkUwNEZFMSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjk1MzhENTE5NjEzQjExRTc4Mzk1ODlCNzc2RTA0RkUxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjk1MzhENTFBNjEzQjExRTc4Mzk1ODlCNzc2RTA0RkUxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQABgQEBAUEBgUFBgkGBQYJCwgGBggLDAoKCwoKDBAMDAwMDAwQDA4PEA8ODBMTFBQTExwbGxscHx8fHx8fHx8fHwEHBwcNDA0YEBAYGhURFRofHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8f/8AAEQgAKgBAAwERAAIRAQMRAf/EAJkAAQABBQEAAAAAAAAAAAAAAAAHAgMEBQYBAQEAAgMBAQAAAAAAAAAAAAAAAgYBBAUDBxAAAAQBBwkHBAMBAAAAAAAAAQIDBAAREhMFBhYHMaHRkpPTFVVWIUGRIjIzFFFhQtKCIyVFEQAAAgMQAgIBBQAAAAAAAAAAAfACAxEhMVGBoRJSghNTBBRUBRVBcZHRMmHhIkJD/9oADAMBAAIRAxEAPwDlhqtFarm7o4qNFlE3Cx3LoRonRkzgAJthKQRE/b2zhyxa6ThuQwQePY1hmjZ9nxYyXx3cwFDJ8G/6QACFJSiFHMmTs0RvDo+PfiEHBjN6jaGamEywqz/iDxFKcLVr8gRA5HUpJwGCT8YkbQ3fl7yfoBubIVNU94KpSrBVdk0cJuqesREKBaiE4EM3ESAM3ygAy98c7lHFmC1I3nvZDp8O2as8wqbJWku+9G8JNuvhv1Ep4l/SKpdMqwufZcjgFP8AYXXw36iU8S/pC6ZVg7LkcAp/sLr4b9RKeJf0hdMqwdlyOAU/2PS2Zw5KYDFtGoBgGUBASgICH8IXTKsMHyPIn/gSSiHmhQQqZFU4fFBw1dkKu7AF0nAgoUJjYkwaFQMk+XL3hF6WfWjfKDx7jHzobIW3+gNX/GXpQcnPwmcXiRQ+JLSfMo5BT75mbvjzdedd8Q/1hiAWG5iHTSdgoRQjYtXFO/RSAjVsM4fK8b0f95gk9XfJ3xI4o6T3k/R+AGdZo9UNLRVO8rZis4q5Ur0xjJmCgX8yhSnbJf1URSmylljR5JZUmC1J8v4vefEI6fDs2y+YVJidFd9w5PRiR7w4V8iceAb6KreMaqfIueg5TGVSyF4cK+ROPAN9C8Y1U+Q0HKYyqWQvDhXyJx4BvoXjGqnyGg5TGVSyF4cK+ROPAN9C8Y1U+Q0HKYyqWRGhLF2+aNSt2lnHiLgyazd8vNFUqyahgEAKUQEpJACScUe2LrqGRm6axfoPndAxfGylsxcCldR7walFctXeeeCgpUc75E2ky+aTJEb9m5+ZUo/2CgcQoTsviKBSrK2eeKVi2BuWr3YJzQRK2ERApkwLMVl7O02eMm3Y1icfdlCgsNvZCobb1XaJhWwWXcA6blcC7UVA1GsdedIYCSABJANJIWNPkMwrcmSp0jecIb3HZdRdsRNFqCj7piSr0W96YLqH0xXL1pVFk63I7icgvRb3pguofTC9aVQ63I7icgvRb3pguofTC9aVQ63I7icgvRb3pguofTC9aVQ63I7ichXwTFnnTXNuIUG0ZJII6zisJdLYcExZ501zbiFBtGSSBrOKwl0thwTFnnTXNuIUG0ZJIGs4rCXS2HBMWedNc24hQbRkkgazisJdLYcExZ501zbiFBtGSSBrOKwl0thwTFnnTXNuIUG0ZJIGs4rCXS2HBMWedNc24hQbRkkgazisJdLYcExZ501zbiFBtGSSBrOKwl0tjT3Xsd1aO0JpjzulKw6HZZzbTGF17HdWjtCaYXSlYOyzm2mMLr2O6tHaE0wulKwdlnNtMYXXsd1aO0JphdKVg7LObaYwuvY7q0doTTC6UrB2Wc20xhdex3Vo7QmmF0pWDss5tpjC69jurR2hNMLpSsHZZzbTGF17HdWjtCaYXSlYOyzm2mMcE499T2/Ub2/Rl/H7fSNMxaVPxKGWEW9WMCQasADVgAasADVgAasAFxv76ft+ovuejL+X2+sZIRX/ABOGSEf/2Q=="
                />
                <span class="font-medium text-xs text-white">English (USA)</span>
              </figure>
            </div>
          </div>
          <!-- Offer Link -->
          <h5 class="text-sm text-primary-50 text-center text-white">
            100% Secure delivery without contacting the courier
          </h5>

          <div class="flex items-center justify-end gap-4">
            <p class="text-sm text-white">Need help? Call Us: +212600000000</p>
          </div>
        </article>
      </section>
    </nav>
    <!-- end upper nav -->

    <!--middle nav-->
    <nav
      class="container flex items-center justify-between gap-8 h-14 md:h-16 px-4 mt-4 md:mb-6"
    >
      <div class="flex items-center w-1/3 md:w-auto lg:hidden">
        <div class="md:hidden">
          <button
            @click="isOpen = !isOpen"
            type="button"
            class="block text-secondary focus:outline-none"
          >
            <span v-if="isOpen" class="bi bi-x text-5xl"></span>
            <span v-if="!isOpen" class="bi bi-list text-5xl"></span>
          </button>
        </div>
      </div>
      <div class="flex justify-center w-1/3 md:w-1/4 md:justify-start">
        <!--LOGO-->
        <div class="flex flex-col items-start logo">
          <figure>
            <img
              src="/book/mybook.png"
              alt="Store Desktop Logo"
              loading="lazy"
              class="object-contain h-[100%!important] md:h-12 mt-2"
            />
          </figure>
        </div>
        <!--END LOGO-->
      </div>
      <div class="flex items-center justify-end w-1/3 md:w-3/4 gap-8 ">
        <form
            @submit.prevent="search"
          class="items-center justify-between hidden w-full px-4 rounded-lg bg-[#feebe5] text-primary md:flex border border-[#ffebe5]"
        >
          <input
            placeholder="Search for Books/author"
            v-model="searchQuery"
  
            class="w-full text-sm font-light bg-[#feebe5] h-14 focus:outline-none"
          />
          <button type="submit" aria-label="Search button">
            <svg
              aria-label="search icon"
              width="24"
              height="24"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.17 16.48L12 11.36a5.5 5.5 0 10-4.22 2 5.41 5.41 0 003.51-1.27l5.14 5.13a.51.51 0 00.7 0 .5.5 0 00.04-.74zm-9.35-4.15a4.5 4.5 0 110-9 4.5 4.5 0 010 9z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
        </form>
        
        <div class="flex items-center gap-2 md:gap-4">
          <!--Whislist-->
          <div class="group relative">
            <div
              class="flex items-center justify-center w-10 h-10 border rounded-full border-[#feebe5]"
            >
              <router-link :to="{name:'wishlist'}" title="Wishlist" class=""
                ><svg
                  aria-label="wishlist icon"
                  width="24"
                  height="24"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.48 3.91a3.25 3.25 0 012.68 1.62L10 6.85l.83-1.33a3.12 3.12 0 012.63-1.61 2.8 2.8 0 012.08.93c1.48 1.59 1.33 3.78-.37 5.57L10 15.66l-5.22-5.3c-1.67-1.85-1.8-4-.36-5.53a2.8 2.8 0 012.06-.92zm0-1a3.8 3.8 0 00-2.79 1.24C1.94 6 2 8.73 4 11l6 6.06 5.9-6c2.16-2.27 2.15-5.06.4-6.95a3.871 3.871 0 00-2.82-1.25A4.1 4.1 0 0010 5a4.23 4.23 0 00-3.52-2.09z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span
                  class="absolute top-0 flex items-center justify-center w-4 h-4 pb-1 text-xs -right-1 primary-gray-bg cart-text-bg text-white rounded-full "
                >
                  {{wishlist.length}}
                </span></router-link
              >
            </div>        
          </div>
          <!--End Whislist-->

          <!--Cart-->
          <div class="group relative">
            <div class="py-1.5 md:py-2.5">
              <router-link :to="{name:'cart'}" 
                title="Cart"
                id="cart-icon"
                class="flex items-center justify-center w-10 h-10 border rounded-full border-[#feebe5]"
                ><svg
                  aria-label="cart icon"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class=" h-7 w-7 md:h-6 md:w-6 "
                >
                  <path
                    d="M16.63 17.47l-.6-11a.51.51 0 00-.5-.47h-2v-.43a3.5 3.5 0 00-7 0V6h-2a.51.51 0 00-.5.47l-.62 11a.49.49 0 00.49.53h12.3a.49.49 0 00.43-.53zm-12.31-.42L4.9 7h10.2l.56 10.1-11.34-.05zM7.5 5.57a2.5 2.5 0 115 0V6h-5v-.43z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span
                  class="absolute top-2 right-0.5 md:-right-1 h-4 w-4 pb-1 text-xs flex items-center justify-center cart-text-bg text-white rounded-full "
                >
                  {{ cart.length }}
                </span></router-link>
            </div>
            <div
              class="hidden group-hover:block absolute right-0 top-10  max-w-xs  w-80 bg-white border border-gray-200 rounded-md shadow-md z-20"
            >
              <div class="flex flex-col p-4">
                <!---->
                <div>
                  <div class="flex flex-col cart-items" >
                    <div class="flex flex-col" v-for="(item,index) in cart" :key="index">
                    <div class="cart-item">
                      
                      <div
                        class="flex items-center gap-2 py-3 border-b item border-primary-color"
                      >
                        <div class="relative flex-none rounded-md">
                          <a
                            href="/products/all-natural-italian-style-chicken-meatballs"
                            class=""
                            title="All Natural Italian-Style Chicken Meatballs"
                            aria-label="All Natural Italian-Style Chicken Meatballs"
                            ><img
                              :src="item.book.img"
                              alt="All Natural Italian-Style Chicken Meatballs"
                              loading="lazy"
                              id="_7228"
                              class="object-cover rounded-md w-14 h-14"
                          /></a>
                          <div
                            class="absolute top-0 left-0 p-1 text-white bg-[#f9333b] rounded-full cursor-pointer icon-position bg-primary-hover"
                            @click="removeFromCart(index)"
                          >
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 1024 1024"
                              aria-label="remove icon"
                              xmlns="http://www.w3.org/2000/svg"
                              class="w-2.5 h-2.5"
                            >
                              <path
                                fill="currentColor"
                                d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"
                              ></path>
                            </svg>
                          </div>
                        </div>
                        <div class="flex flex-col gap-2">
                          <div class="text-sm font-medium">
                            <a
                              href="/products/all-natural-italian-style-chicken-meatballs"
                              class=""
                              ><span
                                >{{item.book.title}}</span
                              ></a
                            >
                          </div>
                          <div class="flex items-center gap-1 text-sm">
                            <span>{{item.Q}}</span>
                            <span> x </span>
                            <span class="text-primary">{{item.book.price}}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                  <div class="flex flex-col gap-4 mt-6">
                    <div class="flex items-center justify-between">
                      <h2 class="font-semibold text-xsl">Subtotal</h2>
                      <h2 class="text-lg font-semibold dosis-font text-primary">
                        {{ subTotal }}MAD
                      </h2>
                    </div>
                    <router-link :to="{name:'cart'}" 
                      ><div
                        class="flex items-center justify-center border rounded-md cursor-pointer h-11 bg-primary-border hover:opacity-90 click-effect"
                      >
                        <span class="font-medium text-xsl text-primary"
                          >View Cart</span
                        >
                      </div></router-link>
                    <router-link to="/checkout2"
                      ><div
                        class="flex items-center justify-center rounded-md cursor-pointer h-11 bg-primary hover:opacity-90 click-effect"
                      >
                        <span class="font-medium text-white text-xsl"
                          >Place Order</span
                        >
                      </div></router-link
                    >
                  </div>
                </div>
                <!---->
                <div
                  class="pt-4 mt-6 text-center border-t border-primary-color"
                >
                  <span class="text-xs"
                    >We reduce shipping prices to only 2.49 €!</span
                  >
                </div>
              </div>
            </div>
          </div>
          <!--End Cart-->
        </div>
      </div>
    </nav>
    <!--end middle nav-->

    <!-- lower nav -->
    <nav
      :class="isOpen ? 'block' : 'hidden'"
      class="md:justify-center px-2 pt-2 pb-4 sm:flex sm:p-0 md:flex md:border-t-2 md:border-b-2 md:border-[#ffebe5] md:p-[10px]"
    >
      <ul class="flex flex-col md:flex-row md:space-x-20 mt-0 p-4 md:p-0">
        <li class="md:hidden">
          <form
          @submit.prevent="search"
            class="items-center justify-between w-full px-4 rounded-lg bg-[#f3f4f7] text-text flex"
          >
            <input
              placeholder="Search for Books"
              v-model="searchQuery"
              class="w-full text-sm font-light bg-[#f3f4f7] h-14 focus:outline-none"
            />
            <button aria-label="Search button">
              <svg
                aria-label="search icon"
                width="24"
                height="24"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.17 16.48L12 11.36a5.5 5.5 0 10-4.22 2 5.41 5.41 0 003.51-1.27l5.14 5.13a.51.51 0 00.7 0 .5.5 0 00.04-.74zm-9.35-4.15a4.5 4.5 0 110-9 4.5 4.5 0 010 9z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
          </form>
        </li>
        <li>
          <router-link
            :to="{ name: 'userHome' }"
            class="block px-4 py-2 duration-200 text-secondary hover:text-primary"
            active-class="active"
          >
            <span>
              Home
            </span>
          </router-link>
        </li>
        <li>
          <router-link
            :to="{ name: 'product',query:{ collection : '' , search : ''} }"
            class="block px-4 py-2 duration-200 text-secondary hover:text-primary"
            active-class="active"
          >
            <span>
              All Products
            </span>
          </router-link>
        </li>
        <li>
          <router-link
            to="/shop?collection=Children's Books&search="
            class="block px-4 py-2 duration-200 text-secondary hover:text-primary"
            active-class="active"
          >
            <span>
              children's Books
            </span>
          </router-link>
        </li>
        <li>
          <router-link
          to="/shop?collection=Fiction&search="
            class="block px-4 py-2 duration-200 text-secondary hover:text-primary"
            active-class="active"
          >
            <span>
              Fiction Books
            </span>
          </router-link>
        </li>
      </ul>
    </nav>
    <!--end lower nav -->
  </header>
</template>
<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
const store = useStore();
const router = useRouter();
const isOpen = ref(false);
const cart = computed(() => store.getters["getCart"]);
const wishlist = computed(() => store.getters["getWishlist"]);
const searchQuery = ref("");
let subTotal = computed(() => {
  return cart.value.reduce((total, item) => {
    return total + item.book.price * item.Q;
  }, 0);
});

const removeFromCart =(index)=>{
  store.dispatch('removeFromCart',index);
  toast("prouct is deleted from cart!", {autoClose: 3000,position: toast.POSITION.TOP_CENTER,toastStyle:{color:'#743820'}});
}

const search = async() => {
      await router.replace({
        name: "product",
        query: {
          collection: '',
          search: searchQuery.value,
        },
      });

};

</script>

<style scoped>
.active {
  color: "#0103ba !important";
}
.cart-text {
  color: #f9333b;
}
.cart-text-bg {
  background-color: #f9333b;
}
@media (min-width: 768px) {
  .cart-color {
    background-color: #fff1ee;
  }
}
.nav-bg {
  background-color: #f0faff;
}
.nav-bg-hover {
  -webkit-transition: all 0.2s cubic-bezier(0.28, 0.12, 0.22, 1);
  transition: all 0.2s cubic-bezier(0.28, 0.12, 0.22, 1);
}
.nav-bg-hover:hover {
  background-color: #f0faff;
}
</style>
