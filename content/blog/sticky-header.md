---
title: 'A smart sticky header'
description: 'How to know if a sticky header is sticking?'
keywords: 'css, intersection, sticky'
ttr: '15 min'
image:
  src: '/img/plane.jpg'
  alt: 'An image of an airplane winodw.'
head:
  meta:
    - name: 'keywords'
      content: 'css, intersection, sticky'
    - name: 'robots'
      content: 'index, follow'
---

# A Smart Sticky Header

![Airplane Window](/img/plane.jpg)

A nice sticky header that shrinks a bit while sticking is one of those components that I keep having to implement but that gives me a headache every time. I recently built one that turned out pretty good so I thought that - even if it is just to ease my own future headaches - I should document my approach. 

So in short, the task is to build an element that starts of at any position, sticks to the top of the screen oncee it reaches it on scroll and then shrinks a bit to become less invasive once its sticking. 

The finished product shoul behave something like this:

::StickyToTop
  Im sticky
::


## The sticky part

Let's start with the basics - `position: sticky`. MDN discribes it like this: 

The element is positioned according to the normal flow of the document, and then offset relative to its nearest scrolling ancestor and containing block (nearest block-level ancestor), including table-related elements, based on the values of top, right, bottom, and left. The offset does not affect the position of any other elements.

In other words, if we have `top: 0` it will stick to the top **or** any other sticky object that it hits before hitting the top. 

Try it here:

**ELEMENT**

So far so good, now we just need to do something once we're sticking. That's the hard part.

## The sticking part

At the time I'm writing this there is no stanardized api to call to know if somethin is sticking or not. Multiple proposals have beed layed forward but nothing has quite worked out. [This proposal](https://github.com/w3c/csswg-drafts/issues/1656) on W3C closed back in 2018 and recently on The Syntax Podcast episode 812, Una Kravetz from Google spoke about the difficulties surrounding the proposed `:stuck` pseudo class. So until something else is introduced and widely accepted, we jut have to hack our way around it. 

In my most recent approach to this problem I have been using the javascript [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API). This is an API that allows us to listen for events on elements that intersects a certain area. In this example we're just interested on finding out wether the element is sticking to the top or not. We can use an intersection oberver to listen for an event that fire when the element is leaving the viewport upwards. 

  ```vue
    <template>
        <div>

        </div>
    </template>
    <script setup lang="ts">
        const stickyElement = ref<HTMLElement>();
        const isSticky = ref(false);
        const observer = new IntersectionObserver(
            ([entry]) => {
                isSticky.value = !entry.isIntersecting; // Updates isSticky when it leaves original position
            },
            {
                threshold: [1], // Trigger when fully out of view
            }
        );

        observer.observe(stickyElement.value);
    </script>
  ```

## The complete implementation

Let's implement this in a complete component:

```vue
<template>
  <div ref="wrapper" class="border-white p-2">
    <div ref="stickyElement" class="sticky top-0" :class="{ 'scale-90': isSticky }">
      <div class="bg-neutral-800 p-4 transition-transform duration-300">
        <h2 class="text-xl font-medium">{{ isSticky ? 'I am sticking!' : 'Not sticking yet' }}</h2>
        <p class="text-sm text-neutral-400">Scroll to see the effect</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const isSticky = ref(false);
const stickyElement = ref(null);
const wrapper = ref<HTMLElement>();

const observeSticky = (): void => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      isSticky.value = !entry.isIntersecting;
    },
    {
      threshold: [1],
      rootMargin: "0px 0px 0px 0px"
    }
  );

  if (stickyElement.value) { 
    observer.observe(stickyElement.value);
  }
};

onMounted(() => {
  observeSticky();
});
</script>
```

The key parts of this implementation are:

1. We use a `ref` to get a reference to our sticky element
2. We create an Intersection Observer that watches when the element is no longer intersecting with the viewport
3. We use the `isSticky` reactive value to apply different styles when the element is sticking
4. The `scale-90` class is applied conditionally to shrink the header when it's sticking

## Browser compatibility

The Intersection Observer API is well-supported in modern browsers. According to [caniuse.com](https://caniuse.com/?search=intersection%20observer), it has over 95% global support. For older browsers, you might want to use a polyfill.

## Enhancing the experience

You can enhance this basic implementation in several ways:

### Add transition animations

Adding transitions makes the shrinking effect smoother:

```vue
<div 
  ref="stickyElement" 
  class="sticky top-0 transition-all duration-300 ease-in-out" 
  :class="{ 'scale-90': isSticky }"
>
  <!-- Content -->
</div>
```

### Change more than just size

When sticking, you might want to change more than just the size. For example:

```vue
<div 
  ref="stickyElement" 
  class="sticky top-0 transition-all duration-300 ease-in-out" 
  :class="{ 
    'scale-90 bg-opacity-90 shadow-lg': isSticky,
    'bg-opacity-100': !isSticky 
  }"
>
  <!-- Content -->
</div>
```

### Add scroll direction awareness

For an even more sophisticated header, you might want to hide it when scrolling down and show it when scrolling up:

```vue
<script setup lang="ts">
const isSticky = ref(false);
const isVisible = ref(true);
const lastScrollY = ref(0);
const stickyElement = ref(null);

// Intersection Observer code as before

// Add scroll direction detection
const handleScroll = () => {
  const currentScrollY = window.scrollY;
  
  if (isSticky.value) {
    if (currentScrollY > lastScrollY.value) {
      isVisible.value = false; // Scrolling down, hide header
    } else {
      isVisible.value = true; // Scrolling up, show header
    }
  } else {
    isVisible.value = true; // Always visible when not sticky
  }
  
  lastScrollY.value = currentScrollY;
};

onMounted(() => {
  observeSticky();
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
```

## Conclusion

Creating a smart sticky header that changes appearance when it sticks doesn't require any special libraries or complex JavaScript. By combining CSS's `position: sticky` with the Intersection Observer API, we can create a responsive, performant header that enhances the user experience.

The approach outlined here is:
- Lightweight (no dependencies)
- Performant (uses the browser's native APIs)
- Customizable (can be adapted to any design)

Next time you need to implement a sticky header, give this approach a try!
