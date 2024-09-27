<template>
    <div class="rounded-xl bg-neutral-100 p-1 flex flex-col h-96">
        <div class="max-h-[60%] min-h-[60%] rounded-xl relative overflow-hidden">
            <NuxtImg :src="img" class="rounded-xl w-full absolute top-0 left-0 right-0 mx-auto" />
        </div>
        <div class="text-black flex flex-col h-full">
            <h2 class="text-lg font-semibold">{{ title }}</h2>
            <p class="text-sm">{{ description }}</p>
        </div>
    </div>
</template>
<script setup lang="ts">
defineProps<{ img: string, title: string, description: string, keywords: string[] }>();
</script>