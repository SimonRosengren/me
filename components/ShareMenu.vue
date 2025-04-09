<template>
  <div class="relative">
    <button @click.stop="isOpen = !isOpen" class="focus:outline-none">
      <IconsShare class="h-4 w-4 hover:text-blue-400 transition-colors" />
    </button>
    
    <div v-if="isOpen" 
         class="absolute right-0 top-6 bg-neutral-900 border border-neutral-700 rounded-md shadow-lg p-2 z-10 min-w-[180px]">
      <div class="flex flex-col gap-2">
        <button @click.stop="copyLink" class="flex items-center gap-2 p-2 hover:bg-neutral-800 rounded w-full text-left">
          <span class="material-icons text-sm">content_copy</span>
          <span>Copy link</span>
        </button>
        <a :href="getTwitterShareUrl()" target="_blank" rel="noopener noreferrer" 
           @click.stop class="flex items-center gap-2 p-2 hover:bg-neutral-800 rounded">
          <IconsTwitter class="h-4 w-4" />
          <span>Share on X</span>
        </a>
        <a :href="getFacebookShareUrl()" target="_blank" rel="noopener noreferrer" 
           @click.stop class="flex items-center gap-2 p-2 hover:bg-neutral-800 rounded">
          <span class="material-icons text-sm">facebook</span>
          <span>Share on Facebook</span>
        </a>
        <a :href="getLinkedInShareUrl()" target="_blank" rel="noopener noreferrer" 
           @click.stop class="flex items-center gap-2 p-2 hover:bg-neutral-800 rounded">
          <IconsLinkedin class="h-4 w-4" />
          <span>Share on LinkedIn</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps<{
  url: string;
  title: string;
}>();

const isOpen = ref(false);

const copyLink = () => {
  navigator.clipboard.writeText(props.url);
  isOpen.value = false;
  // Could add a toast notification here
};

const getTwitterShareUrl = () => {
  return `https://twitter.com/intent/tweet?text=${encodeURIComponent(props.title)}&url=${encodeURIComponent(props.url)}`;
};

const getFacebookShareUrl = () => {
  return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(props.url)}`;
};

const getLinkedInShareUrl = () => {
  return `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(props.url)}`;
};

// Close menu when clicking outside
const handleClickOutside = (event: MouseEvent) => {
  if (isOpen.value) {
    isOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>
