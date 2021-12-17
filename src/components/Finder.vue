<template>
    <div id="finder" class="container h-screen flex flex-col md:mx-auto md:items-center md:justify-center">
        <div class="bg-white rounded-lg shadow-lg flex flex-col p-8 my-auto md:w-full md:max-w-xl">
            <div class="font-primary-bold text-4xl text-left">
                Let’s get <br class="md:hidden" />
                some recipes
            </div>
            <div class="bg-gray-100 mt-6 p-3 w-full rounded-md shadow-inner">
                <input
                    type="text"
                    class="font-primary-light bg-transparent py-2 outline-none w-full"
                    v-model="query"
                    name="query"
                    placeholder="Type in something like pasta"
                />
            </div>
            <div class="flex flex-col my-4 mx-1 ">
                <div class="flex flex-row justify-between my-4 font-primary-light">
                    <div class="text-base md:text-xl">
                        Does it has to be <span class="font-primary-bold underline">Gluten Free</span>?
                    </div>
                    <input type="checkbox" class="h-4 w-4 rounded " name="gluten_free" v-model="glutenFree" />
                </div>
                <div class="flex flex-row justify-between my-4 font-primary-light">
                    <div class="text-base md:text-xl">
                        Should it be <span class="font-primary-bold underline">vegan</span> also?
                    </div>
                    <input type="checkbox" class="h-4 w-4 rounded " name="vegan" v-model="vegan" />
                </div>
                <div class="flex flex-row justify-between my-4 font-primary-light">
                    <div class="text-base md:text-xl">
                        Are you in a <span class="font-primary-bold underline">rush</span>?
                    </div>
                    <input type="checkbox" class="h-4 w-4 rounded " value="true" v-model="inAHurry" />
                </div>
            </div>
            <div class="flex flex-col">
                <div @click="getRecipes" class="font-primary-regular get-button text-base md:text-xl">
                    Find recipes
                </div>
                <div
                    @click="getRandomRecipes"
                    class="font-primary-regular flex flex-col items-center justify-center w-full h-auto underline text-gray-400 text-base md:text-xl my-2 cursor-pointer"
                >
                    Just get me some random recipes
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from '@vue/reactivity';

export default {
    setup() {
        const store = useStore();

        const query = computed({
            get: () => store.getters['recipes/query'],
            set: value => store.commit('recipes/setQuery', value),
        });

        const glutenFree = computed({
            get: () => store.getters['recipes/glutenFree'],
            set: value => store.commit('recipes/setGlutenFree', value),
        });

        const vegan = computed({
            get: () => store.getters['recipes/vegan'],
            set: value => store.commit('recipes/setVegan', value),
        });

        const inAHurry = computed({
            get: () => store.getters['recipes/inAHurry'],
            set: () => store.commit('recipes/setInAHurry', !store.getters['recipes/inAHurry']),
        });

        const getRecipes = () => {
            store
                .dispatch('recipes/getRecipes')
                .then(() => {
                    if (store.getters['recipes/recipes'].length) {
                        console.log(store.getters['recipes/recipes']);
                        document.querySelector('#recipes-list').scrollIntoView({ behavior: 'smooth' });
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        };

        const getRandomRecipes = () => {
            store
                .dispatch('recipes/getRecipesPlanB')
                .then(() => {
                    if (store.getters['recipes/recipes'].length) {
                        console.log(store.getters['recipes/recipes']);
                        document.querySelector('#recipes-list').scrollIntoView({ behavior: 'smooth' });
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        };
        return {
            query,
            glutenFree,
            vegan,
            inAHurry,
            getRecipes,
            getRandomRecipes,
        };
    },
};
</script>
