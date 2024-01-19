<template>
  <NavBar />
  <section class="flex justify-center font-display">
    <main v-if="Book"  class="container mx-auto w-[84%]">
      <!--Product details-->
      <div class="card_product_detail">
        <div class="md:flex">
          <div class="w-full md:w-1/2">
            <div>
              <img loading="lazy" class="md:w-[70%] sm:w-full" :src="Book.img" />
            </div>
          </div>
          <div class="flex flex-col w-full md:w-1/2">
            <div class="flex justify-between">
              <h1 class="font-bold text-2xl">{{ Book.title }}</h1>
            </div>
            <div class="flex justify-between mt-4 text-orange">
              <h5 class="font-bold text-[#f9333b] text-2xl">{{Book.price}} MAD</h5>
            </div>
            <h6 class="mt-10 text-lg font-bold">Description</h6>

            <p class="text-[#5d6374]">
              {{Book.description}}
            </p>
            <div class="flex justify-between mt-10">
              <h6 class="text-lg font-bold">
                Category: <span class="text-[#f9333b]">{{Book.category}}</span>
              </h6>
            </div>
            <div class="flex items-center gap-3 flex-wrap mt-10">
              <div class="flex justify-between">
                <button
                  type="button"
                  @click="decrease"
                  class="border border-primary rounded-[3px] font-medium px-[11px] py-3 mt-2 hover:text-white hover:bg-primary"
                >
                  -
                </button>
                <input
                  type="text"
                  :value="quantity"
                  class="px-[11px] py-3 border border-primary ml-2 text-primary mt-2 w-[60px] h-[49px] text-center"
                />
                <button
                  type="button"
                  @click="increase"
                  class="border border-primary rounded-[3px] font-medium px-[11px] py-3 ml-2 mt-2 hover:text-white hover:bg-primary"
                >
                  +
                </button>
              </div>
              <button
                @click="addToCart()"
                class="rounded-[3px] px-[11px] py-3 mt-2 border-2 font-medium border-primary text-white bg-primary hover:opacity-80"
              >
                <span class="bi bi-bag me-2"></span>
                Add to Cart
              </button>
              <button
              @click="addToWishlist"
                class="rounded-[3px] px-[11px] py-3 mt-2 border-2 font-medium text-[#f9333b] border-[#f9333b] hover:text-white hover:bg-[#f9333b]"
              >
                <i class="bi bi-heart"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <!--End Product details-->

      <!--Product reviews-->
      <div class="card_reviews px-0 py-0 mt-10 font-display">
        <div class="flex w-full border-b-2 border-b-[#eaeaea]">
          <h4 class="text-lg font-bold">Reviews</h4>
        </div>

        <div class="md:py-10 md:px-10 flex flex-col">
          <form @submit.prevent="addToRev">
          <h3 class="text-primary font-semibold text-center text-lg">
            Your opinion matters to us !
            <i
              class="color-primary text-2xl align-middle cursor-pointer hover:opacity-80 bi bi-caret-down-fill"
              @click="show = !show"
            ></i>
          </h3>
          <article class="flex flex-col" v-if="show">
            <div class="star-rating text-center mt-5">
              <label
                v-for="rating in ratings"
                :key="rating"
                class="star"
                @click="selectRating(rating)"
                
              >
                <i
                  class="bi bi-star-fill"
                  :class="{ selected: rating <= selectedRating }"
                ></i>
              </label>
            </div>
            <textarea
              cols="10"
              class="h-[100px] mt-5 border border-[#eaeaea] px-2 py-2"
              placeholder="add your comment"
              v-model="reviewData.comment"
            ></textarea>
            <div class="flex justify-center">
              <button
                class="mt-5 rounded-[3px] px-[11px] py-3 md:w-1/4 border-2 font-medium border-primary text-white bg-primary hover:opacity-80"
              >
                Add review
              </button>
            </div>
          </article>
        </form>
        </div>

        <div class="md:py-10 md:px-10 flex flex-col">
          <h3 class="text-primary font-semibold text-center text-lg">
            Check all reviews !
            <i
              class="color-primary text-2xl align-middle cursor-pointer hover:opacity-80 bi bi-caret-down-fill"
              @click="showRev = !showRev"
            ></i>
          </h3>
          <div v-for="rev in bookReviews" :key="rev.id"> 
          <blockquote
            v-if="showRev"
            class="max-w-[700px] flex flex-col justify-center gap-4 sm:pt-1 sm:text-left order-2 sm:order-1 relative z-10 bg-white px-5 py-10 rounded-[25px] border-b-2 border-[#ffebe5] w-full mt-10"
          >
            <div class="flex items-center gap-4 text-center">
              <img
                alt="Man"
                :src="rev.img"
                class="h-14 w-14 rounded-full object-cover"
              />
              <div class="flex flex-col">
                <p class="mt-0.5 text-lg font-medium text-gray-900">
                  {{ rev.name }}
                </p>
                <div style="color: #f1c40f">
                  {{ generateStarRating(rev.rating) }}
                </div>
              </div>
            </div>
            <div class=" max-w-full">
            <p class="mt-4 text-gray-700 text-left">
              {{ rev.comment }}
            </p>
            </div>
          </blockquote>
        </div>
        </div>
      </div>
      <!--End Product reviews-->
    </main>
  </section>
  <Footer />
