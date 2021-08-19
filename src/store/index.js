// import Vue from 'vue';
import Vuex from 'vuex';
import Recipes from './modules/recipes';

// Vue.use(Vuex)

const store = Vuex.createStore({
  // state: {
  //   recipes 
  // },
//   mutations: {

//   },
//   actions: {

//   },
  modules: {
    recipes: Recipes
  }
})

export default store;