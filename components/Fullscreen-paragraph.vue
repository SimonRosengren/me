<template>
    <div class="bg-neutral-300 h-screen flex items-center px-5 sm:px-12 md:px-48 lg:px-48 xl:px-96 relative">
        <div class="w-full flex flex-col lg:flex-row">
            <div class="hidden lg:flex flex-col justify-center pr-10" :class="divide && 'border-r'">
                <slot name="header-lg" />
            </div>
            <h2 class="lg:hidden text-6xl mb-6 text-neutral-100">
                <slot name="header" />
            </h2>
            <div class="text-neutral-100 text-base leading-6 md:text-xl lg:text-2xl lg:pl-10">
                <slot name="body" />
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
defineProps<{ divide: boolean }>()
</script>