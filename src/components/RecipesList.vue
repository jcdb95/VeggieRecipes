<template>
    <div id="recipes-list" v-if="list.length" class="container recipe-container md:mx-auto md:max-w-5xl py-8">
        <div class="font-primary-bold text-2xl">
            {{ checkMessage }}
        </div>
        <div
            class="grid grid-cols-1 md:grid-cols-3 md:gap-12 gap-4 my-10 md:items-center md:justify-center select-none"
        >
            <div v-for="(item, index) in list" :key="index">
                <div
                    class="flex flex-col items-center bg-white shadow-md rounded-md md:rounded-lg md:transition-all md:duration-200 hover:shadow-xl"
                >
                    <div class="h-32 w-full ">
                        <img
                            v-if="item.image"
                            :src="item.image"
                            class="h-full w-full object-cover rounded-t-lg"
                            alt=""
                        />
                        <img
                            v-else
                            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.KrGAKEXgYL0tirUR-W0qbgHaE8%26pid%3DApi&f=1"
                            class="h-full w-full object-cover rounded-t-lg"
                            alt=""
                        />
                    </div>
                    <div class="flex flex-col justify-around p-3 w-full">
                        <div class="font-primary-bold text-lg md:text-xl text-left h-16">
                            {{ smallTitle(item.title) }}
                        </div>
                        <div class="font-primary-regular grid grid-rows-3 gap-2 md:gap-4 my-4">
                            <div class="text-left text-base md:text-xl"><b>Time:</b> {{ item.readyInMinutes }}</div>
                            <div class="text-left text-base md:text-xl"><b>Servings:</b> {{ item.servings }}</div>
                            <div class="text-left text-base md:text-xl" v-if="item.dishTypes">
                                <b>Dish type: </b>
                                <span class="capitalize">{{ item.dishTypes[0] || 'Just food' }}</span>
                            </div>
                        </div>
                        <div
                            @click="checkTheFullRecipe(item.sourceUrl)"
                            class="font-primary-regular flex flex-col items-center justify-center w-full h-12 text-white text-base md:text-xl my-2 bg-green-500 shadow-md cursor-pointer rounded-md"
                        >
                            Check the full recipe
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { computed } from '@vue/reactivity';
import { useStore } from 'vuex';

export default {
    setup() {
        const store = useStore();
        const list = computed(() => store.getters['recipes/recipes']);
        const smallTitle = title => {
            return title.length > 40 ? title.substr(0, 40 - 1) + '...' : title;
        };

        const checkMessage = computed(() => {
            if (store.getters['recipes/findCoolRecipes']) {
                return 'Here are some recipes for you:';
            } else {
                return `Sorry we didn't find anything with: ${store.getters['recipes/query']}. But here are some other recipes.`;
            }
        });

        const checkTheFullRecipe = link => {
            window.open(link, '_blank');
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
            checkMessage,
            checkTheFullRecipe,
            getRandomRecipes,
            list,
            store,
            smallTitle,
        };
    },
};
</script>
