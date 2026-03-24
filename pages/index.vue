<template>
    <div class="h-screen font-display bg-transparent relative">
        <MagicScene />
        <section id="home">
            <div class="h-screen" />
            <div class="h-screen fixed top-0 w-full">
                <div class="px-4 sm:px-0 h-full w-full flex items-center">
                    <div class="grid grid-cols-4 md:grid-cols-12 w-full">
                        <div class="sm:hidden h-full w-full text-white mb-6">
                            <IconsBird class="w-full h-full" />
                        </div>
                        <div class="sm:col-start-2 col-span-full">
                            <h2 class="text-neutral-100 text-6xl md:text-7xl lg:text-9xl font-normal">
                                    Hello,
                                <br />
                                    I am Simon
                            </h2>
                        </div>
                        <div class="sm:col-start-2 col-span-full flex gap-5 mt-8">
                            <NuxtLink class="rounded-full w-fit py-2 px-8 h-12 border border-neutral-100 bg-neutral-100 text-neutral-1000 text-xl font-normal hover:bg-white/80 border-transparent transition-all" to="#me">
                                About
                            </NuxtLink>
                            <NuxtLink class="rounded-full w-fit py-2 px-8 h-12 border border-neutral-100 bg-neutral-1000 text-neutral-100 text-xl font-normal hover:bg-white/10 transition-all" to="/blog">
                                Blog
                            </NuxtLink>
                        </div>

                    </div>
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
                        I work as a fullstack developer for an innovative startup where I have the role of frontend-lead. Being part of a small team at a small startup allows me to use my skills in everything from development to product design. 
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
    <div class="px-8 py-8 sm:hidden">
      <div class="sm:col-start-2 col-span-full flex gap-5 mt-8">
        <NuxtLink to="https://keyquake.site" class="text-white group relative" :external="true" target="_blank">
          Keyquake
                            <span class="absolute left-0 bottom-0 w-0 h-[2px] bg-neutral-100 transition-all duration-300 group-hover:w-full"/>
                            </NuxtLink>
                            <NuxtLink to="https://colorquake.vercel.app" class="text-white group relative" :external="true" target="_blank">
                            Colorquake
                            <span class="absolute left-0 bottom-0 w-0 h-[2px] bg-neutral-100 transition-all duration-300 group-hover:w-full"/>
                            </NuxtLink>
                        </div>
    </div>

    </div>
</template>
