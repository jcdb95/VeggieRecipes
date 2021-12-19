<template>
    <div class="container h-screen flex mx-auto my-auto">
        <div
            class="flex flex-col items-center justify-center my-auto md:grid lg:grid-cols-2 md:gap-6 md:mx-auto md:h-auto"
        >
            <div class="flex flex-col justify-between text-left w-full lg:max-w-md">
                <div class="font-primary-thin text-4xl md:text-6xl text-hero">
                    <span class="font-primary-bold">Eating veggie,</span> <br />
                    the easy way.
                </div>
                <div class="font-primary-light text-base md:text-lg my-2 text-hero">
                    If 40% of gas emissions are due to the consumption of meat around the world, would you be able to
                    make a small change for a big difference?
                </div>
                <a href="#finder" v-smooth-scroll class="font-primary-regular get-button hidden md:flex get-recipes">
                    Let's get some recipes
                </a>
            </div>
            <div
                class="grid grid-cols-2 gap-2 items-center justify-center object-cover my-2 md:my-8 hero-images w-full"
            >
                <div class="w-full">
                    <img
                        src="@/assets/pasta.png"
                        class="rounded-md shadow-sm object-cover w-full"
                        alt="Two dishes of pasta"
                    />
                </div>
                <div class="grid grid-rows-2 gap-2 justify-between h-full">
                    <img src="@/assets/salad.png" class="rounded-md shadow-sm h-full" alt="A salad" />
                    <img src="@/assets/burger.png" class="rounded-md shadow-sm h-full" alt="A burger" />
                </div>
            </div>
            <a id="action-button" href="#finder" class="font-primary-regular get-button md:hidden" v-smooth-scroll>
                Let's get some recipes
            </a>
        </div>
    </div>
</template>
