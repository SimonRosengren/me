<template>
    <div class="h-screen font-display bg-transparent relative">
        <MagicScene />
        <section id="home">
            <div class="h-screen" />
            <div class="flex flex-col justify-center h-screen px-4 lg:px-32 fixed top-0">
                <div class="flex flex-col gap-5">
                    <div class="border-b lg:border-r font-bold pb-3 pr-64">
                        <div class=" max-w-xs lg:max-w-6xl">
                            <h2 class="lg:text-7xl lg:text-9xl leading-[.9] text-7xl text-neutral-100 font-bold">Hello.</h2>
                            <h2 class="lg:text-7xl lg:text-9xl leading-[.9] text-7xl text-neutral-100 font-bold">I am Simon</h2>
                        </div>
                    </div>
                    <Button @click="navigateTo({ path: '/', hash: '#did' })">
                        <template #body>Explore</template>
                    </Button>
                </div>

            </div>
        </section>
        <section id="me">
            <div class="bg-neutral-300 h-screen flex items-center lg:px-32 relative">
                <div class="w-full flex flex-col lg:flex-row gap-14 items-center">
                    <div class="">
                        <h2 class=" text-7xl lg:text-9xl font-bold text-neutral-100">Who</h2>
                        <h3 class=" text-7xl lg:text-9xl font-bold text-neutral-100 -mt-4">am I</h3>
                    </div>
                    <div class="p-4 rounded-tr-9xl border text-neutral-100 border-red-200">
                        Mollit sit et nulla officia. Mollit consequat minim amet enim ullamco magna commodo consectetur magna laboris sit. Ea ipsum elit irure veniam ipsum cupidatat dolor qui sunt labore.
                    </div>
                    <!-- <div class="grid grid-cols-3 lg:grid-cols-8 gap-1 lg:gap-4 p-3 grid-flow-dense w-full">
                        <CardClickable class=" aspect-square col-span-2 text-sm lg:text-lg rounded-br-8xl rounded-tl-8xl  flex justify-center items-center">
                            Avensia
                        </CardClickable>
                        <CardClickable class=" aspect-square col-span-2 text-sm lg:text-lg flex justify-center items-center">
                            Bonnier
                        </CardClickable>  
                        <CardClickable
                            class=" aspect-square col-span-2 text-sm lg:text-lg flex justify-center items-center rounded-tr-8xl">
                            Dahl
                        </CardClickable>
                        <CardClickable
                            class=" aspect-square text-sm col-span-2 lg:text-lg flex justify-center items-center rounded-br-8xl">
                            Tengai
                        </CardClickable>
                        <CardClickable class=" aspect-square text-sm lg:text-lg flex justify-center items-center rounded-br-8xl" />
                        <CardClickable class=" aspect-square text-sm lg:text-lg flex justify-center items-center rounded-bl-8xl" />
                        <CardClickable class=" aspect-square text-sm lg:text-lg flex justify-center items-center rounded-tr-8xl" />
                        <CardClickable class=" aspect-square text-sm lg:text-lg flex justify-center items-center rounded-tl-8xl " />
                        <CardClickable class=" aspect-square text-sm lg:text-lg flex justify-center items-center rounded-br-8xl" />
                        <CardClickable class=" aspect-square text-sm lg:text-lg flex justify-center items-center rounded-br-8xl" />
                        <CardClickable class=" aspect-square text-sm lg:text-lg flex justify-center items-center rounded-br-8xl" />
                        <CardClickable class=" aspect-square text-sm lg:text-lg flex justify-center items-center rounded-br-8xl" />
                    </div> -->
                </div>
            </div>
        </section>
        <section id="did">
            <div class="bg-neutral-300 h-screen flex items-center lg:px-32 relative">
                <div class="w-full flex flex-col lg:flex-row gap-14 items-center">
                    <div class="">
                        <h2 class=" text-7xl lg:text-9xl font-bold text-neutral-100">What</h2>
                        <h3 class=" text-7xl lg:text-9xl font-bold text-neutral-100 -mt-4">I did</h3>
                    </div>
                    <!-- <div class="grid grid-cols-3 lg:grid-cols-8 gap-1 lg:gap-4 p-3 grid-flow-dense w-full">
                        <CardClickable class=" aspect-square col-span-2 text-sm lg:text-lg rounded-br-8xl rounded-tl-8xl  flex justify-center items-center">
                            Avensia
                        </CardClickable>
                        <CardClickable class=" aspect-square col-span-2 text-sm lg:text-lg flex justify-center items-center">
                            Bonnier
                        </CardClickable>  
                        <CardClickable
                            class=" aspect-square col-span-2 text-sm lg:text-lg flex justify-center items-center rounded-tr-8xl">
                            Dahl
                        </CardClickable>
                        <CardClickable
                            class=" aspect-square text-sm col-span-2 lg:text-lg flex justify-center items-center rounded-br-8xl">
                            Tengai
                        </CardClickable>
                        <CardClickable class=" aspect-square text-sm lg:text-lg flex justify-center items-center rounded-br-8xl" />
                        <CardClickable class=" aspect-square text-sm lg:text-lg flex justify-center items-center rounded-bl-8xl" />
                        <CardClickable class=" aspect-square text-sm lg:text-lg flex justify-center items-center rounded-tr-8xl" />
                        <CardClickable class=" aspect-square text-sm lg:text-lg flex justify-center items-center rounded-tl-8xl " />
                        <CardClickable class=" aspect-square text-sm lg:text-lg flex justify-center items-center rounded-br-8xl" />
                        <CardClickable class=" aspect-square text-sm lg:text-lg flex justify-center items-center rounded-br-8xl" />
                        <CardClickable class=" aspect-square text-sm lg:text-lg flex justify-center items-center rounded-br-8xl" />
                        <CardClickable class=" aspect-square text-sm lg:text-lg flex justify-center items-center rounded-br-8xl" />
                    </div> -->
                </div>
            </div>
        </section>
        <section id="do">
            <div class="bg-neutral-300 h-screen flex items-center lg:px-32 relative">
                <div class="w-full flex flex-col lg:flex-row gap-14 items-center">
                    <div class="">
                        <h2 class=" text-7xl lg:text-9xl font-bold text-neutral-100">What</h2>
                        <h3 class=" text-7xl lg:text-9xl font-bold text-neutral-100 -mt-4">I do</h3>
                    </div>
                    <!-- <div class="grid grid-cols-3 lg:grid-cols-8 gap-1 lg:gap-4 p-3 grid-flow-dense w-full">
                        <CardClickable class=" aspect-square col-span-2 text-sm lg:text-lg rounded-br-8xl rounded-tl-8xl  flex justify-center items-center">
                            Avensia
                        </CardClickable>
                        <CardClickable class=" aspect-square col-span-2 text-sm lg:text-lg flex justify-center items-center">
                            Bonnier
                        </CardClickable>  
                        <CardClickable
                            class=" aspect-square col-span-2 text-sm lg:text-lg flex justify-center items-center rounded-tr-8xl">
                            Dahl
                        </CardClickable>
                        <CardClickable
                            class=" aspect-square text-sm col-span-2 lg:text-lg flex justify-center items-center rounded-br-8xl">
                            Tengai
                        </CardClickable>
                        <CardClickable class=" aspect-square text-sm lg:text-lg flex justify-center items-center rounded-br-8xl" />
                        <CardClickable class=" aspect-square text-sm lg:text-lg flex justify-center items-center rounded-bl-8xl" />
                        <CardClickable class=" aspect-square text-sm lg:text-lg flex justify-center items-center rounded-tr-8xl" />
                        <CardClickable class=" aspect-square text-sm lg:text-lg flex justify-center items-center rounded-tl-8xl " />
                        <CardClickable class=" aspect-square text-sm lg:text-lg flex justify-center items-center rounded-br-8xl" />
                        <CardClickable class=" aspect-square text-sm lg:text-lg flex justify-center items-center rounded-br-8xl" />
                        <CardClickable class=" aspect-square text-sm lg:text-lg flex justify-center items-center rounded-br-8xl" />
                        <CardClickable class=" aspect-square text-sm lg:text-lg flex justify-center items-center rounded-br-8xl" />
                    </div> -->
                </div>
            </div>
        </section>

    </div>
</template>

<script lang="ts" setup>
const openMail = () => {
    navigateTo('mailto:simonrosengren123@gmail.com', { external: true })
}
</script>