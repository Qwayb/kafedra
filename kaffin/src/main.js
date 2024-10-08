import './assets/main.css'

import { createApp } from 'vue'

import {createRouter, createWebHistory} from "vue-router";
import Catalog from "./pages/catalog.vue";
import Logging from "./pages/loging.vue";
import App from "./App.vue";

const app = createApp(App);

const routes = [
    {path: '/', component: Catalog},
    {path: '/logging', component: Logging},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

app.use(router)

createApp(App).mount('#app')

