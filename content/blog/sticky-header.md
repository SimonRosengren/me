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

# Multiple Prisma clients

![Prisms](/img/plane.jpg)

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