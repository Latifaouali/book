<template>
    <NavBar />
  <div
    data-fetch-key="0"
    class=" flex justify-center w-full mt-8 transition-all delay-300 ck-page font-display"
  >
    <div class="max-w-7xl mx-auto py-4 w-[87%] ">
      <div data-fetch-key="1" class="min-h-screen">
        <div class="w-full flex flex-wrap">
          <div class="w-full md:w-1/2 lg:w-2/3 py-1">
            <form class="ck-form p-2 mx-1 rounded-lg h-full shadow-sm">
              <div class="w-full flex flex-wrap">
                <!---->
                <!---->
                <!---->
                <label class="flex flex-col p-2 w-full"
                  ><span class="ck-text"
                    >Full name <sup class="text-red-500 mx-1">*</sup></span
                  >
                  <input
                    type="text"
                    v-model="item.name"
                    placeholder="Full name"
                    value=""
                    class="w-full p-3 focus:border-primary rounded-lg border outline-none border-gray-300"
                  />
                  <!----></label
                >
                <label class="flex flex-col p-2 w-full sm:w-1/2"
                  ><div class="flex flex-col">
                    <span class="ck-text"
                      >Phone <sup class="text-red-500 mx-1">*</sup></span
                    >
                    <input
                      placeholder="Phone"
                      v-model="item.phone"
                      type="text"
                      value=""
                      class="w-full p-3 focus:border-primary rounded-lg border outline-none border-gray-300"
                    />
                    <!---->
                  </div></label
                ><label class="flex flex-col p-2 w-full sm:w-1/2"
                  ><div class="flex flex-col">
                    <span class="ck-text"
                      >Address line 1
                      <sup class="text-red-500 mx-1">*</sup></span
                    >
                    <input
                      placeholder="Address line 1"
                      v-model="item.address"
                      value=""
                      class="w-full p-3 focus:border-primary rounded-lg border outline-none border-gray-300"
                    />
                    <!---->
                  </div></label
                >
                <label class="flex flex-col p-2 w-full sm:w-1/2"
                  ><span class="ck-text"
                    >City <sup class="text-red-500 absolute mx-1">*</sup></span
                  >
                  <input
                    type="text"
                    v-model="item.city"
                    placeholder="City"
                    value=""
                    class="w-full p-3 focus:border-primary rounded-lg border outline-none border-gray-300"
                  />
                  <!----></label
                >
                <label class="flex flex-col p-2 w-full"><!----></label>
                <!---->
                <!---->
                <!---->
              </div>
              <!---->
              <!---->
            </form>
          </div>
          <div class="w-full md:w-1/2 lg:w-1/3 py-1" >
            <div class="mx-1 rounded-lg h-full">
              <div class="flex flex-col">
                <div class="w-full flex flex-col" style="">
                  <div  v-for="(item,index) in cart " :key="cart.id">
                    <div
                      class="flex w-full ck-form overflow-hidden rounded-lg shadow-sm mb-2"
                    >
                      <div class="w-1/4 flex items-center justify-center p-1">
                        <div
                          class="bg-gray-100 w-full h-full rounded-lg flex items-center justify-center relative"
                        >
                          <button
                            class="absolute top-0 left-0 p-1 leading-3 bg-white hover:bg-red-200 rounded"
                            @click="removeFromCart(index)"
                          >
                            ×
                          </button>
                          <div
                            to="/products/green-giant-veggie-spirals"
                            class="max-w-full w-16 m-auto flex"
                          >
                            <img
                              id="_2394"
                              :src="item.book.img"
                              alt="Green Giant Veggie Spirals"
                              loading="lazy"
                              class="rounded-md object-contain w-full"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="flex w-3/4 flex-col px-2">
                        <div
                          :to="`/productDetails/${item.book.id}`"
                          class="text-lg w-full font-semibold ck-text truncate"
                        >
                          {{ item.book.title }}
                        </div>
                        <div class="flex items-start w-full justify-between">
                          <div class="flex flex-col">
                            <!---->
                            <!---->
                            <div class="flex items-center font-bold ck-text">
                              <div dir="ltr" class="flex">
                                <span>{{ item.Q }}</span> <span>×</span>
                                <span>{{ item.book.price * item.Q }}</span>
                              </div>
                              <!---->
                            </div>
                          </div>
                          <div class="flex justify-center flex-col items-end">
                            <div
                              dir="ltr"
                              class="flex items-center justify-center"
                              data-v-01de5532=""
                            >
                              <button
                                class="bg-gray-50 border py-1 px-3 rounded-l-lg"
                                data-v-01de5532=""
                                @click="decrease(index)"
                              >
                                -
                              </button>
                              <div class="flex" data-v-01de5532="">
                                <label
                                  class="relative border py-1 h-full"
                                  data-v-01de5532=""
                                  ><span
                                    class="py-2 px-3 text-center"
                                    data-v-01de5532=""
                                    >1</span
                                  >
                                  <input
                                    min="1"
                                    type="number"
                                    :value="item.Q"
                                    class="px-1 appearance-none text-center absolute outline-none inset-0 bg-opacity-0 w-full h-full"
                                    data-v-01de5532=""
                                /></label>
                                <!---->
                              </div>
                              <button
                                class="border py-1 px-3 rounded-r-lg bg-primary text-color"
                                data-v-01de5532=""
                                @click="increase(index)"
                              >
                                +
                              </button>
                            </div>
                            <h2 class="text-lg font-bold ck-price">3.59 MAD</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex flex-col w-full rounded-lg ck-form shadow-sm">
                <!---->
                <div class="flex justify-between px-2 py-1 my-1">
                  <span class="ck-text">Subtotal</span>
                  <span class="ck-text">{{ subTotal }}</span>
                </div>
                <!---->
                <!---->
                <!---->
                <div class="flex justify-between px-2 py-1 my-1">
                  <span class="ck-text">Shipping</span>
                  <span class="ck-form">Free Shipping</span>
                </div>
                <div
                  class="flex justify-between px-2 py-1 my-1 text-xl font-bold"
                >
                  <span class="ck-text">Total amount</span>
                  <span class="text-red-600">{{ subTotal }}</span>
                </div>
                <!---->
                <!---->
                <button
                  class="click-effect text-color p-2 m-2 rounded-lg bg-primary"
                  @click="placeOrder"
                >
                  <div class="flex items-center w-full">
                    <svg
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      x="0px"
                      y="0px"
                      viewBox="0 0 405.272 405.272"
                      xml:space="preserve"
                      class="w-8 h-8"
                      style="enable-background: new 0 0 405.272 405.272"
                    >
                      <g>
                        <path
                          d="M393.401,124.425L179.603,338.208c-15.832,15.835-41.514,15.835-57.361,0L11.878,227.836   c-15.838-15.835-15.838-41.52,0-57.358c15.841-15.841,41.521-15.841,57.355-0.006l81.698,81.699L336.037,67.064   c15.841-15.841,41.523-15.829,57.358,0C409.23,82.902,409.23,108.578,393.401,124.425z"
                        ></path>
                      </g>
                    </svg>
                    <span class="mx-1"></span>
                    <span class="text-lg w-full">Place order</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <!---->
        <div
          class="fixed inset-0 bg-black bg-opacity-25 flex flex-col items-center"
          style="display: none"
        >
          <div class="p-2 bg-white rounded-md my-auto">
            <div
              data-sitekey="6LegpsoeAAAAAH61sw8-CoHkQqtrXikF34EDZdNk"
              class="g-recaptcha flex justify-center"
            >
              <div style="width: 304px; height: 78px">
                <div>
                  <iframe
                    title="reCAPTCHA"
                    width="304"
                    height="78"
                    role="presentation"
                    name="a-n4ia2hfoq5o5"
                    frameborder="0"
                    scrolling="no"
                    sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
                    src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LegpsoeAAAAAH61sw8-CoHkQqtrXikF34EDZdNk&amp;co=aHR0cHM6Ly9tYWhhbC10aGVtZS5zdG9yZWluby5jb206NDQz&amp;hl=fr&amp;v=Ya-Cd6PbRI5ktAHEhm9JuKEu&amp;size=normal&amp;cb=5j3e2gx2b6vr"
                  ></iframe>
                </div>
                <textarea
                  id="g-recaptcha-response"
                  name="g-recaptcha-response"
                  class="g-recaptcha-response"
                  style="
                    width: 250px;
                    height: 40px;
                    border: 1px solid rgb(193, 193, 193);
                    margin: 10px 25px;
                    padding: 0px;
                    resize: none;
                    display: none;
                  "
                ></textarea>
              </div>
              <iframe style="display: none"></iframe>
            </div>
            <button
              class="click-effect text-color w-full p-2 my-2 rounded-lg bg-primary"
            >
              <div class="flex items-center w-full">
                <svg
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 405.272 405.272"
                  xml:space="preserve"
                  class="w-8 h-8"
                  style="enable-background: new 0 0 405.272 405.272"
                >
                  <g>
                    <path
                      d="M393.401,124.425L179.603,338.208c-15.832,15.835-41.514,15.835-57.361,0L11.878,227.836   c-15.838-15.835-15.838-41.52,0-57.358c15.841-15.841,41.521-15.841,57.355-0.006l81.698,81.699L336.037,67.064   c15.841-15.841,41.523-15.829,57.358,0C409.23,82.902,409.23,108.578,393.401,124.425z"
                    ></path>
                  </g>
                </svg>
                <span class="mx-1"></span>
                <span class="text-lg w-full">Place order</span>
              </div>
            </button>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  </div>
