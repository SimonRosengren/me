<template>
    <div class="rounded-xl p-2 flex flex-col h-96 transition-all">
        <div class="min-h-[60%] h-[60%] rounded-xl relative overflow-hidden">
            <NuxtImg :src="img" class="rounded-xl w-full absolute top-0 left-0 right-0 mx-auto" />
        </div>
        <div class="flex flex-col justify-between h-full pt-4">
            <div>
                <h2 class="text-lg font-semibold leading-5 mb-2">{{ title }}</h2>
                <p class="text-xs text-ellipsis line-clamp-2">{{ description }}</p>
            </div>
            <ul class="flex gap-2">
                <li v-for="(keyword, index) in keywords">
                    <div v-if="index < 3" class="rounded-lg py-1 px-2 text-xs border border-blue-100 text-blue-100">
                        {{ keyword }}
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script setup lang="ts">
defineProps<{ img: string, title: string, description: string, keywords: string[] }>();
</script>