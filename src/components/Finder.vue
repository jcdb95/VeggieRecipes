<template>
    <div id="finder" class="page-container container">
        <div class="form-container">
            <div class="font-primary-bold title">
                Let’s get <br class="md:hidden" />
                some recipes
            </div>
            <div class="form">
                <div id="query-input">
                    <input
                        type="text"
                        class="font-primary-light"
                        v-model="query"
                        name="query"
                        placeholder="Try out something like pasta"
                    />
                </div>
                <div class="additional-stuff font-primary-light">
                    <div>Does it has to be <span class="font-primary-bold">Gluten Free</span>?</div>
                    <input type="checkbox" name="gluten_free" v-model="glutenFree" />
                </div>
                <div class="additional-stuff font-primary-light">
                    <div>Should it be <span class="font-primary-bold">vegan</span> also?</div>
                    <input type="checkbox" name="vegan" v-model="vegan" />
                </div>
                <div class="additional-stuff font-primary-light">
                    <div>Are you in a <span class="font-primary-bold">rush</span>?</div>
                    <input type="checkbox" value="true" v-model="inAHurry" />
                </div>
                <div @click="getRecipes" class="font-primary-regular get-button">
                    Find recipes
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

        const getRecipes = async () => {
            store
                .dispatch('recipes/getRecipes')
                .then(() => {
                    if (store.getters['recipes/recipes'].length)
                        document.querySelector('#recipes-list').scrollIntoView({ behavior: 'smooth' });
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
        };
    },
};
</script>

<style scoped>
#finder {
    height: 100vh;
}
.form-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 1.5rem;
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0px 20px 25px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    max-width: 32rem;
}
.form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
}
input {
    outline: 2px solid transparent;
    outline-offset: 2px;
    border-width: 0 0 0px;
    border-color: margin(13, 104, 4);
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
}
input:focus {
    border-color: green;
}

#query-input {
    width: 100%;
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;
    background: #f7fafc;
    box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.06);
    border-radius: 5px;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
}
#query-input input {
    width: 100%;
    background-color: transparent;
    padding-top: 0.25rem;
    margin-left: 0.5rem;
    padding-bottom: 0.25rem;
}
.additional-stuff {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 1rem;
}
.additional-stuff span {
    text-decoration: underline;
}
</style>
