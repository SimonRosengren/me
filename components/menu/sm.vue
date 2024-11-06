<template>
    <div class="flex px-12 py-7 bg-neutral-1000 text-white w-screen items-center font-thin">
        <nav class="flex justify-between w-full items-center text-base" aria-label="Main navigation">
            <NuxtLink v-for="link in links" :key="link.title" :to="link.to" class="text-white group relative">
                <span class="flex flex-col items-center gap-2">
                    <IconsDynamicLoader :icon-name="link.icon" />{{ link.title }}
                </span>
                <span
                    class="absolute left-0 bottom-0 w-0 h-[2px] bg-neutral-100 transition-all duration-300 group-hover:w-full"></span>
            </NuxtLink>
            <NuxtLink to="https://se.linkedin.com/in/simon-rosengren-b37418128" external>
                <span class="flex flex-col items-center gap-2">
                    <IconsLinkedin class="w-6 h-6" />
                    LinkedIn
                </span>
            </NuxtLink>
            <NuxtLink to="https://github.com/SimonRosengren" external>
                <span class="flex flex-col items-center gap-2">
                    <IconsGithub class="w-6 h-6" />
                    Github
                </span>
            </NuxtLink>
            <NuxtLink to="mailto:simonrosengren123@gmail.com" external>
                <span class="flex flex-col items-center gap-2">
                    <IconsEmail class="w-6 h-6" />
                    Email
                </span>
            </NuxtLink>
        </nav>
    </div>
</template>

<script setup lang="ts">
    defineProps<{ links: { title: string, to: string, icon: string }[] }>();
    const route = useRouter();
</script>