<template>
  <div ref="wrapper" class="border border-neutral-100 p-4 h-64 overflow-auto">
    <div class="h-20 mb-4 bg-neutral-900 flex items-center justify-center">
      Scroll down to see the sticky header
    </div>
    <div ref="stickyElement" class="sticky top-0 transition-all duration-300" :class="{ 'scale-90': isSticky }">
      <div class="bg-neutral-800 p-4 rounded-md shadow transition-all duration-300" 
           :class="{ 'shadow-lg': isSticky }">
        <h2 class="text-xl font-medium">{{ isSticky ? 'I am sticking!' : 'Not sticking yet' }}</h2>
        <p class="text-sm text-neutral-400">Scroll to see the effect</p>
      </div>
    </div>
    <div class="mt-4 space-y-4">
      <p v-for="i in 10" :key="i" class="p-2">
        This is some content to enable scrolling. Keep scrolling to see the header stick to the top.
      </p>
    </div>
  </div>
</template>
  
<script setup lang="ts">
const isSticky = ref(false); // Reactive state for sticky tracking
const stickyElement = ref(null); // Ref to track the DOM element
const wrapper = ref<HTMLElement>();

const observeSticky = (): void => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      isSticky.value = !entry.isIntersecting; // Updates isSticky when it leaves original position
    },
    {
      threshold: [1], // Trigger when fully out of view
      root: wrapper.value
    }
  );

  if (stickyElement.value) { observer.observe(stickyElement.value); } // Start observing the sticky element
};

onMounted(() => {
  observeSticky(); // Initialize observer when the component is mounted
});
</script>
  
