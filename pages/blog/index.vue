<template>
<div class="w-full flex justify-center p-4 md:py-12 md:px-0">
  <nav class="text-white py-12 max-w-[1330px] grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-6 lg:gap-12">
    <Thumbnail
      v-for="thumbnail in (navigation || [])[0].children"
      class="col-span-4"
      :key="thumbnail.title"
      :title="thumbnail.title"
      :img="thumbnail.image?.src"
      :alt="thumbnail.image?.alt"
      :keywords="thumbnail?.keywords?.split(',')",
      :description="thumbnail?.description"
      :ttr="thumbnail.ttr"
     /> 
    
  </nav>
</div>
</template>

<script lang="ts" setup>
const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())
</script>
