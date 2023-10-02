<template>
    <div class="h-screen font-display bg-transparent">
        <MagicScene />
        <section id="home">
            <div class="flex flex-col justify-center h-screen px-32">
                <div class="flex flex-col gap-5 sticky top-10 ">
                    <div class="border-b border-r font-bold">
                        <h2 class="green lg:text-9xl text-7xl text-neutral-000 font-bold -mb-6">Hello</h2>
                        <h2 class="lg:text-9xl text-7xl text-neutral-000 font-bold">I am Simon</h2>
                    </div>
                    <Button @click="navigateTo({ path: '/', hash: '#done' })">
                        <template #body>Explore</template>
                    </Button>
                </div>

            </div>
        </section>
        <section id="done">
            <div class="bg-neutral-300 h-screen sticky mt-4 flex items-center px-32">
                <div class="w-full flex gap-14 items-center">
                    <div class="">
                        <h2 class=" text-9xl font-bold text-neutral-100">What</h2>
                        <h3 class=" text-9xl font-bold text-neutral-100 -mt-4">I did</h3>
                    </div>
                    <div class="grid grid-cols-3 lg:grid-cols-9 gap-1 lg:gap-4 p-3 grid-flow-dense w-full">
                        <CardClickable
                            class=" aspect-square text-sm lg:text-lg rounded-br-8xl rounded-tl-8xl  flex justify-center items-center">

                        </CardClickable>
                        <CardClickable class=" aspect-square text-sm lg:text-lg flex justify-center items-center">

                        </CardClickable>
                        <CardClickable
                            class=" aspect-square text-sm lg:text-lg flex justify-center items-center rounded-tr-8xl">

                        </CardClickable>
                        <CardClickable class=" aspect-square text-sm lg:text-lg flex justify-center items-center">

                        </CardClickable>
                        <CardClickable class=" aspect-square text-sm lg:text-lg flex justify-center items-center">
                            Avensia
                        </CardClickable>
                        <CardClickable
                            class="text-neutral-000 aspect-square p-2 text-sm lg:text-lg flex justify-center items-center">

                        </CardClickable>
                        <CardClickable
                            class=" aspect-square text-sm lg:text-lg flex justify-center items-center rounded-tl-8xl rounded-br-8xl">
                            Bonnier
                        </CardClickable>
                        <CardClickable class=" aspect-square text-sm lg:text-lg flex justify-center items-center">

                        </CardClickable>
                        <CardClickable
                            class=" aspect-square text-sm lg:text-lg flex justify-center items-center rounded-tr-8xl">
                            B3 Skilled
                        </CardClickable>
                        <CardClickable class=" aspect-square text-sm lg:text-lg flex justify-center items-center">

                        </CardClickable>
                        <CardClickable class=" aspect-square text-sm lg:text-lg flex justify-center items-center">
                            Dahl
                        </CardClickable>
                        <CardClickable
                            class=" aspect-square text-sm lg:text-lg flex lg:hidden justify-center items-center rounded-br-8xl">
                            Tengai
                        </CardClickable>
                        <CardClickable
                            class=" aspect-square text-sm lg:text-lg flex justify-center items-center rounded-full">

                        </CardClickable>
                        <CardClickable
                            class=" aspect-square text-sm lg:text-lg flex justify-center items-center rounded-full">

                        </CardClickable>
                        <CardClickable
                            class=" aspect-square text-sm lg:text-lg flex justify-center items-center rounded-b-full">

                        </CardClickable>
                        <CardClickable
                            class=" aspect-square text-sm lg:text-lg hidden lg:flex justify-center items-center rounded-br-8xl">
                            Tengai
                        </CardClickable>
                        <CardClickable class=" aspect-square text-sm lg:text-lg hidden justify-center items-center lg:flex">

                        </CardClickable>
                        <CardClickable
                            class="text-neutral-000 aspect-square p-2 text-sm lg:text-lg hidden justify-center items-center lg:flex">

                        </CardClickable>
                        <CardClickable class=" aspect-square text-sm lg:text-lg hidden justify-center items-center lg:flex">

                        </CardClickable>
                        <CardClickable
                            class=" aspect-square text-sm lg:text-lg hidden justify-center items-center lg:flex rounded-tl-8xl rounded-br-8xl">

                        </CardClickable>
                        <CardClickable
                            class=" text-neutral-000 aspect-square p-2 text-sm lg:text-lg hidden justify-center items-center lg:flex">

                        </CardClickable>
                        <CardClickable
                            class=" aspect-square text-sm lg:text-lg hidden justify-center items-center lg:flex rounded-br-8xl">

                        </CardClickable>
                        <CardClickable class=" aspect-square text-sm lg:text-lg hidden justify-center items-center lg:flex">

                        </CardClickable>
                        <CardClickable
                            class=" aspect-square text-sm lg:text-lg hidden justify-center items-center lg:flex rounded-full">

                        </CardClickable>
                        <CardClickable class=" aspect-square text-sm lg:text-lg hidden justify-center items-center lg:flex">

                        </CardClickable>
                        <CardClickable
                            class=" aspect-square text-sm lg:text-lg hidden justify-center items-center lg:flex rounded-tl-8xl rounded-br-8xl">

                        </CardClickable>
                        <CardClickable class=" aspect-square text-sm lg:text-lg hidden justify-center items-center lg:flex">

                        </CardClickable>
                        <CardClickable class=" aspect-square text-sm lg:text-lg hidden justify-center items-center lg:flex">

                        </CardClickable>
                    </div>
                </div>






                <!-- <div class="grid grid-cols-3 lg:grid-cols-9 gap-1 lg:gap-4 p-3 grid-flow-dense">
                    <CardClickable
                        class=" aspect-square text-sm lg:text-lg rounded-br-8xl rounded-tl-8xl  flex justify-center items-center">
                        I code because I love coding.
                    </CardClickable>
                    <CardClickable class=" aspect-square text-sm lg:text-lg flex justify-center items-center">
                        I learn new things because I love learning
                    </CardClickable>
                    <CardClickable
                        class=" aspect-square text-sm lg:text-lg flex justify-center items-center rounded-tr-8xl">

                    </CardClickable>
                    <CardClickable class=" aspect-square text-sm lg:text-lg flex justify-center items-center">

                    </CardClickable>
                    <CardClickable class=" aspect-square text-sm lg:text-lg flex justify-center items-center">
                        Avensia
                    </CardClickable>
                    <CardClickable
                        class="text-neutral-000 aspect-square p-2 text-sm lg:text-lg flex justify-center items-center">

                    </CardClickable>
                    <CardClickable
                        class=" aspect-square text-sm lg:text-lg flex justify-center items-center rounded-tl-8xl rounded-br-8xl">
                        Bonnier
                    </CardClickable>
                    <CardClickable class=" aspect-square text-sm lg:text-lg flex justify-center items-center">

                    </CardClickable>
                    <CardClickable
                        class=" aspect-square text-sm lg:text-lg flex justify-center items-center rounded-tr-8xl">
                        B3 Skilled
                    </CardClickable>
                    <CardClickable class=" aspect-square text-sm lg:text-lg flex justify-center items-center">

                    </CardClickable>
                    <CardClickable class=" aspect-square text-sm lg:text-lg flex justify-center items-center">
                        Dahl
                    </CardClickable>
                    <CardClickable
                        class=" aspect-square text-sm lg:text-lg flex lg:hidden justify-center items-center rounded-br-8xl">
                        Tengai
                    </CardClickable>
                    <CardClickable class=" aspect-square text-sm lg:text-lg flex justify-center items-center rounded-full">

                    </CardClickable>
                    <CardClickable class=" aspect-square text-sm lg:text-lg flex justify-center items-center rounded-full">

                    </CardClickable>
                    <CardClickable
                        class=" aspect-square text-sm lg:text-lg flex justify-center items-center rounded-b-full">

                    </CardClickable>
                    <CardClickable
                        class=" aspect-square text-sm lg:text-lg hidden lg:flex justify-center items-center rounded-br-8xl">
                        Tengai
                    </CardClickable>
                    <CardClickable class=" aspect-square text-sm lg:text-lg hidden justify-center items-center lg:flex">

                    </CardClickable>
                    <CardClickable
                        class="text-neutral-000 aspect-square p-2 text-sm lg:text-lg hidden justify-center items-center lg:flex">

                    </CardClickable>
                    <CardClickable class=" aspect-square text-sm lg:text-lg hidden justify-center items-center lg:flex">

                    </CardClickable>
                    <CardClickable
                        class=" aspect-square text-sm lg:text-lg hidden justify-center items-center lg:flex rounded-tl-8xl rounded-br-8xl">

                    </CardClickable>
                    <CardClickable
                        class=" text-neutral-000 aspect-square p-2 text-sm lg:text-lg hidden justify-center items-center lg:flex">

                    </CardClickable>
                    <CardClickable
                        class=" aspect-square text-sm lg:text-lg hidden justify-center items-center lg:flex rounded-br-8xl">

                    </CardClickable>
                    <CardClickable class=" aspect-square text-sm lg:text-lg hidden justify-center items-center lg:flex">

                    </CardClickable>
                    <CardClickable
                        class=" aspect-square text-sm lg:text-lg hidden justify-center items-center lg:flex rounded-full">

                    </CardClickable>
                    <CardClickable class=" aspect-square text-sm lg:text-lg hidden justify-center items-center lg:flex">

                    </CardClickable>
                    <CardClickable
                        class=" aspect-square text-sm lg:text-lg hidden justify-center items-center lg:flex rounded-tl-8xl rounded-br-8xl">

                    </CardClickable>
                    <CardClickable class=" aspect-square text-sm lg:text-lg hidden justify-center items-center lg:flex">

                    </CardClickable>
                    <CardClickable class=" aspect-square text-sm lg:text-lg hidden justify-center items-center lg:flex">

                    </CardClickable>
                    <div class="col-span-full py-16 flex justify-end">
                        <div class="text-neutral-000 text-lg lg:text-2xl border-b hover:bg-neutral-000 hover:bg-opacity-5 cursor-pointer border-neutral-000 p-4"
                            @click="openMail">
                            Contact me
                        </div>
                    </div>
                </div> -->
                <!-- <div class="lg:w-1/3">I build things because I love building things. I learn new things because I love learning new things. Curiosity is my super power</div>
            <div class="border border-neutral-000 rounded-full p-4 text-center text-xl lg:text-2xl max-w-[300px] mt-24 cursor-pointer transition-colors hover:bg-neutral-000 hover:bg-opacity-10" @click="openMail">Contact me -></div> -->
            </div>
        </section>

    </div>
</template>

<script lang="ts" setup>
const { $gsap: gsap, $Draggable: Draggablem, $ScrollTriggger: ScrollTrigger } = useNuxtApp();
if (!process.server) gsap.to(".green", {rotation: 360, x: 100, duration: 1});

</script>