<template>
    <div class="relative w-full max-w-md">
      <div 
        class="relative"
        @mouseenter="isHovered = true"
        @mouseleave="isHovered = false"
      >
        <div class="relative">
          <input
            type="text"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
            placeholder="Search..."
            class="w-full pl-10 pr-4 py-2 
              bg-transparent 
              text-white
              rounded-sm
              border
              border-neutral-600
              placeholder-gray-500
              focus:outline-none
              focus:border-gray-500
              transition-colors
              duration-200
              overflow-hidden"
          />
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            class="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <div 
            v-if="isHovered"
            class="absolute inset-0 pointer-events-none rounded-md overflow-hidden"
          >
            <div 
              class="absolute inset-[-10%] -translate-x-full animate-[shine_1s_ease-in-out_forwards] bg-gradient-to-r from-transparent via-gray-400/5 to-transparent"
              style="clip-path: inset(10% 0 10% 0 round 6px);"
            />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  defineProps({
    modelValue: {
      type: String,
      required: true
    }
  });
  
  defineEmits(['update:modelValue']);
  
  const isHovered = ref(false);
  </script>
  
  <style>
  @keyframes shine {
    100% {
      transform: translateX(100%);
    }
  }
  </style>