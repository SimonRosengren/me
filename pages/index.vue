<template>
    <div class="h-screen font-display bg-transparent relative">
        <MagicScene />
        <section id="home">
            <div class="h-screen" />
            <div class="flex flex-col justify-center h-screen px-4 lg:px-32 fixed top-0">
                <div class="flex flex-col gap-5">
                    <div class="md:border-b lg:border-r font-bold pb-3 pr-64">
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
            <FullscreenParagraph class=" bg-[url('public/cover1.png')] bg-center bg-fixed bg-cover" divide>
                <template #header-lg>
                    <h2 class=" text-8xl lg:text-9xl font-bold text-neutral-100">Who</h2>
                    <h3 class=" text-8xl lg:text-9xl font-bold text-neutral-100 -mt-4">am I</h3>
                </template>
                <template #header>Who am I</template>
                <template #body>
                    <span class="font-bold">
                        <p>I'm a full-stack developer who thrives on exploring the ever-evolving tech landscape. From designing and crafting seamless user experiences to diving deep into the backend, I find joy in every aspect of the development process.</p>
                        <br>
                        <p>With a passion for innovation and a love for continuous learning, I'm constantly seeking new challenges to expand my skillset. Whether it's building elegant front-end interfaces or architecting robust server-side solutions, I'm up for the task. Let's build something cool together.</p>
                    </span>
                </template>
            </FullscreenParagraph>
        </section>
        <section id="do">
            <FullscreenParagraph divide>
                <template #header-lg>
                    <h2 class=" text-9xl lg:text-9xl font-bold text-neutral-100">What</h2>
                    <h3 class=" text-7xl lg:text-9xl font-bold text-neutral-100 -mt-4">I do</h3>
                </template>
                <template #header>What I do</template>
                <template #body>
                    <span class="font-bold">
                    I work as a Full-Stack Developer at a startup, contributing in DevOps, Backend, aswell as Frontend development. Additionally, I have the role of Lead Frontend developer, focusing on user interface and experience. This role involves managing deployment, optimizing automation, designing server-side solutions, and pushing the boundaries of web applications (especially on Safari...). It combines technical expertise with leadership to support the startup's innovative solutions.
                    </span>
                </template>
            </FullscreenParagraph>
        </section>
        <section id="did">
            <FullscreenParagraph>
                <template #header-lg>
                    <h2 class=" text-7xl lg:text-9xl font-bold text-neutral-100">What</h2>
                    <h3 class=" text-7xl lg:text-9xl font-bold text-neutral-100 -mt-4">I did</h3>
                </template>
                <template #header>What I did</template>
                <template #body>
                    <Timeline class="lg:-ml-10" />
                </template>
            </FullscreenParagraph>
        </section>

    </div>
</template>

<script lang="ts" setup>
const openMail = () => {
    navigateTo('mailto:simonrosengren123@gmail.com', { external: true })
}
</script>