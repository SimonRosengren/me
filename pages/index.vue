<template>
    <div class="h-screen font-display bg-transparent relative">
        <MagicScene />
        <section id="home">
            <div class="h-screen" />
            <div class="flex flex-col justify-center h-screen px-4 lg:px-32 fixed top-0">
                <div class="flex flex-col gap-5">
                    <div class="md:border-b lg:border-r font-medium pb-3 pr-64">
                        <div class=" max-w-xs lg:max-w-6xl">
                            <h2 class="lg:text-9xl leading-[.9] text-7xl text-neutral-100 font-bold">Hello.</h2>
                            <h2 class="lg:text-9xl leading-[.9] text-7xl text-neutral-100 font-bold">I am Simon</h2>
                        </div>
                    </div>
                    <nav class="flex flex-col gap-5">
                        <NuxtLink to="/#me" class="text-neutral-100 text-2xl relative group w-fit">
                            Me
                            <span class="absolute left-0 bottom-0 w-0 h-[2px] bg-neutral-100 transition-all duration-300 group-hover:w-full"></span>
                        </NuxtLink>
                        <NuxtLink to="/blog" class="text-neutral-100 text-2xl relative group w-fit">
                            Blog
                            <span class="absolute left-0 bottom-0 w-0 h-[2px] bg-neutral-100 transition-all duration-300 group-hover:w-full"></span>
                        </NuxtLink>
                    </nav>
                </div>

            </div>
        </section>
        <section id="me">
            <FullscreenParagraph class=" bg-[url('public/img/cover1.png')] sm:bg-center bg-fixed bg-[length:250%_100vh] sm:bg-cover bg-no-repeat" divide>
                <template #header-lg>
                    <h2 class=" text-8xl lg:text-9xl font-medium text-neutral-100">Who</h2>
                    <h3 class=" text-8xl lg:text-9xl font-medium text-neutral-100 -mt-4">am I</h3>
                </template>
                <template #header>Who am I</template>
                <template #body>
                    <div class="bg-neutral-200/5 backdrop-blur-md p-6 rounded-lg">
                        <p>I am a curious developer, tinkerer and father with 
                            <span class="relative group">
                                <div class="absolute w-60 -ml-[120px] mb-2 bottom-full left-1/2 invisible group-hover:visible p-2 bg-neutral-200 text-white rounded-md text-sm flex flex-col items-center justify-center">
                                    <span class="font-semibold">Bachelor of computer science</span>
                                    <span>Game development</span>
                                    <span class="italic">2018</span>
                                </div>
                                {{ new Date().getFullYear() - 2018 }}
                            </span> 
                            years of experience in building, designing and innovating web applications. I thrive when I get to be involved in the entire stack. Front- to backend, product innovation and design.</p>
                        <br>
                        <p>As any good developer should, I see myself as a lifetime learner driven by my curiousity. Let's build something cool together.</p>
                    </div>
                </template>
            </FullscreenParagraph>
        </section>
        <section id="do">
            <FullscreenParagraph divide>
                <template #header-lg>
                    <h2 class=" text-9xl lg:text-9xl font-medium text-neutral-100">What</h2>
                    <h3 class=" text-7xl lg:text-9xl font-medium text-neutral-100 -mt-4">I do</h3>
                </template>
                <template #header>What I do</template>
                <template #body>
                    <p class="font-normal">
                        I work as a fullstack developer for an innovative startup where I have the role of frontend-lead. Being part of a small time at a small startup allows me to use my skills in everything from development to product design. 
                    </p>
                    <br />
                    <p class="font-normal">
                        I love the startup world. I feel close to the core of innovation and that is where I see myself continue growing. 
                    </p>
                </template>
            </FullscreenParagraph>
        </section>
        <section id="did">
            <FullscreenParagraph :divide="false">
                <template #header-lg>
                    <h2 class=" text-7xl lg:text-9xl font-medium text-neutral-100">What</h2>
                    <h3 class=" text-7xl lg:text-9xl font-medium text-neutral-100 -mt-4">I did</h3>
                </template>
                <template #header>What I did</template>
                <template #body>
                    <Timeline class="lg:-ml-10" />
                </template>
            </FullscreenParagraph>
        </section>

    </div>
</template>