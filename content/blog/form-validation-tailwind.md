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
    <form>
      <label class="block">
        <span class="block text-sm font-medium text-neutral-100 mb-2">
          Email
        </span>
        <input 
          type="email" 
          class="peer border-neutral-1000
          bg-neutral-100 px-2
            rounded-sm focus:!border-none"
        />
        <p class="mt-2 invisible
        peer-invalid:visible
          text-pink-600 text-sm">
          Please provide a valid email address.
        </p>
      </label>
    </form>
  ```

## How it works

The magic happens with a few key HTML5 attributes and Tailwind's peer modifiers:

### HTML5 Validation Attributes

- `required`: Specifies that an input field must be filled out
- `type="email"`: Validates that the input is a properly formatted email address
- `minlength="8"`: Ensures a minimum character length (great for passwords)
- `pattern`: Allows custom regex validation patterns

### Tailwind's Peer Classes

Tailwind's peer modifier is what makes this approach so elegant:

```html
<input class="peer" />
<p class="invisible peer-invalid:visible">Error message</p>
```

The `peer` class marks the input as a reference element. Then, we can use `peer-invalid:visible` on the error message to show it only when the input is invalid.

## More Advanced Examples

### Pattern Validation

For more complex validation like phone numbers, you can use the `pattern` attribute:

```html
<input
  type="tel"
  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
  class="peer"
  placeholder="123-456-7890"
/>
<p class="invisible peer-invalid:visible text-red-500">
  Please enter a valid phone number (123-456-7890)
</p>
```

### Custom Styling for Valid/Invalid States

You can also style the input itself based on its validation state:

```html
<input
  required
  type="text"
  class="peer border border-neutral-700
         valid:border-green-500 invalid:border-red-500
         focus:outline-none"
/>
```

### Showing Different Messages for Different Errors

For more specific error messages, you can combine with JavaScript:

```html
<input
  id="password"
  type="password"
  required
  minlength="8"
  class="peer"
/>
<p id="required-error" class="hidden">Password is required</p>
<p id="length-error" class="hidden">Password must be at least 8 characters</p>

<script>
  const input = document.getElementById('password');
  const requiredError = document.getElementById('required-error');
  const lengthError = document.getElementById('length-error');
  
  input.addEventListener('input', () => {
    if (input.validity.valueMissing) {
      requiredError.classList.remove('hidden');
      lengthError.classList.add('hidden');
    } else if (input.validity.tooShort) {
      requiredError.classList.add('hidden');
      lengthError.classList.remove('hidden');
    } else {
      requiredError.classList.add('hidden');
      lengthError.classList.add('hidden');
    }
  });
</script>
```

## Form Submission

To prevent invalid forms from being submitted, the browser will automatically block submission and focus on the first invalid field. However, you can also handle this with JavaScript for more control:

```html
<form id="myForm" class="space-y-4" novalidate>
  <!-- Form fields -->
  <button type="submit" class="btn">Submit</button>
</form>

<script>
  const form = document.getElementById('myForm');
  
  form.addEventListener('submit', (e) => {
    if (!form.checkValidity()) {
      e.preventDefault();
      // Custom handling for invalid form
    }
  });
</script>
```

## Conclusion

HTML5 validation combined with Tailwind's peer modifiers gives you a powerful, lightweight approach to form validation:

- No dependencies or extra libraries needed
- Accessible by default (browsers provide error messages to screen readers)
- Progressive enhancement (works even if JavaScript fails)
- Customizable styling with Tailwind

Next time you need to implement form validation, consider this approach before reaching for a complex JavaScript solution. It's often all you need for most common validation scenarios.
