import Vuex from 'vuex';
import Recipes from './modules/recipes';

const store = Vuex.createStore({
  modules: {
    recipes: Recipes
  }
})

export default store;