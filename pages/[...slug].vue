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
main code {
  @apply font-mono bg-slate-900 px-2 py-1 rounded-md text-yellow-500
}
main blockquote {
  @apply border-l-4 border-blue-500 pl-4 italic my-6 text-gray-300
}
main ul, main ol {
  @apply my-4 ml-6
}
main ul {
  @apply list-disc
}
main ol {
  @apply list-decimal
}
main li {
  @apply my-2
}
main img {
  @apply rounded-lg my-8 mx-auto shadow-lg
}
main hr {
  @apply my-8 border-gray-700
}
main table {
  @apply w-full border-collapse my-6
}
main th, main td {
  @apply border border-gray-700 px-4 py-2
}
main th {
  @apply bg-slate-800
}
main figure {
  @apply my-8
}
main figcaption {
  @apply text-center text-sm text-gray-400 mt-2
}
</style>
