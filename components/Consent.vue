<template>
    <div class="fixed bottom-20 w-5/6 left-0 right-0 md:max-w-[650px] max-h-80
     bg-neutral-1000/30 backdrop-blur-md border border-white px-6 py-4 m-auto z-20 text-white rounded-sm">
        This site uses cookies to provide you with the best possible user experience. By clicking "Accept",
         you agree to the storing of cookies on your device to enhance site navigation and to analyze site usage with Google Analytics (GA4).
        
        <div class="w-full flex gap-6 justify-end mt-4">
            <Button>
                <template #body>
                 Essential only
                </template>
            </Button>
            <Button filled @click="handleAccept">
                <template #body>
                    Accept
                </template>
            </Button>
        </div>
    </div>
</template>

<script setup lang="ts">
    const { gtag, grantConsent, revokeConsent } = useGtag();
    const emit = defineEmits(['accept']);
    const handleAccept = () => {
        grantConsent();
        emit('accept');
        window.localStorage.setItem('Cookie-consent', 'all')
    }
</script>