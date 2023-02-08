
import { MagicScene } from '~~/.nuxt/components';

<template>
    <div class="h-screen font-poppins bg-transparent">
        <MagicScene />
        <div class="flex flex-col p-4 lg:p-0 justify-center lg:items-center  gap-4 lg:gap-20 h-screen max-w-[200px]">
            <h1 class="lg:ml-10 lg:text-9xl text-7xl text-secondary-100">Hello.</h1>
            <h2 class="transition ease-in-out text-4xl lg:text-6xl mt-10 text-main-100 hover:text-secondary-100">My name is Simon
                and I'm a developer</h2>
        </div>
        <section class="max-w-5xl m-auto">
            <div class="bg-main-200 rounded-sm text-secondary-100 p-8">I build things because I love building things. I learn new things because I love learning new things. Curiosity is my super power</div>
        </section>
    </div>
</template>