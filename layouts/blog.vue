<template>
    <div class="">
        <Menu class="fixed left-0 top-0 bottom-0" :links="links" />
        <slot />
        <Header class="absolute bottom-0" />
    </div>
</template> 
    
<script setup lang="ts">
const links = ref([
    { title: 'Home', to: '/', icon: 'home' },
    { title: 'Blog', to: '/blog', icon: 'blog' },
]);
</script>