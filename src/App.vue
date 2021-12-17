<template>
    <Hero />
    <Finder />
    <recipes-list />
    <teleport to="#app">
        <Modal v-if="isShow" />
    </teleport>
</template>

<script>
import Finder from './components/Finder.vue';
import Hero from './components/Hero.vue';
import RecipesList from './components/RecipesList.vue';
import Modal from './components/Modal.vue';
import { useStore } from 'vuex';
import { computed } from '@vue/reactivity';

export default {
    name: 'App',
    components: {
        Hero,
        Finder,
        RecipesList,
        Modal,
    },
    setup() {
        const store = useStore();

        return {
            list: computed(() => store.getters['recipes/recipes']),
            isShow: computed(() => store.getters['recipes/showingModal']),
        };
    },
};
</script>

<style>
body {
    margin: 0px;
    background: #fffaf0 !important;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100%;
    position: relative;
    padding-left: 1.5rem /* 24px */;
    padding-right: 1.5rem /* 24px */;
}

h1 {
    font-size: 2.25rem;
    line-height: 2.5rem;
    text-align: start;
}

p {
    font-size: 1rem;
    line-height: 1.5rem;
    text-align: start;
    padding-top: 1.5rem;
}

input {
    outline: 2px solid transparent;
    outline-offset: 2px;
}

a {
    text-decoration: none;
}

input:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
}

input::placeholder {
    font-family: 'InterLight';
}

.title {
    font-size: 2.25rem;
    line-height: 2.5rem;
    text-align: start;
}

@media (min-width: 640px) {
    .container {
        max-width: 640px;
    }
}
@media (min-width: 768px) {
    .container {
        max-width: 768px;
    }
    .page-container {
        height: 100%;
    }
    h1 {
        font-size: 3rem;
        line-height: 1;
        text-align: start;
    }
    .title {
        font-size: 2.25rem;
        line-height: 2.5rem;
        text-align: start;
    }
}
@media (min-width: 1024px) {
    .container {
        max-width: 1024px;
    }
}

@font-face {
    font-family: InterThin;
    src: url(fonts/Inter-Thin.ttf);
}
@font-face {
    font-family: InterExtraLight;
    src: url(fonts/Inter-ExtraLight.ttf);
}
@font-face {
    font-family: InterLight;
    src: url(fonts/Inter-Light.ttf);
}
@font-face {
    font-family: InterRegular;
    src: url(fonts/Inter-Regular.ttf);
}
@font-face {
    font-family: InterBold;
    src: url(fonts/Inter-Bold.ttf);
}
.font-primary-thin {
    font-family: 'InterThin';
}
.font-primary-extralight {
    font-family: 'InterExtraLight';
}
.font-primary-light {
    font-family: 'InterLight';
}

.font-primary-regular {
    font-family: 'InterRegular';
}
.font-primary-bold {
    font-family: 'InterBold';
}
.get-button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 3rem;
    color: white;
    font-size: 1.25rem;
    line-height: 1.75rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    background-color: rgba(16, 185, 129, 1);
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    cursor: pointer;
}
</style>
