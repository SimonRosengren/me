<template>
    <div class="">
        <Header class="static md:hidden top-0 bg-neutral-1000/50 backdrop-blur-lg z-10" />
        <Menu class="fixed left-0 top-0 bottom-0 invisible md:visible" :links="links" />
        <MenuSm class="fixed bottom-0 md:invisible" :links="links" />
        <slot />
    </div>
</template> 
    
<script setup lang="ts">
const links = ref([
    { title: 'Home', to: '/', icon: 'bird' },
    { title: 'Blog', to: '/blog', icon: 'blog' },
]);
</script>