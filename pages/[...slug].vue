<template>
  <div class="w-full px-6 md:px-8 lg:px-0 md:flex justify-center">
    <main class="pt-12 md:pt-16 pb-32 md:pb-16">
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
  @apply prose lg:prose-xl text-white
}  
main h1 {
  @apply text-white mb-10 text-5xl md:text-7xl lg:text-8xl font-bold
}
main h2 {
  @apply text-3xl md:text-4xl mt-10 mb-6 font-semibold
}
main h2 a {
  @apply !text-white no-underline
}
main h3 {
  @apply text-2xl md:text-3xl mt-8 mb-4 font-medium
}
main p {
  @apply text-xl text-white font-normal leading-8 my-6
}
main a {
  @apply text-blue-300 hover:text-blue-400 transition-colors
}
main pre {
  @apply font-mono whitespace-pre my-6 bg-slate-900 px-2 py-3 rounded-lg 
         overflow-x-auto text-sm md:text-base w-full max-w-[calc(100vw-3rem)] md:max-w-full
         shadow-md border border-slate-800;
}
main code {
  @apply font-mono bg-slate-900 px-1.5 py-0.5 md:px-2 md:py-1 rounded-md text-yellow-500 
         text-sm md:text-base break-words;
}
main pre code {
  @apply p-0 bg-transparent text-inherit;
}
main blockquote {
  @apply border-l-4 border-blue-500 pl-6 italic my-8 py-2 text-gray-300 text-xl
}
main ul, main ol {
  @apply my-6 ml-8 text-xl
}
main ul {
  @apply list-disc
}
main ol {
  @apply list-decimal
}
main li {
  @apply my-3
}
main img {
  @apply rounded-lg my-10 mx-auto shadow-xl max-w-full
}
main hr {
  @apply my-10 border-gray-700
}
main table {
  @apply w-full border-collapse my-8 text-lg
}
main th, main td {
  @apply border border-gray-700 px-5 py-3 text-lg
}
main th {
  @apply bg-slate-800 font-semibold
}
main figure {
  @apply my-10
}
main figcaption {
  @apply text-center text-lg text-gray-400 mt-3
}
</style>
