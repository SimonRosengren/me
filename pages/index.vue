
import { MagicScene } from '~~/.nuxt/components';

<template>
    <div class="h-screen font-baumans bg-transparent">
        <MagicScene />
        <div class="flex flex-col justify-center gap-4 h-screen px-4">
            <h1 class="lg:text-9xl text-7xl text-secondary-100 sticky top-10 font-bold">Hello.</h1>
            <h2 class="transition ease-in-out text-4xl lg:text-6xl text-main-100 hover:text-secondary-100 font-bold">My name is Simon
                and I'm a developer</h2>
        </div>
        <div class="bg-main-100 h-screen sticky top-0 flex items-center">
            <div class="grid grid-cols-3 lg:grid-cols-9 gap-1 lg:gap-4 p-3 grid-flow-dense lg:px-32">
                <div class="bg-accent-red-100 text-text-yellow aspect-square p-2 text-sm lg:text-lg rounded-br-8xl rounded-tl-8xl  flex justify-center items-center">
                    I code because I love coding.
                </div>
                <div class="bg-accent-red-100 text-text-yellow aspect-square p-2 text-sm lg:text-lg flex justify-center items-center">
                    I learn new things because I love learning
                </div>
                <div class="bg-accent-red-100 text-text-yellow aspect-square p-2 text-sm lg:text-lg flex justify-center items-center rounded-tr-8xl">
                    
                </div>
                <div class="bg-accent-red-100 text-text-yellow aspect-square p-2 text-sm lg:text-lg flex justify-center items-center">
                    
                </div>
                <div class="bg-accent-red-100 text-text-yellow aspect-square p-2 text-sm lg:text-lg flex justify-center items-center">
                    Avensia
                </div>
                <div class="text-text-yellow aspect-square p-2 text-sm lg:text-lg flex justify-center items-center">
                    
                </div>
                <div class="bg-accent-red-100 text-text-yellow aspect-square p-2 text-sm lg:text-lg flex justify-center items-center rounded-tl-8xl rounded-br-8xl">
                    Bonnier
                </div>
                <div class="bg-accent-red-100 text-text-yellow aspect-square p-2 text-sm lg:text-lg flex justify-center items-center">
                    
                </div>
                <div class="bg-accent-red-100 text-text-yellow aspect-square p-2 text-sm lg:text-lg flex justify-center items-center rounded-tr-8xl">
                    B3 Skilled
                </div>
                <div class="bg-accent-red-100 text-text-yellow aspect-square p-2 text-sm lg:text-lg flex justify-center items-center">
                    
                </div>
                <div class="bg-accent-red-100 text-text-yellow aspect-square p-2 text-sm lg:text-lg flex justify-center items-center">
                    Dahl
                </div>
                <div class="bg-accent-red-100 text-text-yellow aspect-square p-2 text-sm lg:text-lg flex lg:hidden justify-center items-center rounded-br-8xl">
                    Tengai
                </div>
                <div class="bg-accent-red-100 text-text-yellow aspect-square p-2 text-sm lg:text-lg flex justify-center items-center rounded-full">
                    
                </div>
                <div class="bg-accent-red-100 text-text-yellow aspect-square p-2 text-sm lg:text-lg flex justify-center items-center rounded-full">
                    
                </div>
                <div class="bg-accent-red-100 text-text-yellow aspect-square p-2 text-sm lg:text-lg flex justify-center items-center rounded-b-full">
                    
                </div>
                <div class="bg-accent-red-100 text-text-yellow aspect-square p-2 text-sm lg:text-lg hidden lg:flex justify-center items-center rounded-br-8xl">
                    Tengai
                </div>
                <div class="bg-accent-red-100 text-text-yellow aspect-square p-2 text-sm lg:text-lg hidden justify-center items-center lg:flex">
                    
                </div>
                <div class="text-text-yellow aspect-square p-2 text-sm lg:text-lg hidden justify-center items-center lg:flex">
                    
                </div>
                <div class="bg-accent-red-100 text-text-yellow aspect-square p-2 text-sm lg:text-lg hidden justify-center items-center lg:flex">
                    
                </div>
                <div class="bg-accent-red-100 text-text-yellow aspect-square p-2 text-sm lg:text-lg hidden justify-center items-center lg:flex rounded-tl-8xl rounded-br-8xl">
                    
                </div>
                <div class=" text-text-yellow aspect-square p-2 text-sm lg:text-lg hidden justify-center items-center lg:flex">
                    
                </div>
                <div class="bg-accent-red-100 text-text-yellow aspect-square p-2 text-sm lg:text-lg hidden justify-center items-center lg:flex rounded-br-8xl">
                    
                </div>
                <div class="bg-accent-red-100 text-text-yellow aspect-square p-2 text-sm lg:text-lg hidden justify-center items-center lg:flex">
                    
                </div>
                <div class="bg-accent-red-100 text-text-yellow aspect-square p-2 text-sm lg:text-lg hidden justify-center items-center lg:flex rounded-full">
                    
                </div>
                <div class="bg-accent-red-100 text-text-yellow aspect-square p-2 text-sm lg:text-lg hidden justify-center items-center lg:flex">
                    
                </div>
                <div class="bg-accent-red-100 text-text-yellow aspect-square p-2 text-sm lg:text-lg hidden justify-center items-center lg:flex rounded-tl-8xl rounded-br-8xl">
                    
                </div>
                <div class="bg-accent-red-100 text-text-yellow aspect-square p-2 text-sm lg:text-lg hidden justify-center items-center lg:flex">
                    
                </div>
                <div class="bg-accent-red-100 text-text-yellow aspect-square p-2 text-sm lg:text-lg hidden justify-center items-center lg:flex">
                    
                </div>
                <div class="col-span-full py-16 flex justify-end">
                    <div class="text-text-yellow text-lg lg:text-2xl border-b hover:bg-text-yellow hover:bg-opacity-5 cursor-pointer border-text-yellow p-4" @click="openMail">
                        Contact me
                    </div>
                </div>
            </div>
            <!-- <div class="lg:w-1/3">I build things because I love building things. I learn new things because I love learning new things. Curiosity is my super power</div>
            <div class="border border-secondary-100 rounded-full p-4 text-center text-xl lg:text-2xl max-w-[300px] mt-24 cursor-pointer transition-colors hover:bg-secondary-100 hover:bg-opacity-10" @click="openMail">Contact me -></div> -->
            </div>
    </div>
</template>

<script lang="ts" setup>
const openMail = () => {
    navigateTo('mailto:simonrosengren123@gmail.com', { external: true })
}
</script>