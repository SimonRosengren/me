<template>
    <div
        class="relative border h-8 w-32 p-4 flex rounded-sm justify-between items-center text-neutral-100 hover:backdrop-blur-sm hover:bg-neutral-200/50 cursor-pointer transition-colors"
        :class="filled && '!bg-white !text-black'"
        >
        <div class="flex justify-center items-center w-full whitespace-nowrap">
            <slot name="body" />
        </div>
        <div class="">
            <slot name="trailing" />
        </div>
    </div>
</template>
<script setup lang=ts>
const props = defineProps<{ filled: boolean }>()
</script>