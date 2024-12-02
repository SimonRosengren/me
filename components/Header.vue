<template>
    <div class="px-6 sm:px-0 w-full h-14 sm:h-20 items-center grid grid-cols-4 md:grid-cols-12 bg-transparent text-neutral-100">
        <div class="hidden sm:block place-self-center col-span-1">
            <IconsBird class="w-8 h-8" />
        </div>
        <div class="hidden sm:flex gap-8">
            <NuxtLink to="#me">
                About
            </NuxtLink>
            <NuxtLink to="#did">
                Experience
            </NuxtLink>
            <NuxtLink to="/blog">
                Blog
            </NuxtLink>
        </div>
        <div class="col-span-full sm:col-span-2 sm:col-start-11 flex justify-between sm:justify-normal sm:gap-5 lg:gap-8">
            <NuxtLink to="https://se.linkedin.com/in/simon-rosengren-b37418128" external target="_blank">
                <IconsLinkedin />
            </NuxtLink>
            <NuxtLink to="https://github.com/SimonRosengren" external target="_blank">
                <IconsGithub />
            </NuxtLink>
            <NuxtLink to="mailto:simonrosengren123@gmail.com" external target="_blank">
                <IconsEmail />
            </NuxtLink>
            <NuxtLink to="https://simonrosengren.bsky.social" external target="_blank">
                <IconsBluesky />
            </NuxtLink>
        </div>
    </div>
</template>