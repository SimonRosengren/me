<template>
<div class="w-full flex flex-col justify-center p-4 md:py-12 md:pl-44 md:pr-8 lg:px-52 xl:px-80">
  
  <nav class="text-white max-w-[1330px] grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-6 lg:gap-12">
    <Thumbnail
      v-for="thumbnail in (navigation || [])[0].children"
      class="col-span-4 sm:col-span-2 md:col-span-4"
      @click="() => navigateTo(thumbnail._path)"
      :key="thumbnail.title"
      :title="thumbnail.title"
      :img="thumbnail.image?.src"
      :alt="thumbnail.image?.alt"
      :keywords="thumbnail.keywords"
      :description="thumbnail.description"
      :ttr="thumbnail.ttr"
     /> 
    
  </nav>
</div>
</template>

<script lang="ts" setup>
const { data: navigation, pending } = await useAsyncData('navigation', () => fetchContentNavigation())
const search = ref('')
definePageMeta({ layout: 'blog' })
</script>
