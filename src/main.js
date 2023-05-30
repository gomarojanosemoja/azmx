import 'mdb-vue-ui-kit/css/mdb.min.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router';
import store from './core/store/store'
//import { IconsPlugin, BootstrapVue} from 'bootstrap-vue'
import '@vueform/multiselect/themes/default.css';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

//import 'bootstrap/dist/js/bootstrap.bundle.min.js'

//import '@popperjs/core/dist/umd/popper.min.js'
//import 'bootstrap/dist/js/bootstrap.min.js'

import 'boxicons/css/boxicons.min.css'
import bottomNavigationVue from "bottom-navigation-vue";
import "bottom-navigation-vue/dist/style.css";

import axios from 'axios'
import VueAxios from 'vue-axios'

import Vue3Toastify from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

// Import component
import loading from 'vue3-loading-overlay';
// Import stylesheet
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';

import VueSidebarMenu from 'vue-sidebar-menu';
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css';

import { GDialog } from 'gitart-vue-dialog'
import 'gitart-vue-dialog/dist/style.css'





const app = createApp(App);
app.component('VueDatePicker', VueDatePicker);
//createApp.apply(IconsPlugin)
//createApp.apply(BootstrapVue)
app.use(bottomNavigationVue);
app.use(VueAxios, axios);
app.use(VueSidebarMenu);
app.component('GDialog', GDialog)

app.use(store);
app.use(loading);
app.use(Vue3Toastify, {
    autoClose: 3000,
  });





app.use(router).mount('#app')
