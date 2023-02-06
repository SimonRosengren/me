
import { MagicScene } from '~~/.nuxt/components';

<template>
<div class="h-screen font-poppins bg-transparent">
    <div class="h-1/5 flex justify-end gap-4 p-4 w-full text-secondary-100 text-xs">
        <div class="flex flex-col gap-1 text-right">
            <a href="https://se.linkedin.com/in/simon-rosengren-b37418128" class="hover:underline">Linked in</a>
            <a href="https://github.com/SimonRosengren" class="hover:underline">Github</a>
            <a href="mailto:simonrosengren123@gmail.com" class="hover:underline">Email</a>
        </div>
    </div>
    <div class="flex items-center gap-20 h-4/5">
        <h1 class="ml-10 text-9xl text-secondary-100">Hello.</h1>
        <h2 class="transition ease-in-out text-6xl mt-10 text-main-100 hover:text-secondary-100">My name is Simon and I'm a developer</h2>
    </div>
   <MagicScene />
</div>
</template>