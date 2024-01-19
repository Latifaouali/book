<template>
  <NavBar />
  <section class="mt-[5%] py-8 px-8">
    <div class="container mb-10">
      <div class="flex lg:gap-10">
        <!--Left side-->
        <div class="lg:w-1/4">
          <div
            class="fixed inset-0 z-50 hidden w-full h-full overflow-y-auto bg-white lg:block lg:static lg:w-auto lg:h-auto lg:inset-auto lg:z-auto scroll-y hide"
            style=""
          >
            <div class="flex flex-col w-full p-5 lg:p-0">
              <div class="flex flex-col lg:gap-10" style="">
                <div
                  class="border-b py-7 lg:py-0 lg:border-0 border-primary-color"
                  style=""
                >
                  <div class="flex mb-5">
                    <h2
                      class="font-semibold tracking-normal uppercase text-sml dosis-font"
                    >
                      Collections
                    </h2>
                  </div>
                  <div class="flex flex-col gap-3">
                    <div v-for="collection in collections" :key="collection.id">
                      <div
                        class="flex items-center justify-between w-full cursor-pointer"
                      >
                        <div
                          class="flex flex-between w-full gap-4 cursor-pointer collec-hover"
                        >
                          <input
                            type="checkbox"
                            class="form-checkbox"
                            :id="collection.id"
                            :checked="
                              selectedCollections.includes(collection.name)
                            "
                            @change="handleCheckboxChange(collection.name)"
                          />
                          <label
                            :for="collection.name"
                            class="capitalize cursor-pointer text-xsl primary-gray-text"
                            >{{ collection.name }}</label
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!---->
                <!---->
                <!---->
                <div class="py-7 lg:py-0">
                  <img
                    src="/book/prouctsBanner.png"
                    alt="Widget Banner"
                    loading="lazy"
                    id="_8063"
                    class="object-cover w-full h-full rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--end Left side-->

        <!--Right side-->
        <div class="w-full lg:w-3/4">
          <!--TOP FIGURE-->
          <div class="relative h-40 mb-5 overflow-hidden rounded-lg lg:h-60">
            <img
              src="/book/TopProducts.png"
              alt="Delivered to your Home"
              loading="lazy"
              id="_5691"
              class="object-cover w-full h-full"
            />
          </div>
          <!--END TOP FIGURE-->
          <div
            class="flex items-center mb-5 rounded-lg product-bg h-14 px-7 flex-col md:hidden"
          >
            <button
              @click="showColl = !showColl"
              class="items-center rounded-md cursor-pointer w-full px-4 py-4 text-white h-11 bg-primary hover:opacity-90 flex justify-between"
            >
              Collections <i class="bi bi-caret-down-fill"></i>
            </button>
            <div v-if="showColl" class="bg-white p-10 text-left z-10">
              <div v-for="collection in collections" :key="collection.id">
                <div
                  class="flex items-center justify-between w-full cursor-pointer"
                >
                  <div
                    class="flex flex-between w-full gap-4 cursor-pointer collec-hover"
                  >
                    <input
                      type="checkbox"
                      class="form-checkbox"
                      :id="collection.id"
                      :checked="selectedCollections.includes(collection.name)"
                      @change="handleCheckboxChange(collection.name)"
                    />
                    <label
                      :for="collection.name"
                      class="capitalize cursor-pointer text-xsl primary-gray-text"
                      >{{ collection.name }}</label
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="flex items-center justify-center mt-10"
            style="display: none"
          ></div>
          <Suspense>
            <AllBooks :selectedCollections="selectedCollections"/>
    <template #fallback>
      <div class="flex items-center justify-center">
        <svg
          class="w-[100px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
        >
          <radialGradient
            id="a10"
            cx=".66"
            fx=".66"
            cy=".3125"
            fy=".3125"
            gradientTransform="scale(1.5)"
          >
            <stop offset="0" stop-color="#743820"></stop>
            <stop offset=".3" stop-color="#743820" stop-opacity=".9"></stop>
            <stop offset=".6" stop-color="#743820" stop-opacity=".6"></stop>
            <stop offset=".8" stop-color="#743820" stop-opacity=".3"></stop>
            <stop offset="1" stop-color="#743820" stop-opacity="0"></stop>
          </radialGradient>
          <circle
            transform-origin="center"
            fill="none"
            stroke="url(#a10)"
            stroke-width="15"
            stroke-linecap="round"
            stroke-dasharray="200 1000"
            stroke-dashoffset="0"
            cx="100"
            cy="100"
            r="70"
          >
            <animateTransform
              type="rotate"
              attributeName="transform"
              calcMode="spline"
              dur="2"
              values="360;0"
              keyTimes="0;1"
              keySplines="0 0 1 1"
              repeatCount="indefinite"
            ></animateTransform>
          </circle>
          <circle
            transform-origin="center"
            fill="none"
            opacity=".2"
            stroke="#743820"
            stroke-width="15"
            stroke-linecap="round"
            cx="100"
            cy="100"
            r="70"
          ></circle>
        </svg>
      </div>
    </template>
  </Suspense>
          
        </div>
        <!--end Right side-->
      </div>
    </div>
  </section>
  <Footer />
</template>
<script setup>
import NavBar from "@/components/book/NavBar.vue";
import Footer from "@/components/book/Footer.vue";
import { computed, ref,defineAsyncComponent } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
const AllBooks = defineAsyncComponent({
  loader: () => import("@/components/AllBooks.vue"),
  suspensible: true,
});
const router = useRouter();
const store = useStore();
const selectedCollections = ref([]);
const collections = computed(() => store.getters["getCollection"]);
const showColl = ref("false");

const handleCheckboxChange = (collectionName) => {
  if (selectedCollections.value.includes(collectionName)) {
    selectedCollections.value = selectedCollections.value.filter(
      (name) => name !== collectionName
    );
  } else {
    selectedCollections.value.push(collectionName);
  }

  updateRoute();
};

const updateRoute = () => {
  router.push({
    name: "product",
    query: {
      collection: selectedCollections.value.join(","),
      search: "",
    },
  });
};

</script>

<style>
#componentContainer {
  visibility: hidden;
}
.icon {
  fill: currentColor;
}
</style>
