<template>
    <div class="flex flex-col pb-12 pt-12 px-4 text-white w-28 items-center font-thin">
        <IconsBird class="mb-16" />
        <nav class="flex flex-col gap-3 items-center text-base" aria-label="Main navigation">
            <NuxtLink v-for="link in links" :key="link.title" :to="link.to" class="text-white group relative">
                <span class="flex items-center gap-2">
                    {{ link.title }}
                </span>
                <span
                    class="absolute left-0 bottom-0 w-0 h-[2px] bg-neutral-100 transition-all duration-300 group-hover:w-full"></span>
            </NuxtLink>
        </nav>
        <nav class="flex flex-col gap-5 items-center mt-auto" aria-label="Social navigation">
            <NuxtLink to="https://se.linkedin.com/in/simon-rosengren-b37418128" external>
                <IconsLinkedin class="w-5 h-5" />
            </NuxtLink>
            <NuxtLink to="https://github.com/SimonRosengren" external>
                <IconsGithub class="w-5 h-5" />
            </NuxtLink>
            <NuxtLink to="mailto:simonrosengren123@gmail.com" external>
                <IconsEmail class="w-5 h-5" />
            </NuxtLink>
        </nav>
    </div>
</template>

<script setup lang="ts">
    defineProps<{ links: { title: string, to: string, icon: string }[] }>();
    const route = useRouter();
</script>