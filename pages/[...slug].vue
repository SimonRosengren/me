<template>
  <div class="w-full px-6 md:px-8 lg:px-0 md:flex justify-center">
    <main>
      <ContentDoc />
    </main>
  </div>
</template>

  <script setup lang="ts">
    definePageMeta({
        layout: 'blog'
    })
  </script>

  <style>
main {
  @apply prose-sm lg:prose text-white
}  
main h1 {
  @apply text-white mb-8 text-5xl md:text-7xl lg:text-8xl font-bold
}
main h2 a {
  @apply !text-white no-underline
}
main p {
  @apply prose text-white font-normal  leading-7
}
main a {
  @apply text-blue-300
}
main pre {
  @apply font-mono whitespace-pre my-4 bg-slate-900 px-4 py-2 md:px-8 md:py-6 rounded-md overflow-x-scroll
}
</style>