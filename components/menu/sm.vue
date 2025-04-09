<template>
    <div ref="menuRef" 
         class="fixed bottom-0 left-0 flex px-12 py-7 bg-neutral-1000 text-white w-screen items-center font-thin transition-transform duration-300"
         :class="{ 'translate-y-full': isHidden }">
        <nav class="flex gap-12 w-full items-center text-base" aria-label="Main navigation">
            <NuxtLink v-for="link in links" :key="link.title" :to="link.to" class="text-white group relative">
                <span class="flex flex-col items-center gap-2">
                    <IconsDynamicLoader :icon-name="link.icon" />{{ link.title }}
                </span>
                <span
                    class="absolute left-0 bottom-0 w-0 h-[2px] bg-neutral-100 transition-all duration-300 group-hover:w-full"></span>
            </NuxtLink>
        </nav>
    </div>
</template>

<script setup lang="ts">
    defineProps<{ links: { title: string, to: string, icon: string }[] }>();
    const route = useRouter();
    
    const menuRef = ref<HTMLElement | null>(null);
    const isHidden = ref(false);
    const lastScrollY = ref(0);
    const scrollThreshold = 20; // Minimum scroll amount before triggering hide/show
    let scrollTimer: number | null = null;
    
    onMounted(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
    });
    
    onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll);
        if (scrollTimer) clearTimeout(scrollTimer);
    });
    
    const handleScroll = () => {
        if (scrollTimer) clearTimeout(scrollTimer);
        
        scrollTimer = window.setTimeout(() => {
            const currentScrollY = window.scrollY;
            
            // Only trigger if we've scrolled more than the threshold
            if (Math.abs(currentScrollY - lastScrollY.value) > scrollThreshold) {
                // Scrolling down - hide menu
                if (currentScrollY > lastScrollY.value) {
                    isHidden.value = true;
                } 
                // Scrolling up - show menu
                else {
                    isHidden.value = false;
                }
                
                lastScrollY.value = currentScrollY;
            }
        }, 50); // Small delay to prevent jumpiness
    };
</script>
