
import { MagicScene } from '~~/.nuxt/components';

<template>
    <div class="h-screen font-Baumans bg-transparent">
        <MagicScene />
        <div class="flex flex-col justify-center gap-4 h-screen px-4">
            <h1 class="lg:text-9xl text-7xl text-neutral-000 sticky top-10 font-bold">Hello.</h1>
            <h2 class="text-4xl lg:text-6xl text-neutral-000 font-bold">My name is Simon
                and I'm a developer</h2>
        </div>
        <div class="bg-neutral-300 h-screen sticky top-0 flex items-center">
            <div class="grid grid-cols-3 lg:grid-cols-9 gap-1 lg:gap-4 p-3 grid-flow-dense lg:px-32">
                <CardClickable class=" aspect-square text-sm lg:text-lg rounded-br-8xl rounded-tl-8xl  flex justify-center items-center">
                    I code because I love coding.
                </CardClickable>
                <CardClickable class=" aspect-square text-sm lg:text-lg flex justify-center items-center">
                    I learn new things because I love learning
                </CardClickable>
                <CardClickable class=" aspect-square text-sm lg:text-lg flex justify-center items-center rounded-tr-8xl">
                    
                </CardClickable>
                <CardClickable class=" aspect-square text-sm lg:text-lg flex justify-center items-center">
                    
                </CardClickable>
                <CardClickable class=" aspect-square text-sm lg:text-lg flex justify-center items-center">
                    Avensia
                </CardClickable>
                <CardClickable class="text-neutral-000 aspect-square p-2 text-sm lg:text-lg flex justify-center items-center">
                    
                </CardClickable>
                <CardClickable class=" aspect-square text-sm lg:text-lg flex justify-center items-center rounded-tl-8xl rounded-br-8xl">
                    Bonnier
                </CardClickable>
                <CardClickable class=" aspect-square text-sm lg:text-lg flex justify-center items-center">
                    
                </CardClickable>
                <CardClickable class=" aspect-square text-sm lg:text-lg flex justify-center items-center rounded-tr-8xl">
                    B3 Skilled
                </CardClickable>
                <CardClickable class=" aspect-square text-sm lg:text-lg flex justify-center items-center">
                    
                </CardClickable>
                <CardClickable class=" aspect-square text-sm lg:text-lg flex justify-center items-center">
                    Dahl
                </CardClickable>
                <CardClickable class=" aspect-square text-sm lg:text-lg flex lg:hidden justify-center items-center rounded-br-8xl">
                    Tengai
                </CardClickable>
                <CardClickable class=" aspect-square text-sm lg:text-lg flex justify-center items-center rounded-full">
                    
                </CardClickable>
                <CardClickable class=" aspect-square text-sm lg:text-lg flex justify-center items-center rounded-full">
                    
                </CardClickable>
                <CardClickable class=" aspect-square text-sm lg:text-lg flex justify-center items-center rounded-b-full">
                    
                </CardClickable>
                <CardClickable class=" aspect-square text-sm lg:text-lg hidden lg:flex justify-center items-center rounded-br-8xl">
                    Tengai
                </CardClickable>
                <CardClickable class=" aspect-square text-sm lg:text-lg hidden justify-center items-center lg:flex">
                    
                </CardClickable>
                <CardClickable class="text-neutral-000 aspect-square p-2 text-sm lg:text-lg hidden justify-center items-center lg:flex">
                    
                </CardClickable>
                <CardClickable class=" aspect-square text-sm lg:text-lg hidden justify-center items-center lg:flex">
                    
                </CardClickable>
                <CardClickable class=" aspect-square text-sm lg:text-lg hidden justify-center items-center lg:flex rounded-tl-8xl rounded-br-8xl">
                    
                </CardClickable>
                <CardClickable class=" text-neutral-000 aspect-square p-2 text-sm lg:text-lg hidden justify-center items-center lg:flex">
                    
                </CardClickable>
                <CardClickable class=" aspect-square text-sm lg:text-lg hidden justify-center items-center lg:flex rounded-br-8xl">
                    
                </CardClickable>
                <CardClickable class=" aspect-square text-sm lg:text-lg hidden justify-center items-center lg:flex">
                    
                </CardClickable>
                <CardClickable class=" aspect-square text-sm lg:text-lg hidden justify-center items-center lg:flex rounded-full">
                    
                </CardClickable>
                <CardClickable class=" aspect-square text-sm lg:text-lg hidden justify-center items-center lg:flex">
                    
                </CardClickable>
                <CardClickable class=" aspect-square text-sm lg:text-lg hidden justify-center items-center lg:flex rounded-tl-8xl rounded-br-8xl">
                    
                </CardClickable>
                <CardClickable class=" aspect-square text-sm lg:text-lg hidden justify-center items-center lg:flex">
                    
                </CardClickable>
                <CardClickable class=" aspect-square text-sm lg:text-lg hidden justify-center items-center lg:flex">
                    
                </CardClickable>
                <div class="col-span-full py-16 flex justify-end">
                    <div class="text-neutral-000 text-lg lg:text-2xl border-b hover:bg-neutral-000 hover:bg-opacity-5 cursor-pointer border-neutral-000 p-4" @click="openMail">
                        Contact me
                    </div>
                </div>
            </div>
            <!-- <div class="lg:w-1/3">I build things because I love building things. I learn new things because I love learning new things. Curiosity is my super power</div>
            <div class="border border-neutral-000 rounded-full p-4 text-center text-xl lg:text-2xl max-w-[300px] mt-24 cursor-pointer transition-colors hover:bg-neutral-000 hover:bg-opacity-10" @click="openMail">Contact me -></div> -->
            </div>
    </div>
</template>

<script lang="ts" setup>
const openMail = () => {
    navigateTo('mailto:simonrosengren123@gmail.com', { external: true })
}
</script>