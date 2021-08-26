import { createApp } from 'vue'
import App from './App.vue'
import store from "./store"
import VueSmoothScroll from 'vue3-smooth-scroll'
import './index.css'
// import VueAxios from 'vue-axios'
// import axios from 'axios'

// Vue.use(VueAxios, axios)

const app = createApp(App)
app.use(store)
app.use(VueSmoothScroll,{
	updateHistory: false
})
app.mount('#app')