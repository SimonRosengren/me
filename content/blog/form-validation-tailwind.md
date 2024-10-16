---
title: 'Form validation with tailwind'
description: 'Validate forms using nothing but tailwind'
keywords: 'tailwind,css,html5,form,validation'
ttr: '10 min'
image:
  src: '/img/prism.jpg'
  alt: 'An image of two prisms.'
head:
  meta:
    - name: 'keywords'
      content: 'tailwind,css,html5,form,validation'
    - name: 'robots'
      content: 'index, follow'
---

# Form validation with tailwind

![Prisms](/img/prism.jpg)

Despite the fact that most modern browsers introduced input attributes like `required` and `pattern` along with HTML5 - and the css pseudo class `:invalid` back in 2010 I often see form validation through overly complex javascript functions. I'm not saying that javascript has no place in form validation - but more often than not - it is not needed. 

<form>
    <input type="email" required class="border-none rounded-sm p-2 invalid:border-red-800" placeholed="Email..." >
</form>

In my examples I'll use tailwind but the idea is the same in vanilla css. Here's an example of an input that is required and expects an email

```vue
<input type="email" class="border-none rounded-sm" >
```