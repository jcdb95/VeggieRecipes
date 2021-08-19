<template>
    <div class="page-container container">
        <div class="hero-container ">
            <div class="text-hero">
                <div class="font-primary-thin title">
                    <span class="font-primary-bold">Eating veggie,</span> <br />
                    the easy way.
                </div>
                <p class="font-primary-regular">
                    Sit odit nemo ipsum et quam non quaerat. Sunt similique ut dignissimos eligendi quia sed veritatis
                    placeat. Et ut et et quia minima.
                </p>
                <a href="#finder" v-smooth-scroll id="action-button-desktop" class="font-primary-regular get-button">
                    Let's get some recipes
                </a>
            </div>
            <div class="hero-images">
                <img src="@/assets/pasta.png" alt="Two dishes of pasta" />
                <div class="smaller-images-container">
                    <img src="@/assets/salad.png" class="smaller-images" alt="A salad" />
                    <img src="@/assets/burger.png" class="smaller-images" alt="A burger" />
                </div>
            </div>
            <a id="action-button" href="#finder" class="font-primary-regular get-button" v-smooth-scroll>
                Let's get some recipes
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Hero',
    setup() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hero-container {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    align-items: center;
    justify-content: center;
    height: 100vh;
}
.text-hero {
    display: flex;
    flex-direction: column;
    padding-right: 5rem;
}
.img-container {
    display: flex;
    flex-direction: row;
    margin-bottom: 1.5rem;
    margin-top: 1.5rem;
}
img {
    border-radius: 0.25rem;
    object-fit: cover;
    height: 100%;
}
.title {
    font-size: 2.25rem;
    line-height: 2.5rem;
    text-align: start;
}
.hero-images {
    display: grid;
    gap: 0.5rem;
    width: 100%;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
}

@media (min-width: 768px) {
    #action-button {
        display: none;
    }
    #action-button-desktop {
        display: flex;
    }
}
@media (max-width: 768px) {
    #action-button-desktop {
        display: none;
    }
    .hero-container {
        grid-template-columns: repeat(1, minmax(0, 1fr));
        height: fit-content;
    }

    .text-hero {
        padding-right: 0rem;
    }
}
.smaller-images-container {
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-rows: repeat(2, minmax(0, 1fr));
    gap: 1rem;
}
.smaller-images {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
}

#burger {
    margin-top: 0.5rem;
}
#salad {
    margin-bottom: 0.5rem;
}
</style>
