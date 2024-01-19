import { createApp } from 'vue'
import './assets/style.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import VueAwesomePaginate from "vue-awesome-paginate";
import "vue-awesome-paginate/dist/style.css";

import App from './App.vue'
import router from '@/router/index'
import store from '@/store/index'
createApp(App).use(router).use(store).use(VueAwesomePaginate).mount('#app')
