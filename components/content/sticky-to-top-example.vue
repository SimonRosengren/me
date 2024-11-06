<template>
  <div ref="wrapper" class="border-white p-2">
    <div ref="stickyElement" class="sticky -top-[1px]">
      <div class="relative">
        <div class="absolute top-0 left-0 right-0 !bg-neutral-100 !text-black p-2 text-lg">
          {{ isSticky ? 'Sticking' : 'Not sticking' }}
        </div>
      </div>
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
  