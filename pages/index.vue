
import { MagicScene } from '~~/.nuxt/components';

<template>
    <div class="h-screen font-poppins bg-transparent">
        <MagicScene />
        <div class="flex flex-col justify-center gap-4 h-screen px-4">
            <h1 class="lg:text-9xl text-7xl text-secondary-100 sticky top-10 font-bold">Hello.</h1>
            <h2 class="transition ease-in-out text-4xl lg:text-6xl text-main-100 hover:text-secondary-100 font-bold">My name is Simon
                and I'm a developer</h2>
        </div>
        <section class="m-auto pt-32 bg-main-100 h-screen text-secondary-100 p-8 text-2xl lg:text-5xl font-bold border-t border-t-accent-100 sticky top-0">
            <div class="lg:w-1/3">I build things because I love building things. I learn new things because I love learning new things. Curiosity is my super power</div>
            <div class="border border-secondary-100 rounded-full p-4 text-center text-xl lg:text-2xl max-w-[300px] mt-24 cursor-pointer transition-colors hover:bg-secondary-100 hover:bg-opacity-10" @click="openMail">Contact me -></div>
        </section>
    </div>
</template>

<script lang="ts" setup>
const openMail = () => {
    navigateTo('mailto:simonrosengren123@gmail.com', { external: true })
}
</script>