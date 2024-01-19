<template>
    <NavBar />

    <div class="main font-display">
    <div class="pt-5 ">
      <div class=" text-center  mt-20">
        <h2 class="text-3xl">Error : 404</h2>
        <h3 class="text-3xl mt-20 text-primary">Opps! Page Not Found</h3>
      </div>
    </div>
  </div>
    <Footer />
</template>
<script setup>
import NavBar from "@/components/book/NavBar.vue";
import Footer from "@/components/book/Footer.vue";
</script>
<style>
.not-found {
  height: 80vh;
}
</style>
