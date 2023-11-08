<template>
    <div class="h-screen font-display bg-transparent relative">
        <MagicScene />
        <section id="home">
            <div class="h-screen" />
            <div class="flex flex-col justify-center h-screen px-4 lg:px-32 fixed top-0">
                <div class="flex flex-col gap-5">
                    <div class="border-b lg:border-r font-bold pb-3 pr-64">
                        <div class=" max-w-xs lg:max-w-6xl">
                            <h2 class="lg:text-9xl leading-[.9] text-7xl text-neutral-100 font-bold">Hello.</h2>
                            <h2 class="lg:text-9xl leading-[.9] text-7xl text-neutral-100 font-bold">I am Simon</h2>
                        </div>
                    </div>
                    <Button @click="navigateTo({ path: '/', hash: '#me' })">
                        <template #body>Explore</template>
                    </Button>
                </div>

            </div>
        </section>
        <section id="me">
            <div class="bg-neutral-300 h-screen flex items-center lg:px-96 relative">
                <div class="w-full flex flex-col lg:flex-row">
                    <div class="border-r pr-10">
                        <h2 class=" text-7xl lg:text-9xl font-bold text-neutral-100">Who</h2>
                        <h3 class=" text-7xl lg:text-9xl font-bold text-neutral-100 -mt-4">am I</h3>
                    </div>
                    <div class="text-neutral-100 text-sm md:text-lg lg:text-2xl pl-10">
                        I'm a full-stack developer who thrives on exploring the ever-evolving tech landscape. From designing and crafting seamless user experiences to diving deep into the backend, I find joy in every aspect of the development process. With a passion for innovation and a love for continuous learning, I'm constantly seeking new challenges to expand my skillset. Whether it's building elegant front-end interfaces or architecting robust server-side solutions, I'm up for the task. Let's build something cool together.
                    </div>
                </div>
            </div>
        </section>
        <section id="do">
            <div class="bg-neutral-300 h-screen flex items-center lg:px-96 relative">
                <div class="w-full flex flex-col lg:flex-row gap-14 items-center">
                    <div class="border-r pr-10">
                        <h2 class=" text-7xl lg:text-9xl font-bold text-neutral-100">What</h2>
                        <h3 class=" text-7xl lg:text-9xl font-bold text-neutral-100 -mt-4">I do</h3>
                    </div>
                    <div class="text-neutral-100 text-sm md:text-lg lg:text-2xl pl-10">
                        I work as a Full-Stack Developer at a startup, contributing in DevOps, Backend, aswell as Frontend development. Additionally, I have the role of Lead Frontend developer, focusing on user interface and experience. This role involves managing deployment, optimizing automation, designing server-side solutions, and pushing the boundaries of web applications (especially on Safari...). It combines technical expertise with leadership to support the startup's innovative solutions.
                    </div>
                </div>
            </div>
        </section>
        <section id="did">
            <div class="bg-neutral-300 h-screen flex items-center lg:px-96 relative">
                <div class="w-full flex flex-col lg:flex-row gap-14 items-center">
                    <div class="">
                        <h2 class=" text-7xl lg:text-9xl font-bold text-neutral-100">What</h2>
                        <h3 class=" text-7xl lg:text-9xl font-bold text-neutral-100 -mt-4">I did</h3>
                    </div>
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