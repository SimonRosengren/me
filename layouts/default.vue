<template>
<div>
    <Header class="fixed top-0 bg-neutral-300/50 backdrop-blur-lg z-10" />
    <slot />
    <Consent v-if="!cookieConsent" @accept="cookieConsent = true" />
    <Footer class="fixed bottom-0 bg-neutral-300/50 backdrop-blur-lg z-10" />
</div>
</template> 

<script setup lang="ts">
const cookieConsent = ref(true);

onMounted(() => {
    if (window) {
        if (window.localStorage.getItem('Cookie-consent') === 'all') {
            cookieConsent.value = true;
        } else {
            cookieConsent.value = false;
        }
    }
})
</script>