<template>
<div>
    <Header class="fixed top-0 z-50" />
    <slot />
    <Consent v-if="!cookieConsent" @accept="cookieConsent = true" />
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