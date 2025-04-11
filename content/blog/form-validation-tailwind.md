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

## The JavaScript Graveyard

Remember the days when validating a form meant writing 200 lines of JavaScript, only to have it break when a user entered an emoji? Those were dark times. I've seen codebases where the form validation logic was longer than the entire backend API. It's like bringing a flamethrower to light a birthday candle.

Let's look at some more practical examples that might save you from the JavaScript validation purgatory.

## Pattern Matching Without the Pain

Need to validate a specific format? The `pattern` attribute is your friend:

```html
<input 
  type="text" 
  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
  placeholder="123-456-7890"
  class="peer w-full px-3 py-2 bg-neutral-900 border border-neutral-700 rounded-md 
    focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:border-transparent"
/>
<p class="mt-2 invisible peer-invalid:visible text-red-500 text-sm">
  Please enter a valid phone number (123-456-7890).
</p>
```

This gives you a phone number input that validates the format without a single line of JavaScript. Your therapy bills will thank you.

## The "Are You Sure You Want to Submit This Mess?" Validator

Sometimes you want to validate the form only when the user tries to submit it. Here's how:

```html
<form class="space-y-6" novalidate>
  <!-- Your inputs here -->
  <button 
    type="submit"
    class="w-full py-2 px-4 bg-neutral-800 hover:bg-neutral-700 
      border border-neutral-600 rounded-md
      transition-colors duration-200
      text-sm font-medium"
    onclick="this.form.reportValidity()"
  >
    Submit If You Dare
  </button>
</form>
```

The `novalidate` attribute prevents automatic validation, and `reportValidity()` triggers it manually when the user clicks submit. It's like telling your form, "Hold your horses until I say go."

## Custom Validation Styling

Want to make invalid fields look like they've committed a crime? Tailwind's got you covered:

```html
<input 
  type="email" 
  required
  class="peer w-full px-3 py-2 bg-neutral-900 border border-neutral-700 rounded-md 
    focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:border-transparent
    invalid:border-red-500 invalid:text-red-500
    valid:border-green-500 valid:text-green-500"
/>
```

Now your fields will visually shame users for their typos. It's the digital equivalent of a red pen mark on a school paper.

## The "I'm Watching You" Real-time Validation

For the ultimate user experience, combine the power of Tailwind with some minimal JavaScript for real-time feedback:

```html
<div class="relative">
  <input 
    type="password" 
    id="password"
    required
    minlength="8"
    class="peer w-full px-3 py-2 bg-neutral-900 border border-neutral-700 rounded-md 
      focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:border-transparent"
    oninput="checkPasswordStrength(this.value)"
  />
  <div id="password-strength" class="mt-2 text-sm"></div>
</div>

<script>
  function checkPasswordStrength(password) {
    const strengthEl = document.getElementById('password-strength');
    if (password.length < 8) {
      strengthEl.className = 'mt-2 text-sm text-red-500';
      strengthEl.textContent = 'Password is shorter than my attention span';
    } else if (!/[A-Z]/.test(password) || !/[0-9]/.test(password)) {
      strengthEl.className = 'mt-2 text-sm text-yellow-500';
      strengthEl.textContent = 'Add uppercase and numbers (like your WiFi password)';
    } else {
      strengthEl.className = 'mt-2 text-sm text-green-500';
      strengthEl.textContent = 'Password strength: Fort Knox approved!';
    }
  }
</script>
```

See? We're using JavaScript, but it's just a sprinkle, not the whole jar.

## Conclusion

HTML5 validation with Tailwind CSS is like having a security guard who's also a fashion model – functional and good-looking. Before you reach for that validation library or write a complex validation function, ask yourself: "Could I do this with just HTML and CSS?" The answer is often yes.

Remember, the best code is the code you don't have to write. Your users get instant feedback, your bundle size stays slim, and you get to keep your sanity. It's a win-win-win situation.

Now go forth and validate with style! Your users (and your future self) will thank you.
