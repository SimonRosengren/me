<template>
    <div class="flex flex-col py-12 px-4 text-white">
        <IconsBird class="w-10 h-10 self-center mb-20" />
        <nav class="flex flex-col gap-3" aria-label="Main navigation">
            <NuxtLink v-for="link in links" :key="link.title" :to="link.to" class="text-white group relative">
                <span class="flex items-center gap-2">
                    <IconsDynamicLoader class="w-4 h-4" :icon-name="link.icon" />{{ link.title }}
                </span>
                <span
                    class="absolute left-0 bottom-0 w-0 h-[2px] bg-neutral-100 transition-all duration-300 group-hover:w-full"></span>
            </NuxtLink>
        </nav>
    </div>
</template>

<script setup lang="ts">
    defineProps<{ links: { title: string, to: string, icon: string }[] }>();
</script>