</template>

<script setup>
import NavBar from "@/components/book/NavBar.vue";
import Footer from "@/components/book/Footer.vue";
import { ref,onBeforeMount,computed } from "vue";
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import { useRoute } from 'vue-router'
import { useStore } from "vuex";
const store=useStore();
const route = useRoute()
const id=ref();
let bookReviews=ref(null);
let Book=ref(null);
const show = ref(false);
const showRev = ref(false);
const selectedRating = ref(null);
const ratings = [1, 2, 3, 4, 5];
const quantity=ref(1);
const reviews=computed(()=>store.getters['getReviews']);
const notify=(message)=>{
  toast(message, {autoClose: 3000,position: toast.POSITION.TOP_CENTER,toastStyle:{color:'#743820'}});
}
const reviewData = ref({
  bookID:Number(route.params.id),
  img:'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
  name:'Paul Starr',
  rating: null,
  comment: "",
});
const decrease = () => {
  if (quantity.value > 1) {
    quantity.value--;
  }
};
const increase = () => {
  quantity.value++;
};
const addToCart = ()=>{
  const Q=quantity.value;
  const book=Book.value;
  store.dispatch('addToCart',{book,Q});
  notify('product is added to your cart')
}

const addToWishlist=()=>{
  store.dispatch('addToWishlist',Book.value);
  notify('product is added to your wishlist')
}

const addToRev = async () => {
    const item=reviewData.value;
    await  store.dispatch("addToRev",item );
    notify('your review is published now !')
     const numericId = Number(id.value);
  if (!isNaN(numericId)) {
    updateBookReviews(numericId);
  }
};

const updateBookReviews = async (numericId) => {
  bookReviews.value = reviews.value.filter((R) => R.bookID === numericId);
};


const selectRating = (rating) => {
  selectedRating.value = rating;
  reviewData.value.rating = selectedRating.value;
};

const generateStarRating = (rating) => {
  const fullStars = "★".repeat(rating);
  const emptyStars = "☆".repeat(5 - rating);
  return fullStars + emptyStars;
};

onBeforeMount(async () => {
  id.value = route.params.id;
  const numericId = Number(id.value);
  if (!isNaN(numericId)) {
    await store.dispatch('getBookByIdAc', numericId);
    Book.value=await store.getters['getBookById'];
    bookReviews.value=reviews.value.filter((R)=>R.bookID===numericId);
  }
});



</script>

<style scoped>
#main1 {
  margin-top: 60px;
  transition: all 0.3s;
  background: white;
  width: 84%;
  margin-left: 8%;
  border-radius: 10px;
}
.card_product_detail,
.card_reviews {
  margin-bottom: 30px;
  box-shadow: 0 0 30px rgba(1, 41, 112, 0.1);
  margin-top: 50px;
  padding: 3em;
  line-height: 1.5em;
  border: 1px solid #eaeaea;
}
.star-rating {
  display: inline-block;
  font-size: 0;
}
.star-rating .star {
  font-size: 1.5rem;
  margin: 0.1rem;
  cursor: pointer;
}
.star-rating .star .bi-star-fill {
  color: rgb(80, 78, 78); 
  transition: color 0.2s;
}

.star-rating .star .bi-star-fill.selected {
  color: #f1c40f; 
}
</style>
