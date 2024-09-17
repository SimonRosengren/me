<template>
  <main class="p-20">
    <input v-model="search">

    <pre>{{ results }} </pre>
  </main>
</template>

<script lang="ts" setup>
const search  = ref('')

const results = ref([]);

watch(search, async () => {
    results.value = await searchContent(search.value)
})
</script>
