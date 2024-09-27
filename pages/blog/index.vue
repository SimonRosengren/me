<template>
<div class="w-full flex justify-center">
  <nav class="text-white py-12 px-4 max-w-[1330px] grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-6 lg:gap-12">
    <Thumbnail
      v-for="thumbnail in (navigation || [])[0].children"
      class="col-span-2 lg:col-span-3"
      :key="thumbnail.title"
      :title="thumbnail.title"
      :img="thumbnail.image.src"
      :alt="thumbnail.image.alt"
      :keywords="thumbnail.keywords.split(',')",
      :description="thumbnail.description"
     /> 
    
  </nav>
</div>
</template>

<script lang="ts" setup>
const search  = ref('')

const results = ref([]);
const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())

watch(search, async () => {
    results.value = await searchContent(search.value)
})
</script>
