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

![Mountain landscape](/img/mountain.jpg)

Despite the fact that most modern browsers introduced input attributes like `required` and `pattern` along with HTML5 - and the css pseudo class `:invalid` back in 2010 I often see form validation through overly complex javascript functions. I'm not saying that javascript has no place in form validation - but more often than not - it is not needed. 

Let's explore how we can create elegant form validation using only Tailwind CSS and HTML5's built-in validation features:

<form class="space-y-6">
    <div class="space-y-4">
        <label class="block">
            <span class="block text-sm font-medium mb-2">Email</span>
            <input 
              type="email" 
              required
              placeholder="you@example.com"
              class="peer w-full px-3 py-2 bg-neutral-900 border border-neutral-700 rounded-md 
                focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:border-transparent
                transition-all duration-200"
            />
            <p class="mt-2 invisible peer-invalid:visible text-red-500 text-sm">
              Please provide a valid email address.
            </p>
        </label>
        <label class="block">
        <span class="block text-sm font-medium mb-2">Password</span>
        <input 
          type="password" 
          required
          minlength="8"
          placeholder="••••••••"
          class="peer w-full px-3 py-2 bg-neutral-900 border border-neutral-700 rounded-md 
                focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:border-transparent
                transition-all duration-200"
        />
        <p class="mt-2 invisible peer-invalid:visible text-red-500 text-sm">
          Password must be at least 8 characters.
        </p>
      </label>
    </div>
    <button 
      type="submit"
      class="w-full py-2 px-4 bg-neutral-800 hover:bg-neutral-700 
        border border-neutral-600 rounded-md
        transition-colors duration-200
        text-sm font-medium"
    >
      Sign in
    </button>
</form>

In my examples I'll use tailwind but the idea is the same in vanilla css. Here's an example of an input that is required and expects an email

```html {4-6,7} meta-info=val
<form class="space-y-6">
    <div class="space-y-4">
        <label class="block">
            <span class="block text-sm font-medium mb-2">Email</span>
            <input 
              type="email" 
              required
              placeholder="you@example.com"
              class="peer w-full px-3 py-2 bg-neutral-900 border border-neutral-700 rounded-md 
                focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:border-transparent
                transition-all duration-200"
            />
            <p class="mt-2 invisible peer-invalid:visible text-red-500 text-sm">
              Please provide a valid email address.
            </p>
        </label>
        <label class="block">
        <span class="block text-sm font-medium mb-2">Password</span>
        <input 
          type="password" 
          required
          minlength="8"
          placeholder="••••••••"
          class="peer w-full px-3 py-2 bg-neutral-900 border border-neutral-700 rounded-md 
                focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:border-transparent
                transition-all duration-200"
        />
        <p class="mt-2 invisible peer-invalid:visible text-red-500 text-sm">
          Password must be at least 8 characters.
        </p>
      </label>
    </div>
    <button 
      type="submit"
      class="w-full py-2 px-4 bg-neutral-800 hover:bg-neutral-700 
        border border-neutral-600 rounded-md
        transition-colors duration-200
        text-sm font-medium"
    >
      Sign in
    </button>
</form>
```
