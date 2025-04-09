<template>
    <div class="p-4 border border-neutral-600 aspect-[3/4] rounded-sm hover:bg-neutral-400/5 active:bg-neutral-400/10 cursor-pointer transition-all">
        <div class="w-full flex justify-between text-xs">
            <h4 class="flex gap-2 items-center"><IconsClock class="h-4 w-4" />{{ ttr }}</h4>
            <ShareMenu :url="getFullUrl()" :title="title" />
        </div>
        <div class="h-full flex flex-col justify-between pb-3 pt-12">
            <NuxtImg :src="img" class="w-full" />
            <h2 class="text-2xl max-w-[60%] font-semibold">{{ title }}</h2>
        </div>
        <div class="w-full flex justify-between text-xs">
            <ul class="flex gap-2 text-neutral-600">
                <li v-for="(keyword, index) in (keywords || '').split(',')">
                    <div v-if="index < 3" class="text-xs ">
                        {{ keyword }}
                    </div>
                </li>
            </ul>
            
        </div>
    </div>
</template>
<script setup lang="ts">
const props = defineProps<{ 
    img: string, 
    title: string, 
    description: string, 
    keywords?: string, 
    ttr?: string,
    path?: string 
}>();

const getFullUrl = () => {
    const baseUrl = window.location.origin;
    return `${baseUrl}${props.path || ''}`;
};
</script>