<Footer/>
</template>
<script setup>
import NavBar from "@/components/book/NavBar.vue";
import Footer from "@/components/book/Footer.vue";
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import { computed,ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const cart = computed(() => store.getters["getCart"]);
let subTotal = computed(() => {
  return cart.value.reduce((total, item) => {
    return total + item.book.price * item.Q;
  }, 0);
});

const item=ref({
    name:'',
    phone:'',
    address:'',
    city:'',
    cart:cart.value,
    subTotal:subTotal.value
})
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

const placeOrder=()=>{
    store.dispatch('placeOrder',item.value);
    console.log(store.getters.getOrders);
    notify('your order is placed successfully !')
}
const removeFromCart = (index) => {
  store.dispatch("removeFromCart", index);
  notify('product is deleted from your cart !')
};
const notify=(message)=>{
  toast(message, {autoClose: 3000,position: toast.POSITION.TOP_CENTER,toastStyle:{color:'#743820'}});
}
</script>
<style scoped>
input {
  -moz-appearance: textfield;
}
.text-color {
  color: #fff;
}

.ck-page {
  background-color: undefined;
}
.ck-form {
  background-color: #ffffff;
}
.ck-form .ck-text {
  color: #444444;
}
.ck-form .ck-price {
  color: #ff3344;
}
</style>
