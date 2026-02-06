# dom-utils# dom-utils 🛠️

`dom-utils` is a lightweight collection of JavaScript utilities for common DOM manipulation tasks. It provides a clean and consistent API for selecting elements, managing events, and modifying the DOM, helping you write cleaner and more maintainable front-end code.

## Features

- **Element Selection**: Simplified wrappers for `querySelector` and `querySelectorAll`.
- **Event Management**: Easy-to-use methods for attaching and detaching event listeners.
- **DOM Manipulation**: Utilities for creating, appending, and removing elements.
- **Class and Attribute Handling**: Convenient methods for managing element classes and attributes.

## Usage

```javascript
import { $, $$, on, addClass } from './dom-utils.js';

// Select an element
const btn = $('#my-button');

// Add a click listener
on(btn, 'click', () => {
  console.log('Button clicked!');
  addClass(btn, 'active');
});

// Select multiple elements
const items = $$('.list-item');
items.forEach(item => {
  // ...
});
```
