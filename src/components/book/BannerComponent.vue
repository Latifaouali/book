<template>
    <section class="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
      <div class="container">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center font-display">
          <figure>
            <img
              src="/book/slide3.png"
              loading="lazy"
              alt=""
              class="max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
            />
          </figure>
          <article class="flex flex-col justify-center gap-6 sm:pt-0">
            <h1  class="text-3xl sm:text-4xl font-bold text-secondary">
              Why Choose US
            </h1>
            <p
              
              class="text-sm text-text tracking-wide leading-5"
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
              reiciendis inventore iste ratione ex alias quis magni at optio
            </p>
            <div class="flex flex-col gap-4" v-for="item in Data" :key="item.id">
              <div  class="flex items-center gap-4">
                <i 
                class="text-white font-bold h-12 w-12 shadow-sm py-3 px-4  rounded-full"
                :class="`${item.color}  ${item.icon}`"
                ></i>
                <p>{{ item.title }}</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
</template>
<script setup>
import {ref} from 'vue';
 const Data=ref([
    {
        id:1,
        title:'Quality Products',
        icon :'bi bi-lock',
        color: 'bg-violet-400'
    },
    {
        id:2,
        title:'Fast Delivery',
        icon :' bi bi-truck',
        color: 'bg-orange-400'
    },
    {
        id:3,
        title:'Easy Payment method',
        icon :'bi bi-wallet',
        color: 'bg-green-400'
    },
    {
        id:4,
        title:'Get Offers',
        icon :'bi bi-wallet',
        color: 'bg-yellow-400'
    }
 ])
</script>
