<template>
    <component :is="icon" />
  </template>
  
  <script setup lang="ts">
  interface IProps {
    iconName: string
  }
  const { iconName } = defineProps<IProps>();
  

  const icon = defineAsyncComponent(() => import(
    `../icons/${iconName}.vue`
  ));
  
  </script>
  