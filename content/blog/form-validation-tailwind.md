---
title: 'Form validation with tailwind'
description: 'Validate forms using nothing but tailwind'
keywords: 'tailwind,css,html5,form,validation'
ttr: '10 min'
image:
  src: '/img/mountain.jpg'
  alt: 'An image of two prisms.'
head:
  meta:
    - name: 'keywords'
      content: 'tailwind,css,html5,form,validation'
    - name: 'robots'
      content: 'index, follow'
---

# Form validation with tailwind

![Prisms](/img/mountain.jpg)

Despite the fact that most modern browsers introduced input attributes like `required` and `pattern` along with HTML5 - and the css pseudo class `:invalid` back in 2010 I often see form validation through overly complex javascript functions. I'm not saying that javascript has no place in form validation - but more often than not - it is not needed. 

<div class="bg-neutral-100 rounded-md p-4">
<form>
  <label class="block">
    <span class="block text-sm font-medium text-slate-700">Email</span>
    <input type="email" class="peer border-neutral-1000 rounded-sm focus:!border-none"/>
    <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
      Please provide a valid email address.
    </p>
  </label>
</form>
</div>

In my examples I'll use tailwind but the idea is the same in vanilla css. Here's an example of an input that is required and expects an email

```vue
<input type="email" class="border-none rounded-sm" >
```