import { createApp } from 'vue'
import App from './App.vue'
import store from "./store"
import VueSmoothScroll from 'vue3-smooth-scroll'
import './index.css'

const app = createApp(App)
app.use(store)
app.use(VueSmoothScroll,{
	updateHistory: false
})
app.mount('#app')