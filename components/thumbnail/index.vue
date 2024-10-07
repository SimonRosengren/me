<template>
    <!-- <div class="rounded-xl p-3 flex flex-col h-96 transition-all">
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
    </div> -->
    <div class="p-4 border border-neutral-600 aspect-[3/4] rounded-sm hover:bg-neutral-400/5 active:bg-neutral-400/10 cursor-pointer transition-all">
        <div class="w-full flex justify-between text-xs">
            <h4 class="flex gap-2 items-center"><IconsClock class="h-4 w-4" />{{ ttr }}</h4>
            <IconsShare class="h-4 w-4" />
        </div>
        <div class="h-full flex flex-col justify-between pb-3 pt-12">
            <NuxtImg :src="img" class="w-full" />
            <h2 class="text-2xl max-w-[60%] font-semibold">{{ title }}</h2>
        </div>
        <div class="w-full flex justify-between text-xs">
            <ul class="flex gap-2 text-neutral-600">
                <li v-for="(keyword, index) in keywords">
                    <div v-if="index < 3" class="text-xs ">
                        {{ keyword }}
                    </div>
                </li>
            </ul>
            
        </div>
    </div>
</template>
<script setup lang="ts">
defineProps<{ img: string, title: string, description: string, keywords: string[], ttr?: string }>();
</script>