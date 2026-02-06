# dom-utils 🛠️

`dom-utils` is a collection of functional wrappers around standard DOM APIs, designed to provide a more consistent and error-resilient way to interact with the Document Object Model.

## Key Features

- **Resilient Selection**: Wrappers for `querySelector`, `querySelectorAll`, `getElementById`, and others that handle missing elements or invalid selectors gracefully with warnings instead of hard errors.
- **Context-Aware Queries**: Selection methods can take an optional parent element as the first argument, or default to `document`.
- **Dynamic Collections**: Utilities like `NodeListFrom` and `HTMLCollectionFrom` to create array-like DOM collections from arbitrary arguments.
- **Safe Attribute Updates**: `updateAttribute` handles setting attributes with built-in error catching and value coercion.

## Available Utilities

### Selection
- `querySelector([element], selectors)`
- `querySelectorAll([element], selectors)`
- `getElementById([element], id)`
- `getElementsByTagName([element], tag)`
- `getElementsByClassName([element], name)`
- `getElementsByName([element], name)`

### Creation & Manipulation
- `NodeListFrom(...args)`: Creates a `NodeList` from the provided arguments.
- `HTMLCollectionFrom(...args)`: Creates an `HTMLCollection` from the provided arguments.
- `updateAttribute(element, key, value)`: Safely updates an element's attribute.

## Usage Example

```javascript
import { querySelector, updateAttribute } from './dom-utils.js';

// Select an element (defaults to document context)
const mainBtn = querySelector('#main-button');

// Select within a specific element
const container = querySelector('.container');
const submitBtn = querySelector(container, 'button[type="submit"]');

// Safely update an attribute
updateAttribute(mainBtn, 'disabled', 'true');
```
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
