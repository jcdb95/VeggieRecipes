<template>
    <div id="recipes-list" class="container">
        <h1 class="font-primary-bold">
            Here are some recipes for you:
        </h1>
        <div class="recipes-list">
            <div v-for="(item, index) in list" :key="index" class="recipe">
                <div class="recipe-container">
                    <img v-if="item.image" :src="item.image" class="" alt="" />
                    <img
                        v-else
                        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.KrGAKEXgYL0tirUR-W0qbgHaE8%26pid%3DApi&f=1"
                        class=""
                        alt=""
                    />
                    <div class="recipe-info">
                        <h2 class="font-primary-bold">
                            {{ smallTitle(item.title) }}
                        </h2>
                        <div class="font-primary-regular recipe-details">
                            <div><b>Time:</b> {{ item.readyInMinutes }}</div>
                            <div><b>Servings:</b> {{ item.servings }}</div>
                            <div v-if="item.dishTypes">
                                <b>Dish type: </b>
                                <span style="text-transform: capitalize;">{{ item.dishTypes[0] || 'Just food' }}</span>
                            </div>
                        </div>
                        <div
                            @click="checkTheFullRecipe(item.sourceUrl)"
                            class="font-primary-regular get-button check-recipes"
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

        return {
            store,
            list: computed(() => store.getters['recipes/recipes']),
            checkTheFullRecipe: link => {
                window.open(link, '_blank');
            },
            smallTitle: title => {
                return title.length > 40 ? title.substr(0, 40 - 1) + '...' : title;
            },
        };
    },
};
</script>

<style scoped>
.recipe-container {
    background: #f7fafc;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
}
#recipes-list {
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: auto;
    margin-top: auto;
    margin: auto;
    padding: 1.5rem;
}
h1 {
    padding-top: 3rem;
    padding-bottom: 3rem;
}
.recipes-list {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(1, minmax(0, 1fr));
}

.recipe-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 100%;
}
.recipe-container img {
    width: 100%;
    height: 9rem;
    object-fit: cover;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
}
.recipe-info {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    padding: 0.75rem;
}
.recipe-info h2 {
    font-size: 1.25rem;
    line-height: 1.75rem;
    height: 4rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    text-align: left;
}
.recipe-details {
    /* flex flex-col items-start justify-between py-2 font-primary-regular recipe-details */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
}
.recipe-details div {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
}

/* desktop */
@media (min-width: 768px) {
    .recipes-list {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    .recipe-info h2 {
        font-size: 1.25rem;
        line-height: 1.75rem;
        height: 6rem;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        text-align: left;
    }
}
</style>
